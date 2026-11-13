import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const jewelry = pgTable("jewelry", {
  id: serial("id").primaryKey(),
  reference: text("reference").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: integer("price").notNull(),
  material: text("material").notNull(),
  gemstone: text("gemstone").notNull().default(""),
  description: text("description").notNull().default(""),
  image: text("image").notNull(),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type JewelryRow = typeof jewelry.$inferSelect;
