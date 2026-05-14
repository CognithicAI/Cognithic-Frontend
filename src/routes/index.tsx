import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cognithic Pro — Level Up Your Tech Career" },
      {
        name: "description",
        content:
          "High-performance recruitment engine for senior backend engineers. Mock interviews, system design whiteboard, CV review, and elite hiring pipelines.",
      },
      { property: "og:title", content: "Cognithic Pro — Level Up Your Tech Career" },
      {
        property: "og:description",
        content:
          "Specialized architectural tools and direct access to elite hiring pipelines.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
