import { useEffect, useState } from "react"
import { CheckIcon, FaqItem, SectionLabel } from "./ServiceDetailPage"

const RED = "#d81f26"
const DISPLAY = { fontFamily: "Barlow, system-ui, sans-serif" }
const BODY = { fontFamily: "Inter, system-ui, sans-serif" }


// ─── Content ──────────────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  { id: "bim", label: "BIM Services" },
  { id: "engineering", label: "Engineering" },
  { id: "design", label: "Architectural & Spatial Design" },
  { id: "vdc", label: "Virtual Design & Construction" },
  { id: "sustainability", label: "Sustainability & PMC" },
  { id: "industries", label: "Industries" },
  { id: "faq", label: "FAQ" },
]

const BIM_DISCIPLINES = [
  {
    code: "AR",
    title: "Architectural BIM Services",
    body: "Architectural 3D modeling and Revit modeling, design development services, production of construction documents, interior modeling services, Scan-to-BIM, as-built modeling, take-off quantity estimation, making Revit families, building a visual model, modeling millworks, making shop drawings, and doing 2D drafting.",
    linked: true,
  },
  {
    code: "ST",
    title: "Structural BIM Services",
    body: "Structural 3D modeling and structural modeling, making shop drawings, doing quantity take-off, making as-built drawings, and structural detailing.",
  },
  {
    code: "MEP",
    title: "MEP BIM Services",
    body: "3D modeling of MEP systems, modeling HVAC, plumbing, electrical, and piping systems, BIM coordination, clash detection and resolution, production of shop drawings, and making Quantity Take-off.",
  },
  {
    code: "SP",
    title: "Specialized & Multidisciplinary BIM Services",
    body: "Facade BIM, landscape modeling, infrastructure modeling, precast modeling, multidisciplinary coordination.",
  },
]

const BIM_CAPABILITIES = [
  "Facade BIM",
  "Landscape BIM",
  "Infrastructure BIM",
  "Precast modeling",
  "Multidisciplinary coordination",
  "Federated models",
  "Model auditing",
  "Identification of conflicts in model design",
  "Point cloud modeling",
  "Converting 2D into 3D",
  "4D planning",
  "5D cost assessment",
  "Creating a virtual model",
  "Digital Twin",
  "Maintenance information",
]

const BIM_CAPABILITY_NOTES = [
  "BIM coordinating may also involve carrying out constructibility evaluations and clash detection, organizing coordination meetings, and conducting quality assurance reviews of the BIM models.",
  "The scope of Scan-to-BIM operations may include information regarding the ongoing situations of buildings, historical buildings, renovation works, and documentation of the working processes at various facilities.",
  "Information on the digital twin may include the data on facilities used for the processes, space information, operation and service periods data.",
]

const SOFTWARE = [
  "Autodesk Revit",
  "Navisworks",
  "AutoCAD",
  "Tekla Structures",
  "Civil 3D",
  "Dynamo",
  "Solibri",
  "Revizto",
  "Bentley",
  "InfraWorks",
  "Bluebeam",
]

// Rich-text content as it comes from the HTML editor.
const ENGINEERING_HTML = `
<ul>
  <li><strong>Structural Engineering:</strong> Design and analysis of structural systems.</li>
  <li><strong>Steel Frame Engineering:</strong> Layouts and modelling of structural steel members.</li>
  <li><strong>Reinforced Concrete Design:</strong> Design of structural steel members, reinforcement and reinforced concrete detailing including shop drawings.</li>
  <li><strong>Facade Work:</strong> Development and coordination of facades and their systems.</li>
  <li><strong>Cladding Design:</strong> Layouts for the cladding system including panels and support systems.</li>
  <li><strong>Infrastructure BIM Assistance:</strong> Digital design and modeling of infrastructure elements.</li>
  <li><strong>MEP BIM Services:</strong> Designing and modeling of mechanical, electrical and plumbing engineering systems.</li>
</ul>
`

// Rich-text content as it comes from the HTML editor.
const DESIGN_HTML = `
<ul>
  <li><strong>The design of architecture:</strong> architectural design ideas, buildings' organisation, planning spaces.</li>
  <li><strong>Facade design:</strong> the design ideas concerning exterior of buildings.</li>
  <li><strong>The design of landscape:</strong> planning outdoor places and sites.</li>
  <li><strong>Furniture design:</strong> furniture developing ideas, layouting and custom furniture design.</li>
  <li><strong>Interior design:</strong> the design ideas of interiors, planning space, and layout of furniture.</li>
  <li><strong>Planning:</strong> planning of the site.</li>
  <li><strong>Analysis of energy:</strong> the analysis of the energy performance of buildings and the choice of the best idea for the design.</li>
</ul>
`
const VDC = [
  "2D-to-3D Modeling",
  "BIM Coordination",
  "Asset Management",
  "BIM Support for Architecture, Facade, Landscape, and Interior",
  "Digital Authorization",
  "2D Documentation",
  "Point Cloud Modeling",
  "4D Simulation",
  "Precast BIM Support",
]

const SUSTAINABILITY = [
  {
    tag: "LEED",
    title: "LEED Certification Assistance",
    body: "Help with the requirements of LEED certification, coordination of credits and sustainability papers.",
  },
  {
    tag: "PMC",
    title: "Project Management Consultancy",
    body: "Planning, coordinating and controlling the project execution, processing and expenses and reporting.",
  },
  {
    tag: "Pearl",
    title: "Support with Estidama Certification",
    body: "Assistance with Pearl Rating System application, sustainability and documentation coordination.",
  },
]

const INDUSTRIES = [
  "Commercial",
  "Hospitality",
  "Healthcare",
  "Residential",
  "Industrial",
  "Educational",
  "Infrastructure",
  "Airport & Transport",
  "Mixed-use",
  "Critical Facilities",
  "Utilities & Energy",
  "Retail & Entertainment",
  "Data Centre",
  "Defence",
  "Landscape",
  "Theme Park & Recreational",
]

const BENEFITS = [
  {
    title: "Versatile Expertise",
    body: "VR4BIM provides expertise in various disciplines including BIM, engineering, design and VDC.",
  },
  {
    title: "Project-Based Delivery",
    body: "VR4BIM customizes scope and model requirements according to the project requirements.",
  },
  {
    title: "Integrated Information",
    body: "With digital modeling and documentation tools, VR4BIM makes it easier for teams to check design interfaces.",
  },
  {
    title: "End-to-end Assistance",
    body: "VR4BIM assists in the whole process from design and planning, construction and operation.",
  },
]

const FAQS = [
  {
    q: "What services does VR4BIM offer?",
    a: "VR4BIM provides BIM, engineering, design, VDC, sustainability services, and services for project excellence.",
  },
  {
    q: "What BIM areas does VR4BIM cover?",
    a: "VR4BIM provides a full range of BIM services in architect, structure, MEP, facade, interior, landscape, infrastructure, and precast modelling.",
  },
  {
    q: "Can VR4BIM provide BIM coordination and clash detection services?",
    a: "Yes, VR4BIM offers coordination of multidisciplinary models, federated models coordination and clash detection and resolution.",
  },
  {
    q: "Is it true that VR4BIM can convert both drawings and point cloud data to 3D models?",
    a: "It seems to be true. The company VR4BIM also provides services for converting 2D into 3D images, and point-clouds into BIM models.",
  },
  {
    q: "Is there a possibility for VR4BIM to offer 4D and 5D modeling services?",
    a: "Sure, 4D BIM incorporates physical characteristics of the model with the construction schedule. In addition, 5D BIM refers to financial data associated with the model.",
  },
  {
    q: "What industries are covered by VR4BIM?",
    a: "VR4BIM serves clients in such industries as hospitality, healthcare, residential, industrial, education, infrastructure, transport, mixed-use, critical facilities, utility companies, retail, and entertainment.",
  },
  {
    q: "What's the process to have a conversation regarding a project with VR4BIM?",
    a: "Reach out to our team and let us know about your type of project, the discipline you are leading, offer the drawings and the scope and detail us the expected deliverables. We will then assess your requirements and discuss options for relevant BIM, engineering, design or VDC support.",
  },
]

// ─── Main export ──────────────────────────────────────────────────────────────

export default function AllServicesPage({
  onBackToServices,
  onOpenArchitectural,
  onOpenBim,
}: {
  onBackToServices: () => void
  onOpenArchitectural: () => void
  onOpenBim: () => void
}) {
  const active = useActiveSection(NAV_SECTIONS.map((s) => s.id))

  return (
    <main className="flex-1 bg-white">
      {/* ── Hero (light, split, image mosaic) ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f6f5f3]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(#e7e4df 1px, transparent 1px), linear-gradient(90deg, #e7e4df 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pb-20">
          <nav
            className="flex items-center gap-2 text-[12px] text-gray-500 mb-10"
            style={BODY}
          >
            <button
              onClick={onBackToServices}
              className="hover:text-brand-red transition-colors"
            >
              Home
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-brand-dark">Our Services</span>
          </nav>

          <div className="max-w-3xl">
            <div>
              <div
                className="animate-fade-up flex items-center gap-3 mb-5"
                style={{ "--delay": "100ms" } as React.CSSProperties}
              >
                <span className="h-px w-10" style={{ background: RED }} />
                <span
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                  style={{ ...BODY, color: RED }}
                >
                  Our Services
                </span>
              </div>
              <h1
                className="animate-fade-up text-[36px] md:text-[52px] font-bold text-brand-dark leading-[1.05] tracking-tight"
                style={{ ...DISPLAY, "--delay": "220ms" } as React.CSSProperties}
              >
                Comprehensive BIM, Engineering, Design &{" "}
                <span style={{ color: RED }}>Virtual Construction</span>{" "}
                Services
              </h1>
              <p
                className="animate-fade-up mt-6 text-[15px] text-gray-600 leading-relaxed max-w-xl"
                style={{ ...BODY, "--delay": "340ms" } as React.CSSProperties}
              >
                VR4BIM provides comprehensive services for the design and
                construction of buildings and infrastructure with respect to
                modeling and engineering. We cooperate with architects,
                engineers, contractors, developers, and project owners in order
                to meet their project requirements.
              </p>
              <div
                className="animate-fade-up flex flex-wrap gap-3 mt-8"
                style={{ "--delay": "460ms" } as React.CSSProperties}
              >
                <a
                  href="#contact-project"
                  className="px-6 py-3 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ ...BODY, background: RED }}
                >
                  Discuss Your Project
                </a>
                <a
                  href="#bim"
                  className="px-6 py-3 border border-brand-dark text-[13px] font-semibold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
                  style={BODY}
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach band ─────────────────────────────────────────────────── */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
          <h2
            data-reveal="left"
            className="text-[22px] font-bold text-white leading-snug md:max-w-[260px]"
            style={DISPLAY}
          >
            A multidisciplinary approach
          </h2>
          <p
            data-reveal="right"
            className="text-[14px] text-white/70 leading-relaxed md:border-l md:border-white/15 md:pl-12"
            style={BODY}
          >
            Our multidisciplinary approach means that we work with specialists
            from different fields in order to achieve satisfactory outcomes
            through providing our customers with 3D modeling, BIM coordination,
            and technical drawings. We offer single service or a set of
            services needed for a specific project.
          </p>
        </div>
      </section>

      {/* ── Body: sticky nav + sections ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24 py-16">
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gray-400 mb-4"
              style={BODY}
            >
              On this page
            </p>
            <ul className="border-l border-gray-200">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block -ml-px border-l-2 pl-4 py-2 text-[13px] transition-colors ${
                      active === s.id
                        ? "border-brand-red text-brand-dark font-semibold"
                        : "border-transparent text-gray-500 hover:text-brand-dark"
                    }`}
                    style={BODY}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0">
          {/* ── BIM ─────────────────────────────────────────────────────── */}
          <section id="bim" className="py-16 scroll-mt-20">
            <SectionHeading
              index="01"
              label="Building Information Modeling (BIM) Services"
              title="Building Information Modeling for Effective Project Coordination"
            >
              VR4BIM offers BIM solutions that assist project teams in
              creating, analyzing, and managing building information. Our
              services encompass various fields, including architecture,
              structural engineering, MEP engineering, facade design, interior
              design, landscape design, and infrastructure design. We will
              create the models according to the requirements of our clients
              and LOD.
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {BIM_DISCIPLINES.map((d, i) => (
                <article
                  key={d.code}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties}
                  className="group flex flex-col p-7 bg-white border border-gray-200 rounded-xl hover:border-transparent hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3
                    className="text-[19px] font-bold text-brand-dark leading-snug mb-2"
                    style={DISPLAY}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-[13.5px] text-gray-500 leading-relaxed"
                    style={BODY}
                  >
                    {d.body}
                  </p>
                  {d.linked && (
                    <button
                      onClick={onOpenArchitectural}
                      className="mt-auto pt-5 self-start inline-flex items-center gap-2 text-[13px] font-semibold text-brand-red hover:gap-3"
                      style={BODY}
                    >
                      View service
                      <Arrow />
                    </button>
                  )}
                </article>
              ))}
            </div>

            {/* Capabilities */}
            <div className="mt-12 grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8">
              <div data-reveal>
                <h3
                  className="text-[20px] font-bold text-brand-dark mb-5"
                  style={DISPLAY}
                >
                  Additional Benefits & Capabilities of BIM
                </h3>
                <div className="flex flex-wrap gap-2">
                  {BIM_CAPABILITIES.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 text-[12px] text-gray-700 bg-gray-50 border border-gray-200 hover:border-brand-red hover:text-brand-red transition-colors cursor-default"
                      style={BODY}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {BIM_CAPABILITY_NOTES.map((n) => (
                    <p
                      key={n}
                      className="text-[13px] text-gray-500 leading-relaxed"
                      style={BODY}
                    >
                      {n}
                    </p>
                  ))}
                </div>
              </div>

              <div
                data-reveal="right"
                className="self-start border border-gray-200 p-6 bg-white"
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
                  style={{ ...BODY, color: RED }}
                >
                  Software & Technical Platforms
                </p>
                <p
                  className="text-[13px] text-gray-500 leading-relaxed mb-4"
                  style={BODY}
                >
                  Depending on project needs, our teams work with platforms
                  such as:
                </p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {SOFTWARE.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-[12px] font-medium text-brand-dark"
                      style={BODY}
                    >
                      <span
                        className="w-1.5 h-1.5 shrink-0"
                        style={{ background: RED }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenBim}
                  className="mt-6 w-full py-2.5 text-[12px] font-semibold text-brand-dark border border-brand-dark hover:bg-brand-dark hover:text-white"
                  style={BODY}
                >
                  Explore BIM Services
                </button>
              </div>
            </div>
          </section>

          {/* ── Engineering (rich text) ─────────────────────────────────── */}
          <section
            id="engineering"
            className="py-16 border-t border-gray-100 scroll-mt-20"
          >
            <SectionHeading
              index="02"
              label="Engineering Services"
              title="Technical Support for Building"
            >
              We offer engineering services for the design and coordination of
              structural systems, building envelopes and their engineering
              systems. The scope is predetermined based on the design stage of
              the project as well as technical requirements.
            </SectionHeading>
            <div
              data-reveal
              className="rich-text rich-text--boxed mt-8"
              dangerouslySetInnerHTML={{ __html: ENGINEERING_HTML }}
            />
          </section>
          {/* ── Design (rich text) ─────────────────────────────────────── */}
          <section
            id="design"
            className="py-16 border-t border-gray-100 scroll-mt-20"
          >
            <SectionHeading
              index="03"
              label="Architectural & Spatial Design Services"
              title="Design for How People Use Places"
            >
              VR4BIM combines functionality, looks and requirements of projects
              in its designing services. We assist in designing buildings,
              interiors and sites.
            </SectionHeading>

            <div
              data-reveal
              className="rich-text mt-8"
              dangerouslySetInnerHTML={{ __html: DESIGN_HTML }}
            />
          </section>

          {/* ── VDC (connected nodes) ───────────────────────────────────── */}
          <section
            id="vdc"
            className="py-16 border-t border-gray-100 scroll-mt-20"
          >
            <SectionHeading
              index="04"
              label="Virtual Design and Construction (VDC)"
              title="Utilizing Design Information In Construction Planning"
            >
              VDC utilizes models from the internet and project data to assist
              teams in assessing designs and coordinating tasks. Services
              available through VR4BIM include:
            </SectionHeading>

            <div className="relative mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200">
                {VDC.map((v, i) => (
                  <div
                    key={v}
                    data-reveal
                    style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                    className="group relative flex items-center gap-4 p-5 border-gray-200 border-b sm:[&:nth-last-child(-n+3)]:border-b-0 sm:border-r sm:[&:nth-child(3n)]:border-r-0 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <span className="relative flex items-center justify-center w-9 h-9 shrink-0 rounded-full border-2 border-brand-red">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-red group-hover:scale-150 transition-transform duration-300" />
                    </span>
                    <span
                      className="text-[14px] font-semibold text-brand-dark leading-snug"
                      style={DISPLAY}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p
              data-reveal
              className="mt-6 border-l-2 border-brand-red pl-4 text-[13px] italic text-gray-600 leading-relaxed"
              style={BODY}
            >
              These services enable designers and project documents to be
              integrated with elements of planning, coordination, and
              construction.
            </p>
          </section>

          {/* ── Sustainability ──────────────────────────────────────────── */}
          <section
            id="sustainability"
            className="py-16 border-t border-gray-100 scroll-mt-20"
          >
            <SectionHeading
              index="05"
              label="Sustainability & Project Improvement Solutions"
              title="Assistance in Projects and Sustainability Needs"
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {SUSTAINABILITY.map((s, i) => (
                <article
                  key={s.tag}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                  className="group relative p-7 bg-white border border-gray-200 hover:border-brand-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-8">
                    <LeafIcon />
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 bg-gray-100 text-gray-600 group-hover:bg-brand-red group-hover:text-white transition-colors"
                      style={BODY}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="text-[18px] font-bold text-brand-dark mb-2"
                    style={DISPLAY}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[13px] text-gray-500 leading-relaxed"
                    style={BODY}
                  >
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
            <p
              data-reveal
              className="mt-6 text-[12px] text-gray-400 leading-relaxed"
              style={BODY}
            >
              The exact scope is determined according to the specific project
              and applicable system of certification and the appointment. The
              decision on the rating is made by the competent authority.
            </p>
          </section>

          {/* ── Industries ──────────────────────────────────────────────── */}
          <section
            id="industries"
            className="py-16 border-t border-gray-100 scroll-mt-20"
          >
            <SectionHeading
              index="06"
              label="Industries We Serve"
              title="Sectors We Support"
            >
              We support projects across a broad range of building and
              infrastructure sectors.
            </SectionHeading>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6">
              {INDUSTRIES.map((ind, i) => (
                <li
                  key={ind}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 4) * 50}ms` } as React.CSSProperties}
                  className="group flex items-center justify-between gap-2 py-3.5 border-b border-gray-200 hover:border-brand-red transition-colors"
                >
                  <span
                    className="text-[14px] font-semibold text-brand-dark group-hover:text-brand-red transition-colors"
                    style={DISPLAY}
                  >
                    {ind}
                  </span>
                  <span className="text-gray-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all">
                    <Arrow />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* ── Benefits (dark, full width) ───────────────────────────────────── */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            data-reveal
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2"
                style={{ ...BODY, color: RED }}
              >
                Why VR4BIM
              </p>
              <h2
                className="text-[30px] md:text-[38px] font-bold text-white leading-tight"
                style={DISPLAY}
              >
                Benefits of Working with VR4BIM
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group relative bg-brand-dark p-7 hover:bg-[#232323] transition-colors"
              >
                <div className="absolute top-0 left-0 h-0.5 w-full bg-brand-red scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <div
                  className="text-[13px] font-bold mb-6"
                  style={{ ...DISPLAY, color: RED }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[18px] font-bold text-white mb-3"
                  style={DISPLAY}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[13px] text-white/60 leading-relaxed"
                  style={BODY}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (two column) ──────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
          <div data-reveal="left" className="lg:sticky lg:top-24 self-start">
            <SectionLabel>FAQ</SectionLabel>
            <h2
              className="text-[30px] font-bold text-brand-dark leading-snug"
              style={DISPLAY}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-3 text-[14px] text-gray-500 leading-relaxed"
              style={BODY}
            >
              Can't find what you're looking for? Our team is happy to talk
              through your project.
            </p>
          </div>
          <div data-reveal="right" className="border-t border-gray-200">
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Project enquiry ───────────────────────────────────────────────── */}
      <section
        id="contact-project"
        className="bg-[#f6f5f3] border-t border-gray-100 py-16 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-reveal="left">
            <SectionLabel>Get Started</SectionLabel>
            <h2
              className="text-[32px] md:text-[40px] font-bold text-brand-dark leading-tight"
              style={DISPLAY}
            >
              Do You Have a Project in Mind?
            </h2>
            <p
              className="mt-4 text-[15px] text-gray-600 leading-relaxed max-w-lg"
              style={BODY}
            >
              Share your ideas with us and tell us where you need help. The
              VR4BIM team can talk with you about your needs, services, and
              products required for your project.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Your project type and the discipline you are leading",
                "Drawings and the scope of work",
                "Expected deliverables",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-[13px] text-gray-600" style={BODY}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <form
            data-reveal="right"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.07)] flex flex-col gap-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Full Name" className={INPUT} style={BODY} />
              <input
                type="email"
                placeholder="Email Address"
                className={INPUT}
                style={BODY}
              />
            </div>
            <select className={`${INPUT} text-gray-500`} style={BODY}>
              <option value="">Service of interest</option>
              {NAV_SECTIONS.slice(0, 5).map((s) => (
                <option key={s.id}>{s.label}</option>
              ))}
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className={`${INPUT} resize-none`}
              style={BODY}
            />
            <button
              type="submit"
              className="py-3 text-[13px] font-semibold text-white hover:opacity-90"
              style={{ ...BODY, background: RED }}
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const INPUT =
  "bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"

function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div data-reveal className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[13px] font-bold text-white px-2 py-0.5"
          style={{ ...DISPLAY, background: RED }}
        >
          {index}
        </span>
        <span
          className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500"
          style={BODY}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-[28px] md:text-[34px] font-bold text-brand-dark leading-tight"
        style={DISPLAY}
      >
        {title}
      </h2>
      {children && (
        <p
          className="mt-4 text-[14px] text-gray-500 leading-relaxed"
          style={BODY}
        >
          {children}
        </p>
      )}
    </div>
  )
}

function Arrow() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7H12M8 3L12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg
      className="w-9 h-9"
      viewBox="0 0 48 48"
      fill="none"
      stroke={RED}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 38C10 20 22 10 40 8C40 28 30 40 12 40" />
      <path d="M10 38L26 22" />
    </svg>
  )
}

// Tracks which section is currently in view for the sticky side nav.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return active
}
