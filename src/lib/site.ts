export const SITE = "https://www.sanhorses.com";
export const BRAND = "SANPiMA";
export const LOGO = "/assets/icdn.tradew.com/file/202404/1576184/png/8080196.png";

export type Crumb = { name: string; url: string };

export type PageDef = {
  mod: string;
  path: string;
  h1: string;
  title: string;
  desc: string;
  parents: Crumb[];
};

export type NavItem = Crumb & { children?: Crumb[] };

export const NAV: NavItem[] = [
  { name: "Home", url: "/" },
  {
    name: "Products",
    url: "/products/",
    children: [
      { name: "All Products", url: "/products/" },
      { name: "Custom Jeans", url: "/products/jeans/" },
      { name: "Denim Jackets", url: "/products/denim-jackets/" },
      { name: "Denim Shorts", url: "/products/denim-shorts/" },
      { name: "Denim Shirts", url: "/products/denim-shirts/" },
    ],
  },
  {
    name: "Solutions",
    url: "/solutions/",
    children: [
      { name: "All Solutions", url: "/solutions/" },
      { name: "Baggy Jeans", url: "/solutions/baggy-jeans/" },
      { name: "Skinny Jeans", url: "/solutions/skinny-jeans/" },
      { name: "Stacked Jeans", url: "/solutions/stacked-jeans/" },
      { name: "Plus Size Jeans", url: "/solutions/plus-size-jeans/" },
    ],
  },
  {
    name: "Services",
    url: "/services/",
    children: [
      { name: "All Services", url: "/services/" },
      { name: "Sample Making", url: "/services/sample-making/" },
      { name: "Denim Washing", url: "/services/denim-washing/" },
      { name: "Printing & Embroidery", url: "/services/printing-embroidery/" },
      { name: "Custom Fabric", url: "/services/custom-fabric/" },
      { name: "How to Start", url: "/services/how-to-start/" },
    ],
  },
  {
    name: "Company",
    url: "/company/",
    children: [
      { name: "About Us", url: "/company/" },
      { name: "Factory Tour", url: "/company/factory-tour/" },
      { name: "Capacity", url: "/company/capacity/" },
      { name: "Certificates", url: "/company/certificates/" },
      { name: "Our Story", url: "/company/story/" },
    ],
  },
  { name: "Clients", url: "/clients/" },
  { name: "Blog", url: "/blog/" },
  { name: "FAQ", url: "/faq/" },
  { name: "Contact", url: "/contact-us.html" },
];

const products: Crumb[] = [{ name: "Products", url: "/products/" }];
const solutions: Crumb[] = [{ name: "Solutions", url: "/solutions/" }];
const services: Crumb[] = [{ name: "Services", url: "/services/" }];
const company: Crumb[] = [{ name: "Company", url: "/company/" }];

export const PAGES: PageDef[] = [
  {
    mod: "FE-03",
    path: "products",
    h1: "All Products",
    title: "Custom Denim Products | Jeans, Jackets, Shorts & Shirts Manufacturer",
    desc: "Browse SANPiMA custom denim products: jeans, denim jackets, shorts and shirts. Low MOQ from 30 pieces, OEM/ODM manufacturing for global brands.",
    parents: [],
  },
  {
    mod: "FE-03",
    path: "products/jeans",
    h1: "Custom Jeans",
    title: "Custom Jeans Manufacturer | OEM/ODM Denim Jeans Factory",
    desc: "Custom jeans manufacturing for brands: baggy, skinny, stacked, plus-size and more. From sketch to bulk production with in-house washing.",
    parents: products,
  },
  {
    mod: "FE-03",
    path: "products/denim-jackets",
    h1: "Custom Denim Jackets",
    title: "Denim Jacket Manufacturer | Custom Jean Jackets Factory",
    desc: "Custom denim jacket manufacturer offering embroidery, printing, patchwork and washing treatments. Low MOQ, fast sampling.",
    parents: products,
  },
  {
    mod: "FE-03",
    path: "products/denim-shorts",
    h1: "Custom Denim Shorts",
    title: "Denim Shorts Manufacturer | Custom Jean Shorts Factory",
    desc: "Custom denim shorts manufacturing: distressed, ripped, embroidered and washed styles for streetwear brands worldwide.",
    parents: products,
  },
  {
    mod: "FE-03",
    path: "products/denim-shirts",
    h1: "Custom Denim Shirts",
    title: "Denim Shirt Manufacturer | Custom Denim Shirts Factory",
    desc: "Custom denim shirt manufacturer: classic, oversized and washed denim shirts with full OEM/ODM customization.",
    parents: products,
  },
  {
    mod: "FE-12",
    path: "solutions",
    h1: "Denim Solutions",
    title: "Denim Solutions by Style | Baggy, Skinny, Stacked & Plus Size",
    desc: "Specialized denim manufacturing solutions by style: baggy jeans, skinny jeans, stacked jeans and plus-size jeans for your brand.",
    parents: [],
  },
  {
    mod: "FE-12",
    path: "solutions/baggy-jeans",
    h1: "Baggy Jeans Manufacturer",
    title: "Baggy Jeans Manufacturer | Custom Wide-Leg Denim Factory",
    desc: "Baggy jeans manufacturing specialist: wide-leg fits, heavy washes and streetwear detailing with low MOQ custom production.",
    parents: solutions,
  },
  {
    mod: "FE-12",
    path: "solutions/skinny-jeans",
    h1: "Skinny Jeans Manufacturer",
    title: "Skinny Jeans Manufacturer | Custom Stretch Denim Factory",
    desc: "Skinny jeans manufacturer with premium stretch denim fabrics, precision fits and custom washes for fashion brands.",
    parents: solutions,
  },
  {
    mod: "FE-12",
    path: "solutions/stacked-jeans",
    h1: "Stacked Jeans Manufacturer",
    title: "Stacked Jeans Manufacturer | Custom Stacked Denim Factory",
    desc: "Stacked jeans manufacturing: extended inseams, flare stacks and custom streetwear details from an experienced denim factory.",
    parents: solutions,
  },
  {
    mod: "FE-12",
    path: "solutions/plus-size-jeans",
    h1: "Plus Size Jeans Manufacturer",
    title: "Plus Size Jeans Manufacturer | Extended Sizes Denim Factory",
    desc: "Plus-size jeans manufacturer offering extended size ranges with tailored fit development and inclusive grading.",
    parents: solutions,
  },
  {
    mod: "FE-07",
    path: "services",
    h1: "Our Services",
    title: "Denim Manufacturing Services | Sampling, Washing, Printing",
    desc: "Full-chain denim services: sample making, garment washing, printing & embroidery, custom fabric development and bulk production.",
    parents: [],
  },
  {
    mod: "FE-07",
    path: "services/sample-making",
    h1: "Sample Making",
    title: "Denim Sample Making Service | 12-18 Days Sampling",
    desc: "Professional denim sample development in 12-18 days: pattern making, fit samples and pre-production samples for your collection.",
    parents: services,
  },
  {
    mod: "FE-07",
    path: "services/denim-washing",
    h1: "Denim Washing",
    title: "Denim Washing Service | In-House Wash Plant",
    desc: "In-house denim washing plant: stone wash, acid wash, vintage wash, distressing and eco-friendly treatments.",
    parents: services,
  },
  {
    mod: "FE-07",
    path: "services/printing-embroidery",
    h1: "Printing & Embroidery",
    title: "Denim Printing & Embroidery Service | Custom Decoration",
    desc: "Screen printing, digital printing, embroidery and applique services for custom denim decoration.",
    parents: services,
  },
  {
    mod: "FE-07",
    path: "services/custom-fabric",
    h1: "Custom Denim Fabric",
    title: "Custom Denim Fabric Development | Fabric Sourcing",
    desc: "Custom denim fabric development and sourcing: weights, stretches, sustainable options and specialty weaves.",
    parents: services,
  },
  {
    mod: "FE-07",
    path: "services/how-to-start",
    h1: "How to Start Cooperation",
    title: "How to Start Cooperation | From Sketch to Delivery",
    desc: "Step-by-step cooperation process: inquiry, quotation, sampling, bulk production, quality control and delivery.",
    parents: services,
  },
  {
    mod: "FE-11",
    path: "company",
    h1: "About SANPiMA",
    title: "About SANPiMA | 20+ Years Denim Manufacturer in China",
    desc: "SANPiMA is a professional denim manufacturer with 20+ years of experience, serving 2000+ designers across 30+ countries.",
    parents: [],
  },
  {
    mod: "FE-06",
    path: "company/factory-tour",
    h1: "Factory Tour",
    title: "Factory Tour | SANPiMA Denim Manufacturing Facility",
    desc: "Take a tour of SANPiMA's denim factory: cutting, sewing, washing and finishing lines with modern equipment.",
    parents: company,
  },
  {
    mod: "FE-06",
    path: "company/capacity",
    h1: "Manufacture Capacity",
    title: "Manufacturing Capacity | SANPiMA Denim Production",
    desc: "SANPiMA production capacity: monthly output, production lines, lead times and quality control processes.",
    parents: company,
  },
  {
    mod: "FE-06",
    path: "company/certificates",
    h1: "Certificates",
    title: "Certificates | SANPiMA Quality & Compliance",
    desc: "SANPiMA certifications and compliance: quality management, social responsibility and sustainability certificates.",
    parents: company,
  },
  {
    mod: "FE-11",
    path: "company/story",
    h1: "Our Story",
    title: "Our Story | The SANPiMA Journey",
    desc: "The SANPiMA story: from a small denim workshop to a trusted manufacturing partner for global streetwear brands.",
    parents: company,
  },
  {
    mod: "FE-08",
    path: "clients",
    h1: "Clients & Reviews",
    title: "Client Cases & Reviews | Brands That Trust SANPiMA",
    desc: "Client success stories, cooperation cases and reviews from brands and designers working with SANPiMA worldwide.",
    parents: [],
  },
  {
    mod: "FE-09",
    path: "blog",
    h1: "Blog & Insights",
    title: "Denim Blog & Industry Insights | SANPiMA",
    desc: "Denim industry trends, manufacturing guides and sourcing tips from the SANPiMA team.",
    parents: [],
  },
  {
    mod: "FE-10",
    path: "faq",
    h1: "Frequently Asked Questions",
    title: "FAQ | MOQ, Sampling, Lead Time & Shipping",
    desc: "Answers to common questions about SANPiMA's MOQ, sample making, production lead time, payment and shipping.",
    parents: [],
  },
  {
    mod: "SEC-05",
    path: "terms-conditions",
    h1: "Terms & Conditions",
    title: "Terms & Conditions | SANPiMA",
    desc: "Terms and conditions for using the SANPiMA website and services.",
    parents: [],
  },
  {
    mod: "SEC-05",
    path: "privacy-policy",
    h1: "Privacy Policy",
    title: "Privacy Policy | SANPiMA",
    desc: "How SANPiMA collects, uses and protects your personal information, in compliance with GDPR.",
    parents: [],
  },
];

export function findPage(slug: string[]): PageDef | undefined {
  const path = slug.join("/");
  return PAGES.find((p) => p.path === path);
}
