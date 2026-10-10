export type Project = {
  name: string;
  description: string;
  url: string;
  /** Short category shown on the portal card. */
  tag: string;
  /** Neon colours (primary / secondary) used for the card's border and glow. */
  accent: [string, string];
};

export const projects: Project[] = [
  {
    name: "Jewelry E-commerce",
    tag: "E-commerce",
    accent: ["#ffb020", "#ff2bd6"],
    description:
      "A fine-jewelry storefront rebuilt from WordPress into a fast, custom shopping experience with a modern cart and product flow.",
    url: "https://jewelry-ecommerce-demo.vercel.app/",
  },
  {
    name: "Aurea Plastic Surgery",
    tag: "Healthcare",
    accent: ["#ff2bd6", "#a855f7"],
    description:
      "A premium plastic surgery practice site, redesigned with a refined visual identity and a smoother patient journey.",
    url: "https://aurea-plastic-surgery-demo.vercel.app/",
  },
  {
    name: "Relevé Studio",
    tag: "Dance studio",
    accent: ["#a855f7", "#22d3ee"],
    description:
      "A dance studio's web presence reimagined with elegant motion, clean typography, and a lightweight modern front end.",
    url: "https://releve-studio-next.vercel.app/",
  },
  {
    name: "ATLAS Skincare",
    tag: "Skincare store",
    accent: ["#22d3ee", "#b6ff3b"],
    description:
      "A bilingual (ES/EN) skincare storefront rebuilt from WordPress and WooCommerce, with a custom bag, checkout, and an Ambassadors program for hotels and spas.",
    url: "https://atlas-care-next.vercel.app/",
  },
  {
    name: "Skillia",
    tag: "AI training",
    accent: ["#b6ff3b", "#22d3ee"],
    description:
      "A corporate AI-training program site rebuilt from WordPress, with an interactive company-size plan selector and a roaming robot mascot that guides visitors across the page.",
    url: "https://skillia-next.vercel.app/",
  },
  {
    name: "PURA BULLA",
    tag: "Music & media",
    accent: ["#d6ff1f", "#ff2d8f"],
    description:
      "A Latin American creative collective's music-and-media site, built from scratch with an animated mascot preloader, editorial layouts, and a booking and media-placement service for artists.",
    url: "https://pura-bulla.vercel.app/",
  },
];
