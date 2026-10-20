import type { Metadata } from "next";
import { MingResume } from "@/components/ming-resume";
import { MingResumeToolbar } from "@/components/ming-resume-toolbar";

export const metadata: Metadata = {
  title: "Ming Shi | eMobility Software & V2G Engineering Leader",
  description: "Ming Shi — software engineering, V2G, smart charging, interoperability, and technical program leadership.",
};

export default function MingShiResumePage() {
  return (
    <>
      <MingResumeToolbar />
      <MingResume />
    </>
  );
}
