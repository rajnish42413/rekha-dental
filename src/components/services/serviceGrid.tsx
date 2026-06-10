import { serviceCards } from "@/utils/constants";
import ServiceCard from "./serviceCard";


function ServiceGrid() {
  return (
    <section className="bg-[#EAE4DB] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCards.map((service) => (
            <ServiceCard
              key={service.id}
              slug={service.slug}
              image={service.image}
              index={service.index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;