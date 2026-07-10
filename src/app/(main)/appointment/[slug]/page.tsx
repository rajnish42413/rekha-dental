import { notFound } from "next/navigation";
import { centerDetails, centers } from "@/utils/constants";
import SpecialtiesGrid from "@/components/appointment/specialitiesGrid";
import Highlights from "@/components/appointment/highlights";
import VisitCard from "@/components/appointment/visitCard";
import SectionHeader from "@/components/general/sectionHeader";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const center = centers.find((c) => c.slug === slug);

  const details = centerDetails.find((c) => c.slug === slug);

  if (!center || !details) {
    notFound();
  }

  return (
    <>
     
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">
          <div>
            <SectionHeader
              tag="About The Centre"
              title={details.heading}
              subtitle={details.description}
              align="left"
            />
            <SpecialtiesGrid specialties={details.specialties} />
            <Highlights highlights={details.highlights} />
          </div>
          <VisitCard center={center} />
        </div>
      </section>
    </>
  );
}
