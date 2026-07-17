

import SectionHeader from "../general/sectionHeader";

const clinicLocations = [
  {
    title: "Rekha Dental",
    address:
      "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001",

    map: "https://www.google.com/maps?q=House+No+622+First+Floor+Satyam+Enclave+New+Kotgaon+Ghaziabad&output=embed",
  },

  {
    title:
      "Rekha Dental",
    address:
      "A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",

    map: "https://www.google.com/maps?q=Raj+Nagar+Residency+KW+Delhi+6+Mall+Ghaziabad&output=embed",
  },
];

export default function ContactMapSection() {
  return (
    <section className="px-6 lg:py-16 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Locations"
          title="Visit Our Clinics"
          subtitle="Experience advanced dental care at our modern clinics in Ghaziabad, designed for comfort, accessibility, and precision-driven treatment."
        />

        <div className="lg:mt-14 mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {clinicLocations.map((clinic) => (
            <div
              key={clinic.title}
              className="overflow-hidden border border-[#E5DED2] bg-white shadow-sm"
            >
              <div className="relative h-[420px] w-full overflow-hidden">
                <iframe
                  src={clinic.map}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 "
                />
              </div>
              <div className="border-t border-[#EFE7DB] p-6">
                <h3 className="font-header lg:text-2xl text-xl text-[#2C2C2C]">
                  {clinic.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                  {clinic.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}