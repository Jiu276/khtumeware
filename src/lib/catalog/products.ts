import type { FinishSlug, MainCategorySlug } from "./taxonomy";

export interface ProductVariant {
  id: string;
  finish: FinishSlug;
  sku: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  designCode: string;
  title: string;
  shortTitle: string;
  category: MainCategorySlug;
  subCategory: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  material: string;
  style: string;
  shape: string;
  room: string[];
  holeCenters?: string;
  overallLength?: string;
  diameter?: string;
  packQuantity: string;
  installationType: string;
  includedScrews: string;
  application: string;
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  variants: ProductVariant[];
  gallery: string[];
}

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    id: "1",
    slug: "design3768-contemporary-cabinet-handles",
    designCode: "DESIGN3768",
    title:
      "DESIGN3768 Contemporary Cabinet Handles – Ergonomic Bar Pulls for Kitchen & Drawer",
    shortTitle: "DESIGN3768 Contemporary Cabinet Handles",
    category: "cabinet-hardware",
    subCategory: "cabinet-pulls",
    description:
      "Solid zinc alloy bar pulls with ergonomic grip. Ideal for kitchen cabinets, cupboards, and furniture upgrades. Install in minutes with included screws.",
    seoTitle:
      "DESIGN3768 Cabinet Handles | 5\" Bar Pulls – KhtumeWare",
    seoDescription:
      "Shop DESIGN3768 contemporary cabinet handles in 8+ finishes. Durable zinc alloy, easy install, wholesale available.",
    material: "Zinc Alloy",
    style: "Contemporary",
    shape: "Bar Pulls",
    room: ["Kitchen", "Bathroom", "Closet"],
    holeCenters: '5" (128mm)',
    overallLength: '6-1/4" (160mm)',
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "1\" & 1-3/4\" included",
    application: "Kitchen cabinets, drawers, wardrobes",
    tags: ["Heavy Duty", "Easy Installation", "Fingerprint Resistant"],
    featured: true,
    bestseller: true,
    gallery: [
      unsplash("photo-1556909114-f6e7ad7d3136"),
      unsplash("photo-1565538810643-b5bdb714032a"),
    ],
    variants: [
      { id: "1-cp", finish: "champagne-bronze", sku: "KH-PULL-128-CB", price: 37.99, compareAtPrice: 41.99, inStock: true, image: unsplash("photo-1616486338812-3dadae4b4ace") },
      { id: "1-bb", finish: "brushed-brass", sku: "KH-PULL-128-BB", price: 37.99, compareAtPrice: 41.99, inStock: true, image: unsplash("photo-1556909114-f6e7ad7d3136") },
      { id: "1-mb", finish: "matte-black", sku: "KH-PULL-128-MB", price: 37.99, inStock: true, image: unsplash("photo-1565538810643-b5bdb714032a") },
      { id: "1-bn", finish: "brushed-nickel", sku: "KH-PULL-128-BN", price: 37.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
      { id: "1-orb", finish: "oil-rubbed-bronze", sku: "KH-PULL-128-ORB", price: 39.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
    ],
  },
  {
    id: "2",
    slug: "design2008-matte-black-rectangle-pulls",
    designCode: "DESIGN2008",
    title:
      "DESIGN2008 Slim Rectangle Pulls for Flat Panel & Shaker Cabinets | 5\" Pulls",
    shortTitle: "DESIGN2008 Slim Rectangle Pulls",
    category: "cabinet-hardware",
    subCategory: "cabinet-pulls",
    description:
      "Modern rectangular cabinet pulls with clean lines. Perfect for flat panel and shaker-style doors. Zinc alloy construction with premium finish options.",
    seoTitle: "DESIGN2008 Rectangle Cabinet Pulls | KhtumeWare",
    seoDescription:
      "Modern matte black and multi-finish rectangle pulls for cabinets and closets.",
    material: "Zinc Alloy",
    style: "Modern",
    shape: "Square Pulls",
    room: ["Kitchen", "Bedroom"],
    holeCenters: '5" (128mm)',
    overallLength: '6" (152mm)',
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "1\" & 1-3/4\" included",
    application: "Cabinets, drawers, closets",
    tags: ["Modern", "Easy Installation"],
    featured: true,
    bestseller: true,
    gallery: [unsplash("photo-1558618666-fcd25c85cd64")],
    variants: [
      { id: "2-mb", finish: "matte-black", sku: "KH-PULL-128-MB-2008", price: 35.99, compareAtPrice: 38.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
      { id: "2-bb", finish: "brushed-brass", sku: "KH-PULL-128-BB-2008", price: 35.99, inStock: true, image: unsplash("photo-1556909114-f6e7ad7d3136") },
      { id: "2-pc", finish: "polished-chrome", sku: "KH-PULL-128-PC", price: 35.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
      { id: "2-bn", finish: "brushed-nickel", sku: "KH-PULL-128-BN-2008", price: 35.99, inStock: true, image: unsplash("photo-1565538810643-b5bdb714032a") },
    ],
  },
  {
    id: "3",
    slug: "design3307-linear-cabinet-pulls",
    designCode: "DESIGN3307",
    title:
      "DESIGN3307 Solid Metal Modern Linear Pull for Tall Cabinets | 10\" Handle",
    shortTitle: "DESIGN3307 Linear Cabinet Pulls",
    category: "cabinet-hardware",
    subCategory: "cabinet-pulls",
    description:
      "Extended linear pulls for tall pantry and appliance cabinets. Sleek profile with commercial-grade durability.",
    seoTitle: "DESIGN3307 10\" Linear Cabinet Pulls | KhtumeWare",
    seoDescription: "Modern linear cabinet handles in antique brass, matte black, and more.",
    material: "Zinc Alloy",
    style: "Minimalist",
    shape: "Bar Pulls",
    room: ["Kitchen", "Closet"],
    holeCenters: '10" (256mm)',
    overallLength: '11-3/8" (288mm)',
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "1-3/4\" & 2-1/2\" included",
    application: "Pantry doors, tall cabinets",
    tags: ["Heavy Duty", "Commercial Grade"],
    featured: true,
    bestseller: true,
    gallery: [unsplash("photo-1616486338812-3dadae4b4ace")],
    variants: [
      { id: "3-ab", finish: "antique-brass", sku: "KH-PULL-256-AB", price: 35.99, inStock: true, image: unsplash("photo-1616486338812-3dadae4b4ace") },
      { id: "3-mb", finish: "matte-black", sku: "KH-PULL-256-MB", price: 35.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
      { id: "3-bn", finish: "brushed-nickel", sku: "KH-PULL-256-BN", price: 35.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
    ],
  },
  {
    id: "4",
    slug: "design1192-cabinet-knobs",
    designCode: "DESIGN1192",
    title:
      "DESIGN1192 Brushed Gold Button Knobs for White & Navy Cabinets | 1.18\" Wide",
    shortTitle: "DESIGN1192 Cabinet Knobs",
    category: "cabinet-hardware",
    subCategory: "cabinet-knobs",
    description:
      "Round button knobs with refined profiles. Ideal for drawers, cabinet doors, and dressers. Multiple premium finishes available.",
    seoTitle: "DESIGN1192 Cabinet Knobs | Round Button Pulls – KhtumeWare",
    seoDescription: "Premium cabinet knobs in brushed gold, matte black, and more finishes.",
    material: "Zinc Alloy",
    style: "Traditional",
    shape: "Round Knobs",
    room: ["Kitchen", "Bedroom", "Bathroom"],
    diameter: '1.18" (30mm)',
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "1\" included",
    application: "Drawers, cabinet doors, dressers",
    tags: ["Easy Installation", "Rustproof"],
    featured: true,
    bestseller: true,
    gallery: [unsplash("photo-1565538810643-b5bdb714032a")],
    variants: [
      { id: "4-bg", finish: "brushed-gold", sku: "KH-KNOB-32-BG", price: 26.99, inStock: true, image: unsplash("photo-1565538810643-b5bdb714032a") },
      { id: "4-mb", finish: "matte-black", sku: "KH-KNOB-32-MB", price: 26.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
      { id: "4-bn", finish: "brushed-nickel", sku: "KH-KNOB-32-BN", price: 26.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
      { id: "4-cp", finish: "champagne-bronze", sku: "KH-KNOB-32-CB", price: 26.99, inStock: true, image: unsplash("photo-1616486338812-3dadae4b4ace") },
    ],
  },
  {
    id: "5",
    slug: "brushed-brass-towel-bar-24",
    designCode: "BATH2401",
    title: "24\" Brushed Brass Towel Bar – Wall Mounted Bathroom Hardware",
    shortTitle: "24\" Brushed Brass Towel Bar",
    category: "bathroom-hardware",
    subCategory: "towel-bars",
    description:
      "Heavy-duty towel bar with concealed mounting. Rust-resistant finish for humid bathroom environments.",
    seoTitle: "Brushed Brass Towel Bar 24\" | KhtumeWare Bathroom",
    seoDescription: "Premium wall-mounted towel bar in brushed brass and matte black.",
    material: "Stainless Steel",
    style: "Modern",
    shape: "Bar Pulls",
    room: ["Bathroom"],
    overallLength: '24" (610mm)',
    packQuantity: "Single Pack",
    installationType: "Concealed Mount",
    includedScrews: "Mounting hardware included",
    application: "Bathroom towel storage",
    tags: ["Rustproof", "Wall Mounted", "Waterproof"],
    featured: false,
    bestseller: false,
    gallery: [unsplash("photo-1620626011761-996317b48d6e")],
    variants: [
      { id: "5-bb", finish: "brushed-brass", sku: "KH-TBAR-24-BB", price: 42.99, inStock: true, image: unsplash("photo-1620626011761-996317b48d6e") },
      { id: "5-mb", finish: "matte-black", sku: "KH-TBAR-24-MB", price: 42.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
    ],
  },
  {
    id: "6",
    slug: "toilet-paper-holder-oil-rubbed-bronze",
    designCode: "BATH1102",
    title: "Wall Mounted Toilet Paper Holder – Oil Rubbed Bronze",
    shortTitle: "Toilet Paper Holder",
    category: "bathroom-hardware",
    subCategory: "toilet-paper-holders",
    description:
      "Elegant toilet paper holder with smooth pivot arm. Matches our cabinet hardware finish palette.",
    seoTitle: "Toilet Paper Holder ORB | KhtumeWare",
    seoDescription: "Wall mounted toilet paper holders in oil rubbed bronze and brushed nickel.",
    material: "Zinc Alloy",
    style: "Contemporary",
    shape: "Bar Pulls",
    room: ["Bathroom"],
    packQuantity: "Single Pack",
    installationType: "Wall Mounted",
    includedScrews: "Mounting screws included",
    application: "Residential and commercial bathrooms",
    tags: ["Rustproof", "Easy Installation"],
    featured: false,
    bestseller: false,
    gallery: [unsplash("photo-1620626011761-996317b48d6e")],
    variants: [
      { id: "6-orb", finish: "oil-rubbed-bronze", sku: "KH-TPH-ORB", price: 28.99, inStock: true, image: unsplash("photo-1620626011761-996317b48d6e") },
      { id: "6-bn", finish: "brushed-nickel", sku: "KH-TPH-BN", price: 28.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
    ],
  },
  {
    id: "7",
    slug: "heavy-duty-wall-hook-brushed-nickel",
    designCode: "HOOK501",
    title: "Heavy Duty Wall Hook – Brushed Nickel Coat & Robe Hook",
    shortTitle: "Heavy Duty Wall Hook",
    category: "hooks-hangers",
    subCategory: "heavy-duty-hooks",
    description:
      "Load-rated wall hook for coats, bags, and robes. Clean minimalist design for entryways and closets.",
    seoTitle: "Heavy Duty Wall Hook | KhtumeWare",
    seoDescription: "Commercial-grade wall hooks in brushed nickel and matte black.",
    material: "Stainless Steel",
    style: "Minimalist",
    shape: "Bar Pulls",
    room: ["Entryway", "Bedroom", "Closet"],
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "2 screws included",
    application: "Coats, robes, bags",
    tags: ["Heavy Duty", "Commercial Grade"],
    featured: false,
    bestseller: false,
    gallery: [unsplash("photo-1618221195710-dd6b41faaea6")],
    variants: [
      { id: "7-bn", finish: "brushed-nickel", sku: "KH-HOOK-BN", price: 18.99, inStock: true, image: unsplash("photo-1618221195710-dd6b41faaea6") },
      { id: "7-mb", finish: "matte-black", sku: "KH-HOOK-MB", price: 18.99, inStock: true, image: unsplash("photo-1558618666-fcd25c85cd64") },
    ],
  },
  {
    id: "8",
    slug: "door-stop-floor-mounted-matte-black",
    designCode: "DOOR301",
    title: "Floor Mounted Door Stop – Matte Black Heavy Duty",
    shortTitle: "Floor Mounted Door Stop",
    category: "door-hardware",
    subCategory: "door-stops",
    description:
      "Solid floor door stop with rubber bumper tip. Protects walls and doors in residential and commercial spaces.",
    seoTitle: "Floor Door Stop Matte Black | KhtumeWare",
    seoDescription: "Heavy duty floor mounted door stops in matte black and brushed nickel.",
    material: "Zinc Alloy",
    style: "Industrial",
    shape: "Bar Pulls",
    room: ["Entryway", "Office"],
    packQuantity: "Single Pack",
    installationType: "Screw Mounted",
    includedScrews: "Floor anchor included",
    application: "Interior doors",
    tags: ["Heavy Duty", "Commercial Grade"],
    featured: false,
    bestseller: false,
    gallery: [unsplash("photo-1497366216548-37526070297c")],
    variants: [
      { id: "8-mb", finish: "matte-black", sku: "KH-DSTOP-MB", price: 14.99, inStock: true, image: unsplash("photo-1497366216548-37526070297c") },
      { id: "8-bn", finish: "brushed-nickel", sku: "KH-DSTOP-BN", price: 14.99, inStock: true, image: unsplash("photo-1484154218962-a197022b5858") },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getProductsByCategory(category: string, subCategory?: string): Product[] {
  return products.filter((p) => {
    if (p.category !== category) return false;
    if (subCategory && p.subCategory !== subCategory) return false;
    return true;
  });
}

export function getProductsByFinish(finish: FinishSlug): Product[] {
  return products.filter((p) => p.variants.some((v) => v.finish === finish));
}

export function getLowestPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

export function getDefaultVariant(product: Product): ProductVariant {
  return product.variants[0];
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function getProductUrl(product: Product, variant?: ProductVariant): string {
  const v = variant ?? getDefaultVariant(product);
  return `/products/${product.slug}?finish=${v.finish}`;
}

export function getSeoCollectionUrl(
  subCategory: string,
  finish?: string,
  size?: string
): string {
  const parts = [subCategory];
  if (finish) parts.push(finish);
  if (size) parts.push(size);
  return `/collections/${parts.join("/")}`;
}
