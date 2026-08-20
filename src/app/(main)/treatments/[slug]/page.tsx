import { notFound } from "next/navigation";
import { Metadata } from "next";
import Banner from "@/components/general/generalBanner";
import { FRONTEND_URL } from "@/utils/endpoints";
import { serviceDetails } from "@/data/service";
import { ServiceOverview } from "@/components/serviceDetails/serviceOverview";
import { ServicePricing } from "@/components/serviceDetails/servicePricing";
import { ServiceProcess } from "@/components/serviceDetails/serviceProcess";
import { ServiceCTA } from "@/components/serviceDetails/serviceCTA";
import { ServiceFAQ } from "@/components/serviceDetails/serviceFAQ";
import { ServiceWhyChoose } from "@/components/serviceDetails/serviceWhyChoose";
import { ServiceCandidate } from "@/components/serviceDetails/serviceCandidate";
import { ServiceBenefits } from "@/components/serviceDetails/serviceBenefits";
import { ServiceRecovery } from "@/components/serviceDetails/serviceRecovery";
import { ServiceAftercare } from "@/components/serviceDetails/serviceAfterCare";
import { ServiceWhyClinic } from "@/components/serviceDetails/serviceWhyClinic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Treatment Not Found | Rekha Dental",
      description: "The requested dental treatment page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    metadataBase: new URL(FRONTEND_URL),

    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,

    alternates: {
      canonical: `${FRONTEND_URL}/treatments/${service.slug}`,
    },

    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${FRONTEND_URL}/treatments/${service.slug}`,
      siteName: "Rekha Dental",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${FRONTEND_URL}${service.hero.image}`,
          width: 1200,
          height: 630,
          alt: service.hero.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [`${FRONTEND_URL}${service.hero.image}`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="">
      <Banner
        imageSrc={service.hero.image}
        tag=""
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        overlayColor=""
        objectFill={true}
      />
      <ServiceOverview
        overview={service.overview}
        technology={service.technology}
      />
      <ServiceWhyChoose whyChoose={service.whyChoose} />
      <ServiceCandidate candidate={service.candidate} />
      <ServiceBenefits benefits={service.benefits} />
      <ServicePricing treatments={service.treatments} />
      <ServiceRecovery recovery={service.recovery} />
      <ServiceWhyClinic whyClinic={service.whyClinic} />
      <ServiceAftercare aftercare={service.aftercare} />
      <ServiceProcess process={service.process} />
      <ServiceCTA />
      <ServiceFAQ faqs={service.faqs} />
    </div>
  );
}
