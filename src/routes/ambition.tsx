import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import {
  Sparkles,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/ambition")({
  head: () => ({
    meta: [
      { title: "Ambition — Real Prep vs. Perception | Cognithic Pro" },
      {
        name: "description",
        content: "Are you actually ready for your next interview? Bridge the gap between confidence and competence with Cognithic AI.",
      },
    ],
  }),
  component: Ambition,
});

function Ambition() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero / Reality Check Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-8 md:py-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[10%] w-[40%] h-[60%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[60%] bg-secondary/10 blur-[120px] rounded-full animate-pulse duration-5000" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-semibold border rounded-full border-primary/30 bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-[0_0_15px_rgba(183,109,255,0.2)]">
            <HelpCircle className="w-4 h-4" />
            <span>A Reality Check</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-10 max-w-5xl mx-auto leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Did you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">actually</span> prepare for your interview
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-10 max-w-5xl mx-auto leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000"> and gain confidence?

          </h1>

          <p className="text-lg md:text-xl font-light text-muted-foreground mb-08 italic animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            ...or did you just <span className="text-secondary font-medium drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">think</span> you were?
          </p>



          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(183,109,255,0.4)] group"
            >
              New Experience Coming Soon!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
