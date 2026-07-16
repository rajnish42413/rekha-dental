import SectionHeader from "../general/sectionHeader";
import { GiTargetPrize, GiToothbrush } from "react-icons/gi";
import { FaStethoscope, FaRegHeart } from "react-icons/fa";
import { TbEmpathize } from "react-icons/tb";
import DoctorCard, { Doctor } from "./doctorCard";
import { doctorCardDetails } from "@/data/doctorCard";
import { IconType } from "react-icons";
const iconMap: Record<string, IconType> = {
  "gaurav-saxena": GiTargetPrize,
  "mamta-raghav": GiToothbrush,
  "varun-grover": FaStethoscope,
  "azeem-abbasi": FaRegHeart,
  "abhinav-singh": TbEmpathize,
};

function DoctorSection() {
  const typedDoctors: Doctor[] = doctorCardDetails.map((doc) => ({
    ...doc,
    icon: iconMap[doc.slug] || FaStethoscope,
  }));

  return (
    <section className="py-12 lg:py-16  px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      <SectionHeader
        tag="OUR EXPERT DENTISTS"
        title="Meet the specialists behind your radiant smile"
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {typedDoctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}

export default DoctorSection;
