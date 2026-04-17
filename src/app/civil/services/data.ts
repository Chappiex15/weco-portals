export interface Service {
  id: string;
  title: string;
  icon: string;
  desc: string;
  subservices: string[];
  tools: string[];
}

export const servicesData: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design Services",
    icon: "🏗️",
    desc: "Concept and planning stage work seamlessly translated into digital models.",
    subservices: ["Concept design development", "Architectural drafting (2D drawings)", "3D architectural modeling", "Exterior and interior renderings", "Walkthrough animations", "Space planning", "Building layout planning", "Facade design", "Material specification documentation", "Design revisions and redlining"],
    tools: ["AutoCAD", "SketchUp", "Autodesk Revit"]
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering Services",
    icon: "🧱",
    desc: "Robust engineering calculations and structural drawings for massive layouts.",
    subservices: ["Structural design calculations", "Foundation design", "Reinforcement detailing", "Steel structure design", "Load analysis", "Structural shop drawings", "Structural modeling", "Retaining wall design", "Seismic analysis", "Structural audit and optimization"],
    tools: []
  },
  {
    id: "mep-engineering",
    title: "MEP Engineering",
    icon: "⚙️",
    desc: "Mechanical, Electrical, and Plumbing integrated systems design.",
    subservices: ["HVAC system design", "Ventilation design", "Cooling load calculations", "Electrical layout drawings", "Lighting design", "Power distribution design", "Electrical panel schedules", "Water supply system design", "Drainage system planning", "Firefighting system layouts"],
    tools: ["Autodesk Revit MEP", "AutoCAD MEP"]
  },
  {
    id: "bim-services",
    title: "BIM Services",
    icon: "🏢",
    desc: "Building Information Modeling, essential for Saudi mega-projects.",
    subservices: ["BIM modeling", "BIM coordination", "Clash detection", "BIM 4D scheduling", "BIM 5D cost estimation", "BIM documentation", "Scan-to-BIM", "LOD 100–500 modeling"],
    tools: ["Autodesk Navisworks", "Autodesk Revit"]
  },
  {
    id: "construction-documentation",
    title: "Construction Documentation",
    icon: "📄",
    desc: "Precision records, shop drawings, and technical documentation updates.",
    subservices: ["Shop drawings", "As-built drawings", "Construction drawings", "Redline updates", "CAD conversions (PDF → CAD)", "Drawing revisions", "Technical documentation"],
    tools: []
  },
  {
    id: "quantity-surveying",
    title: "Quantity Surveying & Cost Estimation",
    icon: "💰",
    desc: "Clear budget forecasting and value engineering.",
    subservices: ["Quantity takeoff", "BOQ preparation (Bill of Quantities)", "Cost estimation", "Tender pricing support", "Cost analysis", "Budget forecasting", "Material quantity calculations", "Value engineering"],
    tools: ["PlanSwift", "Bluebeam Revu"]
  },
  {
    id: "project-planning",
    title: "Project Planning & Scheduling",
    icon: "📅",
    desc: "Optimized timelines and critical path analysis for smooth execution.",
    subservices: ["Project scheduling", "Construction timeline planning", "Resource allocation", "Critical path analysis", "Delay analysis", "Project progress tracking", "Risk analysis"],
    tools: ["Microsoft Project", "Primavera P6"]
  },
  {
    id: "3d-visualization",
    title: "3D Visualization & Marketing",
    icon: "🎥",
    desc: "High-end marketing content and renders for stakeholders.",
    subservices: ["3D building renders", "Interior visualizations", "Walkthrough animations", "VR presentations", "Project promotional videos", "Architectural marketing graphics"],
    tools: ["Lumion", "3ds Max"]
  },
  {
    id: "gis-land-survey",
    title: "GIS & Land Survey Processing",
    icon: "🌍",
    desc: "Accurate terrain modeling and site mapping.",
    subservices: ["GIS mapping", "Terrain modeling", "Satellite mapping", "Land survey data processing", "Site mapping", "Topographic mapping"],
    tools: ["ArcGIS"]
  },
  {
    id: "construction-it",
    title: "Construction IT & Software",
    icon: "💻",
    desc: "Digital infrastructure setup for construction management.",
    subservices: ["Construction management software setup", "ERP systems for contractors", "Website development for construction companies", "Project dashboards", "Document management systems", "BIM cloud integration"],
    tools: ["Procore"]
  },
  {
    id: "administrative-back-office",
    title: "Administrative / Back Office",
    icon: "📊",
    desc: "Reliable data entry, reporting, and contractor document control.",
    subservices: ["Data entry", "Document control", "Construction report preparation", "Invoice processing", "Vendor database management", "Contract documentation"],
    tools: []
  },
  {
    id: "procurement-support",
    title: "Procurement Support",
    icon: "📦",
    desc: "Strategic vendor comparison and material specifications.",
    subservices: ["Supplier research", "RFQ preparation", "Vendor comparison", "Procurement documentation", "Material specification sheets"],
    tools: []
  },
  {
    id: "compliance-documentation",
    title: "Compliance & Documentation",
    icon: "⚖️",
    desc: "Ensuring regulatory, safety, and ISO compliance across projects.",
    subservices: ["Safety documentation", "Environmental compliance reports", "Quality assurance documentation", "ISO documentation", "Construction permit documentation"],
    tools: []
  },
  {
    id: "marketing-digital",
    title: "Marketing & Digital Presence",
    icon: "🌐",
    desc: "Corporate branding and SEO explicitly for construction firms.",
    subservices: ["Website development", "SEO for construction companies", "Project portfolio websites", "Social media marketing", "Drone video editing for projects", "Brochure design"],
    tools: []
  },
  {
    id: "ai-automation-data",
    title: "AI / Automation / Data Services",
    icon: "🤖",
    desc: "Predictive modeling and automated scheduling for the modern era.",
    subservices: ["Construction analytics dashboards", "AI project prediction models", "Cost forecasting models", "Construction data analysis", "Automation tools for scheduling"],
    tools: []
  }
];
