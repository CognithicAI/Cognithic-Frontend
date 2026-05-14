export function Footer() {
  return (
    <footer className="z-0 min-h-[60px] py-6 md:py-0 md:h-[57px] w-full flex items-center border-t border-t-[rgba(77,67,84,0.1)] bg-[#0e0e0e]">
      <div className="mx-auto flex flex-col md:flex-row w-full max-w-[1280px] items-center justify-between px-4 gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-[16px] font-bold tracking-[-0.01em] text-[#e5e2e1]">
            Cognithic AI
          </span>

          <span className="font-mono text-[11px] md:text-[12px] font-medium tracking-[0.05em] text-[#cfc2d6]">
            © 2024 Engineering Excellence.
          </span>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#ambitions"
            className="font-mono text-[12px] font-bold leading-4 tracking-[0.05em] text-[#ddb7ff] transition-colors hover:text-[#e8ccff]"
          >
            Join Waitlist
          </a>
          <a
            href="/ambition"
            className="font-mono text-[12px] font-medium leading-4 tracking-[0.05em] text-[#cfc2d6] transition-colors hover:text-[#ddb7ff]"
          >
            Ambitions
          </a>
        </div>
      </div>
    </footer>
  );
}