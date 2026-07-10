

import Image from "next/image";

interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function MilestoneCard({
  item,
  isLeft,
}: {
  item: MilestoneItem;
  isLeft: boolean;
}) {


  return (
    <div
      className={`relative mb-16 flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <div className=" absolute left-1/2 -translate-x-1/2
    h-4 w-4 rounded-full
    border-4 border-[#DDD2C2]
    bg-[#B88A44]
    " />
      <div
        className={`w-full md:w-[45%] bg-[#F5F1EA] border border-[#E0D8CC] p-6 rounded-lg group transform transition-all duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)]
     `}
      >
        <div className="relative w-full h-[200px] mb-5 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-2000 ease-out group-hover:scale-110"
          />
        </div>

        <p className="text-yellow font-extrabold font-header text-lg mb-2">
          {item.year}
        </p>

        <h4 className="font-header text-lg text-[#2C2C2C] mb-2">
          {item.title}
        </h4>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}