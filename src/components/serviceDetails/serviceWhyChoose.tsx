import React from "react";

interface ServiceWhyChooseProps {
  whyChoose: {
    tag: string;
    title: string;
    points: { title: string; description: string }[];
  };
}

export const ServiceWhyChoose: React.FC<ServiceWhyChooseProps> = ({ whyChoose }) => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-extrabold tracking-[3px] text-yellow uppercase mb-3">
          {whyChoose?.tag}
        </p>
        <h3 className="text-2xl md:text-3xl font-light text-[#2C2C2C] mb-12 font-header">
          {whyChoose?.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {whyChoose?.points.map((pt, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-xs font-mono text-yellow font-extrabold">0{idx + 1}.</span>
              <h4 className="text-xl font-medium text-[#2C2C2C] font-header">{pt.title}</h4>
              <p className="text-md text-[#2C2C2C] leading-relaxed font-header">{pt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};