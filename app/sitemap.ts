import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.frendevertextiles.com";

  const staticPages = ["", "/about", "/products", "/capabilities", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...productPages];
}
