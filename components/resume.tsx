import Image from "next/image";
import { Award, BriefcaseBusiness, Building2, CheckCircle2, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const qualifications = ["国际注册内部审计师（CIA）", "企业合规师", "ESG 注册分析师（高级）", "初级会计师"];
const strengths = ["集团级内控与审计体系搭建", "IPO 上市合规与 ICFR", "年度及专项审计管理", "流程治理与数字化内控", "反舞弊调查与司法协同", "团队建设与知识管理"];

function Sidebar({ page = 1 }: { page?: number }) {
  return (
    <aside className="resume-sidebar relative overflow-hidden p-[11mm_8mm_8mm] text-white">
      <div className="absolute -right-20 -top-20 size-60 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="relative">
        <p className="mb-3 text-[7px] font-bold tracking-[.25em] text-sky-300">INTERNAL CONTROL · AUDIT · RISK</p>
        <h1 className="font-serif text-[29pt] font-black tracking-[.12em]">何宁宁</h1>
        <p className="mt-2 text-[10pt] font-medium tracking-[.22em] text-white/70">内控与审计负责人</p>
        <div className="portrait-frame mt-7 overflow-hidden rounded-[1.5rem_4rem_1.5rem_4rem] border border-white/20 bg-white/5 p-1.5 shadow-2xl">
          <Image src="/portrait.png" alt="何宁宁职业形象照" width={800} height={1000} priority className="h-[62mm] w-full rounded-[1.15rem_3.6rem_1.15rem_3.6rem] object-cover object-[48%_52%]" />
        </div>

        {page === 1 && <>
          <SideBlock icon={<Award />} title="专业资格" items={qualifications} />
          <SideBlock icon={<ShieldCheck />} title="专业能力" items={strengths} />
          <div className="mt-7 space-y-2 border-t border-white/15 pt-5 text-[8.5pt] text-white/72">
            <p className="flex items-center gap-2"><Phone className="size-3.5 text-sky-300" />182 2127 2093</p>
            <p className="flex items-center gap-2"><Mail className="size-3.5 text-sky-300" />381162061@qq.com</p>
            <p className="flex items-center gap-2"><MapPin className="size-3.5 text-sky-300" />成都市武侯区</p>
          </div>
        </>}

        {page === 2 && <>
          <SideBlock icon={<Sparkles />} title="核心优势" items={["从 0 到 1 建设组织与体系", "跨部门推动复杂整改落地", "数据驱动审计与成本优化", "供应链、生产、研发全流程穿透", "重大舞弊案件独立调查"]} />
          <SideBlock icon={<GraduationCap />} title="教育背景" items={["兰州理工大学", "化学工程与工艺 · 本科", "2004.09 – 2008.07"]} />
          <SideBlock icon={<BriefcaseBusiness />} title="数字化工具" items={["Excel 高级分析", "SQL 基础", "Visio / SAP GRC", "OA / ERP 流程设计"]} />
        </>}

        {page === 3 && <>
          <div className="mt-7 border-t border-white/15 pt-5">
            <h2 className="mb-4 flex items-center gap-2 text-[10pt] font-extrabold tracking-[.15em]"><TrendingUp className="size-4 text-sky-300" />关键成果</h2>
            <div className="grid gap-2">
              {[['90%+', '整改落地率'], ['1,000万+', '累计成本优化'], ['1,800+', '合规培训人次'], ['2 次', 'IPO 合规筹备']].map(([value, label]) => (
                <Card key={label} className="border-white/10 bg-white/[.055] text-white shadow-none">
                  <CardContent className="flex items-center justify-between p-3"><strong className="text-[12pt] text-sky-200">{value}</strong><span className="text-[8pt] text-white/65">{label}</span></CardContent>
                </Card>
              ))}
            </div>
          </div>
          <SideBlock icon={<Building2 />} title="行业经验" items={["食品供应链", "连锁零售", "生物制药", "会计师事务所", "制造业"]} />
        </>}
      </div>
    </aside>
  );
}

function SideBlock({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return <div className="mt-7 border-t border-white/15 pt-5">
    <h2 className="mb-4 flex items-center gap-2 text-[10pt] font-extrabold tracking-[.15em]"><span className="text-sky-300 [&_svg]:size-4">{icon}</span>{title}</h2>
    <ul className="space-y-2.5 text-[8.5pt] leading-relaxed text-white/78">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-[.55em] size-1.5 shrink-0 rounded-full border border-cyan-300" />{item}</li>)}</ul>
  </div>;
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="mb-5">
    <Badge variant="outline" className="mb-2 border-blue-600/25 bg-blue-500/7 text-[7px] tracking-[.22em] text-blue-800 dark:text-blue-200">{eyebrow}</Badge>
    <h2 className="font-serif text-[20pt] font-black tracking-tight text-slate-950 dark:text-sky-50">{children}</h2>
  </div>;
}

function Job({ title, company, period, lead, groups }: { title: string; company: string; period: string; lead: string; groups: { title: string; bullets: string[] }[] }) {
  return <Card className="job-card border-blue-900/10 bg-white/78 dark:border-blue-100/10 dark:bg-white/[.04]">
    <CardHeader className="p-5 pb-3">
      <div className="flex items-start justify-between gap-4">
        <div><CardTitle className="text-[13pt] text-slate-950 dark:text-white">{title}</CardTitle><p className="mt-1.5 text-[9pt] font-semibold text-blue-700 dark:text-sky-300">{company}</p></div>
        <Badge variant="secondary" className="shrink-0 bg-blue-50 text-[7.5pt] font-semibold text-blue-800 dark:bg-blue-300/10 dark:text-blue-100">{period}</Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 p-5 pt-0">
      <p className="rounded-lg border-l-2 border-blue-500 bg-blue-500/[.055] px-3 py-2 text-[8.7pt] font-medium leading-[1.65] text-slate-600 dark:text-slate-300">{lead}</p>
      {groups.map((group, index) => <div key={group.title}>
        {index > 0 && <Separator className="mb-3 bg-slate-200/70 dark:bg-white/10" />}
        <h4 className="mb-2 flex items-center gap-2 text-[9.3pt] font-bold text-slate-800 dark:text-slate-100"><CheckCircle2 className="size-3.5 text-blue-600" />{group.title}</h4>
        <ul className="space-y-1.5 pl-5 text-[8.35pt] leading-[1.58] text-slate-600 dark:text-slate-300">{group.bullets.map((bullet) => <li key={bullet} className="list-disc marker:text-sky-500">{bullet}</li>)}</ul>
      </div>)}
    </CardContent>
  </Card>;
}

export function Resume() {
  return <main className="resume-document space-y-6 print:space-y-0">
    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={1} />
      <article className="resume-content p-[12mm_10mm_8mm]">
        <SectionHeading eyebrow="ABOUT ME">职业概述</SectionHeading>
        <div className="space-y-3 text-[9pt] leading-[1.75] text-slate-600 dark:text-slate-300">
          <p>拥有 15 年跨行业（供应链、制药、连锁零售）全链路风控经验，具备从战略风控架构设计到全流程审计落地的完整闭环能力。曾主导两轮企业上市合规筹备，从零组建并领导内控审计部门，全面负责集团内控体系搭建、审计制度建立及团队管理。</p>
          <p>以“发现问题 → 建章立制 → 推动变革 → 体系化运行”的闭环方式推动管理升级，累计优化成本超千万元，整改落地率持续保持 90% 以上，深刻理解上市公司治理规范与监管逻辑。</p>
        </div>
        <div className="my-5 grid grid-cols-3 gap-2">
          {[['15 年','跨行业经验'],['2 轮','IPO 合规筹备'],['90%+','整改落地率']].map(([value,label]) => <Card key={label} className="border-blue-700/12 bg-gradient-to-br from-blue-500/[.1] via-cyan-500/[.04] to-transparent shadow-none"><CardContent className="p-3 text-center"><strong className="block text-[15pt] text-slate-950 dark:text-white">{value}</strong><span className="text-[7.5pt] text-blue-800/65 dark:text-blue-100/65">{label}</span></CardContent></Card>)}
        </div>
        <SectionHeading eyebrow="CAREER">核心经历</SectionHeading>
        <Job title="内控经理（部门负责人）" company="三旋食品供应链" period="2024.04 – 至今" lead="受邀加盟，从零组建内控部门，全面统筹集团内控体系搭建与审计职能建设，建立覆盖采购、生产、物流全链条的管控框架。" groups={[
          {title:'体系搭建与战略风控', bullets:['主导搭建“审计 + 内控”双轨管理体系，从治理层、管理层到执行层系统化设计控制框架。','引入动态风险评估机制，将风险识别前移至“事中预警”，推动完成 50 余项重大隐患整改。']},
          {title:'审计管理与业务赋能', bullets:['统筹财务、运营、生产、研发及离任等多类型审计，累计推动整改近 30 项重大风险。','物流专项审计推动物流模式由自营转三方，年化降本 150 万元。','生产全链路审计发现 20 余项风险，为生产标准化与质量提升提供决策支撑。']},
          {title:'流程治理与系统建设', bullets:['主导 OA 审批流程重构，审批效率提升 30%，供应链中断风险降低 20%。','协同搭建 ERP 采购审批模块，实现关键控制节点线上化与数据留痕。']}
        ]} />
      </article>
    </section>

    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={2} />
      <article className="resume-content p-[12mm_10mm_8mm]">
        <SectionHeading eyebrow="EXPERIENCE">核心经历（续）</SectionHeading>
        <div className="space-y-4">
          <Job title="内控经理（续）" company="三旋食品供应链" period="2024.04 – 至今" lead="统筹公司法务合规事务并建立反舞弊治理机制，将风险整改沉淀为可持续运行的管理能力。" groups={[{title:'法务合规与反舞弊治理', bullets:['建立合同审阅与法律风险预警机制，拟定廉洁协议等标准模板。','主导备用金舞弊、职务侵占等案件调查，通过流程加固规避潜在损失超百万元。','对接中国反舞弊联盟，引入行业实践并组织全员合规培训考核。']}]} />
          <Job title="内控主管（部门负责人）" company="四川百茶百道" period="2022.04 – 2024.04" lead="全面负责覆盖全业务链条及控股子公司的财务合规审计；港股上市筹备期间，从零搭建内控部门并规划风险管理体系。" groups={[
            {title:'审计管理与业务价值创造', bullets:['完成飞行检查 18 次、专项审计 6 项，走访供应商 27 家、门店超 100 家，出具审计报告 19 份。','推动运营有效性提升 115%，成本节约超 25%，采购成本降低 8%–50%。']},
            {title:'上市合规与团队建设', bullets:['搭建覆盖 10 余个业务中心的风控体系，制定控制点 208 个、风险点 335 个。','参与优化 20 余项管理制度、150 余项审批流程，配合外部合规审查与尽职调查。','统筹合规培训覆盖 1,800+ 人次，持续推广内控廉洁文化。']}
          ]} />
          <Job title="审计主管" company="成都苑东生物制药" period="2019.04 – 2022.04" lead="全面负责审计职能规划与执行，深度参与科创板上市筹备，作为审计模块核心接口推进 ICFR 合规测试。" groups={[{title:'上市合规与制度建设', bullets:['主导审计制度、SOP 及招标管理等关键流程更新与合规化。','独立完成年度内部控制评价报告及管理审计报告。','建立采购价格库与招投标数据库，以数据分析支撑成本核算合规。']}]} />
        </div>
      </article>
    </section>

    <section className="resume-page grid grid-cols-[34.5%_65.5%]">
      <Sidebar page={3} />
      <article className="resume-content p-[12mm_10mm_8mm]">
        <SectionHeading eyebrow="EXPERIENCE">核心经历（续）</SectionHeading>
        <Job title="审计主管（续）" company="成都苑东生物制药" period="2019.04 – 2022.04" lead="以风险为导向统筹全面审计实施与外部协同，确保关键财务报告流程得到有效覆盖。" groups={[
          {title:'全面审计实施', bullets:['统筹采购与招标、仓储物流、IT 系统及管理人员离任经济责任审计。','识别研发项目执行偏差，提出系统性改进方案，提升研发项目管理效率。']},
          {title:'财务审计与外部协同', bullets:['主导年度财务报告内控（ICFR）测试与评价，独立对接外部审计机构。','确保审计范围覆盖关键财务报告流程，无重大缺陷流出。']}
        ]} />

        <SectionHeading eyebrow="EARLY CAREER">早期经历</SectionHeading>
        <div className="space-y-3">
          {[
            ['审计专员','上海剪刀石头布家居','2014.06 – 2017.06','通过售后服务审计发现并整改违规收费，优化工厂订单分类标准，提升生产效率。'],
            ['审计专员','上海华申会计师事务所','2012.03 – 2013.03','参与多项外部审计项目，负责审计程序执行、底稿编制及审计建议提出。'],
            ['技术员','东方电气峨眉半导体材料厂','2008.07 – 2012.03','负责多晶硅提纯环节的技术支持和异常排查，积累制造业现场流程与质量管理经验。']
          ].map(([title,company,period,description]) => <Card key={company} className="border-blue-900/10 bg-white/72 shadow-none dark:border-white/10 dark:bg-white/[.04]"><CardContent className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-[10pt] font-bold text-slate-950 dark:text-white">{title} · {company}</h3><p className="mt-1.5 text-[8.2pt] leading-relaxed text-slate-500 dark:text-slate-400">{description}</p></div><Badge variant="outline" className="shrink-0 border-blue-700/20 text-[7pt] text-blue-800 dark:text-blue-200">{period}</Badge></div></CardContent></Card>)}
        </div>

        <Card className="mt-5 overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white shadow-xl shadow-blue-950/25">
          <CardHeader className="pb-2"><Badge className="w-fit bg-sky-400 text-slate-950">VALUE PROPOSITION</Badge><CardTitle className="pt-2 font-serif text-[18pt]">管理价值主张</CardTitle></CardHeader>
          <CardContent className="text-[9pt] leading-[1.75] text-white/75">以风险为导向、以数据为依据、以整改落地为结果，将审计从“发现问题”升级为“推动经营改善”的管理工具；同时通过制度、流程、系统与文化四位一体，构建可持续运行的企业治理能力。</CardContent>
        </Card>
      </article>
    </section>
  </main>;
}
