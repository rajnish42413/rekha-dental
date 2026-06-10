import React from "react";
import SectionHeader from "../general/sectionHeader";
import { pillars } from "@/utils/constants";
import PillarCard from "../general/pillarCard";

function Pillars() {
  return (
    <div className="bg-[#EAE4DB] py-10">
      <SectionHeader
        tag="WHY REKHA DENTAL CARE"
        title="Four pillars of our practice."
      />
      <div className="lg:mt-16 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {pillars.map((item) => (
           <PillarCard
           key={item.id}
           title={item.title}
           description={item.description}
           icon={item.icon}
           number={item.number}
         />
        ))}
      </div>
    </div>
  );
}

export default Pillars;
