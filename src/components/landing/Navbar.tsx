import { useState, useEffect } from "react";
import { SquareTerminal } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 h-16 w-full transition-all duration-300 border-b ${isScrolled
        ? "border-b-[rgba(77,67,84,0.3)] bg-[rgba(19,19,19,0.6)] shadow-[0_0_20px_rgba(183,109,255,0.1)] backdrop-blur-[16px]"
        : "border-b-white/5 bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-8">
        <a href="/" className="flex h-8 items-center gap-2 text-[#ddb7ff] transition-opacity hover:opacity-90">
          <span className="flex h-4 w-5 items-center justify-center text-[#ddb7ff]">
            <SquareTerminal className="h-4 w-5" strokeWidth={2.25} />
          </span>
          <span className="flex h-8 items-center text-[24px] font-bold leading-8 tracking-[-0.0375em] text-[#ddb7ff]">
            Cognithic AI
          </span>
        </a>

        <nav className="ml-auto hidden h-8 items-center gap-6 md:flex">
          <div className="flex h-8 items-start gap-8">
            <a href="/" className="flex h-6 items-center text-[16px] font-normal leading-6 text-[#cfc2d6] transition-colors hover:text-[#ddb7ff]">
              Home
            </a>
            <a href="/ambition" className="flex h-6 items-center text-[16px] font-normal leading-6 text-[#cfc2d6] transition-colors hover:text-[#ddb7ff]">
              Ambitions
            </a>
          </div>

          <span className="h-8 w-px bg-[rgba(77,67,84,0.3)]" aria-hidden="true" />

          <div className="flex h-6 items-center rounded-[12px] bg-[rgba(221,183,255,0.1)] px-3 py-1 text-[#ddb7ff]">
            <span className="font-mono text-[12px] font-medium uppercase leading-4 tracking-[0.1em]">
              +5 credit for early bird
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}