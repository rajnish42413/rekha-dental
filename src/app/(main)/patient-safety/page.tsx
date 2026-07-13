import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { advancedDentalTechnologies, patientFriendlyCare, sterilizationProcess } from "@/data/dentalPlans";



function page() {
  return (
    <div className="pt-10">
      <SectionHeader
        tag="PATIENT-FIRST APPROACH"
        title="Comfortable care designed around you."
        subtitle="From personalized treatment plans to a welcoming environment, we ensure every patient feels heard, supported, and confident throughout their dental journey."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {patientFriendlyCare.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="ADVANCED STERILIZATION"
        title="Safety and hygiene without compromise."
        subtitle="Our rigorous sterilization protocols and infection-control standards ensure a clean, safe, and worry-free experience for every patient."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {sterilizationProcess.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="MODERN DENTAL TECHNOLOGY"
        title="Precision dentistry powered by innovation."
        subtitle="We utilize cutting-edge diagnostic tools and advanced treatment technologies to deliver accurate, efficient, and predictable dental care."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {advancedDentalTechnologies.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
