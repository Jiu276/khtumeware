export const MAIN_CATEGORIES = [
  {
    slug: "cabinet-hardware",
    name: "Cabinet Hardware",
    description: "Pulls, knobs, and accessories for kitchens, baths, and furniture.",
  },
  {
    slug: "bathroom-hardware",
    name: "Bathroom Hardware",
    description: "Towel bars, rings, hooks, and paper holders.",
  },
  {
    slug: "door-hardware",
    name: "Door Hardware",
    description: "Stops, knockers, latches, and mail slots.",
  },
  {
    slug: "hooks-hangers",
    name: "Hooks & Hangers",
    description: "Wall hooks, coat hooks, and heavy-duty hangers.",
  },
  {
    slug: "stair-shelf-hardware",
    name: "Stair & Shelf Hardware",
    description: "Handrail brackets and shelf supports.",
  },
  {
    slug: "home-accessories",
    name: "Home Accessories",
    description: "Jewelry trays and decorative home pieces.",
  },
] as const;

export const SUB_CATEGORIES: Record<
  (typeof MAIN_CATEGORIES)[number]["slug"],
  { slug: string; name: string }[]
> = {
  "cabinet-hardware": [
    { slug: "cabinet-pulls", name: "Cabinet Pulls" },
    { slug: "cabinet-knobs", name: "Cabinet Knobs" },
    { slug: "appliance-pulls", name: "Appliance Pulls" },
    { slug: "cabinet-backplates", name: "Cabinet Backplates" },
    { slug: "cabinet-latches", name: "Cabinet Latches" },
  ],
  "bathroom-hardware": [
    { slug: "towel-rings", name: "Towel Rings" },
    { slug: "toilet-paper-holders", name: "Toilet Paper Holders" },
    { slug: "towel-bars", name: "Towel Bars" },
    { slug: "robe-hooks", name: "Robe Hooks" },
  ],
  "door-hardware": [
    { slug: "door-stops", name: "Door Stops" },
    { slug: "latches-bolts", name: "Latches & Bolts" },
    { slug: "mail-slots", name: "Mail Slots" },
    { slug: "door-knockers", name: "Door Knockers" },
  ],
  "hooks-hangers": [
    { slug: "wall-hooks", name: "Wall Hooks" },
    { slug: "coat-hooks", name: "Coat Hooks" },
    { slug: "heavy-duty-hooks", name: "Heavy Duty Hooks" },
  ],
  "stair-shelf-hardware": [
    { slug: "stair-handrail-brackets", name: "Stair Handrail Brackets" },
    { slug: "shelf-brackets", name: "Shelf Brackets" },
  ],
  "home-accessories": [{ slug: "jewelry-trays", name: "Jewelry Trays" }],
};

export const FINISH_TAGS = [
  { slug: "champagne-bronze", name: "Champagne Bronze", hex: "#9C7E5C" },
  { slug: "matte-black", name: "Matte Black", hex: "#1A1A1A" },
  { slug: "antique-brass", name: "Antique Brass", hex: "#8B6914" },
  { slug: "brushed-gold", name: "Brushed Gold", hex: "#C9A227" },
  { slug: "brushed-brass", name: "Brushed Brass", hex: "#B5A642" },
  { slug: "brushed-nickel", name: "Brushed Nickel", hex: "#A8A9AD" },
  { slug: "polished-nickel", name: "Polished Nickel", hex: "#C0C0C0" },
  { slug: "polished-chrome", name: "Polished Chrome", hex: "#E8E8E8" },
  { slug: "oil-rubbed-bronze", name: "Oil Rubbed Bronze", hex: "#4A3728" },
  { slug: "satin-brass", name: "Satin Brass", hex: "#C4A962" },
  { slug: "gunmetal", name: "Gunmetal", hex: "#2C3539" },
] as const;

export const FEATURED_FINISHES = FINISH_TAGS.filter((f) =>
  ["brushed-brass", "matte-black", "brushed-nickel", "oil-rubbed-bronze"].includes(
    f.slug
  )
);

export const STYLE_TAGS = [
  "Modern",
  "Minimalist",
  "Contemporary",
  "Farmhouse",
  "Traditional",
  "Industrial",
  "Luxury",
  "Scandinavian",
] as const;

export const MATERIAL_TAGS = [
  "Zinc Alloy",
  "Solid Brass",
  "Stainless Steel",
  "Aluminum Alloy",
] as const;

export const SHAPE_TAGS = [
  "Bar Pulls",
  "Square Pulls",
  "Arch Pulls",
  "Round Knobs",
  "Square Knobs",
] as const;

export const ROOM_TAGS = [
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Closet",
  "Laundry Room",
] as const;

export type MainCategorySlug = (typeof MAIN_CATEGORIES)[number]["slug"];
export type FinishSlug = (typeof FINISH_TAGS)[number]["slug"];

export function getMainCategory(slug: string) {
  return MAIN_CATEGORIES.find((c) => c.slug === slug);
}

export function getSubCategory(mainSlug: string, subSlug: string) {
  const subs = SUB_CATEGORIES[mainSlug as MainCategorySlug];
  return subs?.find((s) => s.slug === subSlug);
}

export function getFinish(slug: string) {
  return FINISH_TAGS.find((f) => f.slug === slug);
}
