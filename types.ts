export const CATEGORIES = ["Rings", "Necklaces", "Timepieces", "Bespoke"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Filter = "All" | Category;
export const FILTERS: Filter[] = ["All", ...CATEGORIES];

export const MATERIALS = ["24k Gold", "Platinum", "Rose Gold", "Sterling"] as const;
export type Material = (typeof MATERIALS)[number];

export interface Piece {
  id: number;
  reference: string;
  name: string;
  category: Category;
  price: number;
  material: Material;
  gemstone: string;
  description: string;
  image: string;
  featured: boolean;
  createdAt: string;
}

export interface NewPieceInput {
  name: string;
  category: Category;
  price: number;
  material: Material;
  gemstone: string;
  description: string;
  image: string;
}

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1400&q=80";

export const SIZE_OPTIONS: Record<
  Category,
  { label: string; options: string[]; defaultIndex: number }
> = {
  Rings: { label: "Ring size (US)", options: ["5", "6", "7", "8", "9", "10"], defaultIndex: 2 },
  Necklaces: { label: "Chain length", options: ['14"', '16"', '18"', '20"', '24"'], defaultIndex: 2 },
  Timepieces: { label: "Case diameter", options: ["36 mm", "38 mm", "40 mm", "42 mm"], defaultIndex: 1 },
  Bespoke: { label: "Fit", options: ["Petite", "Standard", "Statement"], defaultIndex: 1 },
};
