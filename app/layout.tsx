import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ningning He | Head of Internal Control & Audit",
  description: "Ningning He 2026 English Resume",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <Script id="restore-resume-theme" strategy="beforeInteractive">
        {`try{document.documentElement.classList.toggle("dark",localStorage.getItem("resume-theme")==="dark")}catch{}`}
      </Script>
    </head>
    <body>{children}</body>
  </html>;
}
