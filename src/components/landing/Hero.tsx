import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="ambitions"
      className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 50% 18%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 62%), radial-gradient(700px 340px at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%), linear-gradient(180deg, rgba(19,19,19,0.96) 0%, rgba(19,19,19,0.88) 40%, rgba(19,19,19,0.98) 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_40%,rgba(156,95,255,0.2),transparent_60%)] blur-3xl" />

      <style>{`
        @keyframes heroDotGlow {
          0%,
          100% {
            opacity: 0.78;
            box-shadow: 0 0 8px rgba(221, 183, 255, 0.45), 0 0 16px rgba(221, 183, 255, 0.2);
            transform: scale(1);
          }

          50% {
            opacity: 1;
            box-shadow: 0 0 12px rgba(221, 183, 255, 0.9), 0 0 24px rgba(221, 183, 255, 0.45);
            transform: scale(1.08);
          }
        }
      `}</style>

      <div className="relative mx-auto flex w-full max-w-[896px] flex-col items-center text-center">
        <div className="mb-8 box-border flex h-[26px] w-[213px] items-center gap-2 rounded-[12px] border border-[rgba(77,67,84,0.5)] bg-[#201f1f] px-3 py-1">
          <span
            className="block h-[8px] w-[8px] min-w-[8px] flex-shrink-0 rounded-full bg-[#ddb7ff]"
            style={{ borderRadius: '50%', animation: 'heroDotGlow 2.2s ease-in-out infinite' }}
          />
          <span
            className="w-[171px] h-[16px] flex items-center justify-center text-center font-medium text-[12px] leading-[16px] uppercase text-[#ddb7ff] whitespace-nowrap"
            style={{ fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Monaco, "Roboto Mono", "Courier New", monospace', letterSpacing: '0.6px' }}
          >
            BUILT FOR TECH, BY TECH
          </span>
        </div>

        <h1
          className="w-[691px] max-w-[896px] h-[56px] box-border text-center bg-gradient-to-b from-[#e5e2e1] to-[#cfc2d6] bg-clip-text text-[48px] font-bold leading-[56px] tracking-[-0.96px] text-transparent"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', marginBottom: '24px' }}
        >
          Level Up Your Tech Career.
        </h1>

        <p
          className="mt-6 box-border w-[672px] max-w-[672px] h-[48px] px-[17.11px] flex items-center justify-center text-center text-[16px] leading-[24px] font-normal text-[#cfc2d6]"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
        >
          A structured environment for technical interview practice. Cognithic Pro builds confidence through advanced simulations and preparation tools.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-20 box-border flex h-[58px] w-[448px] max-w-[448px] items-center bg-[rgba(23,23,23,0.8)] border border-[#262626] rounded-[12px] p-[4px] shadow-[0_0_30px_rgba(183,109,255,0.15)] backdrop-blur-[10px]"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your engineering email..."
            className="h-[47px] w-[282px] flex-none border-0 bg-transparent px-[24px] py-[14px] text-[16px] leading-[19px] text-[#e5e2e1] placeholder:text-[rgba(152,141,159,0.5)] focus-visible:ring-0"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
          />
          <Button
            type="submit"
            className="h-[48px] w-[160px] flex-none rounded-[12px] bg-[#ddb7ff] py-[12px] px-[32px] text-[16px] font-bold text-[#490080] transition-colors hover:bg-[#e7c9ff]"
            style={{ boxShadow: "0 0 30px rgba(183,109,255,0.15)" }}
          >
            Join Waitlist
          </Button>
        </form>

        <p
          className="mt-4 box-border w-[538.22px] h-[32px] flex items-center justify-center text-center text-[12px] font-medium leading-[16px] text-[#988d9f] whitespace-nowrap"
          style={{ fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', letterSpacing: '0.6px' }}
        >
          Early access priority given to contributors and high-credit accounts.
        </p>
      </div>
    </section>
  );
}
