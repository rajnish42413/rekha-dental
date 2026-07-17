import React from "react";
import BookAppointmentButton from "@/components/general/bookAppointmentButton";

export const ServiceCTA: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E8DED0] bg-[#FCFAF6] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-xs font-extrabold tracking-[3px] text-yellow mb-4 uppercase">Book Your Consultation</p>
            <h4 className="font-header text-xl md:text-2xl text-[#2C2A27]">Ready to transform your smile?</h4>
            <p className="mt-5 text-[#6F675F] leading-relaxed md:text-md text-sm">
              Schedule an appointment with our dental experts and get a personalized treatment plan tailored to your needs.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <BookAppointmentButton className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};