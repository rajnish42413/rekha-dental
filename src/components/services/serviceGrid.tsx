
import { serviceCards } from "@/data/service";
import ServiceCard from "./serviceCard";


function ServiceGrid() {
  return (
    <section className="bg-[#EAE4DB] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {serviceCards.map((service) => (
            <ServiceCard
              key={service.id}
              slug={service.slug}
              image={service.image}
              index={service.index}
              title={service.title}
              description={service.description}
              discount={service.discount}
              startingPrice={service.startingPrice}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;