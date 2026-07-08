import { MdVerified } from "react-icons/md";

interface Props {
  highlights: string[];
}

export default function Highlights({ highlights }: Props) {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-6">
        <MdVerified size={14} />
        <span>Centre Highlights</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="border border-[#D6D0C6] bg-[#F5F5EC] px-5 py-4 text-sm text-[#3E3E3E]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}