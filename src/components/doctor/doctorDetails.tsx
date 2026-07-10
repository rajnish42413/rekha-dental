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
    <section className="w-full  py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-[#E6E0D5] p-8 bg-[#F4EFE6]">
          <div>
            <div className="flex items-center text-sm tracking-[1px] text-[#B89B5E] uppercase font-bold gap-2 mb-6">
              <FaGraduationCap size={14} />
              <span>Qualifications</span>
            </div>
            <div className="flex flex-col">
              {data.qualifications.map((item, index) => (
                <div
                  key={index}
                  className={`py-4 text-[#11261B] text-sm font-medium ${
                    index !== data.qualifications.length - 1
                      ? "border-b border-[#E6E0D5]"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-2  mb-4 text-sm tracking-[1px] text-[#B89B5E] uppercase font-bold">
              <GiWorld size={14} />
              <span>Languages</span>
            </div>
            <p className="text-[#11261B] text-sm font-medium">
              {data.languages.join(" · ")}
            </p>
          </div>
        </div>
        <div className="border border-[#E6E0D5] p-8 bg-[#F4EFE6]">
          <div>
            <div className="flex items-center gap-2  mb-6 text-sm tracking-[1px] text-[#B89B5E] uppercase font-bold">
              <FaStethoscope size={14} />
              <span>Areas of Practice</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.practiceAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-[#DCD5C9] px-4 py-3 text-sm font-medium text-[#11261B] bg-[#EBE4D7]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-2  mb-4 text-sm tracking-[1px] text-[#B89B5E] uppercase font-bold">
              <MdVerified size={14} />
              <span>Memberships</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.memberships.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#DCD5C9] px-4 py-2 text-xs tracking-[2px] font-medium text-[#11261B] bg-[#EBE4D7]"
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