export const siteConfig = {
  name: "RAS International",
  tagline: "Deeply Rooted in Growing Partnerships with Purpose",
  description:
    "We don't just advise — we do the heavy lifting. RAS International delivers turnkey management, revenue growth, and strategic governance for non-profit trade associations.",
  email: "sam@ras-int.org",
  phone: "(253) 314-7568",
  hours: "Mon–Fri 8:30–5:00 PST",
  address: "14701 Kay Greseth Ave SE, Olalla, WA 98359",
  url: "https://ras-int.org",
} as const;

export const stats = [
  { value: "30", label: "Years Experience" },
  { value: "4", label: "Associations Managed" },
  { value: "500+", label: "Members Served" },
] as const;

export const aboutCopy =
  "RAS focuses on business development for non-profit trade associations. We offer a full suite of services from operational and fiscal management, membership growth, sponsorship sales to organizing live events from large scale trade shows to high-level leadership retreats and everything in between. We excel in finding new revenue growth opportunities and putting action plans in place. We don't just advise our association clients, we do the heavy lifting for them! We offer a turnkey management program unlike any other in the non-profit world — that's because our leaders are \"deeply rooted\" in relationship building. Our governance capabilities cannot be beat. On staff is an expert in ethics and legislative actions. Our founder is a regular at the negotiating table of many intensive government affairs and regulatory matters both at the local level as well as the national one.";

export const values = [
  {
    title: "Relationship-First",
    description:
      "We build lasting partnerships rooted in trust, not transactions. Every relationship matters.",
  },
  {
    title: "Governance Experts",
    description:
      "Ethics, bylaws, and legislative guidance — we bring best-in-class governance to every association we serve.",
  },
  {
    title: "Revenue Focused",
    description:
      "We identify and execute on new revenue streams — from sponsorships to membership growth strategies.",
  },
  {
    title: "Full Execution",
    description:
      "We don't hand over a plan and walk away. We do the heavy lifting so your board can focus on leadership.",
  },
] as const;

export type Service = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    icon: "Layers",
    title: "Operations & Fiscal Management",
    description:
      "End-to-end operational leadership including budgeting, financial reporting, compliance, and day-to-day association management with full transparency.",
  },
  {
    number: "02",
    icon: "Users",
    title: "Membership Growth",
    description:
      "Strategic campaigns to attract, retain, and engage members. We build value propositions that make membership indispensable for industry professionals.",
  },
  {
    number: "03",
    icon: "TrendingUp",
    title: "Sponsorship & Revenue",
    description:
      "From prospecting to fulfillment, we create compelling sponsorship packages and execute flawless marketing programs that deliver real ROI for partners.",
  },
  {
    number: "04",
    icon: "MapPin",
    title: "Events & Conferences",
    description:
      "Large-scale trade shows, leadership summits, awards galas, retreats, and networking events — expertly planned and executed from concept to completion.",
  },
  {
    number: "05",
    icon: "FileText",
    title: "Governance & Advocacy",
    description:
      "Expert guidance on ethics, bylaws, legislative affairs, and regulatory matters. We sit at the negotiating table on your behalf at local and national levels.",
  },
  {
    number: "06",
    icon: "Globe",
    title: "Branding & Digital",
    description:
      "Media centers, digital directories, newsletters, website management, and full brand identity — we create and manage your association's digital presence.",
  },
];

export type Association = {
  acronym: string;
  name: string;
  region: string;
  url: string;
  description: string;
  tags: string[];
};

export const associations: Association[] = [
  {
    acronym: "GCLA",
    name: "Greater California Livery Association",
    region: "California",
    url: "https://gcla.org",
    description:
      "The gold standard of transportation in California, representing duly licensed luxury ground transportation owners and operators statewide.",
    tags: ["Membership", "Events", "Advocacy", "Directory"],
  },
  {
    acronym: "FLA",
    name: "Florida Limousine Association",
    region: "Florida",
    url: "https://floridalimousine.com",
    description:
      "A membership-driven community of luxury transportation, charter, and shuttle service owners throughout Florida.",
    tags: ["Membership", "Events", "Advocacy", "Directory"],
  },
  {
    acronym: "GA-LTA",
    name: "Georgia Limousine & Transportation Association",
    region: "Georgia",
    url: "https://ga-lta.org",
    description:
      "Supporting the professional ground transportation community across the state of Georgia.",
    tags: ["Membership", "Events", "Advocacy"],
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We deep-dive into your association's current landscape — membership data, revenue streams, governance structure, and growth barriers — to build a clear baseline.",
  },
  {
    number: "02",
    title: "Strategic Vision Forward",
    description:
      "We build your Vision Forward plan — a clear roadmap focused on membership growth, brand elevation, sponsorship revenue, and community building through events and media.",
  },
  {
    number: "03",
    title: "Full-Scale Execution",
    description:
      "This is where we're different. We don't hand over a plan and walk away. Our team does the heavy lifting — managing operations, selling sponsorships, running events, and driving growth.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description:
      "We work hand-in-hand with your volunteer leadership. As your association grows, we continuously optimize operations, identify new revenue opportunities, and strengthen your brand.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The GCLA was a game-changer for my business. The networking opportunities and advocacy have given us a stronger voice in the industry.",
    author: "Christina Zanone",
    role: "Beau Wine Tours — GCLA Board Member",
  },
  {
    quote:
      "I am a huge believer in elevating this industry through education. The recent FLA Leadership Summit packed in a treasure trove of information.",
    author: "Theresa Callahan",
    role: "JAX Black Car Transportation — FLA Member",
  },
  {
    quote:
      "I see much value in an organized community of transportation operators. We are better when we are organized and speaking as one unified voice.",
    author: "Fernando Carlson",
    role: "Mundi Transportation — FLA Board Member",
  },
  {
    quote:
      "The camaraderie and support from the GCLA board and members have been invaluable. From securing fleet discounts to hosting workshops — this association has my back.",
    author: "Adrian Davis",
    role: "Five Star Limo — GCLA Board Member",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Approach", href: "#approach" },
] as const;

export const footerAssociationLinks = [
  { label: "GCLA", href: "https://gcla.org" },
  { label: "FLA", href: "https://floridalimousine.com" },
  { label: "GA-LTA", href: "https://ga-lta.org" },
  { label: "Platinum Safety Program", href: "https://platinumsafety.org" },
] as const;
