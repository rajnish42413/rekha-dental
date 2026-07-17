import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/general/sectionHeader";

interface ProcessStep {
  index: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceProcessProps {
  process: {
    tag: string;
    title: string;
    steps: ProcessStep[];
  };
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  return (
    <section className="lg:py-14 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag={process.tag} title={process.title} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {process.steps.map((step, i) => (
            <div
              key={i}
              className="group bg-[#F5F1EA] border rounded-lg border-[#E0D8CC] overflow-hidden hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-[180px] lg:h-[220px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="lg:p-6 p-4">
                <p className="text-yellow text-sm mb-2 font-extrabold tracking-[2px]">{step.index}</p>
                <h4 className="font-header text-lg text-[#2C2C2C] mb-3">{step.title}</h4>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};