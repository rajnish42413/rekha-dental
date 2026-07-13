import CenterCard from "@/components/appointment/centerCard";
import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { appointmentSteps, centers } from "@/data/appointment";


function page() {
  return (
    <div className="pt-10">
      <SectionHeader
        tag="Appointments"
        title="Reserve your visit"
        subtitle="Choose the nearest Rekha Dental centre, explore its specialties, and book a private consultation in minutes."
      />
      <div className="mx-auto my-10 max-w-7xl grid grid-cols-1 gap-8 lg:my-16 lg:grid-cols-2 lg:px-10 px-8">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>
      <div className="lg:my-16 my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-10">
        {appointmentSteps.map((item) => (
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
