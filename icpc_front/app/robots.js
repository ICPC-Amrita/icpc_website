export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: "https://amritaicpc.in/sitemap.xml",
  };
}
