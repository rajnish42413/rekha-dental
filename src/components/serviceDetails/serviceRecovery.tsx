import React from "react";

interface ServiceRecoveryProps {
  recovery: {
    tag: string;
    title: string;
    description: string;
    points: string[];
  };
}

export const ServiceRecovery: React.FC<ServiceRecoveryProps> = ({ recovery }) => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-extrabold tracking-[3px] text-[#CBA553] uppercase mb-3">
            {recovery?.tag}
          </p>
          <h3 className="text-2xl md:text-3xl font-medium text-[#2C2C2C] mb-4 font-header">
            {recovery?.title}
          </h3>
          <p className="text-md text-[#2C2C2C]/80 leading-relaxed font-header">
            {recovery?.description}
          </p>
        </div>
        <div className="space-y-3">
          {recovery?.points.map((pt, idx) => (
            <div key={idx} className="flex gap-4 items-start border-b border-[#CBA553]/10 pb-3 last:border-0">
              <span className="text-xs font-extrabold text-yellow pt-0.5">[{idx + 1}]</span>
              <p className="text-sm font-header text-[#2C2C2C]">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};