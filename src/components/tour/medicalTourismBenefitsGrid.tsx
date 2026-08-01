"use client";

import PillarCard from "@/components/general/pillarCard";
import { medicalTourismBenefits } from "@/data/tourismBenefits";

export default function MedicalTourismBenefitsGrid() {
  return (
    <div className="lg:mt-20 mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mx-10 mx-6">
      {medicalTourismBenefits.map((item) => (
        <PillarCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          number={item.number}
        />
      ))}
    </div>
  );
}
