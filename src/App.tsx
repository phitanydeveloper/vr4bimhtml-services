import { useEffect, useState } from "react"
import ArchitecturalBimPage from "./ArchitecturalBimPage"
import ServiceDetailPage from "./ServiceDetailPage"
import { useScrollReveal } from "./useScrollReveal"

// ─── Brand / shared ──────────────────────────────────────────────────────────

const RED = "#d81f26"
const DARK = "#1a1a1a"

const NAV_LINKS = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Services", hasDropdown: true },
  { label: "Projects" },
  { label: "Resources" },
  { label: "Our Team" },
  { label: "Careers" },
  { label: "Blogs" },
  { label: "Contact Us" },
]

const FOOTER_COL1 = ["About", "Our Team", "Careers", "Contact Us", "Blogs"]
const FOOTER_COL2 = [
  "Sectors We Cater",
  "Our Services",
  "Our Projects",
  "Our Resources",
  "Testimonials",
]

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z",
  },
  {
    label: "Instagram",
    path: "M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm0 2A3.8 3.8 0 004 7.8v8.4A3.8 3.8 0 007.8 20h8.4a3.8 3.8 0 003.8-3.8V7.8A3.8 3.8 0 0016.2 4H7.8zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z",
  },
  {
    label: "YouTube",
    path: "M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 00-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3L10 15z",
  },
]

// ─── Service data ─────────────────────────────────────────────────────────────

export interface Service {
  id: number
  title: string
  category: string
  shortDesc: string
  heroImage: string
  listImage: string
  tags: string[]
  icon: React.ReactNode
  overview: string
  benefits: { title: string ,body: string }[]
  process: { step: number, title: string, body: string }[]
  tools: string[]
  stats: { value: string, label: string }[]
  galleryImages: string[]
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "BIM Modeling & Coordination",
    category: "Modeling",
    shortDesc:
      "Comprehensive 3D BIM modeling for architectural, structural, and MEP disciplines. We deliver clash-free, coordinated models that streamline construction workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=380&fit=crop&auto=format",
    tags: ["Architecture", "Structural", "MEP"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="4"
          y="20"
          width="40"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M4 24L24 6L44 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect
          x="18"
          y="30"
          width="12"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    overview:
      "VR4BIM delivers fully coordinated, information-rich BIM models across all project disciplines — architecture, structure, and MEP. Our models are built to LOD 300–400 standards, ensuring every element carries the geometry, data, and relationships that downstream teams need to plan, procure, and build with confidence.\n\nWe work within Autodesk Revit and collaborate through ACC/BIM 360, providing a single federated model environment for all project stakeholders. Our coordination workflows eliminate clash-driven RFIs and reduce on-site rework by resolving conflicts at the design stage.",
    benefits: [
      {
        title: "Reduced On-Site Rework",
        body: "Clash-free models prevent costly re-work by resolving all discipline conflicts before construction begins.",
      },
      {
        title: "Faster Project Delivery",
        body: "Coordinated models accelerate procurement, tendering, and construction sequencing across all trades.",
      },
      {
        title: "Accurate Documentation",
        body: "Auto-generated drawings, schedules, and quantity data directly from the model — always in sync.",
      },
      {
        title: "ISO 19650 Compliant",
        body: "All data deliverables meet ISO 19650 naming, structuring, and approval workflow requirements.",
      },
      {
        title: "Interoperability",
        body: "IFC exports and open data formats ensure compatibility with all major downstream tools and FM systems.",
      },
      {
        title: "Single Source of Truth",
        body: "One federated model environment for all disciplines means no version conflicts between teams.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Kick-off & EIR Review",
        body: "We audit the Employer's Information Requirements, agree on LOD milestones, and configure the CDE environment.",
      },
      {
        step: 2,
        title: "Discipline Modelling",
        body: "Each trade team builds discipline models against agreed templates and shared coordinates.",
      },
      {
        step: 3,
        title: "Federated Review",
        body: "Weekly clash detection runs in Navisworks; all issues are logged in the BCF tracker and assigned for resolution.",
      },
      {
        step: 4,
        title: "Coordination Workshops",
        body: "Cross-discipline sessions resolve hard clashes, soft clashes, and spatial conflicts before they reach site.",
      },
      {
        step: 5,
        title: "Model Freeze & Sign-off",
        body: "Coordinated model is frozen at each design gate and issued with an audit trail of clash resolution records.",
      },
      {
        step: 6,
        title: "Handover Package",
        body: "Final IFC, native files, COBie data, and documentation package issued to the client for construction and FM.",
      },
    ],
    tools: [
      "Autodesk Revit",
      "Navisworks Manage",
      "AutoCAD",
      "ACC / BIM 360",
      "Dynamo",
      "IFC / COBie",
    ],
    stats: [
      { value: "1,200+", label: "Models Delivered" },
      { value: "98%", label: "Clash-Free Rate" },
      { value: "LOD 400", label: "Maximum Detail Level" },
      { value: "ISO 19650", label: "Compliance Standard" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 2,
    title: "VR Visualization",
    category: "Visualization",
    shortDesc:
      "Immersive virtual reality walkthroughs that bring your designs to life before construction begins. Experience scale, materiality, and spatial quality with full-fidelity rendering.",
    heroImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=380&fit=crop&auto=format",
    tags: ["Immersive", "Real-time", "Client Presentation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="4"
          y="14"
          width="40"
          height="24"
          rx="12"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="17" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="31" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M22 26H26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    overview:
      "Our VR Visualization service transforms BIM data into immersive, interactive environments that clients, planners, and stakeholders can explore before a single brick is laid. Using real-time rendering in Unreal Engine and Enscape, we create photorealistic experiences that communicate design intent with unmatched clarity.\n\nFrom headset-based walkthroughs to browser-streamed 3D tours, we tailor the delivery format to your audience — whether that is a planning committee, a retail fit-out client, or a hospital trust reviewing a new ward layout.",
    benefits: [
      {
        title: "Stakeholder Buy-In",
        body: "Immersive walkthroughs accelerate approvals and reduce revision cycles by making design intent unmistakably clear.",
      },
      {
        title: "Planning Support",
        body: "VR presentations give planning authorities the spatial context no drawing or render can match.",
      },
      {
        title: "Design Validation",
        body: "Clients spot spatial issues, circulation problems, and material choices before costly design changes.",
      },
      {
        title: "Marketing Asset",
        body: "High-quality renders and VR tours serve as premium marketing collateral for residential and commercial sales.",
      },
      {
        title: "Headset & Browser",
        body: "Experiences delivered via Meta Quest, PCVR, or streamed to any browser — no hardware required for clients.",
      },
      {
        title: "Direct from BIM",
        body: "We work directly from your Revit model — no geometry recreation, no version drift.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Model Preparation",
        body: "BIM geometry is cleaned, optimised, and exported to the real-time engine with correct material mappings.",
      },
      {
        step: 2,
        title: "Lighting & Materials",
        body: "PBR materials, sky lighting, and interior artificial light sources are set to match the project specification.",
      },
      {
        step: 3,
        title: "Scene Assembly",
        body: "Furniture, landscaping, people, and context buildings are added to ground the project in its setting.",
      },
      {
        step: 4,
        title: "Interaction Build",
        body: "Navigation hotspots, material toggles, and day/night lighting controls are wired up for the end experience.",
      },
      {
        step: 5,
        title: "Client Review",
        body: "First-pass experience shared for client feedback on atmosphere, materials, and key viewpoints.",
      },
      {
        step: 6,
        title: "Delivery & Hosting",
        body: "Final package delivered as a headset build, executable, or hosted browser experience with a shareable link.",
      },
    ],
    tools: [
      "Unreal Engine 5",
      "Enscape",
      "Twinmotion",
      "Meta Quest",
      "D5 Render",
      "Autodesk Revit",
    ],
    stats: [
      { value: "300+", label: "VR Experiences" },
      { value: "4K", label: "Render Resolution" },
      { value: "90fps", label: "Target Frame Rate" },
      { value: "48hr", label: "Typical Turnaround" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 3,
    title: "Clash Detection & Resolution",
    category: "Visualization",
    shortDesc:
      "Automated clash detection using Navisworks to identify and resolve conflicts between building systems before they reach the construction site, saving time and budget.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=380&fit=crop&auto=format",
    tags: ["Navisworks", "Quality Control", "Risk Reduction"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 16L32 32M32 16L16 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    overview:
      "Unresolved clashes are among the leading causes of construction delay and cost overrun. VR4BIM's clash detection service systematically identifies and resolves hard clashes, soft clashes, and workflow clashes across all project disciplines — before they become expensive site problems.\n\nUsing Navisworks Manage, we run structured clash tests against agreed tolerance rules, generate BCF-formatted issue reports, and facilitate resolution workshops that close out every clash with a recorded design decision.",
    benefits: [
      {
        title: "Pre-Construction Resolution",
        body: "All clashes are resolved in the model environment — before procurement, prefabrication, or installation.",
      },
      {
        title: "BCF Issue Tracking",
        body: "Every clash is logged, assigned, tracked, and closed in an auditable BCF register.",
      },
      {
        title: "Cost Savings",
        body: "Industry data shows clash detection returns £10–£20 for every £1 invested through avoided rework.",
      },
      {
        title: "Hard & Soft Clashes",
        body: "We test for geometric intersections, clearance violations, and spatial workflow conflicts.",
      },
      {
        title: "Weekly Cadence",
        body: "Regular detection runs keep models continuously coordinated as design progresses.",
      },
      {
        title: "Contractor-Ready Models",
        body: "Handed-over models carry a full clash resolution record for contractor confidence.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Clash Rules Setup",
        body: "Tolerance rules, discipline pairs, and severity thresholds are agreed with the project team.",
      },
      {
        step: 2,
        title: "Federated Model Assembly",
        body: "All discipline models are combined into a single Navisworks federated file.",
      },
      {
        step: 3,
        title: "Automated Detection Run",
        body: "Clash tests are executed across all agreed discipline pairs and exported as BCF reports.",
      },
      {
        step: 4,
        title: "Triage & Prioritisation",
        body: "Clashes are reviewed, duplicates removed, and issues prioritised by severity and trade.",
      },
      {
        step: 5,
        title: "Resolution Workshop",
        body: "Cross-discipline workshop assigns each clash to a responsible team with a resolution deadline.",
      },
      {
        step: 6,
        title: "Sign-off & Archive",
        body: "Resolved clashes are closed in the register and a clean detection report is issued to the client.",
      },
    ],
    tools: [
      "Navisworks Manage",
      "BIM Collaborate Pro",
      "BCF Manager",
      "Revit",
      "Solibri",
      "BIM Track",
    ],
    stats: [
      { value: "50,000+", label: "Clashes Resolved" },
      { value: "£2.4M", label: "Avg. Rework Savings/Project" },
      { value: "98%", label: "Clash Close-Out Rate" },
      { value: "72hr", label: "First Report Turnaround" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 4,
    title: "MEP BIM Services",
    category: "Modeling",
    shortDesc:
      "Detailed mechanical, electrical, and plumbing BIM coordination ensuring optimal routing, system performance, and full integration with architectural and structural elements.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=380&fit=crop&auto=format",
    tags: ["Mechanical", "Electrical", "Plumbing"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path
          d="M8 24H20M28 24H40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 8V16M24 32V40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    overview:
      "Mechanical, electrical, and plumbing systems represent the most coordination-intensive element of any modern building. VR4BIM's MEP BIM team designs and coordinates all building services within the 3D model, ensuring efficient routing, correct clearances, and seamless integration with the building fabric.\n\nWe model HVAC, electrical containment, plumbing, sprinkler, and specialist systems to construction-grade detail, delivering prefabrication-ready spool drawings and coordinated installation sequences.",
    benefits: [
      {
        title: "Prefabrication Ready",
        body: "MEP models detailed to LOD 350–400 support offsite fabrication with accurate spool drawings and cut lists.",
      },
      {
        title: "Optimal Routing",
        body: "Algorithmic routing analysis identifies the most efficient paths for ducts, cables, and pipework.",
      },
      {
        title: "Space Planning",
        body: "Ceiling voids and service risers are fully modelled to confirm spatial feasibility before RIBA Stage 4.",
      },
      {
        title: "Energy Compliance",
        body: "Thermal and airflow analysis integrated with MEP design to support Part L / BREEAM submissions.",
      },
      {
        title: "Maintenance Access",
        body: "Maintenance zones are modelled to verify valve, damper, and isolation point accessibility.",
      },
      {
        title: "As-Built Updates",
        body: "Site capture and mark-up workflows keep MEP models current through construction.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Services Design Brief",
        body: "M&E consultants' design intent is translated into 3D BIM geometry with system relationships.",
      },
      {
        step: 2,
        title: "Spatial Allocation",
        body: "Service zones, risers, and ceiling voids are allocated and agreed with the architectural team.",
      },
      {
        step: 3,
        title: "System Modelling",
        body: "HVAC, electrical, plumbing, sprinkler, and BMS systems are modelled to the agreed LOD.",
      },
      {
        step: 4,
        title: "Multi-Discipline Coordination",
        body: "MEP models are coordinated against structure and architecture to resolve spatial conflicts.",
      },
      {
        step: 5,
        title: "Fabrication Package",
        body: "Approved MEP model is used to generate spool drawings, hanger schedules, and cut lists for contractors.",
      },
      {
        step: 6,
        title: "As-Built Record",
        body: "Site deviations are captured and incorporated into the as-built MEP model for FM handover.",
      },
    ],
    tools: [
      "Autodesk Revit MEP",
      "Navisworks",
      "AutoCAD MEP",
      "MagiCAD",
      "Trimble SysQue",
      "Fabrication CADmep",
    ],
    stats: [
      { value: "400+", label: "MEP Projects" },
      { value: "LOD 400", label: "Fabrication Detail" },
      { value: "35%", label: "Avg. Rework Reduction" },
      { value: "6", label: "System Types Covered" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 5,
    title: "4D / 5D BIM Scheduling",
    category: "Consulting",
    shortDesc:
      "Time-linked 4D construction sequencing and cost-integrated 5D planning that gives stakeholders total visibility into project schedule, budget, and progress at every phase.",
    heroImage:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=380&fit=crop&auto=format",
    tags: ["Scheduling", "Cost Control", "Project Management"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="6"
          y="10"
          width="36"
          height="32"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M6 18H42" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 6V14M32 6V14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="12"
          y="24"
          width="8"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.3"
        />
        <rect
          x="24"
          y="24"
          width="12"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    ),
    overview:
      "4D BIM links your construction programme directly to the 3D model, creating a dynamic simulation that shows how the build evolves day-by-day. Add 5D cost data and every programme change instantly updates your budget forecast — giving decision-makers real-time visibility across time and cost.\n\nVR4BIM connects Primavera P6 or MS Project schedules to Revit models via Synchro, producing animated construction sequences that identify programme clashes, logistics conflicts, and resource peaks before they materialise on site.",
    benefits: [
      {
        title: "Programme Visualisation",
        body: "Animated 4D simulations communicate construction sequence to site teams, clients, and planning bodies.",
      },
      {
        title: "Logistics Planning",
        body: "Crane swing, hoarding lines, and temporary works are modelled in time to prevent site access conflicts.",
      },
      {
        title: "Live Cost Forecasting",
        body: "5D integration means every programme change triggers an updated cost forecast automatically.",
      },
      {
        title: "Delay Analysis",
        body: "Baseline vs actual sequence comparison supports EOT claims with visual, model-based evidence.",
      },
      {
        title: "Stakeholder Reporting",
        body: "Monthly progress dashboards generated directly from the 4D model — no manual updates.",
      },
      {
        title: "Risk Reduction",
        body: "Sequence clashes and critical path risks are identified in the model before they affect programme.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Programme Import",
        body: "P6 or MS Project programme is imported and activity codes are aligned with BIM model elements.",
      },
      {
        step: 2,
        title: "Model Zoning",
        body: "BIM elements are grouped into work packages and assigned to programme activities.",
      },
      {
        step: 3,
        title: "Sequence Animation",
        body: "4D simulation is run and reviewed for logical sequence, resource peaks, and logistic conflicts.",
      },
      {
        step: 4,
        title: "Cost Data Integration",
        body: "Unit rates and preliminaries are mapped to activities to produce the 5D cost-loaded programme.",
      },
      {
        step: 5,
        title: "Scenario Testing",
        body: "Alternative sequences are tested in the model to identify programme optimisation opportunities.",
      },
      {
        step: 6,
        title: "Monthly Updates",
        body: "As-built progress is captured and the 4D model updated to reflect actual vs planned advance.",
      },
    ],
    tools: [
      "Synchro Pro",
      "Primavera P6",
      "MS Project",
      "Autodesk Revit",
      "Navisworks",
      "Power BI",
    ],
    stats: [
      { value: "150+", label: "4D Projects" },
      { value: "£500M+", label: "Programme Value Managed" },
      { value: "22%", label: "Avg. Programme Saving" },
      { value: "Real-time", label: "Cost Forecast Updates" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 6,
    title: "Scan to BIM",
    category: "Modeling",
    shortDesc:
      "Point cloud capture and processing to produce accurate as-built BIM models for renovation, retrofit, and heritage projects. From laser scan data to intelligent Revit models.",
    heroImage:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&h=380&fit=crop&auto=format",
    tags: ["Point Cloud", "As-Built", "Renovation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M8 8L16 16M40 8L32 16M8 40L16 32M40 40L32 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>
    ),
    overview:
      "Existing buildings rarely match their original drawings. VR4BIM's Scan to BIM service captures the true as-built condition using terrestrial laser scanning and drone photogrammetry, then processes the point cloud data into accurate, intelligent Revit models.\n\nOur as-built models are used for renovation design, retrofit engineering, historic preservation, and FM baseline surveys — giving every project team a verified, dimensionally accurate digital starting point.",
    benefits: [
      {
        title: "Millimetre Accuracy",
        body: "Laser scanning achieves ±2mm accuracy, eliminating the risk of design work based on inaccurate drawings.",
      },
      {
        title: "No Site Disruption",
        body: "Scanning captures the full as-built condition in hours without interrupting building operations.",
      },
      {
        title: "Heritage Compliance",
        body: "Detailed as-built records support listed building consent applications and heritage asset management.",
      },
      {
        title: "Renovation Design Base",
        body: "Accurate existing conditions model eliminates design assumption errors before refurbishment begins.",
      },
      {
        title: "Retrofit Engineering",
        body: "Structural modifications, M&E upgrades, and facade retrofits designed against verified geometry.",
      },
      {
        title: "FM Baseline",
        body: "As-built model provides the accurate spatial baseline for facilities management and space planning.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey Planning",
        body: "Scan positions, target placement, and access requirements are planned to achieve full coverage.",
      },
      {
        step: 2,
        title: "Laser Scanning",
        body: "Terrestrial LiDAR scanners capture the building at ±2mm accuracy across all required areas.",
      },
      {
        step: 3,
        title: "Point Cloud Registration",
        body: "Individual scan positions are registered into a single unified, geo-referenced point cloud.",
      },
      {
        step: 4,
        title: "Point Cloud Cleaning",
        body: "Noise, artefacts, and temporary objects are removed to produce a clean, usable dataset.",
      },
      {
        step: 5,
        title: "BIM Modelling",
        body: "Revit model elements are traced from the point cloud to the agreed LOD and element scope.",
      },
      {
        step: 6,
        title: "QA & Delivery",
        body: "Model accuracy is verified against the point cloud and delivered with deviation reports.",
      },
    ],
    tools: [
      "Leica RTC360",
      "Faro Focus",
      "Autodesk ReCap",
      "Revit",
      "CloudCompare",
      "Cyclone Register 360",
    ],
    stats: [
      { value: "±2mm", label: "Scan Accuracy" },
      { value: "500+", label: "Scans Completed" },
      { value: "8hr", label: "Typical Site Capture" },
      { value: "LOD 300", label: "Standard Delivery Level" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 7,
    title: "Quantity Takeoffs & Cost Estimation",
    category: "Data",
    shortDesc:
      "Automated quantity extraction directly from BIM models to produce accurate, auditable bills of quantities and cost estimates that integrate with project procurement workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=380&fit=crop&auto=format",
    tags: ["BOQ", "Estimation", "Procurement"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="8"
          y="6"
          width="32"
          height="36"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 16H32M16 24H32M16 32H24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    overview:
      "BIM-based quantity takeoff replaces manual measurement with automated extraction — producing quantities that are faster, more accurate, and fully auditable back to the 3D model. VR4BIM's QTO service delivers bills of quantities, elemental cost plans, and procurement schedules directly from coordinated Revit models.\n\nQuantities update automatically as design evolves, ensuring your cost plan always reflects the current design intent — not last month's issued drawings.",
    benefits: [
      {
        title: "Automated Extraction",
        body: "Quantities extracted directly from model parameters — no manual measurement, no counting errors.",
      },
      {
        title: "Design-Stage Cost Control",
        body: "Elemental cost plans generated at RIBA Stage 2–4 allow early identification of budget risks.",
      },
      {
        title: "Auditable Back to Model",
        body: "Every line item in the BOQ is traceable to a specific model element — full transparency.",
      },
      {
        title: "Procurement Support",
        body: "Trade package quantities produced directly from the model for accurate subcontractor tendering.",
      },
      {
        title: "Live Design Updates",
        body: "As design changes, quantities update automatically — no re-measurement, no manual reconciliation.",
      },
      {
        title: "NRM Compliant",
        body: "BOQ structured to RICS NRM 1, 2, and 3 as required for each project stage.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Model Audit",
        body: "BIM model is reviewed for quantity-generating completeness — elements, parameters, and material assignments.",
      },
      {
        step: 2,
        title: "QTO Setup",
        body: "Extraction rules, classification structure, and output format are agreed with the cost manager.",
      },
      {
        step: 3,
        title: "Quantity Extraction",
        body: "Model quantities are extracted using Revit schedules, Dynamo scripts, or specialist QTO tools.",
      },
      {
        step: 4,
        title: "Cost Rate Application",
        body: "Unit rates from BCIS or project-specific data are applied to produce elemental cost estimates.",
      },
      {
        step: 5,
        title: "Review & Reconciliation",
        body: "Quantities are reviewed against manual checks and any model gaps are identified and addressed.",
      },
      {
        step: 6,
        title: "BOQ Issue",
        body: "Final BOQ and cost plan issued in agreed format — Excel, PDF, or integrated into cost management software.",
      },
    ],
    tools: [
      "Autodesk Revit",
      "CostX",
      "Dynamo",
      "BCIS Online",
      "Excel / Power BI",
      "Causeway Estimating",
    ],
    stats: [
      { value: "£1B+", label: "Quantities Processed" },
      { value: "99.2%", label: "Measurement Accuracy" },
      { value: "10×", label: "Faster than Manual" },
      { value: "NRM 1–3", label: "Compliance Standards" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 8,
    title: "BIM Consulting & Advisory",
    category: "Consulting",
    shortDesc:
      "Strategic BIM implementation roadmaps, EIR/BEP development, ISO 19650 compliance frameworks, and staff training tailored to your organisation's maturity level.",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=380&fit=crop&auto=format",
    tags: ["ISO 19650", "Strategy", "Training"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M8 42C8 34.268 15.163 28 24 28C32.837 28 40 34.268 40 42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    overview:
      "Implementing BIM effectively requires more than software — it demands process change, standards alignment, and people development. VR4BIM's advisory team guides clients, contractors, and asset owners through every stage of BIM adoption, from initial maturity assessment to full ISO 19650 compliance.\n\nWe develop Employer's Information Requirements, BIM Execution Plans, and Common Data Environment strategies that are proportionate to each project's complexity and the organisation's existing capabilities.",
    benefits: [
      {
        title: "Maturity Assessment",
        body: "Baseline BIM capability assessment identifies gaps and establishes a realistic improvement roadmap.",
      },
      {
        title: "EIR Development",
        body: "Employer's Information Requirements written to be proportionate, enforceable, and delivery-focused.",
      },
      {
        title: "ISO 19650 Alignment",
        body: "Full project information management framework aligned to ISO 19650-1, 2, and 3.",
      },
      {
        title: "CDE Strategy",
        body: "Common Data Environment selection, configuration, and workflow design for the project team.",
      },
      {
        title: "Staff Training",
        body: "Tailored workshops for design teams, contractors, and clients covering tools, processes, and standards.",
      },
      {
        title: "Ongoing Support",
        body: "Embedded advisory support available throughout the project lifecycle — not just at kick-off.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Maturity Assessment",
        body: "We assess current BIM capability across people, process, technology, and data dimensions.",
      },
      {
        step: 2,
        title: "Strategy Workshop",
        body: "Facilitated workshop with senior stakeholders to agree BIM ambition, scope, and timeline.",
      },
      {
        step: 3,
        title: "Framework Development",
        body: "EIR, BEP templates, LOD matrix, and naming conventions are developed for the project context.",
      },
      {
        step: 4,
        title: "CDE Setup",
        body: "Common Data Environment is configured with folder structures, permission levels, and approval workflows.",
      },
      {
        step: 5,
        title: "Team Training",
        body: "Workshops delivered to design, construction, and client teams covering standards and tools.",
      },
      {
        step: 6,
        title: "Compliance Audit",
        body: "Periodic audits verify that project teams are delivering against the agreed BIM framework.",
      },
    ],
    tools: [
      "ISO 19650",
      "ACC / BIM 360",
      "Asite",
      "4Projects",
      "Power BI",
      "Microsoft 365",
    ],
    stats: [
      { value: "80+", label: "Clients Advised" },
      { value: "ISO 19650", label: "Compliance Framework" },
      { value: "1,200+", label: "Professionals Trained" },
      { value: "15+", label: "Countries Reached" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop&auto=format",
    ],
  },
  {
    id: 9,
    title: "Facilities Management BIM",
    category: "Data",
    shortDesc:
      "Handover-ready BIM data sets structured for FM systems. Asset data, maintenance schedules, and COBie-compliant deliverables that maximise the value of your digital twin post-construction.",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=800&fit=crop&auto=format",
    listImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=380&fit=crop&auto=format",
    tags: ["Digital Twin", "COBie", "Asset Management"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path
          d="M6 42V20L24 8L42 20V42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect
          x="18"
          y="28"
          width="12"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    overview:
      "A BIM model is only as valuable as the data it carries at handover. VR4BIM structures FM BIM deliverables so that asset data, maintenance schedules, warranty records, and spatial information transfer seamlessly into CAFM and CMMS platforms — enabling building operators to manage assets from day one.\n\nWe produce COBie-compliant data drops at each design and construction gateway, ensuring that FM data is captured progressively rather than scrambled at handover.",
    benefits: [
      {
        title: "COBie Compliance",
        body: "Data structured to COBie UK 2012 and COBie 2.4 for direct import into leading CAFM platforms.",
      },
      {
        title: "Progressive Data Capture",
        body: "Asset data is populated at each project gateway — not just at handover — reducing data quality risk.",
      },
      {
        title: "CAFM Integration",
        body: "Tested export workflows to Archibus, Planon, Concept Evolution, and leading IWMS platforms.",
      },
      {
        title: "Spatial FM Data",
        body: "Room data sheets, space classifications, and zone hierarchies maintained in the model for space management.",
      },
      {
        title: "Maintenance Schedules",
        body: "Asset maintenance frequencies and responsibilities loaded as model parameters for FM system import.",
      },
      {
        title: "Digital Twin Foundation",
        body: "FM BIM deliverable provides the verified spatial and asset baseline for a live digital twin.",
      },
    ],
    process: [
      {
        step: 1,
        title: "FM Data Requirements",
        body: "CAFM platform and FM team data requirements are mapped to BIM element parameters.",
      },
      {
        step: 2,
        title: "Data Matrix Setup",
        body: "Asset data matrix defines which elements carry which parameters at each LOD stage.",
      },
      {
        step: 3,
        title: "Parameter Population",
        body: "Asset attributes — manufacturer, model, serial number, warranty — populated by trade contractors during construction.",
      },
      {
        step: 4,
        title: "COBie Export",
        body: "Model data exported to COBie spreadsheet at each gateway and validated against the data matrix.",
      },
      {
        step: 5,
        title: "CAFM Import Test",
        body: "COBie data is test-imported into the live CAFM platform and validated with the FM team.",
      },
      {
        step: 6,
        title: "Handover & Training",
        body: "Final data set delivered and FM team trained on navigating the as-built model and data.",
      },
    ],
    tools: [
      "Autodesk Revit",
      "COBie Toolkit",
      "Archibus",
      "Planon",
      "IFC Exporter",
      "Power BI",
    ],
    stats: [
      { value: "60+", label: "FM Handovers" },
      { value: "100%", label: "COBie Compliance Rate" },
      { value: "40%", label: "FM Onboarding Time Saved" },
      { value: "5+ years", label: "Avg. Client Retention" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format",
    ],
  },
]

// ─── Shared components ────────────────────────────────────────────────────────

function Logo({
  dark = false,
  large = false,
}: {
  dark?: boolean
  large?: boolean
}) {
  return (
    <div className={`flex flex-col leading-none ${large ? "gap-1.5" : ""}`}>
      <div className="flex items-start gap-0.5">
        <span
          className={`${large ? "text-[36px]" : "text-[22px]"} font-extrabold tracking-tight`}
          style={{
            fontFamily: "Barlow, system-ui, sans-serif",
            color: dark ? "#ffffff" : DARK,
          }}
        >
          VR4BIM
        </span>
        <span
          className={`${large ? "text-[14px] mt-1" : "text-[10px] mt-0.5"} font-bold`}
          style={{ color: RED }}
        >
          ✦
        </span>
      </div>
      <span
        className={`${large ? "text-[10px]" : "text-[8px]"} tracking-widest uppercase`}
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: dark ? "rgba(255,255,255,0.45)" : "#888",
          letterSpacing: "0.12em",
        }}
      >
        Virtual Reality For Building Information Modeling
      </span>
    </div>
  )
}

function Header({
  onLogoClick,
  activePage,
}: {
  onLogoClick: () => void
  activePage: "listing" | "detail"
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={onLogoClick} className="shrink-0">
          <Logo />
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={link.label === "Services" ? onLogoClick : undefined}
              className={`px-3 py-2 text-[13px] font-medium transition-colors flex items-center gap-0.5 ${
                link.label === "Services" && activePage !== "listing"
                  ? "text-[#333] hover:text-[#d81f26]"
                  : link.label === "Services"
                    ? "text-[#d81f26]"
                    : "text-[#333] hover:text-[#d81f26]"
              }`}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  className="w-3 h-3 opacity-60"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </nav>
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <span
              key={l.label}
              className="py-2 text-[14px] font-medium text-gray-700"
            >
              {l.label}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1f232b] text-white pt-16 md:pt-24 pb-10"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row: logo + newsletter / socials */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
          <Logo dark large />
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <button className="flex items-center gap-3 h-12 md:h-[60px] px-5 md:px-7 border border-white/25 rounded-full text-[14px] md:text-[16px] font-medium text-white hover:border-white hover:bg-white/5 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                <rect
                  x="1"
                  y="3"
                  width="14"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M1 5.5L8 9.5L15 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Subscribe to our newsletter
            </button>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Middle row: tagline + links + back to top */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between mt-16 lg:mt-20 pb-16 lg:pb-20">
          <p className="max-w-[520px] text-[28px] md:text-[36px] font-normal leading-[1.3] text-white">
            Design and Engineering Digital Solutions for a{" "}
            <span style={{ color: "#e5343f" }}>responsible construction</span>{" "}
            practice.
          </p>
          <div className="flex items-end gap-12 sm:gap-24 lg:gap-28 lg:pt-2">
            <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 lg:gap-x-28 gap-y-5 self-start">
              {[FOOTER_COL1, FOOTER_COL2].map((col, ci) => (
                <ul key={ci} className="flex flex-col gap-5">
                  {col.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] font-medium text-white hover:text-[#e5343f] transition-colors whitespace-nowrap"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="hidden sm:flex shrink-0 w-[60px] h-[60px] rounded-full border border-white/40 items-center justify-center text-white hover:border-white hover:bg-white/5 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 13V3M4.5 6.5L8 3L11.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-12">
          <p className="text-[14px] md:text-[16px] text-white/75">
            © VR4BIM {new Date().getFullYear()}. All Rights Reserved
            <span className="mx-2">|</span>
            Powered By Phitany, Web Designing Company Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}

function CtaBanner() {
  return (
    <section className="bg-white px-6 py-6">
      <div className="mx-auto flex min-h-[350px] max-w-7xl items-center justify-center rounded-[10px] bg-[#dc2626] px-6 py-14 sm:px-12 lg:px-[120px] lg:py-[72px]">
        <div className="flex w-full max-w-[760px] flex-col items-center gap-6 text-center">
          <h2
            className="text-[32px] font-extrabold leading-normal text-white sm:text-[42px]"
            style={{ fontFamily: "'Inter:Extra Bold', sans-serif" }}
          >
            Ready to Transform Your Next Project?
          </h2>
          <p
            className="text-[16px] font-normal leading-[1.6] text-white"
            style={{ fontFamily: "'Inter:Regular', sans-serif" }}
          >
            Partner with VR4BIM to eliminate clashes, reduce onsite overhead,
            and accelerate building delivery with best-in-class virtual
            construction.
          </p>
          <a
            href="#contact"
            className="rounded-[6px] bg-white px-7 py-3.5 text-[14px] font-bold leading-normal text-[#dc2626] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            style={{ fontFamily: "'Inter:Bold', sans-serif" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Service listing page ─────────────────────────────────────────────────────

const FILTERS = ["All", "Modeling", "Visualization", "Consulting", "Data"]
const FILTER_IDS: Record<string, number[]> = {
  All: SERVICES.map((s) => s.id),
  Modeling: [1, 4, 6],
  Visualization: [2, 3],
  Consulting: [8, 5],
  Data: [7, 9],
}

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: Service
  index: number
  onClick: () => void
}) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 110}ms` } as React.CSSProperties}
      className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute bottom-0 left-0 z-10 h-0.5 w-full bg-[#d81f26] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
      <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
        <img
          src={service.listImage}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 text-[#d81f26] mt-0.5 group-hover:scale-115 group-hover:-rotate-6 transition-transform duration-300">
            {service.icon}
          </div>
          <h3
            className="text-[17px] font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#d81f26] transition-colors duration-300"
            style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
          >
            {service.title}
          </h3>
        </div>
        <p
          className="text-[14px] text-[#555] leading-relaxed mb-5"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {service.shortDesc}
        </p>
        <div className="mb-5">
          <span
            className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase bg-gray-50 border border-gray-200 text-gray-500"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {service.category}
          </span>
        </div>
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#d81f26] group-hover:gap-3 transition-all"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Learn More
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}

function ListingPage({ onSelect }: { onSelect: (s: Service) => void }) {
  const [activeFilter, setActiveFilter] = useState("All")
  const visible = SERVICES.filter((s) =>
    FILTER_IDS[activeFilter].includes(s.id),
  )

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative bg-white border-b border-gray-100 py-16 overflow-hidden">
        <div
          className="absolute right-0 top-0 w-64 h-full opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#1a1a1a 0px,#1a1a1a 1px,transparent 0,transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-0 bottom-0 w-1 h-full bg-[#d81f26] origin-bottom animate-[grow-y_1s_cubic-bezier(0.22,1,0.36,1)_backwards]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                className="animate-fade-up text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d81f26] mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                What We Do
              </p>
              <h1
                className="animate-fade-up text-[42px] md:text-[56px] font-bold text-[#1a1a1a] leading-none tracking-tight"
                style={
                  {
                    fontFamily: "Barlow, system-ui, sans-serif",
                    "--delay": "120ms",
                  } as React.CSSProperties
                }
              >
                Our Services
              </h1>
              <p
                className="animate-fade-up mt-4 text-[16px] text-[#666] max-w-xl leading-relaxed"
                style={
                  {
                    fontFamily: "Inter, system-ui, sans-serif",
                    "--delay": "240ms",
                  } as React.CSSProperties
                }
              >
                Supporting all-round construction projects right from vision to
                reality with expertise and efficiency.
              </p>
            </div>
            <div className="flex gap-8 shrink-0">
              {[
                ["200+", "Projects Delivered"],
                ["12+", "Years Experience"],
                ["40+", "BIM Specialists"],
              ].map(([val, lbl], i) => (
                <div
                  key={lbl}
                  className="group animate-fade-up text-center cursor-default"
                  style={{ "--delay": `${360 + i * 120}ms` } as React.CSSProperties}
                >
                  <div
                    className="text-[28px] font-bold text-[#1a1a1a] group-hover:text-[#d81f26] group-hover:scale-110 transition-all duration-300"
                    style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-[11px] text-[#888] tracking-wide uppercase mt-0.5"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1 rounded-full text-[12px] font-semibold transition-all ${
                activeFilter === f
                  ? "bg-[#d81f26] text-white"
                  : "text-[#555] hover:text-[#1a1a1a] hover:bg-gray-100"
              }`}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((s, i) => (
            <ServiceCard
              key={s.id}
              service={s}
              index={i}
              onClick={() => onSelect(s)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-[32px] font-bold text-white leading-snug" style={{ fontFamily: 'Barlow, system-ui, sans-serif' }}>Ready to start your BIM journey?</h2>
            <p className="text-[14px] text-white/60 mt-2 max-w-md" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Talk to our team about how VR4BIM can deliver your next project with precision, clarity, and confidence.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="#" className="px-6 py-3 bg-[#d81f26] text-white text-[13px] font-semibold hover:bg-[#bf1a21] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Get in Touch</a>
            <a href="#" className="px-6 py-3 border border-white/30 text-white text-[13px] font-semibold hover:border-white transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>View Projects</a>
          </div>
        </div>
      </section> */}
    </main>
  )
}

// ─── Service detail page ──────────────────────────────────────────────────────

function DetailPage({
  service,
  onBack,
  onSelect,
}: {
  service: Service
  onBack: () => void
  onSelect: (s: Service) => void
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "process" | "tools">(
    "overview",
  )
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <main className="flex-1 bg-white">
      {/* ── Hero ── */}
      <div className="relative h-[480px] md:h-[560px] bg-gray-900 overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover opacity-50"
        />
        {/* diagonal accent strip */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.55) 55%, transparent 100%)",
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
              <span className="text-white/90">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <span
                className="px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase text-white border border-white/30 backdrop-blur-sm"
                style={{ background: "rgba(216,31,38,0.85)" }}
              >
                {service.category}
              </span>
            </div>
            <h1
              className="text-[38px] md:text-[54px] font-bold text-white leading-tight max-w-2xl"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              {service.title}
            </h1>
            <p
              className="mt-3 text-[15px] text-white/70 max-w-xl leading-relaxed"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {service.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* ── Stat strip ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {service.stats.map((stat) => (
              <div key={stat.label} className="py-6 px-6 first:pl-0">
                <div
                  className="text-[30px] font-bold"
                  style={{
                    fontFamily: "Barlow, system-ui, sans-serif",
                    color: RED,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[12px] text-gray-500 mt-0.5 tracking-wide uppercase"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body: two-column layout ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
        {/* Left: main content */}
        <div>
          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-200 mb-8">
            {(["overview", "process", "tools"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-[13px] font-semibold capitalize border-b-2 -mb-px transition-colors ${
                  activeTab === tab
                    ? "border-[#d81f26] text-[#d81f26]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {tab === "overview"
                  ? "Overview & Benefits"
                  : tab === "process"
                    ? "Our Process"
                    : "Tools & Tech"}
              </button>
            ))}
          </div>

          {/* Tab: Overview */}
          {activeTab === "overview" && (
            <div>
              <div className="prose prose-gray max-w-none mb-10">
                {service.overview.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-gray-600 leading-relaxed mb-5"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <h2
                className="text-[22px] font-bold text-[#1a1a1a] mb-6"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex gap-3 p-4 bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: RED }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 4"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-[13px] font-semibold text-[#1a1a1a] mb-0.5"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {b.title}
                      </div>
                      <div
                        className="text-[13px] text-gray-500 leading-relaxed"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {b.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Process */}
          {activeTab === "process" && (
            <div>
              <p
                className="text-[15px] text-gray-500 mb-8 max-w-lg"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Our structured delivery process ensures consistent, high-quality
                outcomes on every engagement.
              </p>
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gray-200" />
                <div className="flex flex-col gap-0">
                  {service.process.map((step, idx) => (
                    <div
                      key={step.step}
                      className="flex gap-5 relative pb-8 last:pb-0"
                    >
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white z-10"
                        style={{
                          background: idx === 0 ? RED : "#1a1a1a",
                          fontFamily: "Barlow, system-ui, sans-serif",
                        }}
                      >
                        {step.step}
                      </div>
                      <div className="pt-2">
                        <div
                          className="text-[15px] font-semibold text-[#1a1a1a] mb-1"
                          style={{
                            fontFamily: "Barlow, system-ui, sans-serif",
                          }}
                        >
                          {step.title}
                        </div>
                        <div
                          className="text-[14px] text-gray-500 leading-relaxed"
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          {step.body}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Tools */}
          {activeTab === "tools" && (
            <div>
              <p
                className="text-[15px] text-gray-500 mb-8 max-w-lg"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We use industry-leading software and platforms to deliver every
                engagement to the highest standard.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {service.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 p-4 border border-gray-200 hover:border-gray-400 transition-colors group"
                  >
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                      style={{ background: "#f5f5f5" }}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ color: RED }}
                      >
                        <rect
                          x="2"
                          y="2"
                          width="12"
                          height="12"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M5 8h6M8 5v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-[13px] font-medium text-[#1a1a1a] leading-snug"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {tool}
                    </span>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <h2
                className="text-[22px] font-bold text-[#1a1a1a] mt-12 mb-6"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden bg-gray-100"
                  >
                    <img
                      src={img}
                      alt={`${service.title} project ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery always shown below overview */}
          {activeTab === "overview" && (
            <div className="mt-12">
              <h2
                className="text-[22px] font-bold text-[#1a1a1a] mb-6"
                style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
              >
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden bg-gray-100"
                  >
                    <img
                      src={img}
                      alt={`${service.title} project ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: sticky sidebar */}
        <aside className="lg:sticky lg:top-28 self-start flex flex-col gap-6">
          {/* Enquiry card */}
          <div className="bg-[#1a1a1a] text-white p-6">
            <div className="w-8 h-0.5 mb-4" style={{ background: RED }} />
            <h3
              className="text-[18px] font-bold mb-2"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Discuss this service
            </h3>
            <p
              className="text-[13px] text-white/60 mb-5 leading-relaxed"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Tell us about your project and we'll respond within one business
              day.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[13px] px-3 py-2.5 outline-none focus:border-white/60 transition-colors"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[13px] px-3 py-2.5 outline-none focus:border-white/60 transition-colors"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
              <textarea
                rows={3}
                placeholder="Brief project description"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[13px] px-3 py-2.5 outline-none focus:border-white/60 transition-colors resize-none"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
              <button
                className="py-2.5 text-[13px] font-semibold text-white transition-colors"
                style={{
                  background: RED,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>

          {/* Service quick facts */}
          <div className="border border-gray-100 p-6">
            <h4
              className="text-[12px] font-semibold tracking-widest uppercase text-gray-400 mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Service Summary
            </h4>
            <dl className="flex flex-col gap-3">
              {[
                ["Category", service.category],
                ["Delivery", "Remote & On-site"],
                ["Standard", "ISO 19650 Aligned"],
                ["Format", "Revit / IFC / COBie"],
              ].map(([term, val]) => (
                <div key={term} className="flex justify-between gap-4">
                  <dt
                    className="text-[12px] text-gray-400 shrink-0"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {term}
                  </dt>
                  <dd
                    className="text-[12px] font-medium text-[#1a1a1a] text-right"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {val}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Back to services */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[13px] font-semibold text-[#d81f26] hover:gap-3 transition-all"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to All Services
          </button>
        </aside>
      </div>

      {/* ── Related services ── */}
      <section className="border-t border-gray-100 py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-[26px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Related Services
            </h2>
            <button
              onClick={onBack}
              className="text-[13px] font-semibold text-[#d81f26] flex items-center gap-1 hover:gap-2 transition-all"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              View All
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((s) => (
              <article
                key={s.id}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  onSelect(s)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={s.listImage}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 text-[#d81f26] mt-0.5 scale-75 origin-top-left">
                      {s.icon}
                    </div>
                    <h3
                      className="text-[15px] font-semibold text-[#1a1a1a] leading-snug"
                      style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <button
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#d81f26]"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Learn More{" "}
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2
              className="text-[32px] font-bold text-white leading-snug"
              style={{ fontFamily: "Barlow, system-ui, sans-serif" }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-[14px] text-white/60 mt-2 max-w-md"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Our team is ready to scope your project and provide a detailed
              proposal within 48 hours.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="#"
              className="px-6 py-3 text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
              style={{
                background: RED,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Request a Proposal
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-white/30 text-white text-[13px] font-semibold hover:border-white transition-colors"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Root app ─────────────────────────────────────────────────────────────────

// Slug-based routes, resolved relative to Vite's base URL so deployed
// sub-path builds keep working.
const ROUTES = {
  listing: "",
  bim: "bim-services",
  architectural: "architectural-bim-services",
} as const

type Route = keyof typeof ROUTES

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "")

function routeFromPath(pathname: string): Route {
  const slug = pathname
    .slice(pathname.startsWith(BASE) ? BASE.length : 0)
    .replace(/^\/+|\/+$/g, "")
  const match = (Object.keys(ROUTES) as Route[]).find((r) => ROUTES[r] === slug)
  return match ?? "listing"
}

function useRoute() {
  const [route, setRoute] = useState<Route>(() =>
    routeFromPath(window.location.pathname),
  )

  useEffect(() => {
    const onPopState = () => setRoute(routeFromPath(window.location.pathname))
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = (to: Route) => {
    window.history.pushState(null, "", `${BASE}/${ROUTES[to]}`)
    setRoute(to)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return [route, navigate] as const
}

export default function App() {
  const [route, navigate] = useRoute()
  useScrollReveal()

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Header
        onLogoClick={() => navigate("listing")}
        activePage={route === "listing" ? "listing" : "detail"}
      />
      {route === "architectural" ? (
        <ArchitecturalBimPage
          onBackToServices={() => navigate("listing")}
          onBackToBim={() => navigate("bim")}
        />
      ) : route === "bim" ? (
        <ServiceDetailPage
          onBack={() => navigate("listing")}
          onOpenArchitectural={() => navigate("architectural")}
        />
      ) : (
        <ListingPage onSelect={() => navigate("bim")} />
      )}
      <CtaBanner />
      <Footer />
      <a
        href="#contact"
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 flex items-center justify-center w-12 py-5 rounded-r-lg bg-[#e5143a] text-white text-[16px] font-bold shadow-lg hover:bg-[#c8102f] transition-colors [writing-mode:vertical-rl] rotate-180"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        Get a Quote
      </a>
    </div>
  )
}
