import { Compass, FileText, Link, Mail, UsersRound } from "lucide-react";


function SpecTag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex h-[28px] items-center rounded-[2px] bg-[rgba(221,183,255,0.1)] px-3 font-mono text-[14px] font-normal leading-5 text-[#ddb7ff] ${className}`}
    >
      {label}
    </span>
  );
}

export function Features() {
  return (
    <section id="interviews" className="px-4 pb-20 pt-4 md:px-6 md:pb-24">
      <div className="mx-auto grid max-w-[1280px] gap-3 md:grid-cols-12 md:gap-4">
        <div className="box-border flex min-h-[320px] flex-col justify-between rounded-[8px] border border-[#262626] bg-[rgba(23,23,23,0.8)] p-8 backdrop-blur-[10px] md:col-span-7">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <UsersRound className="h-[23.69px] w-[27.5px] shrink-0 text-[#ddb7ff]" strokeWidth={1.75} />
              <h3 className="h-8 w-[375px] text-[24px] font-semibold leading-8 tracking-[-0.24px] text-[#e5e2e1]">
                Desired Domain Mock Interviews
              </h3>
            </div>

            <p className="h-12 max-w-[448px] text-[16px] leading-6 text-[#cfc2d6]">
              Train and build the system specially focused for fresher, confidence gain and Skill enhancement
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-8">
            <SpecTag label="GO_RUNTIME" className="w-[108px]" />
            <SpecTag label="DISTRIBUTED_SYSTEMS" className="w-[183.61px]" />
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[8px] border border-[rgba(77,67,84,0.3)] bg-[#201F1F] md:col-span-5 md:h-[314px]">
          <img
            src="/system-design.jpg"
            alt="System Design Whiteboard"
            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity group-hover:opacity-60"
          />

          <div className="relative z-10 flex h-full flex-col justify-end bg-[linear-gradient(0deg,#131313_0%,rgba(19,19,19,0)_100%)] px-8 pb-8 pt-[158px]">
            <Compass className="h-[18px] w-full text-[#fabc4e]" strokeWidth={1.75} />

            <div className="mt-4 flex flex-col gap-3">
              <h3 className="h-8 max-w-[431.33px] text-[24px] font-semibold leading-8 tracking-[-0.24px] text-[#e5e2e1]">
                System Design Whiteboard (Pro Plan)
              </h3>
              <p className="h-12 max-w-[431.33px] text-[16px] leading-6 text-[#cfc2d6]">
                Real-time collaborative diagramming with AI-assisted capacity planning.
              </p>
            </div>
          </div>
        </div>

        <div className="box-border flex h-[228px] flex-col items-start gap-4 rounded-[8px] border border-[rgba(77,67,84,0.3)] bg-[#201F1F] p-8 md:col-span-4">
          <FileText className="h-[18px] w-[20px] text-[#ddb7ff]" strokeWidth={1.75} />

          <h3 className="h-8 w-[328.67px] pt-2 text-[24px] font-semibold leading-8 tracking-[-0.24px] text-[#e5e2e1]">
            Curriculum Vitae Reviewer
          </h3>

          <p className="h-[72px] w-[328.67px] text-[16px] leading-6 text-[#cfc2d6]">
            Review your CV and get the suggestion and recommendation based on job description.
          </p>
        </div>

        <div className="box-border flex h-[234px] flex-col items-start gap-4 rounded-[8px] border border-[#262626] bg-[rgba(23,23,23,0.8)] p-8 shadow-[0_0_30px_rgba(183,109,255,0.15)] backdrop-blur-[10px] md:col-span-5">
          <Mail className="h-[19px] w-[21px] text-[#ddb7ff]" strokeWidth={1.75} />

          <h3 className="h-8 w-full max-w-[460px] pt-2 text-[24px] font-semibold leading-8 tracking-[-0.24px] text-[#e5e2e1]">
            Immediate Interview feedback
          </h3>

          <p className="h-[72px] w-full max-w-[460px] text-[16px] leading-6 text-[#cfc2d6]">
            Get the immediate interview review and feedback based on your CV, your domain, and the answers of the question and stuffs that are needed to improve.
          </p>
        </div>

        <div className="box-border flex h-[234px] flex-col items-start justify-center gap-4 rounded-[8px] border border-[rgba(77,67,84,0.2)] bg-[rgba(221,183,255,0.05)] p-8 md:col-span-3">
          <div className="flex h-12 items-center">
            <div className="-mr-4 box-border flex h-12 w-12 items-center justify-center rounded-[12px] border-2 border-[#131313] bg-[#201F1F]">
              <Link className="h-4 w-4 text-[#cfc2d6]" strokeWidth={1.75} />
            </div>
          </div>
          <h4 className="h-8 w-full max-w-[320px] pt-2 text-[24px] font-semibold leading-8 tracking-[-0.24px] text-[#e5e2e1]">
            LinkedIn Content
          </h4>
          <p className="h-[72px] w-full max-w-[320px] text-[16px] leading-6 text-[#cfc2d6]">
            Build profile-ready posts and optimize your visibility for hiring teams.
          </p>
        </div>
      </div>
    </section>
  );
}
