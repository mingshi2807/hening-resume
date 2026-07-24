import { Resume } from "@/components/resume";
import { ResumeToolbar } from "@/components/resume-toolbar";

export default function HomePage() {
  return <div className="min-h-screen py-3 print:py-0"><ResumeToolbar /><Resume /></div>;
}
