"use client";

import { Moon, Printer, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ResumeToolbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });

    return () => cancelAnimationFrame(frame);
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
    <div className="resume-toolbar print:hidden sticky top-3 z-50 mx-auto mb-5 flex w-[min(210mm,calc(100%-1.5rem))] items-center justify-between rounded-2xl border px-4 py-3 text-white backdrop-blur-xl">
      <div>
        <div className="text-sm font-semibold tracking-wide">何宁宁 · 2026</div>
        <div className="text-xs text-sky-100/60">内控 · 审计 · 风险管理</div>
      </div>
      <div className="flex gap-2">
        <Button aria-label="切换主题" aria-pressed={dark} title={dark ? "切换到浅色主题" : "切换到深色主题"} variant="ghost" size="sm" className="border border-white/10 text-sky-50 hover:bg-white/10 hover:text-white" onClick={toggleTheme}>
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button size="sm" className="bg-[#8be9fd] text-[#252a37] shadow-lg shadow-slate-950/25 hover:bg-[#b8f1ff]" onClick={() => window.print()}>
          <Printer /> 导出 PDF
        </Button>
      </div>
    </div>
  );
}
