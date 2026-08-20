import SectionHeader from "../general/sectionHeader";

const clinicLocations = [
  {
    title: "Rekha Dental",
    key: "kotgaon",
    address:
      "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001",

    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56033.9451957069!2d77.33762498921469!3d28.62611818153247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1d958574ff5%3A0x4c701b6a007f2fe1!2sRekha%20Dental%20Clinic%20Ghaziabad!5e0!3m2!1sen!2sin!4v1787134110117!5m2!1sen!2sin",
  },

  {
    title: "Rekha Dental",
    key: "raj-nagar",
    address:
      "A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",

    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55995.74214301063!2d77.3604164486328!3d28.697606099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0e3e6b02e07%3A0x6964788533d0b886!2sRekha%20Dental%20-%20Raj%20Nagar%20Extension%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1787134213856!5m2!1sen!2sin",
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
              key={clinic.key}
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
