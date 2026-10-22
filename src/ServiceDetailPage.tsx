import { useState } from "react"
import clientLogoPlaceholder from "./assets/client-logo-placeholder.svg"
import technologyLogoPlaceholder from "./assets/technology-logo-placeholder.svg"

const RED = "#d81f26"

// ─── Content ──────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "40+", label: "BIM Specialists" },
  { value: "8", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
]

const SERVICE_SECTIONS = [
  {
    id: "architecture",
    title: "Architecture BIM Services",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Architectural BIM model of a modern building",
    body: "Architecture BIM Services offered by us allow designers to create accurate and completely coordinated BIM Models for varied applications such as modeling, visualization, documentation and construction of projects. Our BIM specialists have the capability to assist architects, consultants, developers, and other designers in creating completely coordinated BIM Models so as to make their job simpler.",
    items: [
      "Architectural 3D BIM Modeling",
      "Design Development Modeling",
      "Construction Documents",
      "Revit BIM Modeling",
      "Interior BIM Modeling",
      "Scan to BIM Services",
      "As-built Modeling",
      "Quantity Take-offs",
      "Revit Family Creation",
      "BIM Visualization & Presentation Models",
      "Millwork Modeling & Shop Drawings",
      "2D Drafting Services",
    ],
  },
  {
    id: "structure",
    title: "Structure BIM Services",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Steel structural framework of a building under construction",
    body: "The structure BIM services provided by VR4BIM will enable you to improve structure coordination, fabrication, and construction, which involves different industrial structure elements like steel, concrete, and precast structures among other types. Through the structure BIM services by VR4BIM, it will become simple for you to manage your structure engineers and your construction teams because any structural issues will be sorted before construction begins.",
    items: [
      "Structure 3D Modeling",
      "Steel Detailing",
      "Rebar Detailing",
      "Precast Detailing",
      "Structure Construction Documents",
      "Steel Connection Design",
      "Shop / Fabrication Drawing",
      "Structure Quantity Take-Off",
      "As-built Drawing Production",
      "Underground Structure Modeling",
      "Structure 2D Drafting",
    ],
  },
  {
    id: "mep",
    title: "MEP BIM Services",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=760&h=520&fit=crop&auto=format",
    imageAlt: "MEP mechanical ductwork and building services coordination",
    body: "Our MEP BIM services can help you make sure that your commercial, residential, healthcare, industrial, or mixed-use building projects have highly coordinated and constructible MEP systems. MEP BIM modeling is carried out by us for the purpose of making the models highly coordinated to avoid clashes and to coordinate their installation, hence improving the overall performance of the buildings.",
    items: [
      "MEP 3D BIM Modeling",
      "BIM Coordination",
      "Clash Detection & Resolution",
      "MEP Shop Drawing",
      "HVAC BIM Modeling",
      "Plumbing BIM Modeling",
      "Electrical BIM Modeling",
      "Piping Spool Drawings",
      "Isometrics Drawings",
      "Take Off Quantities & BOQ",
      "As-Built Drawings",
      "Scan to BIM",
      "Mechanical CAD Services",
      "P&ID Drawings",
    ],
  },
  {
    id: "coordination",
    title: "BIM Coordination & Clash Detection",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=760&h=520&fit=crop&auto=format",
    imageAlt: "BIM coordination team reviewing federated model",
    body: "Co-ordination is extremely important for the successful project process. Through our BIM coordination service, any issues that arise in the process of developing the project will be sorted out by the project team at the design phase before going to the construction phase. As a result of our BIM co-ordination service, through clash detection and co-ordination, we are able to ensure there are no unnecessary redesigns in the project site, improved communication efficiency, and project success.",
    items: [
      "Multi-disciplinary BIM Co-ordination",
      "Clash Detection & Solutions",
      "Constructibility Review",
      "Federated BIM Models",
      "BIM Model Audit / QC / QA",
      "BIM Coordination Meetings",
      "BIM Co-ordination Planning",
      "Design Validation",
    ],
  },
  {
    id: "scan",
    title: "Scan to BIM Services",
    image:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Laser scanning of an existing building for Scan to BIM",
    body: "VR4BIM provides accurate Scan to BIM services based on point cloud technology and laser scanning to develop smart BIM models of buildings. The Scan to BIM service provided by VR4BIM is capable of recording the existing condition of several projects with millimetre accuracy, providing a reliable as-built baseline for renovation, retrofit, and facilities management projects.",
    items: [
      "BIM from Point Clouds",
      "Existing Conditions Modeling",
      "As-built BIM Model",
      "Modeling Heritage Buildings",
      "Facility Management Model",
      "BIM Model for Renovation & Retrofit",
      "MEP Existing Conditions Modeling",
      "Existing Structure Documentation",
    ],
  },
  {
    id: "4d5d",
    title: "4D BIM and 5D BIM Services",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=760&h=520&fit=crop&auto=format",
    imageAlt: "4D construction scheduling and 5D cost planning",
    body: "The incorporation of the project schedule and costs is one of the key components of the BIM services provided by VR4BIM. Incorporation of the practice of 4D BIM allows us to simulate work sequencing and scheduling while the application of the 5D BIM concept can help estimate project costs — giving stakeholders total visibility across time and budget at every phase of delivery.",
    items: [
      "Effective Construction Planning",
      "Visualization of Project Scheduling",
      "Budget Estimation & Cost Management",
      "Minimal Risk of Delays & Rework",
      "Resource Management",
      "Better Project Supervision",
      "Effective Communication Between Parties",
    ],
  },
  {
    id: "digital-twin",
    title: "Digital Twin & Facility Management BIM",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Smart building digital twin and facilities management",
    body: "VR4BIM offers Digital Twin and Facility Management BIM services that can be quite useful for management and operation of facilities owned by our clients. We apply digital technologies in order to develop smart BIM environments that will allow our clients to manage their facilities more efficiently throughout the full building lifecycle.",
    items: [
      "Creation of Digital Twins",
      "Creation of Building Assets",
      "BIM for Operation and Maintenance",
      "Spatial Modeling",
      "Facility Information Modeling",
      "Building Lifecycle Management",
      "Integration of Building Smart Data",
    ],
  },
]

const SECTORS = [
  {
    label: "Residential Buildings",
    desc: "From single-family homes to high-rise apartments",
    photo:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&auto=format",
    icon: "M4 22L24 6L44 22M9 18V42H39V18M31 12V6H36V16M20 42V31H28V42M13 25H18V30H13ZM30 25H35V30H30ZM4 42H44",
  },
  {
    label: "Commercial Buildings",
    desc: "Office towers, retail complexes & mixed developments",
    photo:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&auto=format",
    icon: "M4 42H44M8 42V12H26V42M17 12V5M26 20H40V42M13 18H15M19 18H21M13 25H15M19 25H21M13 32H15M19 32H21M31 27H35M31 34H35",
  },
  {
    label: "Healthcare Facilities",
    desc: "Hospitals, clinics and specialist medical centres",
    photo:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&auto=format",
    icon: "M24 41C24 41 5 30 5 17A10 10 0 0 1 24 12A10 10 0 0 1 43 17C43 30 24 41 24 41ZM9 24H17L20 18L25 30L28 24H39",
  },
  {
    label: "Hospitality Projects",
    desc: "Hotels, resorts and leisure destinations",
    photo:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format",
    icon: "M6 36H42M9 41H39M11 36A13 13 0 0 1 37 36M24 23V17M19 17H29M17 30A8 8 0 0 1 21 27",
  },
  {
    label: "Industrial Facilities",
    desc: "Manufacturing plants, warehouses & logistics hubs",
    photo:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&auto=format",
    icon: "M4 42H44M6 42V24L16 30V24L26 30V24L34 29V10H41V42M34 6C36 4 39 4 41 6M11 36H15M20 36H24M29 36H33",
  },
  {
    label: "Infrastructure Projects",
    desc: "Bridges, roads, tunnels and civil works",
    photo:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&auto=format",
    icon: "M4 30H44M4 37H44M12 37V10M36 37V10M4 20C9 20 12 15 12 10C12 20 18 25 24 25C30 25 36 20 36 10C36 15 39 20 44 20M18 30V23M24 30V25M30 30V23",
  },
  {
    label: "Educational Sectors",
    desc: "Schools, universities and research campuses",
    photo:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format",
    icon: "M24 10L4 19L24 28L44 19ZM12 23V33C12 33 17 38 24 38C31 38 36 33 36 33V23M44 19V32",
  },
  {
    label: "Airport & Transport",
    desc: "Terminals, stations and transport infrastructure",
    photo:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
    icon: "M24 4C26 4 27 6 27 9V18L42 27V31L27 26V36L32 40V43L24 41L16 43V40L21 36V26L6 31V27L21 18V9C21 6 22 4 24 4Z",
  },
  {
    label: "Mixed-Use Projects",
    desc: "Integrated live-work-play developments",
    photo:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop&auto=format",
    icon: "M4 42H44M7 42V25L15 19L23 25V42M23 42V8H39V42M28 14H34M28 21H34M28 28H34M28 35H34M12 42V34H18V42",
  },
  {
    label: "Critical Facilities",
    desc: "Data centres, defence and mission-critical builds",
    photo:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
    icon: "M24 4L40 10V22C40 32 33 40 24 44C15 40 8 32 8 22V10ZM17 24L22 29L32 19",
  },
  // {
  //   label: "Utility & Energy",
  //   desc: "Power plants, substations and renewable energy",
  //   photo:
  //     "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&auto=format",
  //   icon: "M13 4L6 26H42L35 4ZM6 26L24 44L42 26",
  // },
  // {
  //   label: "Retail & Entertainment",
  //   desc: "Shopping centres, cinemas and entertainment venues",
  //   photo:
  //     "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=600&h=400&fit=crop&auto=format",
  //   icon: "M4 18H44V42H4ZM4 18L24 6L44 18M16 42V28H32V42",
  // },
]

const WHY_CHOOSE = [
  {
    num: "01",
    title: "Innovative BIM Technology",
    body: "We employ innovative solutions in BIM technology combined with deep engineering skills to improve construction processes and project outcomes.",
  },
  {
    num: "02",
    title: "Multi-Disciplinary Team",
    body: "Our team is made up of professionals experienced across architecture, structures, MEP, and digital construction — all under one roof.",
  },
  {
    num: "03",
    title: "Improved Project Coordination",
    body: "Our services help improve coordination within your team, making it less likely to have conflicts or miscommunication across all project stages.",
  },
  {
    num: "04",
    title: "Smart Decision-Making",
    body: "With our services, we provide you with an intelligent approach which allows you to make decisions based on accurate, model-driven project data.",
  },
  {
    num: "05",
    title: "Any Scale of BIM Process",
    body: "Our company offers BIM process services ranging from a single discipline engagement to a full multi-discipline federated delivery programme.",
  },
  {
    num: "06",
    title: "Sustainable Construction",
    body: "With VR4BIM you can be assured of a sustainable approach in construction processes, backed by data-led design decision-making.",
  },
]

const SOFTWARE = [
  "Autodesk Revit",
  "Autodesk Navisworks",
  "Autodesk AutoCAD",
  "BIM 360 / ACC",
  "Tekla Structures",
  "Civil 3D",
  "Autodesk Dynamo",
  "Solibri",
  "Bentley Software",
  "Revizto",
  "Autodesk InfraWorks",
  "Bluebeam",
]

const CLIENTS = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
  "Client 07",
  "Client 08",
]

const FAQS = [
  {
    q: "What BIM services does VR4BIM offer?",
    a: "VR4BIM offers BIM Coordination, Architectural BIM, MEP BIM, 4D/5D BIM, Structural BIM, Shop Drawings, Clash Detection, Scan to BIM, Quantity Take-Off, and Facility Management BIM.",
  },
  {
    q: "How does BIM increase efficiency in construction?",
    a: "BIM improves efficiency by using coordinated models to identify design problems prior to construction, enabling teamwork among all team members, eliminating rework, and improving scheduling and planning of projects.",
  },
  {
    q: "In what industries does VR4BIM provide BIM services?",
    a: "We provide BIM services across commercial, residential, healthcare, hospitality, mission-critical, industrial, education, infrastructure, transportation, mixed-use, and energy sectors.",
  },
  {
    q: "Which software does VR4BIM use for BIM services?",
    a: "We use Autodesk Revit, Navisworks, AutoCAD, BIM 360, Tekla Structures, Civil 3D, Solibri, Bentley Software, Dynamo, Revizto, and Bluebeam to provide accurate and high-quality BIM services.",
  },
  {
    q: "Why should I choose VR4BIM for BIM services?",
    a: "Our unique strength is the combination of multidimensional knowledge with advanced BIM and construction skills. We deliver accurate, coordinated, and ISO 19650-aligned BIM services tailored to your project requirements.",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

export function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={RED} />
      <path
        d="M5 8L7 10L11 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2"
      style={{ color: RED, fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {children}
    </p>
  )
}

export function FaqItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="group w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-brand-red transition-colors"
          style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors group-hover:border-brand-red"
          style={{
            borderColor: open ? RED : "#d1d5db",
            background: open ? RED : "transparent",
          }}
        >
          <svg
            className="w-3.5 h-3.5 transition-transform"
            style={{
              color: open ? "white" : "#6b7280",
              transform: open ? "rotate(45deg)" : "none",
            }}
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 2V12M2 7H12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <p
          className="animate-fade-up pb-5 text-[14px] text-gray-500 leading-relaxed pr-10"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {a}
        </p>
      )}
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ServiceDetailPage({
  onBack,
  onOpenArchitectural,
}: {
  onBack: () => void
  onOpenArchitectural: () => void
}) {
  return (
    <main className="flex-1 bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative h-[420px] md:h-[480px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=800&fit=crop&auto=format"
          alt="VR4BIM BIM Services"
          className="animate-hero-zoom w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 55%, rgba(26,26,26,0.2) 100%)",
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <nav
              className="flex items-center gap-2 text-[12px] text-white/60"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              <button
                onClick={onBack}
                className="hover:text-white transition-colors"
              >
                Services
              </button>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.5 3L7.5 6L4.5 9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/90">BIM Services</span>
            </nav>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="animate-fade-up inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase text-white mb-4"
              style={{ background: RED, "--delay": "150ms" } as React.CSSProperties}
            >
              What We Do
            </div>
            <h1
              className="animate-fade-up text-[42px] md:text-[60px] font-bold text-white leading-none tracking-tight max-w-2xl"
              style={
                {
                  fontFamily: "Barlow, system-ui, sans-serif",
                  "--delay": "300ms",
                } as React.CSSProperties
              }
            >
              BIM Services
            </h1>
            <p
              className="animate-fade-up mt-4 text-[16px] text-white/70 max-w-xl leading-relaxed"
              style={
                {
                  fontFamily: "Inter, system-ui, sans-serif",
                  "--delay": "450ms",
                } as React.CSSProperties
              }
            >
              Our Advanced BIM Services for Modern Construction Projects
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/10">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group py-6 px-4 text-center cursor-default hover:bg-white/5 transition-colors duration-300"
              >
                <div
                  className="text-[26px] font-bold leading-none group-hover:scale-115 transition-transform duration-300"
                  style={{
                    fontFamily: "Barlow, system-ui, sans-serif",
                    color: RED,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] tracking-wide uppercase text-white/55 mt-1 group-hover:text-white/90 transition-colors duration-300"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div data-reveal="left">
            <SectionLabel>About Our Services</SectionLabel>
            <h2
              className="text-[30px] font-bold text-[#1a1a1a] leading-snug mb-5"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Complete VR4BIM BIM Services
            </h2>
            <p
              className="text-[14px] text-gray-500 leading-relaxed mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              At VR4BIM, we provide highly advanced BIM services which can
              assist in improving the construction process through bringing
              clarity to it so as to benefit all parties such as architects,
              engineers, constructors, developers, and others who participate in
              the construction process. VR4BIM is a multi-disciplinary BIM
              services provider, and our range of services includes advanced
              construction technologies, engineering capabilities, and
              real-world experience.
            </p>
            <p
              className="text-[14px] text-gray-500 leading-relaxed"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              As one of the avant-garde companies that aspire to deliver
              innovative BIM services, VR4BIM is capable of reducing the risks
              involved in construction processes, fostering collaboration,
              speeding up projects, and enabling informed decisions through the
              utilization of Building Information Modeling.
            </p>
          </div>
          <div data-reveal="right">
            <div className="bg-gray-50 border border-gray-100 p-8 hover:shadow-lg hover:bg-white transition-all duration-300">
              <h3
                className="text-[18px] font-bold text-[#1a1a1a] mb-5"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Our BIM Services Cover
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Architectural BIM Services",
                  "Structure BIM Services",
                  "MEP BIM Services",
                  "BIM Coordination",
                  "Clash Detection",
                  "Scan to BIM",
                  "4D / 5D BIM",
                  "Digital Twin & FM BIM",
                  "Quantity Take-offs",
                  "Shop Drawings",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <CheckIcon />
                    <span
                      className="text-[13px] text-gray-600 group-hover:text-brand-dark transition-colors"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service sub-sections (alternating) ───────────────────────────── */}
      {SERVICE_SECTIONS.map((section, idx) => {
        const isEven = idx % 2 === 0
        return (
          <section
            key={section.id}
            className={`py-8 ${isEven ? "bg-white" : "bg-white"}`} 
            // bg-gray-50
          >
            <div className="max-w-7xl mx-auto px-6">
              <div
                data-reveal
                className={`group/card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 md:p-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:border-gray-200 transition-[box-shadow,border-color] duration-500 ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 group-hover/card:bg-black/70 px-6 py-5 transition-colors duration-500">
                    <h2
                      className="text-[22px] md:text-[26px] font-bold text-white leading-snug border-l-4 pl-4 group-hover/card:pl-6 transition-[padding] duration-500"
                      style={{
                        borderColor: RED,
                        fontFamily: "Barlow, system-ui, sans-serif",
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p
                    className="text-[14px] text-gray-500 leading-relaxed mb-6"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {section.body}
                  </p>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <p
                        className="shrink-0 text-[11px] font-semibold tracking-widest uppercase text-gray-400"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        Core Deliverables
                      </p>
                      <div
                        className="flex-1 h-0.5 origin-left scale-x-50 group-hover/card:scale-x-100 transition-transform duration-700"
                        style={{ background: RED }}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {section.items.map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                        >
                          <CheckIcon />
                          <span
                            className="text-[13px] text-gray-600 leading-snug group-hover:text-brand-dark transition-colors"
                            style={{
                              fontFamily: "Inter, system-ui, sans-serif",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={
                      section.id === "architecture"
                        ? onOpenArchitectural
                        : undefined
                    }
                    className="mt-6 inline-flex items-center gap-2 hover:gap-3 px-5 py-2.5 text-[12px] font-semibold text-white hover:shadow-[0_8px_20px_rgba(216,31,38,0.35)]"
                    style={{
                      background: RED,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    Learn More
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Sectors ──────────────────────────────────────────────────────── */}
      {/* <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <SectionLabel>Industries</SectionLabel>
              <h2
                className="text-[32px] font-bold text-[#1a1a1a] leading-tight"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Sectors & Industries
                <br />
                We Work With
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="px-3 py-1 text-[12px] font-semibold tracking-wide text-white"
                style={{
                  background: RED,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                12 Sectors
              </div>
              <p
                className="text-[13px] text-gray-400 max-w-xs"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We customise our BIM workflow to the scope and complexity of
                each sector.
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SECTORS.map((sector, idx) => {
              // First card spans 2 columns on lg for a featured look
              const isFeatured = idx === 0 || idx === 5
              return (
                <div
                  key={sector.label}
                  className={`group relative overflow-hidden cursor-pointer ${
                    isFeatured ? "lg:col-span-2" : ""
                  }`}
                  style={{ aspectRatio: isFeatured ? "2/1" : "1/1" }}
                >
                 
                  <img
                    src={sector.photo}
                    alt={sector.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                 
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.1) 100%)",
                    }}
                  />

                  
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: RED }}
                  />

                  
                 <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-8 h-8 flex items-center justify-center"
                      style={{ background: RED }}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={sector.icon} />
                      </svg>
                    </div>
                  </div> 

                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-[14px] font-bold text-white leading-snug mb-0.5"
                      style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                    >
                      {sector.label}
                    </p>
                    <p
                      className="text-[11px] text-white/65 leading-snug max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-300"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {sector.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="grid grid-cols-1 gap-6 items-end mb-10">
            <div className="max-w-xl">
              <SectionLabel>Industries</SectionLabel>
              <h2
                className="text-[32px] md:text-[38px] font-bold text-brand-dark leading-tight"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Sector-specific BIM solutions
              </h2>
            </div>
            <p
              className="text-[14px] text-gray-500 leading-relaxed lg:pb-1"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              We adapt our processes, level of detail, and information
              requirements to the technical demands of each built environment
              sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((sector, idx) => (
              <article
                key={sector.label}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${(idx % 3) * 100}ms` } as React.CSSProperties}
                className="group flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] hover:border-red-100 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-white shadow-[0_6px_16px_rgba(216,31,38,0.35)] group-hover:scale-110 group-hover:rotate-[8deg] transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${RED} 0%, #8f1418 100%)`,
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={sector.icon} />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h3
                    className="text-[20px] font-bold text-brand-dark leading-snug group-hover:text-brand-red transition-colors duration-300"
                    style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                  >
                    {sector.label}
                  </h3>
                  <p
                    className="mt-2 text-[14px] text-gray-500 leading-relaxed"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {sector.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="text-center mb-10">
            <SectionLabel>Why VR4BIM</SectionLabel>
            <h2
              className="text-[30px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Why Choose VR4BIM as Your BIM Partner?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item, idx) => (
              <div
                key={item.num}
                data-reveal
                style={{ "--reveal-delay": `${(idx % 3) * 110}ms` } as React.CSSProperties}
                className="group relative overflow-hidden p-6 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-0.5 w-full bg-brand-red scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <div
                  className="text-[36px] font-bold leading-none mb-4 opacity-15 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-300"
                  style={{
                    fontFamily: "Barlow, system-ui, sans-serif",
                    color: RED,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  className="text-[16px] font-semibold text-[#1a1a1a] mb-2"
                  style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] text-gray-500 leading-relaxed"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Software ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-start">
            <div data-reveal="left">
              <SectionLabel>Technology Stack</SectionLabel>
              <h2
                className="text-[28px] font-bold text-[#1a1a1a] leading-snug mb-4"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Technologies and BIM Platforms We Use
              </h2>
              <p
                className="text-[14px] text-gray-500 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We use the latest technologies and platforms for BIM to provide
                our customers with outstanding results. Our BIM solutions will
                ensure a higher level of working process and project accuracy.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SOFTWARE.map((sw, idx) => (
                <div
                  key={sw}
                  data-reveal="zoom"
                  style={{ "--reveal-delay": `${idx * 50}ms` } as React.CSSProperties}
                  className="group flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 hover:border-brand-red hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <img
                    src={technologyLogoPlaceholder}
                    alt={`${sw} logo placeholder`}
                    className="w-10 h-10 rounded-sm shrink-0 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span
                    className="text-[13px] font-medium text-[#1a1a1a]"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {sw}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Our clients"
        className="py-14 bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="text-center mb-8">
            <SectionLabel>Trusted Partnerships</SectionLabel>
            <h2
              className="text-[26px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Clients We’re Proud to Work With
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="client-logo-track flex w-max">
              {[false, true].map((duplicate) => (
                <div
                  key={String(duplicate)}
                  aria-hidden={duplicate || undefined}
                  className="flex gap-4 pr-4"
                >
                  {CLIENTS.map((client) => (
                    <div
                      key={client}
                      className="w-52 h-24 flex items-center justify-center gap-3 group bg-gray-50 border border-gray-100 hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={clientLogoPlaceholder}
                        alt={duplicate ? "" : `${client} logo placeholder`}
                        className="w-11 h-11 shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                      />
                      <span
                        className="text-[13px] font-semibold tracking-wide text-gray-500 uppercase"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {client}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-12 bg-white/80 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-white/80 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Partner CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-reveal="left">
              <SectionLabel>Get Started</SectionLabel>
              <h2
                className="text-[30px] font-bold text-[#1a1a1a] leading-snug mb-4"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Partner with VR4BIM for Your Next Project
              </h2>
              <p
                className="text-[14px] text-gray-500 leading-relaxed mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Regardless of whether you want to work on a brand-new
                construction project or investigate the feasibility of
                coordinating your construction process, VR4BIM will be happy to
                provide the BIM services required for the success of your
                project.
              </p>
              <p
                className="text-[14px] text-gray-500 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Our expertise includes design development, construction
                coordination, and facility management BIM — making it possible
                for us to deliver innovative BIM services across the full
                project lifecycle.
              </p>
              <div className="flex gap-3 mt-8">
                <button
                  className="px-6 py-3 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    background: RED,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Contact Us Today
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-3 border border-gray-300 text-[13px] font-semibold text-[#1a1a1a] hover:border-gray-500 transition-colors"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  View All Services
                </button>
              </div>
            </div>

            <div
              data-reveal="right"
              className="bg-gray-50 border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3
                className="text-[17px] font-bold text-[#1a1a1a] mb-6"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Request a Free Consultation
              </h3>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                />
                <input
                  type="text"
                  placeholder="Company / Project Name"
                  className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                />
                <select
                  className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all text-gray-500"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  <option value="">Select BIM Service</option>
                  {SERVICE_SECTIONS.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  placeholder="Brief project description"
                  className="bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all resize-none"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                />
                <button
                  className="py-3 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    background: RED,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div data-reveal className="text-center mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2
              className="text-[30px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              BIM Services — Frequently Asked Questions
            </h2>
          </div>
          <div
            data-reveal
            className="bg-white border border-gray-100 px-6 divide-y divide-gray-100"
          >
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
