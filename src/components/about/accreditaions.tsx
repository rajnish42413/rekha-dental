import Image from "next/image";
import SectionHeader from "@/components/general/sectionHeader";
import { PiCertificate } from "react-icons/pi";

interface AccreditationsProps {
  tag: string;
  title: string;
  items: string[];
}

export default function AccreditationsSection({
  tag,
  title,
  items,
}: AccreditationsProps) {
  return (
    <section className="bg-[#EAE4DB] pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag={tag} title={title} />

        <div className="lg:mt-16 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="absolute -top-3 -left-3 z-10 bg-white rounded-full p-2 shadow-md">
                <PiCertificate size={38} className="text-[#CBA553]"/>
              </div>
              <div className="relative w-full h-[250px] lg:h-[300px] bg-white rounded-xl border border-[#E0D8CC] shadow-sm overflow-hidden">
                <Image
                  src={item}
                  alt={`Certificate ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw"
                  className="p-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
