
import { serviceCards } from "@/utils/constants";
import ServiceCard from "../services/serviceCard";
import SectionHeader from "../general/sectionHeader";
import Link from "next/link";

function ServiceGridLand() {
  return (
    <section className="bg-[#EAE4DB] py-10 lg:py-24">
      <SectionHeader
        tag="SIGNATURE SERVICES"
        title="Treatments crafted with patience and precision."
        subtitle="From same-day implants to the gentlest first visits, our specialists offer the full breadth of modern dentistry under one roof."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {serviceCards.slice(0, 3).map((service,) => (
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
      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="flex h-12 items-center justify-center border
    border-[#1F3D2B] px-10 text-center text-sm uppercase tracking-wide
    text-[#1F3D2B] transition-all duration-200 hover:bg-[#1F3D2B]
    hover:text-white active:scale-[0.98] cursor-pointer"
        >
          VIEW ALL TREATMENTS
        </Link>
      </div>
    </section>
  );
}

export default ServiceGridLand;
