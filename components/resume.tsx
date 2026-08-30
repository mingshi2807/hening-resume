import Image from "next/image";
import { Award, BriefcaseBusiness, Building2, CheckCircle2, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const qualifications = ["Certified Internal Auditor (CIA)", "Corporate Compliance Professional", "Senior ESG Registered Analyst", "Junior Accountant"];
const strengths = ["Group-wide internal control and audit systems", "IPO compliance and ICFR", "Annual and special-purpose audits", "Process governance and digital controls", "Anti-fraud investigations and legal coordination", "Team development and knowledge management"];
const careerSteps = [
  ["2024 – Present", "Head of Group Internal Control"],
  ["2022 – 2024", "Listing Compliance & Risk Control"],
  ["2019 – 2022", "Audit & ICFR Management"],
  ["2008 – 2019", "Manufacturing & Audit Foundation"],
];
const impactStats = [["90%+", "Remediation rate"], ["¥10M+", "Cost optimization"], ["1,800+", "Training attendees"], ["2", "IPO preparations"]];

function Sidebar({ page = 1 }: { page?: number }) {
  return (
    <aside className="resume-sidebar relative overflow-hidden p-[11mm_8mm_8mm] text-white">
      <div className="absolute -right-20 -top-20 size-60 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="relative">
        <p className="mb-2.5 text-[7px] font-bold tracking-[.2em] text-[#8be9fd]">INTERNAL CONTROL · AUDIT · RISK</p>
        <h1 className="whitespace-nowrap font-serif text-[22pt] font-black tracking-[.035em]">Ningning He</h1>
        <p className="mt-1.5 text-[8.4pt] font-medium tracking-[.09em] text-white/70">HEAD OF INTERNAL CONTROL & AUDIT</p>
        {page === 1 ? (
          <div className="portrait-frame mt-5 overflow-hidden rounded-[1.5rem_4rem_1.5rem_4rem] border border-white/20 bg-white/5 p-1.5 shadow-2xl">
            <Image src="/portrait.png" alt="Professional portrait of Ningning He" width={800} height={1000} priority className="h-[62mm] w-full rounded-[1.15rem_3.6rem_1.15rem_3.6rem] object-cover object-[48%_52%]" />
          </div>
        ) : page === 2 ? (
          <SidebarPanel eyebrow="CAREER MAP" title="Career Path">
            <div className="career-track">
              {careerSteps.map(([period, role]) => <div key={period} className="career-step"><span>{period}</span><strong>{role}</strong></div>)}
            </div>
          </SidebarPanel>
        ) : (
          <SidebarPanel eyebrow="IMPACT INDEX" title="Impact Index">
            <div className="grid grid-cols-2 gap-2">
              {impactStats.map(([value, label]) => <div key={label} className="impact-tile"><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </SidebarPanel>
        )}

        {page === 1 && <>
          <SideBlock icon={<Award />} title="Qualifications" items={qualifications} />
          <SideBlock icon={<ShieldCheck />} title="Expertise" items={strengths} />
          <div className="mt-4 space-y-1 border-t border-white/15 pt-3 text-[7.7pt] text-white/72">
            <p className="flex items-center gap-2"><Phone className="size-3.5 text-[#86a4b9]" />182 2127 2093</p>
            <p className="flex items-center gap-2"><Mail className="size-3.5 text-[#86a4b9]" />381162061@qq.com</p>
            <p className="flex items-center gap-2"><MapPin className="size-3.5 text-[#86a4b9]" />Wuhou District, Chengdu</p>
          </div>
        </>}

        {page === 2 && <>
          <SideBlock icon={<Sparkles />} title="Core Strengths" items={["Built organizations and systems from zero", "Drove complex cross-functional remediation", "Data-driven audit and cost optimization", "End-to-end supply chain, production, and R&D reviews", "Independent investigation of major fraud cases"]} />
          <SideBlock icon={<GraduationCap />} title="Education" items={["Lanzhou University of Technology", "B.Eng. in Chemical Engineering & Technology", "2004.09 – 2008.07"]} />
          <SideBlock icon={<BriefcaseBusiness />} title="Digital Tools" items={["Advanced Excel analytics", "Basic SQL", "Visio / SAP GRC", "OA / ERP workflow design"]} />
        </>}

        {page === 3 && <>
          <SideBlock icon={<Building2 />} title="Industry Experience" items={["Food supply chain", "Chain retail", "Biopharmaceuticals", "Public accounting", "Manufacturing"]} />
          <SideBlock icon={<Target />} title="Management Approach" items={["Risk-led, data-validated decisions", "Policy, process, and system alignment", "Closed-loop remediation and follow-up", "Balance of business value and compliance"]} />
        </>}
      </div>
      <div className="page-marker"><span>RESUME · 2026</span><strong>{String(page).padStart(2, "0")} / 03</strong></div>
    </aside>
  );
}

function SidebarPanel({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="sidebar-panel mt-5">
    <p>{eyebrow}</p>
    <h2>{title}</h2>
    {children}
  </section>;
}

function SideBlock({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return <div className="mt-4 border-t border-white/15 pt-3">
    <h2 className="mb-2.5 flex items-center gap-2 text-[9.2pt] font-extrabold tracking-[.12em]"><span className="text-[#8be9fd] [&_svg]:size-3.5">{icon}</span>{title}</h2>
    <ul className="space-y-1.5 text-[7.8pt] leading-[1.4] text-white/78">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-[.55em] size-1 shrink-0 rounded-full border border-[#71899e]" />{item}</li>)}</ul>
  </div>;
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading mb-4">
    <Badge variant="outline" className="mb-1.5 border-blue-600/25 bg-blue-500/7 text-[6.5px] tracking-[.2em] text-blue-800 dark:border-[#8be9fd]/30 dark:bg-[#8be9fd]/8 dark:text-[#8be9fd]">{eyebrow}</Badge>
    <h2 className="font-serif text-[17.5pt] font-black leading-tight tracking-[.01em] text-[#343844] dark:text-sky-50">{children}</h2>
  </div>;
}

function Job({ title, company, period, lead, highlights = [], groups, compact = false }: { title: string; company: string; period: string; lead: string; highlights?: string[]; groups: { title: string; bullets: string[] }[]; compact?: boolean }) {
  return <Card className="job-card border-blue-900/10 bg-white/78 dark:border-[#56627a]">
    <CardHeader className={compact ? "p-3 pb-2" : "p-4 pb-2.5"}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0"><CardTitle className="text-[10.5pt] leading-[1.2] text-slate-950 dark:text-white">{title}</CardTitle><p className="mt-1 text-[7.6pt] font-semibold text-blue-700 dark:text-[#8be9fd]">{company}</p></div>
        <Badge variant="secondary" className="w-[28mm] shrink-0 justify-center bg-blue-50 text-center text-[6.5pt] font-semibold tabular-nums text-blue-800 dark:bg-[#71899e]/12 dark:text-[#a9bac8]">{period}</Badge>
      </div>
    </CardHeader>
    <CardContent className={compact ? "space-y-1.5 p-3 pt-0" : "space-y-2 p-4 pt-0"}>
      <p className={`rounded-lg border-l-2 border-blue-500 bg-blue-500/[.055] px-2.5 text-[7.2pt] font-medium tracking-[-.005em] text-slate-600 dark:text-[#c7ccd8] ${compact ? "py-1 leading-[1.4]" : "py-1.5 leading-[1.45]"}`}>{lead}</p>
      {highlights.length > 0 && <div className="flex flex-wrap gap-1">{highlights.map((highlight) => <span key={highlight} className="outcome-chip">{highlight}</span>)}</div>}
      {groups.map((group, index) => <div key={group.title}>
        {index > 0 && <Separator className={`${compact ? "mb-1.5" : "mb-2"} bg-slate-200/70 dark:bg-white/10`} />}
        <h4 className={`${compact ? "mb-1" : "mb-1.5"} flex items-center gap-1.5 text-[7.8pt] font-bold text-slate-800 dark:text-slate-100`}><CheckCircle2 className="size-3 text-blue-600 dark:text-[#86a4b9]" />{group.title}</h4>
        <ul className={`${compact ? "space-y-0.5 leading-[1.35]" : "space-y-1 leading-[1.4]"} pl-4 text-[6.85pt] tracking-[-.005em] text-slate-600 dark:text-[#c7ccd8]`}>{group.bullets.map((bullet) => <li key={bullet} className="list-disc marker:text-sky-500 dark:marker:text-[#71899e]">{bullet}</li>)}</ul>
      </div>)}
    </CardContent>
  </Card>;
}

export function Resume() {
  return <main className="resume-document space-y-8 print:space-y-0">
    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={1} />
      <article className="resume-content p-[12mm_10mm_8mm]">
        <SectionHeading eyebrow="ABOUT ME">Professional Profile</SectionHeading>
        <div className="space-y-2 text-[7.8pt] leading-[1.55] tracking-[-.005em] text-slate-600 dark:text-[#c7ccd8]">
          <p>Internal control &amp; audit leader with 15 years of end-to-end risk experience across supply chain, pharmaceuticals, and chain retail. Expertise spans strategic risk architecture; full-cycle audit execution; IPO compliance preparation; group control systems; audit policy design; team leadership. Led two corporate listing programs, building both control functions from the ground up.</p>
          <p>Management improvements follow a closed-loop model: identify issues → establish policies → enable change → institutionalize operations. Achievements include more than ¥10 million in cumulative cost optimization, with remediation sustained above 90%. Brings deep knowledge of listed-company governance standards, regulatory expectations, and practical implementation.</p>
        </div>
        <div className="my-4 grid grid-cols-3 gap-2">
          {[["15 Years","Cross-industry experience"],["2 Rounds","IPO compliance preparation"],["90%+","Remediation rate"]].map(([value,label]) => <Card key={label} className="metric-card bg-gradient-to-br from-[#eaf2f8] via-[#f5f9fb] to-white shadow-none dark:border-[#56627a] dark:from-[#343746] dark:via-[#2e303d] dark:to-[#282a36]"><CardContent className="p-3 text-center"><strong className="block text-[15pt] text-[#343844] dark:text-white">{value}</strong><span className="text-[7.5pt] text-blue-800/65 dark:text-blue-100/75">{label}</span></CardContent></Card>)}
        </div>
        <SectionHeading eyebrow="CAREER">Professional Experience</SectionHeading>
        <Job title="Internal Control Manager (Department Head)" company="Sanxuan Food Supply Chain" period="2024.04 – Present" lead="Recruited to establish the internal control department from the ground up, oversee the group’s control and audit functions, and build an end-to-end framework spanning procurement, production, and logistics." highlights={["50+ major issues remediated", "¥1.5M annual savings", "Approval efficiency +30%"]} groups={[
          {title:"System Development & Strategic Risk Control", bullets:["Built a dual-track audit and internal control management system, designing the control framework across governance, management, and execution levels.","Introduced dynamic risk assessment to shift identification toward real-time warning and drove remediation of more than 50 major issues."]},
          {title:"Audit Management & Business Enablement", bullets:["Directed financial, operational, production, R&D, and exit audits, driving remediation of nearly 30 major risks.","A logistics audit supported a shift from self-operated to third-party logistics, generating ¥1.5 million in annual savings.","An end-to-end production audit identified more than 20 risks and informed production standardization and quality improvements."]},
          {title:"Process Governance & Systems", bullets:["Led OA approval workflow redesign, increasing approval efficiency by 30% and reducing supply-chain disruption risk by 20%.","Co-developed the ERP procurement approval module, digitizing key controls and preserving audit trails."]}
        ]} />
      </article>
    </section>

    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={2} />
      <article className="resume-content p-[12mm_10mm_8mm]">
        <SectionHeading eyebrow="EXPERIENCE">Professional Experience (Continued)</SectionHeading>
        <div className="space-y-3">
          <Job compact title="Internal Control Manager (Continued)" company="Sanxuan Food Supply Chain" period="2024.04 – Present" lead="Oversaw legal and compliance matters and established anti-fraud governance, converting risk remediation into sustainable management capability." highlights={["¥1M+ potential losses avoided", "Anti-fraud framework established"]} groups={[{title:"Legal Compliance & Anti-Fraud Governance", bullets:["Established contract review and legal risk warning mechanisms and drafted standard templates including integrity agreements.","Led investigations into petty-cash fraud and employee embezzlement, strengthening processes to avoid more than ¥1 million in potential losses.","Engaged the China Enterprise Anti-Fraud Alliance, introduced industry practices, and organized company-wide compliance training and assessment."]}]} />
          <Job compact title="Internal Control Supervisor (Department Head)" company="Sichuan Baicha Baidao" period="2022.04 – 2024.04" lead="Led financial compliance audits across the full business chain and controlled subsidiaries; built the internal control department and planned the risk management system during Hong Kong listing preparation." highlights={["18 unannounced inspections", "100+ stores visited", "1,800+ trainees"]} groups={[
            {title:"Audit Management & Business Value", bullets:["Completed 18 unannounced inspections and 6 special audits, visited 27 suppliers and more than 100 stores, and issued 19 audit reports.","Improved operational effectiveness by 115%, reduced costs by more than 25%, and lowered procurement costs by 8%–50%."]},
            {title:"Listing Compliance & Team Development", bullets:["Built a risk control system covering more than 10 business centers, defining 208 control points and 335 risk points.","Helped optimize more than 20 management policies and 150 approval workflows and supported external compliance reviews and due diligence.","Coordinated compliance training for more than 1,800 attendees and continuously promoted a culture of control and integrity."]}
          ]} />
          <Job compact title="Audit Supervisor" company="Chengdu Easton Biopharmaceuticals" period="2019.04 – 2022.04" lead="Supported listing compliance and corporate governance, assisted with shareholding reform and governance design, led internal control policy development through regulatory review, and independently delivered annual control evaluations and capital-market due diligence support." highlights={["Passed regulatory review", "Annual control evaluation", "NEEQ due diligence"]} groups={[{title:"Listing Compliance & Corporate Governance", bullets:["Supported shareholding reform and governance system development, led internal control policy design, and passed regulatory review.","Independently completed the annual internal control evaluation report.","Supported NEEQ due diligence and contributed to inquiry responses and roadshow materials.","Built procurement price and tender databases to support compliant cost accounting."]}]} />
        </div>
      </article>
    </section>

    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={3} />
      <article className="resume-content p-[10mm_10mm_12mm]">
        <SectionHeading eyebrow="EXPERIENCE">Professional Experience (Continued)</SectionHeading>
        <Job compact title="Audit Supervisor (Continued)" company="Chengdu Easton Biopharmaceuticals" period="2019.04 – 2022.04" lead="Directed comprehensive, financial reporting control, and special compliance audits using a risk-led approach, closed the remediation loop, and safeguarded compliance across key governance matters." highlights={["Full key-process coverage", "0 material deficiencies", "Special compliance audits"]} groups={[
          {title:"Comprehensive Audit Execution", bullets:["Directed procurement, warehousing, IT, economic responsibility, and exit audits; issued reports and continuously tracked remediation through completion.","Conducted management audits across production, R&D, and marketing, identified deviations in R&D project execution, and drove systemic improvements."]},
          {title:"Financial Audit & External Coordination", bullets:["Led annual ICFR testing and effectiveness evaluation.","Coordinated with external auditors to ensure no material deficiencies in financial statement or internal control audits.","Led special compliance audits covering proceeds, related-party transactions, external guarantees, and information disclosure."]}
        ]} />

        <SectionHeading eyebrow="EARLY CAREER">Early Career</SectionHeading>
        <div className="space-y-2">
          {[
            ["Audit Specialist","Shanghai Scissors Stone Cloth Home Furnishings","2014.06 – 2017.06","Identified and corrected improper charges through after-sales service audits, optimized factory order classification standards, and improved production efficiency."],
            ["Audit Specialist","Shanghai Huashen CPA Firm","2012.03 – 2013.03","Participated in multiple external audit engagements, executing audit procedures, preparing working papers, and developing audit recommendations."],
            ["Technician","Dongfang Electric Emei Semiconductor Materials Factory","2008.07 – 2012.03","Provided technical support and troubleshooting for polysilicon purification, building hands-on manufacturing process and quality management experience."]
          ].map(([title,company,period,description]) => <Card key={company} className="career-card border-blue-900/10 bg-white/72 shadow-none dark:border-[#56627a]"><CardContent className="p-2.5"><div className="flex items-start justify-between gap-2"><div className="min-w-0"><h3 className="text-[8.2pt] font-bold leading-[1.25] text-slate-950 dark:text-white">{title} · {company}</h3><p className="mt-0.5 text-[6.7pt] leading-[1.35] tracking-[-.005em] text-slate-500 dark:text-[#bfc5d2]">{description}</p></div><Badge variant="outline" className="w-[27mm] shrink-0 justify-center border-blue-700/20 text-center text-[6pt] tabular-nums text-blue-800 dark:border-[#71899e]/35 dark:text-[#a9bac8]">{period}</Badge></div></CardContent></Card>)}
        </div>

        <Card className="value-card mt-3 overflow-hidden border-0 bg-gradient-to-br from-[#343844] via-[#26344a] to-[#17263d] text-white shadow-xl shadow-[#343844]/25">
          <CardHeader className="p-3 pb-1.5"><Badge className="w-fit bg-[#8be9fd] text-[6.5pt] text-slate-950">VALUE PROPOSITION</Badge><CardTitle className="pt-1 font-serif text-[15pt]">Management Value Proposition</CardTitle></CardHeader>
          <CardContent className="p-3 pt-0 text-[7.2pt] leading-[1.4] text-white/75">Use risk as the compass, data as the evidence, and implemented remediation as the result—elevating audit from an issue-finding function to a management tool that improves operations. Integrate policies, processes, systems, and culture to build sustainable corporate governance capability.</CardContent>
        </Card>
      </article>
    </section>
  </main>;
}
