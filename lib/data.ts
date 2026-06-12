// ---------------------------------------------------------------------------
// Bosecrafts — site content
// Edit copy, projects, and contact details here.
// ---------------------------------------------------------------------------

export type Project = {
  id: string;
  slug: string;
  title: string;
  italic?: string;
  category: string;
  year: string;
  tagline: string;
  excerpt: string;
  featured: boolean;
  accent: string;
  image: string;
  imageAlt: string;
  span?: "tall" | "wide" | "standard";
};

export type Service = {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
};

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initial: string;
  accent: string;
};

export const site = {
  name: "Bosecrafts",
  tagline: "Brands worth building.",
  description:
    "A design-led consultancy from Siliguri building brands, identity systems, and digital experiences that command attention.",
  email: "bosecrafts@gmail.com",
  phone: "+91 9933997777",
  location: "Siliguri, West Bengal, India",
  availability: "Available for projects — Q3 2026",
  url: "https://bosecrafts.in",
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export const marqueeItems = [
  "Brand Consulting",
  "Brand Identity",
  "Market Positioning",
  "Brand Architecture",
  "Growth Advisory",
  "Brand Strategy",
  "Visual Systems",
  "Naming",
];

export const projects: Project[] = [
  {
    id: "p1",
    slug: "artisan-collective",
    title: "Artisan",
    italic: "Collective",
    category: "Brand Identity",
    year: "2026",
    tagline:
      "A new visual identity for a slow-craft furniture brand rooted in Himalayan timber and quiet luxury.",
    excerpt:
      "Repositioning a 20-year-old furniture maker for a younger, design-led clientele.",
    featured: true,
    accent: "#D9F65A",
    image: u("photo-1618221195710-dd6b41faaea6", 1400),
    imageAlt: u("photo-1555041469-a586c36aeda6"),
    span: "tall",
  },
  {
    id: "p2",
    slug: "bloom-skincare",
    title: "Bloom",
    italic: "Skincare",
    category: "Packaging & Web",
    year: "2026",
    tagline:
      "Plant-forward skincare that launched on shelves in 14 cities — packaging that travels and tells.",
    excerpt:
      "A startup skincare line built around a single hero ingredient — Himalayan saffron.",
    featured: true,
    accent: "#FF8FA3",
    image: u("photo-1556228578-8c89e087df56", 1400),
    imageAlt: u("photo-1620916566398-39f1143ab7be"),
    span: "standard",
  },
  {
    id: "p3",
    slug: "northfield-foods",
    title: "Northfield",
    italic: "Foods",
    category: "Full Branding",
    year: "2025",
    tagline:
      "From regional dairy producer to a premium pan-India FMCG brand — across 47 SKUs.",
    excerpt:
      "A wholesale rebrand for a 30-year-old dairy co-operative aiming for retail.",
    featured: true,
    accent: "#FFC857",
    image: u("photo-1628088062854-b18746b8b846", 1400),
    imageAlt: u("photo-1486297678162-ebfa3ad560bf"),
    span: "wide",
  },
  {
    id: "p4",
    slug: "shorewood-developers",
    title: "Shorewood",
    italic: "Developers",
    category: "Brand & Web",
    year: "2025",
    tagline:
      "A boutique real estate developer positioned for the post-luxury Tier-II market.",
    excerpt:
      "A digital-first refresh and conversion-led website for a regional developer.",
    featured: false,
    accent: "#7BC4C4",
    image: u("photo-1486406146926-c627a92ad1ab"),
    imageAlt: u("photo-1560518883-ce09059eeffa"),
  },
  {
    id: "p5",
    slug: "cascade-coffee",
    title: "Cascade",
    italic: "Coffee",
    category: "Packaging",
    year: "2025",
    tagline:
      "Single-origin specialty coffee for cafés that take their menu seriously.",
    excerpt:
      "Specialty coffee packaging that prints in two colours but reads in five.",
    featured: false,
    accent: "#E76F51",
    image: u("photo-1447933601403-0c6688de566e"),
    imageAlt: u("photo-1495474472287-4d71bcdd2085"),
  },
  {
    id: "p6",
    slug: "venture-consult",
    title: "Venture",
    italic: "Consult",
    category: "Brand & Strategy",
    year: "2024",
    tagline:
      "A mid-tier consulting firm rebranded to compete with the Big Four — in pitch rooms.",
    excerpt:
      "A pitch deck system that closed three Fortune-500 mandates in its first quarter.",
    featured: false,
    accent: "#9C89B8",
    image: u("photo-1497366216548-37526070297c"),
    imageAlt: u("photo-1497366816533-0668f3adad74"),
  },
];

export const services: Service[] = [
  {
    id: "s1",
    num: "01 / Consulting",
    title: "Brand Consulting",
    description:
      "Ongoing advisory for founders navigating growth — positioning reviews, launch support, and the brand decisions that compound over years.",
    tags: ["Advisory", "Launch Support", "Positioning", "Market Entry"],
  },
  {
    id: "s2",
    num: "02 / Identity",
    title: "Brand Identity",
    description:
      "Distinct, durable visual systems — wordmark, type, colour, and brand guidelines that hold their character from business card to billboard.",
    tags: ["Logo Design", "Type System", "Colour", "Guidelines"],
  },
  {
    id: "s3",
    num: "03 / Strategy",
    title: "Brand Strategy",
    description:
      "Before a pixel is drawn, we answer the hard questions. Who you're for, what you stand for, and the gap in the market only you can own.",
    tags: ["Naming", "Messaging", "Tone of Voice", "Architecture"],
  },
  {
    id: "s4",
    num: "04 / Systems",
    title: "Visual Systems",
    description:
      "When your brand needs to live across formats — packaging, campaigns, digital, print — we build systems engineered to scale without losing craft.",
    tags: ["Packaging", "Campaigns", "Digital", "Print"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "Three weeks. Workshops with founders, interviews with customers, a forensic look at the competition.",
  },
  {
    num: "02",
    title: "Strategise",
    description:
      "Positioning, tone, the brief that everything downstream will be measured against. Signed off before pixels.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "Six to ten weeks of craft. Identity, assets, and the rules that hold them together when the studio isn't in the room.",
  },
  {
    num: "04",
    title: "Ship",
    description:
      "Launch, hand-off, and a six-month follow-through window. We stay close until the brand is in operators' hands.",
  },
];

export const stats = [
  { value: "50+", label: "Brands Shipped" },
  { value: "8", label: "Years Operating" },
  { value: "12", label: "Industries Served" },
  { value: "3×", label: "Avg. Revenue Growth" },
];

export const team: TeamMember[] = [
  {
    name: "Tapas Bose",
    role: "Founder · Creative Director",
    bio: "Twelve years at the intersection of design and business. Trained at NID; previously identity director at a Bangalore studio before moving back home.",
    initial: "T",
    accent: "#D9F65A",
  },
  {
    name: "Aditi Sen",
    role: "Brand Strategist",
    bio: "Background in market research and ethnography. Runs the discovery phase of every engagement. Asks the questions nobody wants to answer.",
    initial: "A",
    accent: "#FF8FA3",
  },
  {
    name: "Niraj Pradhan",
    role: "Senior Designer",
    bio: "Typography obsessive. Spends weekends drawing letterforms. Has opinions on kerning that he's happy to share at length.",
    initial: "N",
    accent: "#FFC857",
  },
  {
    name: "Priya Lama",
    role: "Digital Designer",
    bio: "Web and product. Figma evangelist. Builds prototypes faster than most people sketch. Cares deeply about how things actually feel to use.",
    initial: "P",
    accent: "#7BC4C4",
  },
  {
    name: "Mira Khan",
    role: "Copywriter",
    bio: "Two years writing for a Mumbai literary magazine before joining us. Edits everything we ship. The brand voice runs through her.",
    initial: "M",
    accent: "#9C89B8",
  },
  {
    name: "Dev Sharma",
    role: "Studio Operator",
    bio: "Keeps the studio running — timelines, budgets, client comms. The reason projects ship on time and nobody has to chase a file at midnight.",
    initial: "D",
    accent: "#A3A3A3",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
