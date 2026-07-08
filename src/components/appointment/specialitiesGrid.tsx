import { FaStethoscope } from "react-icons/fa";

interface Props {
  specialties: string[];
}

export default function SpecialtiesGrid({ specialties }: Props) {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-6">
        <FaStethoscope size={14} />
        <span>Specialties</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="border border-[#D6D0C6] bg-[#F5F5EC] px-5 py-4 text-sm text-[#3E3E3E] transition "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}