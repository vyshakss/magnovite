import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { META } from "@/components/HomePage/HomePage.data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META.title },
      { name: "description", content: META.description },
      { property: "og:title", content: META.title },
      { property: "og:description", content: META.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
