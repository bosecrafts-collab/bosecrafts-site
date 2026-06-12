// ---------------------------------------------------------------------------
// Data layer — replace with your CMS / commerce API (WooCommerce REST,
// Shopify Storefront, Medusa…). All names/copy are original placeholders;
// swap in your client's real catalogue, photography, and brand copy.
// ---------------------------------------------------------------------------

export type Money = { min: number; max?: number; currency: "ZAR" };

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: Money;
  image: string;
  imageAlt: string;
  badge?: "New";
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  image: string;
  isNew?: boolean;
};

export const formatPrice = ({ min, max }: Money): string => {
  const fmt = (n: number) =>
    "R" + n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return max ? `${fmt(min)} – ${fmt(max)}` : fmt(min);
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Three hero collection banners, in display order
export const collections: Collection[] = [
  { id: "c1", slug: "mohair-knits",  name: "Mohair Knits",  image: u("photo-1576871337622-98d48d1cf531", 1400), isNew: true },
  { id: "c2", slug: "chic-bonnets",  name: "Chic Bonnets",  image: u("photo-1576672843344-f01907a9d40c", 1400) },
  { id: "c3", slug: "artisanal-bags", name: "Artisanal Bags", image: u("photo-1590874103328-eac38a683ce7", 1400) },
  { id: "c4", slug: "accessories",   name: "Accessories",   image: u("photo-1611652022419-a9419f74343d", 1400) },
];

// Playful dessert-inspired colourway names (original placeholders)
const knit = (id: string, slug: string, name: string, img: string, alt: string, price?: Money): Product => ({
  id, slug, name: `${name} Mohair Knit`, collection: "Mohair Knits",
  price: price ?? { min: 2000, max: 4800, currency: "ZAR" },
  image: u(img), imageAlt: u(alt),
});

export const products: Product[] = [
  { ...knit("p1", "sunset-swirl", "Sunset Swirl", "photo-1576871337622-98d48d1cf531", "photo-1551488831-00ddcb6c6bd3", { min: 6000, currency: "ZAR" }), badge: "New" },
  knit("p2", "toffee-apple", "Toffee Apple", "photo-1620799140408-edc6dcb6d633", "photo-1610288311735-39b7facbd095"),
  knit("p3", "bubblegum-pop", "Bubblegum Pop", "photo-1583743814966-8936f5b7be1a", "photo-1576566588028-4147f3842f27"),
  knit("p4", "mint-crisp", "Mint Crisp", "photo-1608257735262-31e2c8b0c3d2", "photo-1620799139507-2a76f79a2f4d"),
  knit("p5", "berry-fizz", "Berry Fizz", "photo-1610288311735-39b7facbd095", "photo-1576871337622-98d48d1cf531"),
  knit("p6", "caramel-drift", "Caramel Drift", "photo-1551488831-00ddcb6c6bd3", "photo-1620799140408-edc6dcb6d633"),
  knit("p7", "candy-stripe", "Candy Stripe", "photo-1576566588028-4147f3842f27", "photo-1583743814966-8936f5b7be1a"),
  knit("p8", "sorbet-sky", "Sorbet Sky", "photo-1620799139507-2a76f79a2f4d", "photo-1608257735262-31e2c8b0c3d2"),
];

export const megaMenu = [
  { label: "Shop All", href: "/shop" },
  { label: "Mohair Knits", href: "/shop?c=mohair-knits", isNew: true },
  { label: "Chic Bonnets", href: "/shop?c=chic-bonnets" },
  { label: "Artisanal Bags", href: "/shop?c=artisanal-bags" },
  { label: "Accessories", href: "/shop?c=accessories" },
];

export const announcements = ["MADE TO ORDER", "DESIGNED IN CAPE TOWN", "WORLDWIDE SHIPPING"];

export const currencies = [
  { code: "ZAR", label: "SA Rand (ZAR R)" },
  { code: "USD", label: "US Dollar (USD $)" },
  { code: "EUR", label: "Euro (EUR €)" },
  { code: "GBP", label: "British Pound (GBP £)" },
];
