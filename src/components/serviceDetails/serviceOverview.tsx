"use client"
import React, {  useState } from "react";
import { TiTick } from "react-icons/ti";
import EnquiryModal from "../enquiry/enquiryModal";

interface ServiceOverviewProps {
  overview: {
    tag: string;
    description: string;
  };
  technology: {
    tag: string;
    points: string[];
  };
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({ overview, technology }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <section className="lg:py-20 py-10">
      <EnquiryModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
        <div className="col-span-2">
          <p className="text-sm font-extrabold tracking-[3px] text-yellow mb-4 uppercase">
            {overview.tag}
          </p>
          <p className="text-md text-[#2C2C2C] leading-relaxed font-header">
            {overview.description}
          </p>
        </div>
        
        <div className="border-l-2 border-[#CBA553]/40 pl-8">
          <p className="text-sm font-extrabold tracking-[3px] text-yellow mb-4 uppercase">
            {technology.tag}
          </p>
          <ul className="space-y-4">
            {technology.points.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-md font-header text-[#2C2C2C]">
                <span className="text-yellow">
                  <TiTick />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};