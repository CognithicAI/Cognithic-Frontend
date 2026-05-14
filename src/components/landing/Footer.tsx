export function Footer() {
  return (
    <footer className="z-0 flex h-[57px] w-full items-center border-t border-t-[rgba(77,67,84,0.1)] bg-[#0e0e0e]">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-2">
        <div className="flex h-6 items-center gap-4">
          <div className="flex h-6 items-center">
            <span className="text-[16px] font-bold leading-6 tracking-[-0.01em] text-[#e5e2e1]">
              Cognithic AI
            </span>
          </div>

          <div className="flex h-4 items-center">
            <span className="font-mono text-[12px] font-medium leading-4 tracking-[0.05em] text-[#cfc2d6]">
              © 2024 Engineering Excellence.
            </span>
          </div>
        </div>

        <div className="flex h-4 items-start gap-8">
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