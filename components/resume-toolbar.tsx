"use client";

import { Moon, Printer, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ResumeToolbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let restoreDarkAfterPrint = false;
    const frame = requestAnimationFrame(() => {
      setDark(root.classList.contains("dark"));
    });

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
    <div className="resume-toolbar print:hidden sticky top-3 z-50 mx-auto mb-5 flex w-[min(210mm,calc(100%-1.5rem))] items-center justify-between rounded-xl border px-4 py-2 text-white backdrop-blur-2xl">
      <div>
        <div className="text-[13px] font-semibold tracking-wide">何宁宁 · 2026</div>
        <div className="text-[10px] text-sky-100/55">内控 · 审计 · 风险管理</div>
      </div>
      <div className="flex gap-2">
        <Button aria-label="切换主题" aria-pressed={dark} title={dark ? "切换到浅色主题" : "切换到深色主题"} variant="ghost" size="sm" className={`h-8 border text-sky-50 hover:bg-white/10 hover:text-white ${dark ? "border-[#8be9fd]/45 bg-[#8be9fd]/12 text-[#8be9fd]" : "border-white/10"}`} onClick={toggleTheme}>
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button size="sm" className="h-8 bg-[#8be9fd] text-[#252a37] shadow-md shadow-slate-950/20 hover:bg-[#b8f1ff]" onClick={() => window.print()}>
          <Printer /> 导出 PDF
        </Button>
      </div>
    </div>
  );
}
