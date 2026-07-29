import { notFound } from "next/navigation";
import SpecialtiesGrid from "@/components/appointment/specialitiesGrid";
import Highlights from "@/components/appointment/highlights";
import VisitCard from "@/components/appointment/visitCard";
import SectionHeader from "@/components/general/sectionHeader";
import { centerDetails, centers } from "@/data/appointment";
import { Metadata } from "next";
import { FRONTEND_URL } from "@/utils/endpoints";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const center = centers.find((c) => c.slug === slug);
  const details = centerDetails.find((c) => c.slug === slug);

  if (!center || !details) {
    return {};
  }

  const title = `Rekha Dental`;
  const description = details.description;

  const image =
    "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275216/20260202_165005_gqw0fw.jpg";

  return {
    metadataBase: new URL(FRONTEND_URL),

    title,

    description,

    keywords: [
      "Rekha Dental",
      "Dental Clinic",
      "Dentist Ghaziabad",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Root Canal Treatment",
      "Smile Makeover",
      "Dental Care",
    ],

    alternates: {
      canonical: `${FRONTEND_URL}/appointment/${slug}`,
    },

    openGraph: {
      title,
      description,
      url: `${FRONTEND_URL}/appointment/${slug}`,
      siteName: "Rekha Dental",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: center.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
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
