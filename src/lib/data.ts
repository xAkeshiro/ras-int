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
  { label: "Our Why", href: "/ourwhy" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Team", href: "/our-team" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Sara Eastwood-Richardson",
    role: "Founder & CEO",
    bio: "Sara has spent 25 years working with both charities and business trade associations. The name RAS comes from her children — Ryan, Alec, and Spencer. In her career, Sara has sold and managed over $100,000,000 in new event sponsorship sales while working as a media publisher, trade show organizer, and special event director. She managed a national non-profit business association for 19 years and has hosted fundraising events for charities including Make-A-Wish, Angel Flight, MADD, and St. Jude.",
  },
  {
    name: "Ryan McLean",
    role: "Chief Operating Officer",
    bio: "Ryan graduated with a degree in Business/Marketing from the University of Washington in 2019 and has taken the leading role as COO at RAS. He oversees client accounting services, HR, and office management, ensuring operations run smoothly across all managed associations.",
  },
  {
    name: "Julie",
    role: "Sales & Marketing Director",
    bio: "Julie has enjoyed a professional Sales and Marketing career for 20+ years with companies including Conde Naste Media, Prime Media, and Miramar Communications. She brings deep expertise in media sales and partnership development to the RAS team.",
  },
  {
    name: "Joan & Kim",
    role: "Strategic Partners — Cultivation Companies",
    bio: "Joan and Kim, founders of Cultivation Companies, are strategic partners of RAS International. With a combined 30+ years of event expertise, they support business development and marketing efforts across all managed associations.",
  },
];

export const ourWhyMission =
  "To leverage our expertise to increase membership, event participation, and digital sales that deliver ROI and improve retention for non-profit organizations.";

export const ourWhyCopy = [
  "RAS International is dedicated to handling every aspect of your trade association including financial, operations, board management, and governance. We are experts at business development and highly skilled at driving revenue, implementing unique membership strategies, promotions, and live events.",
  "We alleviate the burden put on volunteers by acting as a right arm to our boards, taking care of managing every detail so our clients can focus on advocacy and traditional fundraising.",
  "We are experts at business development. We know how to identify opportunities for growth, how to package them, how to sell, and most importantly, how to execute.",
];

export const expertiseIntro =
  "There is a real need for custom marketing help among non-profit associations. Most boards are comprised of volunteers who come together for a cause, and all organizations need to raise revenue to see their goals achieved. That's where we come in.";

export const expertiseHighlights = [
  {
    title: "Sponsorship Marketing & Fulfillment",
    description:
      "We understand how to go deep with industry sponsors and donors to help them with engagement strategies before, during, and after events. We help sponsors use the clout earned to grow their reputation within the organization's community, and put the emotional connection to work after the event with follow-up strategies.",
  },
  {
    title: "Value Creation",
    description:
      "We excel at value creation through association enhancements such as media centers, live events, digital networking directories, and improved association branding. We create a Vision Forward focused on growing membership and brand through the positivity of community.",
  },
  {
    title: "Skin in the Game",
    description:
      "Our management fees are the lowest around because we know we can be most effective with clients when we have skin in the game. While we have baseline operational costs, the balance of our money comes from commissions on what we sell for our clients.",
  },
];

export const footerAssociationLinks = [
  { label: "GCLA", href: "https://gcla.org" },
  { label: "FLA", href: "https://floridalimousine.com" },
  { label: "GA-LTA", href: "https://ga-lta.org" },
  { label: "Platinum Safety Program", href: "https://platinumsafety.org" },
] as const;
