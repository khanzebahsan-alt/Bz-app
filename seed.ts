import type { NewPieceInput } from "./types";

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export interface SeedPiece extends NewPieceInput {
  reference: string;
  featured: boolean;
}

export const SEED_PIECES: SeedPiece[] = [
  {
    reference: "BZ-0001",
    name: "Éclat Halo Solitaire",
    category: "Rings",
    price: 48500,
    material: "Platinum",
    gemstone: "2.40 ct D / VVS1 round brilliant diamond",
    description:
      "A hand-set round brilliant crowned by a halo of 36 micro-pavé diamonds on a split platinum shank. Cut for fire, finished for a lifetime.",
    image: img("1605100804763-247f67b3557e"),
    featured: true,
  },
  {
    reference: "BZ-0002",
    name: "Nocturne Aquamarine Pendant",
    category: "Necklaces",
    price: 12900,
    material: "24k Gold",
    gemstone: "1.80 ct emerald-cut aquamarine",
    description:
      "A suspended aquamarine catches the light on a hand-linked 24k gold chain, finished with a pavé-set crescent that glows against the skin.",
    image: img("1599643478518-a784e5dc4c8f"),
    featured: false,
  },
  {
    reference: "BZ-0003",
    name: "Meridian Automatic 38",
    category: "Timepieces",
    price: 27400,
    material: "Rose Gold",
    gemstone: "Sapphire crystal, 18 diamond indices",
    description:
      "An in-house automatic movement with a 72-hour reserve, set in a polished rose gold case with a fluted bezel and silvered sunburst dial.",
    image: img("1620625515032-6ed0c1790c75"),
    featured: false,
  },
  {
    reference: "BZ-0004",
    name: "Cascade Diamond Bracelet",
    category: "Bespoke",
    price: 64000,
    material: "Platinum",
    gemstone: "14.20 ct total weight, round brilliant diamonds",
    description:
      "Commissioned once, never repeated. Interlocking platinum links hold graduated brilliants that move like water around the wrist.",
    image: img("1573408301185-9146fe634ad0"),
    featured: false,
  },
  {
    reference: "BZ-0005",
    name: "Rosé Padparadscha Ring",
    category: "Rings",
    price: 18200,
    material: "Rose Gold",
    gemstone: "3.10 ct pink sapphire, pavé diamonds",
    description:
      "A cushion-cut pink sapphire of rare saturation, framed in diamond pavé and cradled by a slender rose gold band.",
    image: img("1603561591411-07134e71a2a9"),
    featured: false,
  },
  {
    reference: "BZ-0006",
    name: "Deco Sapphire Drop Earrings",
    category: "Bespoke",
    price: 38900,
    material: "Platinum",
    gemstone: "6.40 ct tw pear-cut sapphires, baguette diamonds",
    description:
      "Art Deco geometry reimagined: pear-cut sapphires of deep cornflower blue suspended within diamond-set platinum frames.",
    image: img("1535632066927-ab7c9ab60908"),
    featured: false,
  },
];
