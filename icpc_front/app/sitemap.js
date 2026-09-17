const siteUrl = "https://amritaicpc.in";

const routes = [
  "",
  "/beginner-guide",
  "/why-choose-amrita",
  "/why-sponsor-us",
  "/contest-guidelines",
  "/team-selection-process",
  "/onsite-selection-process",
  "/onsite-schedule",
  "/organizers",
  "/gallery",
  "/halloffame",
  "/ambassador",
  "/ambassador-program",
  "/promote",
  "/reach-us/amritapuri",
  "/reach-us/bengaluru",
  "/reach-us/coimbatore",
  "/reach-us/mysuru",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
