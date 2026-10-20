"use client";

import { Moon, Printer, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MingResumeToolbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let restoreDarkAfterPrint = false;
    const frame = requestAnimationFrame(() => setDark(root.classList.contains("dark")));

    function preparePrint() {
      restoreDarkAfterPrint = root.classList.contains("dark");
      root.classList.remove("dark");
    }

    function restoreTheme() {
      root.classList.toggle("dark", restoreDarkAfterPrint);
    }

    window.addEventListener("beforeprint", preparePrint);
    window.addEventListener("afterprint", restoreTheme);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("beforeprint", preparePrint);
      window.removeEventListener("afterprint", restoreTheme);
    };
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("resume-theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <nav className="ming-toolbar print:hidden" aria-label="Resume controls">
      <div>
        <a href="#ming-resume" className="ming-toolbar-name">Ming Shi <span>/ Resume</span></a>
        <p className="ming-toolbar-description">eMobility · V2G · Smart Charging · Software Leadership</p>
      </div>
      <div className="flex gap-2">
        <Button aria-label="Toggle theme" aria-pressed={dark} title={dark ? "Switch to light theme" : "Switch to dark theme"} variant="ghost" size="sm" className="ming-theme-button" onClick={toggleTheme}>
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button size="sm" className="ming-export-button" onClick={() => window.print()}>
          <Printer /> Export PDF
        </Button>
      </div>
    </nav>
  );
}
