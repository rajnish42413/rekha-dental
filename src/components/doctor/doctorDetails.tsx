

import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

interface Props {
  data: {
    qualifications: string[];
    languages: string[];
    practiceAreas: string[];
    memberships: string[];
  };
}

export default function DoctorDetails({ data }: Props) {
  return (
    <section className="w-full bg-[#EAE4DB] py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-[#D6D0C6] p-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-6">
              <FaGraduationCap size={14} />
              <span>Qualifications</span>
            </div>
            <div className="flex flex-col">
              {data.qualifications.map((item, index) => (
                <div
                  key={index}
                  className={`py-4 text-[#3E3E3E] text-sm ${
                    index !== data.qualifications.length - 1
                      ? "border-b border-[#D6D0C6]"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-4">
              <GiWorld size={14} />
              <span>Languages</span>
            </div>
            <p className="text-[#3E3E3E] text-sm">
              {data.languages.join(" · ")}
            </p>
          </div>
        </div>
        <div className="border border-[#D6D0C6] p-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-6">
              <FaStethoscope size={14} />
              <span>Areas of Practice</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.practiceAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-[#D6D0C6] px-4 py-3 text-sm text-[#3E3E3E] bg-[#F5F5EC]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-2 font-semibold text-[#B89B5E] text-xs tracking-[3px] uppercase mb-4">
              <MdVerified size={14} />
              <span>Memberships</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.memberships.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#D6D0C6] px-4 py-2 text-xs tracking-[2px] text-[#3E3E3E] bg-[#F5F5EC]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}