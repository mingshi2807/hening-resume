import Image from "next/image";
import { Linkedin, MapPin } from "lucide-react";

const standards = [
  "ISO 15118-2 / -3 / -8 / -20 + AMD1",
  "IEC 61851 incl. Edition 4",
  "OCPP 2.1 / 2.0.1 · OCPI 2.2.1",
  "NC RfG v1 / v2 · EN 50549-1 / -10",
  "DCC 2.0",
  "OpenADR 3.1 · FlexReady",
  "IEC 63380 / -2 · EEBUS / SPINE",
  "IEC 61980-2 / -3 · IEC/EN 61850-7-420",
  "Linky TIC · Matter 1.4 / S2",
  "PnC PKI · TLS 1.2 / 1.3",
];
const platforms = ["C++ · embedded Linux · bare metal", "CANoe 20 · EVerest · Sevenstax", "Cinergia · W&W OBC", "AWS backends · MQTT · REST", "ARM targets · MCU evaluation kits"];
const memberships = ["IEA Task 53 — AC Subset & Grid Code TF", "Technical support · STF-D4E-COW", "V2G Leaders Europe Summit", "CharIN Core Member · Testival host", "OCA regulatory & local controller WGs", "ElaadNL V2G Label core-team request"];

function PageMarker({ page }: { page: number }) {
  return <div className="page-marker"><span>MING SHI · 2026</span><strong>{String(page).padStart(2, "0")} / 03</strong></div>;
}

function SideSection({ title, items }: { title: string; items: string[] }) {
  return <section className="ming-side-section">
    <h2>{title}</h2>
    <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
  </section>;
}

function Sidebar({ page }: { page: number }) {
  return <aside className="ming-sidebar relative overflow-hidden text-white">
    <div className="ming-sidebar-inner">
      <div className="ming-identity">
      <p className="ming-overline">EMOBILITY ・ ENERGY ・SOFTWARE-DEFINED CHARGING TECHNO</p>
      {page === 1 && <div className="ming-photo-frame">
        <Image src="/ming-transparent.png" alt="Ming Shi" width={180} height={180} unoptimized priority />
      </div>}
      {page === 1 ? <h1>Ming Shi</h1> : <p className="ming-name">Ming Shi</p>}
      <p className="ming-role">SOFTWARE &amp; SYSTEM ARCHITECT<br />V2G ENGINEERING LEADER</p>
      </div>
      {page === 1 && <>
        <div className="ming-contact">
          <p><MapPin />Versailles, Île-de-France, France</p>
          <a href="https://www.linkedin.com/in/ming-shi-a7a92167" target="_blank" rel="noreferrer"><Linkedin />linkedin.com/in/ming-shi-a7a92167</a>
        </div>
        <div className="ming-metrics">
          <div><strong>15+</strong><span>years engineering</span></div>
          <div><strong>3 yrs</strong><span>Renault V2G program</span></div>
          <div><strong>30</strong><span>scientific publications</span></div>
          <div><strong>20</strong><span>industrial accounts trained</span></div>
        </div>
        <SideSection title="Core Standards" items={standards} />
      </>}
      {page === 2 && <>
        <SideSection title="Software & Test Stack" items={platforms} />
        <SideSection title="Selected Ecosystem" items={["Renault Group", "Stellantis · Trialog", "TotalEnergies", "Hubject · Gireve · Thales", "EDF · Enedis · Clem", "Pionix · EVerest", "Up&Charge · Sancev · dcbel"]} />
        <SideSection title="Hardware Environment" items={["ChargeBridge · ChargeByte · EvaCharge", "EcoG · Codico Whitebeet / Redbeet", "QCA Qualcomm PLC modems", "Siemens · Linky TIC · Analog Devices metering", "ABB · Finder · Schneider power devices", "Sensors: zero crossing, PQ, energy monitoring"]} />
      </>}
      {page === 3 && <>
        <SideSection title="Memberships" items={memberships} />
        <SideSection title="Education" items={["PhD · Paris-Saclay University · 2008–2012", "Electronics, nanotechnology & numerical simulation", "MSc Physics · ENS Paris / Paris-Saclay University · 2006–2008"]} />
        <SideSection title="Knowledge Output" items={["30 scientific publications", "1 technical book", "1 patent", "5 software deposits with APP France"]} />
        <SideSection title="Languages" items={["Chinese", "French", "English"]} />
      </>}
    </div>
    <PageMarker page={page} />
  </aside>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <header className="ming-section-heading">
    <h2>{children}</h2>
  </header>;
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="ming-feature">
    <h3>{title}</h3>
    <div>{children}</div>
  </section>;
}

function Bullets({ items }: { items: string[] }) {
  return <ul className="ming-bullets">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function MingResume() {
  return <main id="ming-resume" className="ming-document" aria-label="Ming Shi resume">
    <section className="resume-page ming-page grid grid-cols-[29%_71%]">
      <Sidebar page={1} />
      <article className="resume-content ming-content">
        <SectionHeading>eMobility Software, Systems &amp; V2G Architect</SectionHeading>
        <p className="ming-summary">Software and system architect, team manager, and technical program lead delivering interoperable EV charging, V2G, energy management system (EMS), and certification solutions from embedded controllers to cloud backends. Combines standards expertise, product architecture, customer delivery, laboratory validation, and technical-commercial leadership across automotive, charging, and energy ecosystems.</p>

        <div className="ming-highlight-row">
          <div><strong>V2G / V2H</strong><span>Grid-connected and islanded</span></div>
          <div><strong>End-to-End</strong><span>EV · EVSE · CSMS · HEMS · VEN/VTN · DSO</span></div>
          <div><strong>Interoperability</strong><span>Standards to field validation</span></div>
        </div>

        <section className="ming-career-panel">
          <SectionHeading>Career Progression</SectionHeading>
          <div className="ming-career-grid">
            <div><strong>MINATEC Grenoble</strong><span>Postdoctoral Researcher</span></div>
            <div><strong>STMicroelectronics</strong><span>Power Electronics Design</span></div>
            <div><strong>DEF</strong><span>Embedded Software Engineer</span></div>
            <div><strong>Orange</strong><span>Software Engineer</span></div>
            <div><strong>SoftAtHome</strong><span>System Architect · Software Integrator</span></div>
            <div><strong>DOH</strong><span>Software Architect · Product R&amp;D</span></div>
            <div><strong>VEDECOM</strong><span>Software Team Manager · Technical Program Lead · V2G Engineering Leader</span></div>
          </div>
        </section>

        <SectionHeading>Renault V2G &amp; Grid-Code Program</SectionHeading>
        <Feature title="Three-Year Technical Partnership">
          <Bullets items={[
            "Worked closely with Renault for three years on V2G integration testing, NC RfG certification readiness, priority control solutions, standardized interoperability, and end-to-end validation with Renault 5 and Scenic platforms.",
            "Defined and integrated grid-code module specifications, RfG v1/v2 dual-mode behavior, EVSE-side test tooling, and backend validation workflows.",
            "Established the technical certification framework for NC RfG 2.0 and supported WDS EVSE integration of RfG v1 / DCC 2.0 grid-code modules through Renault."
          ]} />
        </Feature>

        <Feature title="Software Architecture &amp; Delivery">
          <Bullets items={[
            "Delivered EVSE and CSMS software spanning ISO 15118-20 including AMD1, OCPP 2.1 client/server, grid-code modules, normalized APIs, and pioneering test assets.",
            "Analyzed CPLC / HEVC CAN architectures for V2G and V2H upgrades across grid-following and grid-forming modes.",
            "Integrated local smart-home functions: HEMS, local load balancing, V2X smart-charging clients, MID metering / power-quality design, plus MQTT and REST APIs.",
            "Delivered three-phase islanded V2H power-backup behavior with passive anti-islanding, dual-mode RfG v1/v2 GCM integration, remote OTA feature/fix rollout, and dynamic-price optimization using control-mode schedules plus ENTSO-E price feeds."
          ]} />
        </Feature>

        <SectionHeading>Agentic &amp; Human-Validated Delivery</SectionHeading>
        <p className="ming-note">Integrates agentic workflows, harness engineering, loop and graph orchestration, plus Human-in-the-Loop expert validation to accelerate specifications, implementation, testing, evidence capture, and standards traceability.</p>

      </article>
    </section>

    <section className="resume-page ming-page grid grid-cols-[29%_71%]">
      <Sidebar page={2} />
      <article className="resume-content ming-content">
        <SectionHeading>Customer Software Portfolio</SectionHeading>
        <div className="ming-two-col">
          <Feature title="Stellantis / Trialog">
            <Bullets items={["ISO 15118-2 / -20 communication stacks.", "HEMS based on EEBUS plus an OCPP local controller."]} />
          </Feature>
          <Feature title="TotalEnergies">
            <Bullets items={["OCPP 2.1, OCPI 2.2.1, ISO 15118-20 / -3.", "End-to-end V2X and energy-flexibility services, including field testing in Lille / Junia with a V2G-enabled Renault 5."]} />
          </Feature>
          <Feature title="Hubject / Gireve / Thales">
            <Bullets items={["Plug & Charge PKI cross-service roaming proxy and API gateway.", "Multi-contract ISO 15118, multi-PKI roaming, and certificate-trust-list concepts."]} />
          </Feature>
          <Feature title="Up&Charge">
            <Bullets items={["DIN SPEC integration, WebSocket APIs, and broadcasting to an AWS-hosted backend.", "BMS / CPLC CAN database decoding plus intrusive CAN-router analysis on the PEV."]} />
          </Feature>
          <Feature title="EDF · Pionix / EVerest">
            <Bullets items={["ISO 15118-20 AMD1 DER test assets in the EV-emulator role for EDF.", "NC RfG v2 interoperability validation against Pionix / EVerest in the EV-emulator role."]} />
          </Feature>
          <Feature title="Shared Software Assets">
            <Bullets items={["Co-developed and co-owned software environments with Renault, Stellantis, and TotalEnergies.", "Reusable stacks, emulators, protocol adapters, cloud services, APIs, CLI recipes, and integration harnesses."]} />
          </Feature>
        </div>

        <SectionHeading>Demonstrations, PlugFests &amp; Testivals</SectionHeading>
        <div className="ming-event-list">
          <div><strong>CharIN Testival</strong><span>Hosted the event; later participated with EVSE-emulator and advanced test tooling.</span></div>
          <div><strong>Vector Symposium</strong><span>Demonstrated interoperability between the VEDECOM / Renault proprietary stack and Vector CANoe.</span></div>
          <div><strong>MOBENA PlugFest</strong><span>TotalEnergies PnC DC validation across ISO 15118-2 / -20, TLS 1.2 / 1.3.</span></div>
          <div><strong>Renault Tech Center</strong><span>Dynamic interoperable ISO 15118-20 AC BPT V2G; islanded V2H power-backup; connected smart-home V2H.</span></div>
          <div><strong>France 2030 / SCPA / ICOFI</strong><span>HEMS via OCPP / EEBUS plus smart-charging price and power optimization for flexibility services.</span></div>
          <div><strong>INCIT-EV · SCALE</strong><span>Dynamic inductive charging; smart charging with Enedis, EDF, and Clem car-sharing services.</span></div>
          <div><strong>EEBUS Summit</strong><span>Technical conference contribution on interoperable smart-home and charging ecosystems.</span></div>
        </div>
      </article>
    </section>

    <section className="resume-page ming-page grid grid-cols-[29%_71%]">
      <Sidebar page={3} />
      <article className="resume-content ming-content">
        <SectionHeading>Test Center &amp; Certification Readiness</SectionHeading>
        <Feature title="Interoperability &amp; Pre-Certification Platform">
          <Bullets items={[
            "Built and operated realistic, end-to-end validation capabilities covering EVs, EVSEs, CSMSs, HEMSs, energy assets, protocol emulators, and digital services.",
            "Represented one of the officially selected laboratories within IEA Task 53 Task D; contributed actively to AC Subset and Grid Code task forces.",
            "Supported integration and validation activities with dcbel / INSIEME / CEEDS, Sancev, Far A Day, and a broad industrial ecosystem."
          ]} />
        </Feature>

        <SectionHeading>Team, Delivery &amp; Commercial Impact</SectionHeading>
        <div className="ming-two-col">
          <Feature title="Engineering Leadership">
            <Bullets items={["Workforce planning, project delivery, technical roadmap ownership, and team-performance management in standards-led R&D environments.", "Translation of normative requirements into architectures, specifications, implementation plans, system recipes, and evidence-backed validation."]} />
          </Feature>
          <Feature title="Technical–Commercial Leadership">
            <Bullets items={["Structured technical-commercial proposals that align complex engineering requirements with business outcomes.", "Closed delivery engagements with top-tier OEM and CPO clients; coordinated stakeholders across mobility, charging, and energy services."]} />
          </Feature>
        </div>

        <SectionHeading>Standards Enablement</SectionHeading>
        <Feature title="Content Creator, Coach &amp; Instructor">
          <p>Designed and delivered training on IEC 61851-1, ISO 15118-3 / -2 / -20 / -4, and OCPP for 20 major industrial accounts spanning charging infrastructure, mobility services, automotive, and energy stakeholders.</p>
        </Feature>

        <SectionHeading>Systems &amp; Hardware Integration</SectionHeading>
        <div className="ming-compact-grid">
          <span>Embedded Linux / ARM</span><span>Bare-metal MCUs</span><span>PLC modems</span><span>CAN architecture</span><span>Power electronics</span><span>Smart metering</span><span>Power quality sensing</span><span>EVSE enclosures</span><span>Cloud / edge APIs</span><span>OTA lifecycle</span><span>Cybersecurity / PKI</span><span>Field commissioning</span>
        </div>

        <div className="ming-final-statement">
          <h2>From evolving standards to interoperable products.</h2>
          <p>Connects regulation, protocol engineering, embedded systems, cloud services, laboratory evidence, and customer delivery—turning complex V2G and smart-charging requirements into reusable software, validated integrations, and market-ready demonstrations.</p>
        </div>

      </article>
    </section>
  </main>;
}
