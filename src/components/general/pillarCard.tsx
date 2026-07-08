import React from "react";

interface PillarCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
}

function PillarCard({
  title,
  description,
  icon,
  number,
}: PillarCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl
      border border-[#E8DED0] bg-[#FCFAF6]
      p-7 transition-all duration-500
      hover:-translate-y-2
      hover:border-[#D9C5A1]
      hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]"
    >
      <div
        className="absolute right-6 top-5 font-header text-4xl lg:text-6xl
        leading-none text-[#ECE4D8] transition duration-500
        group-hover:text-[#E1D4BF]"
      >
        {number}
      </div>

      <div
        className="relative z-10 flex lg:h-16 lg:w-16 h-12 w-12 items-center
        justify-center rounded-2xl border border-[#E7DDD0]
        bg-[#F3ECE1] text-2xl text-[#163828]
        transition-all duration-500"
      >
        {icon}
      </div>
      <div className="relative z-10 lg:mt-8 mt-4">
        <h3
          className="font-header font-semibold text-xl lg:text-2xl leading-tight
          text-[#2C2A27]"
        >
          {title}
        </h3>
        <p
          className="mt-5 text-sm md:text-base lg:leading-7 leading-6 text-[#66625C] 
          "
        >
          {description}
        </p>
      </div>
      <div
        className="absolute -bottom-10 -right-10 h-40 w-40
        rounded-full bg-[#EFE5D7] opacity-0 blur-3xl
        transition-all duration-500
        group-hover:opacity-100"
      />
    </div>
  );
}

export default PillarCard;