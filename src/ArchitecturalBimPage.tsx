import technologyLogoPlaceholder from "./assets/technology-logo-placeholder.svg"
import { CheckIcon, FaqItem, SectionLabel } from "./ServiceDetailPage"

const RED = "#d81f26"

// ─── Content ──────────────────────────────────────────────────────────────────

const HERO = {
  title: "Architectural BIM Services",
  subtitle:
    "Precision BIM Services for Architecture for Improved Coordination and Future of the Project",
  image:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=800&fit=crop&auto=format",
}

const HERO_STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "40+", label: "BIM Specialists" },
  { value: "8", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
]

const INTRO = [
  "The VR4BIM BIM service can offer you top-quality Architectural BIM services which would be useful for use by architects, developers, constructors, consultants, and other parties involved in the project for improved coordination and accurate designs during the process of building construction.",
  "BIM services provided by us are focused on developing highly precise BIM models using intelligent 3D modeling, data-driven coordination, and digital construction. Our experts are capable of creating precise BIM models right from inception to completion through the process of design, documentation, and facility management.",
  "Being a multidisciplinary BIM company, VR4BIM combines our skills in architecture, digital construction, and industry experiences to offer highly effective BIM services according to the project requirements. The processes involved in BIM would help reduce design conflicts, project communication, project risks, as well as reduce project duration and cost.",
  "The various projects that we work on cover residential projects, commercial buildings, health facilities, hospitality buildings, mixed-use, infrastructure, industries, and institutions.",
]

const SERVICE_SECTIONS = [
  {
    id: "3d-modeling",
    title: "3D BIM Modeling for Architecture",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Architectural 3D BIM model of a modern building",
    body: [
      "We create efficient and intelligent 3D BIM models for residential, commercial, industrial, healthcare, hospitality, and infrastructure applications. The architectural model helps in visualizing, coordinating, and planning of the project effectively by improving communication between all the people involved in the process.",
    ],
    listLabel:
      "Some of the features included in our architectural BIM modeling are:",
    items: [
      "Walls, floors, ceilings, and roofs",
      "Doors, windows, and curtain walls",
      "Stairs and railings",
      "Interior and exterior architectural elements",
      "Landscape and site elements",
      "Intelligent facade systems",
      "Sections and elevations of the building",
    ],
    note: "Our BIM modeling experts develop architectural models for all levels of LOD starting from LOD 100 to LOD 500 according to customer requirements and construction phases.",
  },
  {
    id: "revit",
    title: "Revit BIM Modeling Services",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Architectural drawings being converted into a Revit model",
    body: [
      "We provide Revit BIM modeling services to help the architects and consultants transform their designs into highly precise digital models.",
    ],
    listLabel:
      "Using the Autodesk Revit software, we create parametric BIM models to assist in:",
    items: [
      "Design Development",
      "Documentation",
      "Quantification",
      "BIM Coordination",
      "Visualization and Rendering",
      "Facility Management",
    ],
    note: "Every single one of our BIM models is created according to the best practices and keeping in mind the needs of the particular project.",
  },
  {
    id: "documentation",
    title: "Architectural Construction Documentation Services",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Architectural construction drawings and documents",
    body: [
      "Architectural construction documents provided by VR4BIM can be utilized for various construction services which will help clear all the confusion in the project.",
    ],
    listLabel: "Here are some of the documents related to construction:",
    items: [
      "Floor Plans",
      "Elevations",
      "Sections",
      "Reflected Ceiling Plan",
      "Schedules for Doors & Windows",
      "Materials Schedules",
      "Detailing",
      "Construction Drawings",
    ],
    note: "Construction Documents clear all the confusion in design.",
  },
  {
    id: "scan-to-bim",
    title: "Scan-to-BIM Services",
    image:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Laser scanning of an existing building for Scan to BIM",
    body: [
      "Using advanced laser scanning technology and point clouds, we will provide you with unique services to create intelligent BIM models through a scan-to-BIM method.",
    ],
    listLabel: "Scan-to-BIM services provided by us will be helpful in:",
    items: [
      "Remodeling",
      "Redesigning",
      "Documentation of heritage objects",
      "Modification of buildings",
      "Checking the current state of the building",
      "Management of facilities",
    ],
    note: "With the help of professional services, we will convert point clouds into architectural BIM models, which will definitely be useful in future project development.",
  },
  {
    id: "coordination",
    title: "Clash Detection and BIM Coordination for Architecture",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=760&h=520&fit=crop&auto=format",
    imageAlt: "BIM coordination team reviewing a federated model",
    body: [
      "Coordination plays an important role in the successful implementation of the project. With the help of BIM coordination services, we will be able to foresee and prevent potential conflicts.",
      "Using advanced BIM clash detection and federated modeling technologies, we can greatly simplify communication processes among such areas as architecture, structure, and MEP.",
    ],
    listLabel: "Clash detection and BIM coordination services include:",
    items: [
      "Architectural coordination",
      "Clash detection and resolution",
      "Constructability reviews",
      "Multi-discipline coordination",
      "Model auditing",
      "Design verification",
      "Coordination meetings and reporting",
    ],
    note: "It is always better to eliminate potential conflicts at the design stage rather than at the construction stage.",
  },
  {
    id: "visualization",
    title: "Visualization and Presentation Modelling through BIM",
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Photorealistic architectural visualization",
    body: [
      "At VR4BIM, our forte lies in creating realistic models that facilitate easy visualization of designs for the architect and other stakeholders before undertaking any construction activities.",
    ],
    listLabel: "Our services in this regard consist of:",
    items: [
      "Architectural Rendering",
      "Presentation Model",
      "Visualization Walkthroughs",
      "Conceptual Modeling of BIM",
      "Visualizing Interiors",
      "Views & Animation 3D",
    ],
  },
  {
    id: "millwork",
    title: "Millwork Services and Shop Drawings",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=760&h=520&fit=crop&auto=format",
    imageAlt: "Interior millwork and joinery",
    body: [
      "Some of the BIM services provided by us in consultation with architectural BIM professionals include creation of models for millworks, as well as shop drawings for fabrication.",
    ],
    listLabel: "Our services comprise:",
    items: [
      "Millwork Details",
      "Joinery Drawings",
      "Interior Shop Drawings",
      "Fabrication Drawings",
      "Architectural Details",
    ],
  },
]

const ADVANTAGES = [
  {
    num: "01",
    title: "Communication Coordination",
    body: "As for architecture BIM implementation, it means that all participants of the construction process are able to collaborate within one virtual environment. It means that the coordination of communication between the participants of the construction process becomes possible with the help of BIM technologies.",
  },
  {
    num: "02",
    title: "Visualization",
    body: "The creation of 3D models with the help of BIM technology allows for providing visualization of the construction process by all its participants.",
  },
  {
    num: "03",
    title: "Prevention of Errors",
    body: "Working together and detecting clashes in the process of BIM technologies use leads to the prevention of errors during the designing phase.",
  },
  {
    num: "04",
    title: "Delivery",
    body: "Planning and management of projects become easier thanks to BIM technology. Hence, project delivery will be more efficient.",
  },
  {
    num: "05",
    title: "Cost Calculation",
    body: "Quantification data concerning the expenses on construction materials and other elements can be easily calculated with the help of BIM.",
  },
  {
    num: "06",
    title: "Management",
    body: "Finally, architectural BIM model can be used for facility management.",
  },
]

const SECTORS = [
  {
    label: "Residential Building Sectors",
    icon: "M4 22L24 6L44 22M9 18V42H39V18M31 12V6H36V16M20 42V31H28V42M13 25H18V30H13ZM30 25H35V30H30ZM4 42H44",
  },
  {
    label: "Commercial Sectors",
    icon: "M4 42H44M8 42V12H26V42M17 12V5M26 20H40V42M13 18H15M19 18H21M13 25H15M19 25H21M13 32H15M19 32H21M31 27H35M31 34H35",
  },
  {
    label: "Healthcare Sectors",
    icon: "M24 41C24 41 5 30 5 17A10 10 0 0 1 24 12A10 10 0 0 1 43 17C43 30 24 41 24 41ZM9 24H17L20 18L25 30L28 24H39",
  },
  {
    label: "Hospitality Sectors",
    icon: "M6 36H42M9 41H39M11 36A13 13 0 0 1 37 36M24 23V17M19 17H29M17 30A8 8 0 0 1 21 27",
  },
  {
    label: "Educational Sectors",
    icon: "M24 10L4 19L24 28L44 19ZM12 23V33C12 33 17 38 24 38C31 38 36 33 36 33V23M44 19V32",
  },
  {
    label: "Airport or Transport Related Sectors",
    icon: "M24 4C26 4 27 6 27 9V18L42 27V31L27 26V36L32 40V43L24 41L16 43V40L21 36V26L6 31V27L21 18V9C21 6 22 4 24 4Z",
  },
  {
    label: "Mixed-use Sectors",
    icon: "M4 42H44M7 42V25L15 19L23 25V42M23 42V8H39V42M28 14H34M28 21H34M28 28H34M28 35H34M12 42V34H18V42",
  },
  {
    label: "Industrial Sectors",
    icon: "M4 42H44M6 42V24L16 30V24L26 30V24L34 29V10H41V42M34 6C36 4 39 4 41 6M11 36H15M20 36H24M29 36H33",
  },
  {
    label: "Retail & Entertainment Sectors",
    icon: "M4 18H44V42H4ZM4 18L24 6L44 18M16 42V28H32V42",
  },
  {
    label: "Infrastructure Sectors",
    icon: "M4 30H44M4 37H44M12 37V10M36 37V10M4 20C9 20 12 15 12 10C12 20 18 25 24 25C30 25 36 20 36 10C36 15 39 20 44 20M18 30V23M24 30V25M30 30V23",
  },
]

const WHY_CHOOSE = [
  {
    num: "01",
    title: "Skill Set of BIM Specialists",
    body: "The skill set of VR4BIM's BIM specialists includes architecture, BIM Modeling, Engineering, Coordination, and Digital Construction.",
  },
  {
    num: "02",
    title: "Advanced BIM Services",
    body: "Our futuristic BIM services will be provided using advanced BIM methodologies as per requirement for the architectural project.",
  },
  {
    num: "03",
    title: "Collaboration",
    body: "Close collaboration with the architects, consultants, contractors, and clients is one of our strategies for ensuring the quality of the BIM model.",
  },
  {
    num: "04",
    title: "Scalable BIM Solutions",
    body: "Regardless of any complexity of the architectural projects, scalable BIM solutions can be provided by VR4BIM through customization of the same.",
  },
  {
    num: "05",
    title: "Quality BIM Model",
    body: "It is very important to maintain a high level of quality of BIM models, for which VR4BIM always checks the quality of our BIM model.",
  },
  {
    num: "06",
    title: "Sustainability in Construction with BIM Solution",
    body: "Sustainability in construction practices can be assured with our optimized BIM solutions.",
  },
]

const SOFTWARE = [
  "Autodesk Revit",
  "Navisworks",
  "AutoCAD",
  "BIM 360",
  "Dynamo",
  "Revizto",
  "Solibri",
  "InfraWorks",
  "Bluebeam",
  "Civil 3D",
]

const PARTNERSHIP = [
  "It is imperative for us to understand that Architectural BIM is more than just modeling in 3D. It is a whole new smart approach to design, coordination, construction, and management of buildings.",
  "Using our Architectural BIM services, we ensure that your construction project becomes much more collaborative and reduces risks, besides achieving much better results during the process of constructing buildings using digital technology.",
  "From construction of residential towers, commercial centers, hospitals, airports, educational facilities, industrial structures, and many other forms of construction, we guarantee you that Architectural BIM services can be very helpful.",
  "For more information on our Architectural BIM services, please contact us now.",
]

const FAQS = [
  {
    q: "What are some of the architectural BIM services that VR4BIM can provide?",
    a: "There is a whole range of services related to architectural BIM such as Architectural 3D BIM modeling, Revit BIM modeling, Construction documents, Scan to BIM, BIM coordination, clash detection, Quantity take-offs, visualization model, millwork shop drawings, and as-built BIM modeling. All these architectural BIM services could be used in various construction areas.",
  },
  {
    q: "How can architectural BIM services influence construction?",
    a: "The application of architectural BIM services allows increasing efficiency in coordinating construction processes, avoiding clashes in advance, creating effective visualizations and construction documents. The usage of BIM allows identifying and solving possible problems beforehand.",
  },
  {
    q: "Where can VR4BIM apply the Architectural BIM Services in the respective industries?",
    a: "The VR4BIM Architectural BIM Services are used in residential, commercial, healthcare, hospitality, industrial, infrastructure, mixed-use, educational, retail and transportation industries. The BIM process that VR4BIM uses is tailored based on the industry's standards and your project needs.",
  },
  {
    q: "Which BIM softwares does VR4BIM use to create the Architectural BIM model?",
    a: "The experts from VR4BIM work with the best in the industry BIM software such as Autodesk Revit, Navisworks, AutoCAD, BIM 360, Dynamo, Solibri, Revizto, Civil 3D, InfraWorks, and Bluebeam to create an Architectural BIM model.",
  },
  {
    q: "What makes VR4BIM a good choice for Architectural BIM services?",
    a: "Because of its combination of multidisciplinary capabilities, state-of-the-art Architectural BIM software, and building experience, VR4BIM can provide highly accurate Architectural BIM services. We use collaboration techniques to ensure that we work effectively together, minimizing risks and increasing efficiency.",
  },
]

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ArchitecturalBimPage({
  onBackToServices,
  onBackToBim,
}: {
  onBackToServices: () => void
  onBackToBim: () => void
}) {
  return (
    <main className="flex-1 bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative h-[420px] md:h-[480px] bg-gray-900 overflow-hidden">
        <img
          src={HERO.image}
          alt={HERO.title}
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
                onClick={onBackToServices}
                className="hover:text-white transition-colors"
              >
                Services
              </button>
              <BreadcrumbChevron />
              <button
                onClick={onBackToBim}
                className="hover:text-white transition-colors"
              >
                BIM Services
              </button>
              <BreadcrumbChevron />
              <span className="text-white/90">{HERO.title}</span>
            </nav>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="animate-fade-up inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase text-white mb-4"
              style={{ background: RED, "--delay": "150ms" } as React.CSSProperties}
            >
              BIM Services
            </div>
            <h1
              className="animate-fade-up text-[42px] md:text-[60px] font-bold text-white leading-none tracking-tight max-w-3xl"
              style={
                {
                  fontFamily: "Barlow, system-ui, sans-serif",
                  "--delay": "300ms",
                } as React.CSSProperties
              }
            >
              {HERO.title}
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
              {HERO.subtitle}
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
            <SectionLabel>About This Service</SectionLabel>
            <h2
              className="text-[30px] font-bold text-[#1a1a1a] leading-snug mb-5"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Precision Architectural BIM by VR4BIM
            </h2>
            {INTRO.map((p) => (
              <p
                key={p}
                className="text-[14px] text-gray-500 leading-relaxed mb-4 last:mb-0"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {p}
              </p>
            ))}
          </div>
          <div data-reveal="right">
            <div className="bg-gray-50 border border-gray-100 p-8 hover:shadow-lg hover:bg-white transition-all duration-300">
              <h3
                className="text-[18px] font-bold text-[#1a1a1a] mb-5"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Our Architectural BIM Services
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {SERVICE_SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <CheckIcon />
                    <span
                      className="text-[13px] text-gray-600 leading-snug group-hover:text-brand-dark transition-colors"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {s.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services heading ─────────────────────────────────────────────── */}
      <div data-reveal className="max-w-7xl mx-auto px-6 pt-4 pb-4 text-center">
        <SectionLabel>What We Offer</SectionLabel>
        <h2
          className="text-[30px] font-bold text-[#1a1a1a]"
          style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
        >
          Our Architectural BIM Services
        </h2>
        <p
          className="mt-3 text-[14px] text-gray-500 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Thanks to the incorporation of VR4BIM technology, our Architectural
          BIM services will be useful at all stages of architecture planning,
          design development, coordination, and documentation.
        </p>
      </div>

      {/* ── Service sub-sections (alternating) ───────────────────────────── */}
      {SERVICE_SECTIONS.map((section, idx) => {
        const isEven = idx % 2 === 0
        return (
          <section
            key={section.id}
            id={section.id}
            className="py-8 bg-white scroll-mt-20"
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
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 group-hover/card:bg-black/70 px-6 py-5 transition-colors duration-500">
                    <h3
                      className="text-[22px] md:text-[26px] font-bold text-white leading-snug border-l-4 pl-4 group-hover/card:pl-6 transition-[padding] duration-500"
                      style={{
                        borderColor: RED,
                        fontFamily: "Barlow, system-ui, sans-serif",
                      }}
                    >
                      {section.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-[14px] text-gray-500 leading-relaxed mb-4"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {p}
                    </p>
                  ))}

                  <div className="flex items-center gap-3 mt-6 mb-4">
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
                  <p
                    className="text-[13px] font-medium text-[#1a1a1a] mb-3"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {section.listLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                      >
                        <CheckIcon />
                        <span
                          className="text-[13px] text-gray-600 leading-snug group-hover:text-brand-dark transition-colors"
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {section.note && (
                    <p
                      className="mt-6 border-l-2 pl-4 text-[13px] italic text-gray-600 leading-relaxed"
                      style={{
                        borderColor: RED,
                        fontFamily: "Inter, system-ui, sans-serif",
                      }}
                    >
                      {section.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Advantages ───────────────────────────────────────────────────── */}
      <NumberedCards
        label="Benefits"
        title="Advantages of BIM Architectural Services"
        intro="Firstly, one can highlight a lot of advantages of implementing BIM architectural services when it comes to the design and construction phases."
        items={ADVANTAGES}
      />

      {/* ── Sectors ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="max-w-2xl mb-10">
            <SectionLabel>Industries</SectionLabel>
            <h2
              className="text-[32px] md:text-[38px] font-bold text-brand-dark leading-tight"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Sectors Where Services Are Provided
            </h2>
            <p
              className="mt-3 text-[14px] text-gray-500 leading-relaxed"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              The following are some of the sectors where we provide services
              at VR4BIM:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SECTORS.map((sector, idx) => (
              <article
                key={sector.label}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${(idx % 5) * 80}ms` } as React.CSSProperties}
                className="group flex flex-col items-center text-center gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] hover:border-red-100 hover:-translate-y-1.5 transition-all duration-300"
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
                <h3
                  className="text-[16px] font-bold text-brand-dark leading-snug group-hover:text-brand-red transition-colors duration-300"
                  style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                >
                  {sector.label}
                </h3>
              </article>
            ))}
          </div>

          <p
            data-reveal
            className="mt-10 text-center text-[14px] text-gray-500 leading-relaxed"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Based on the experience, it can be said that we are well-equipped
            to provide customized BIM processes as per the needs of each
            project.
          </p>
        </div>
      </section>

      {/* ── Why Choose ───────────────────────────────────────────────────── */}
      <NumberedCards
        label="Why VR4BIM"
        title="Reasons for Opting VR4BIM for BIM Services in Architecture"
        items={WHY_CHOOSE}
      />

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
                The BIM software platforms that we use
              </h2>
              <p
                className="text-[14px] text-gray-500 leading-relaxed mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We have architectural BIM service which is provided with the
                help of some advanced BIM software platforms like:
              </p>
              <p
                className="text-[14px] text-gray-500 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                These are just few of the advanced tools through which BIM
                software helps us in getting precise visualizations in our
                services.
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
                Architectural BIM Services for VR4BIM Partnership
              </h2>
              {PARTNERSHIP.map((p) => (
                <p
                  key={p}
                  className="text-[14px] text-gray-500 leading-relaxed mb-3 last:mb-0"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {p}
                </p>
              ))}
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
                  onClick={onBackToBim}
                  className="px-6 py-3 border border-gray-300 text-[13px] font-semibold text-[#1a1a1a] hover:border-gray-500 transition-colors"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  All BIM Services
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
                    className={INPUT_CLASS}
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={INPUT_CLASS}
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={INPUT_CLASS}
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                />
                <input
                  type="text"
                  placeholder="Company / Project Name"
                  className={INPUT_CLASS}
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                />
                <select
                  className={`${INPUT_CLASS} text-gray-500`}
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  <option value="">Select Architectural BIM Service</option>
                  {SERVICE_SECTIONS.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  placeholder="Brief project description"
                  className={`${INPUT_CLASS} resize-none`}
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
              Frequently Asked Questions
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

// ─── Sub-components ───────────────────────────────────────────────────────────

const INPUT_CLASS =
  "bg-white border border-gray-200 text-[13px] px-3 py-2.5 outline-none hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-red-100 transition-all"

function BreadcrumbChevron() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
      <path
        d="M4.5 3L7.5 6L4.5 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NumberedCards({
  label,
  title,
  intro,
  items,
}: {
  label: string
  title: string
  intro?: string
  items: { num: string, title: string, body: string }[]
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div data-reveal className="text-center mb-10">
          <SectionLabel>{label}</SectionLabel>
          <h2
            className="text-[30px] font-bold text-[#1a1a1a]"
            style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
          >
            {title}
          </h2>
          {intro && (
            <p
              className="mt-3 text-[14px] text-gray-500 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
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
  )
}
