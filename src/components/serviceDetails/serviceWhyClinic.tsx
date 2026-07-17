import React from "react";

interface ServiceWhyClinicProps {
  whyClinic: {
    tag: string;
    title: string;
    points: { title: string; description: string }[];
  };
}

export const ServiceWhyClinic: React.FC<ServiceWhyClinicProps> = ({ whyClinic }) => {
  return (
    <section className="py-12 lg:py-16 bg-brand text-[#EAE4DB] my-6">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-extrabold tracking-[3px] text-yellow uppercase mb-3">
          {whyClinic?.tag}
        </p>
        <h3 className="text-2xl md:text-3xl font-light mb-12 font-header">
          {whyClinic?.title}
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {whyClinic?.points.map((pt, idx) => (
            <div key={idx} className=" pt-6 flex flex-col gap-2">
              <h4 className="text-md font-bold text-yellow font-header">{pt.title}</h4>
              <p className="text-sm text-[#EAE4DB]/80 leading-relaxed">{pt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};