
import { steps } from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function HowItWorksSection() {
  return (
    <section className=" py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        <SectionHeader
          tag="HOW IT WORKS"
          title="Six quiet steps. One trip."
        />
        <div className="mt-14 space-y-4">
          {steps.map((step) => {
            return (
              <div
                key={step.id}
                className="
                  group overflow-hidden
                  border border-[#E2D8CA]
                  bg-[#F8F4ED]
                  transition-all duration-500
                  hover:border-[#D3C1A5]
                "
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px]">
                  <div className="px-6 py-8 lg:px-10 lg:py-10">
                    <div className="flex items-center gap-4">
                      <span className="text-xs tracking-[4px] text-[#CBA553]">
                        STEP {step.id}
                      </span>

                      <div className="h-px flex-1 bg-[#E2D8CA]" />
                    </div>

                    <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <h3 className="font-header text-xl leading-none text-[#2E2A27] md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="max-w-xl text-base leading-relaxed text-[#66706C]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                      hidden border-l border-[#E2D8CA]
                      bg-[#F5EFE5]
                      lg:flex lg:items-center lg:justify-center
                    "
                  >
                    <p className="font-header text-7xl leading-none text-[#E7DED1] transition-all duration-500 group-hover:text-[#D7C7B2]">
                      {step.id}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}