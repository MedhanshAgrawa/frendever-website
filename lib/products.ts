export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  materials: string[];
  finishes: string[];
  useCases: string[];
  minLeadTime: string;
  featureTag: string;
};

export const products: Product[] = [
  {
    "slug": "waxed-canvas-utility-bags",
    "name": "Waxed Canvas Utility Bags",
    "category": "Bags and totes",
    "image": "/images/tote-tan.jpg",
    "gallery": [
      "/images/tote-tan.jpg",
      "/images/tote-tan-2.jpg",
      "/images/tote-small.jpg"
    ],
    "description": "Structured utility bags built for everyday durability, premium visual appeal, and private label flexibility.",
    "highlights": [
      "Waxed canvas and heavy cotton options",
      "Retail-ready shape and premium hand feel",
      "Custom handles, trims, hardware, and labels"
    ],
    "materials": [
      "Waxed cotton",
      "Canvas",
      "Cotton",
      "Recycled trims"
    ],
    "finishes": [
      "Washing",
      "Screen printing",
      "Embroidery",
      "Waterproofing"
    ],
    "useCases": [
      "Retail collections",
      "Lifestyle gifting",
      "Promotional programs",
      "Hospitality and amenity kits"
    ],
    "minLeadTime": "Approx. 90 days",
    "featureTag": "Signature strength"
  },
  {
    "slug": "premium-aprons",
    "name": "Premium Aprons",
    "category": "Aprons",
    "image": "/images/apron-brown.jpg",
    "gallery": [
      "/images/apron-brown.jpg",
      "/images/apron-denim.jpg",
      "/images/apron-light.jpg"
    ],
    "description": "Workwear-inspired aprons engineered for hospitality, retail, gifting, and home kitchen programs.",
    "highlights": [
      "Cross-back and neck-loop constructions",
      "Washed denim, canvas, and cotton options",
      "Buyer-specific labeling and packaging"
    ],
    "materials": [
      "Denim",
      "Canvas",
      "Cotton",
      "Jacquards"
    ],
    "finishes": [
      "Washing",
      "Embroidery",
      "Digital printing"
    ],
    "useCases": [
      "Hospitality uniforms",
      "Food and beverage brands",
      "Gift sets",
      "Merchandising collections"
    ],
    "minLeadTime": "Approx. 90 days",
    "featureTag": "Best-seller"
  },
  {
    "slug": "structured-storage-solutions",
    "name": "Structured Storage Solutions",
    "category": "Storage items",
    "image": "/images/storage-check.jpg",
    "gallery": [
      "/images/storage-check.jpg",
      "/images/storage-blue.jpg",
      "/images/storage-green.jpg",
      "/images/storage-blue-2.jpg"
    ],
    "description": "Soft-structure storage products for home, nursery, gifting, and retail merchandising programs.",
    "highlights": [
      "Foldable and basket-style formats",
      "Printed, jacquard, and woven constructions",
      "Strong utility with buyer-friendly customization"
    ],
    "materials": [
      "Cotton",
      "Polyester and blends",
      "Jacquards",
      "Recycled fabrics"
    ],
    "finishes": [
      "Lamination",
      "Screen printing",
      "Dyeing"
    ],
    "useCases": [
      "Home organization",
      "Kids and nursery",
      "Retail displays",
      "Seasonal programs"
    ],
    "minLeadTime": "Approx. 90 days",
    "featureTag": "Repeat program"
  },
  {
    "slug": "kitchen-and-table-textiles",
    "name": "Kitchen & Table Textiles",
    "category": "Kitchen textiles",
    "image": "/images/kitchen-textile-1.png",
    "gallery": [
      "/images/kitchen-textile-1.png",
      "/images/storage-check.jpg",
      "/images/apron-light.jpg"
    ],
    "description": "Buyer-led table and kitchen developments with flexible sourcing, printability, and coordinated packaging.",
    "highlights": [
      "Aprons, utility pieces, and table programs",
      "Merchandise-ready coordination by range",
      "Strong fit for private label assortments"
    ],
    "materials": [
      "Cotton",
      "Linen",
      "Jacquards",
      "Canvas"
    ],
    "finishes": [
      "Screen printing",
      "Digital printing",
      "Embroidery",
      "Starching"
    ],
    "useCases": [
      "Home collections",
      "Seasonal launches",
      "Retail assortments",
      "Gifting"
    ],
    "minLeadTime": "Approx. 90 days",
    "featureTag": "Custom program"
  }
];

export const productCategories = Array.from(new Set(products.map((product) => product.category)));
