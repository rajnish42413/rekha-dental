import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi2";

interface WarrantyCardProps {
  item: {
    slug: string;
    title: string;
    image: string;
    warranty: string;
    description: string;
    terms: string[];
  };
}

export default function WarrantyCard({ item }: WarrantyCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8DDD1] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="relative h-[250px] overflow-hidden bg-[#FCFAF6]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-2 top-3 flex items-center gap-2 rounded-full border border-[#16412D]/10 bg-brand px-2 py-2 shadow-sm backdrop-blur-sm">
          <HiOutlineClock className="text-base text-yellow" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFFDF9]">
            {item.warranty}
          </span>
        </div>
      </div>

      <div className="space-y-8 p-8">
        <div className="space-y-4">
          <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-[#6B6B6B] leading-relaxed min-h-[50px]">
            {item.description}
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <h4 className="lg:text-md text-sm font-extrabold uppercase tracking-[0.28em] text-yellow">
              Terms & Conditions
            </h4>
          </div>
          <ul className="space-y-2">
            {item.terms.map((term, index) => (
              <li
                key={index}
                className="flex items-start gap-2  leading-6 text-sm text-[#6B6B6B] "
              >
                <span className="min-w-6 font-semibold text-yellow">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
