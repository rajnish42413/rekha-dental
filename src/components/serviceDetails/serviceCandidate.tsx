import React from "react";
import { TiTick } from "react-icons/ti";

interface ServiceCandidateProps {
  candidate: {
    tag: string;
    title: string;
    description: string;
    points: string[];
  };
}

export const ServiceCandidate: React.FC<ServiceCandidateProps> = ({ candidate }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#F3ECE0] rounded-2xl mx-6 my-4">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3">
          <p className="text-sm font-extrabold tracking-[3px] text-[#CBA553] uppercase mb-3">
            {candidate?.tag}
          </p>
          <h3 className="text-2xl md:text-3xl font-light text-[#2C2C2C] mb-4 font-header">
            {candidate?.title}
          </h3>
          <p className="text-md text-[#2C2C2C]/80 leading-relaxed font-header">
            {candidate?.description}
          </p>
        </div>
        <div className="md:col-span-2 bg-[#EAE4DB] p-6 rounded-xl border border-[#CBA553]/20">
          <ul className="space-y-3">
            {candidate?.points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-md font-header text-[#2C2C2C]">
                <span className="text-[#CBA553] shrink-0"><TiTick size={18} /></span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};