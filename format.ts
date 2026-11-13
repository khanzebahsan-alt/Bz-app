const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatUSD(value: number): string {
  return usd.format(value);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const goldButton =
  "bg-gradient-to-b from-[#F3DE9A] via-[#D4AF37] to-[#B8922A] text-black shadow-[0_0_40px_-6px_rgba(212,175,55,0.65),inset_0_1px_0_0_rgba(255,255,255,0.5)]";

export function scrollToCollection() {
  document.getElementById("collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
