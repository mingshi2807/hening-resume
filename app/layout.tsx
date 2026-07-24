import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "何宁宁 | 内控与审计负责人",
  description: "何宁宁 2026 中文简历",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning>
    <head>
      <Script id="restore-resume-theme" strategy="beforeInteractive">
        {`try{document.documentElement.classList.toggle("dark",localStorage.getItem("resume-theme")==="dark")}catch{}`}
      </Script>
    </head>
    <body>{children}</body>
  </html>;
}
