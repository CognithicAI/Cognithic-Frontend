import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const fullText = "Level Up Your Tech Career.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="ambitions"
      className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-2"
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
          0%, 100% { opacity: 0.78; box-shadow: 0 0 8px rgba(221, 183, 255, 0.45); }
          50% { opacity: 1; box-shadow: 0 0 16px rgba(221, 183, 255, 0.9); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.8em;
          background: #ddb7ff;
          margin-left: 4px;
          animation: blink 1s infinite;
          vertical-align: middle;
        }
        .voice-bar {
          width: 3px;
          background: #ddb7ff;
          border-radius: 4px;
          animation: wave 1.2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative mx-auto flex w-full max-w-[896px] flex-col items-center text-center">
        <div className="mb-8 box-border flex h-[32px] items-center gap-3 rounded-[12px] border border-[rgba(221,183,255,0.2)] bg-[#1a1a1a] px-6 py-1">
          <div className="flex items-center gap-1 h-3">
            <div className="voice-bar" style={{ animationDelay: '0s' }} />
            <div className="voice-bar" style={{ animationDelay: '0.2s' }} />
            <div className="voice-bar" style={{ animationDelay: '0.4s' }} />
          </div>
          <span
            className="font-mono text-[12px] font-bold uppercase tracking-[1px] text-[#ddb7ff]"
          >
            Simulate a real interview.
          </span>
        </div>

        <h1
          className="min-h-[56px] w-full max-w-[896px] text-center bg-gradient-to-b from-[#e5e2e1] to-[#cfc2d6] bg-clip-text text-[64px] font-bold leading-[1.3] tracking-[-0.04em] text-transparent"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui', marginBottom: '24px' }}
        >
          {text}
          <span className="cursor" />
        </h1>

        <p
          className="mt-4 box-border max-w-[672px] text-[18px] leading-[1.6] font-normal text-[#cfc2d6]"
          style={{ fontFamily: 'Inter, ui-sans-serif' }}
        >
          A structured environment for technical interview practice. Cognithic Pro builds confidence through advanced simulations and preparation tools.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-16 box-border flex h-[64px] w-[538.22px] max-w-[538.22px] items-center bg-[rgba(23,23,23,0.8)] border border-[#262626] rounded-[16px] p-[6px] shadow-[0_0_30px_rgba(183,109,255,0.15)] backdrop-blur-[10px]"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your engineering email..."
            className="h-full flex-1 border-0 bg-transparent px-6 text-[16px] text-[#e5e2e1] placeholder:text-white/20 focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="h-full px-8 rounded-[12px] bg-[#ddb7ff] text-[16px] font-bold text-[#490080] transition-all hover:bg-white"
          >
            Join Waitlist
          </Button>
        </form>

        <p
          className="mt-6 font-mono text-[12px] font-medium leading-[16px] text-[#988d9f] whitespace-nowrap"
          style={{ letterSpacing: '0.6px' }}
        >
          Early access priority given to contributors and high-credit accounts.
        </p>
      </div>
    </section>
  );
}
