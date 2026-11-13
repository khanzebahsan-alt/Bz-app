import { desc, sql } from "drizzle-orm";
import { db } from "@/db";
import { jewelry, type JewelryRow } from "@/db/schema";
import { SEED_PIECES } from "./seed";
import {
  FALLBACK_IMAGE,
  type Category,
  type Material,
  type NewPieceInput,
  type Piece,
} from "./types";

let ready: Promise<void> | null = null;

async function bootstrap() {
  await db.execute(sql`
    create table if not exists jewelry (
      id serial primary key,
      reference text not null unique,
      name text not null,
      category text not null,
      price integer not null,
      material text not null,
      gemstone text not null default '',
      description text not null default '',
      image text not null,
      featured boolean not null default false,
      created_at timestamptz not null default now()
    )
  `);

  const [{ count }] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(jewelry);

  if (count === 0) {
    const base = Date.now() - 24 * 60 * 60 * 1000;
    await db
      .insert(jewelry)
      .values(
        SEED_PIECES.map((piece, index) => ({
          ...piece,
          createdAt: new Date(base - index * 60_000),
        })),
      )
      .onConflictDoNothing();
  }
}

function ensureReady() {
  if (!ready) {
    ready = bootstrap().catch((error) => {
      ready = null;
      throw error;
    });
  }
  return ready;
}

function toPiece(row: JewelryRow): Piece {
  return {
    id: row.id,
    reference: row.reference,
    name: row.name,
    category: row.category as Category,
    price: row.price,
    material: row.material as Material,
    gemstone: row.gemstone,
    description: row.description,
    image: row.image,
    featured: row.featured,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function listPieces(): Promise<Piece[]> {
  await ensureReady();
  const rows = await db.select().from(jewelry).orderBy(desc(jewelry.createdAt), desc(jewelry.id));
  return rows.map(toPiece);
}

function makeReference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-4);
  const salt = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `BZ-${stamp}${salt}`;
}

export async function createPiece(input: NewPieceInput): Promise<Piece> {
  await ensureReady();
  const [row] = await db
    .insert(jewelry)
    .values({
      reference: makeReference(),
      name: input.name,
      category: input.category,
      price: input.price,
      material: input.material,
      gemstone: input.gemstone,
      description: input.description,
      image: input.image || FALLBACK_IMAGE,
      featured: false,
    })
    .returning();
  return toPiece(row);
}
