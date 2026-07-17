import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookAppointmentButton from "../general/bookAppointmentButton";
import { WHATSAPP_NUMBER } from "@/utils/endpoints";
import { FaWhatsapp } from "react-icons/fa6";

export interface Doctor {
  name: string;
  title: string;
  specialty: string;
  image: string;
  slug: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { name, title, image} = doctor;
  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in booking an appointment with ${name}. Could you please share the available slots?`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#F5F1EA] rounded-xl group transition-all duration-700 hover:-translate-y-1 hover:shadow-xl relative hover:z-30 focus-within:z-30">
    <div className="relative block w-full h-[320px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width:768px) 100vw, 33vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105 rounded-t-lg"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-80" />
    </div>

    <div className="px-6 py-4">
      <p className="text-[11px] tracking-[2px] uppercase font-extrabold text-yellow mb-3">
        {title}
      </p>
      <h3 className="font-header text-xl font-semibold text-[#2C2C2C] leading-tight">
        {name}
      </h3>
    </div>
    
    {/* 
      Note: Removed 'z-50' wrapper here because 'relative' with z-indices 
      is now handled gracefully at the card level and button level.
    */}
    <div className="flex justify-between items-center px-6 py-4">
      <div>
        <BookAppointmentButton />
      </div>
      <Link
        href={whatsappLink}
        target="_blank"
        className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center"
      >
        <FaWhatsapp className="text-xl" />
      </Link>
    </div>
  </div>
  );
};

export default DoctorCard;
