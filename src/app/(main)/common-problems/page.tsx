import FAQ from "@/components/general/faq";
import SectionHeader from "@/components/general/sectionHeader";
import ProblemCard from "@/components/problems/problemCard";
import {
  commonDentalProblems,
  commonDentalProblemsFaq,
} from "@/data/dentalPlans";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Common Dental Problems & Solutions | Rekha Dental",

  description:
    "Learn about common dental problems including tooth pain, cavities, bleeding gums, sensitivity, and expert treatment options.",

  keywords: [
    "tooth pain",
    "bleeding gums",
    "tooth sensitivity",
    "cavities treatment",
    "gum disease",
    "bad breath",
    "dental problems",
    "dentist Ghaziabad",
    "oral health",
    "Rekha Dental",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/common-problems`,
  },

  openGraph: {
    title: "Common Dental Problems & Solutions | Rekha Dental",

    description:
      "Learn about common dental problems including tooth pain, cavities, bleeding gums, sensitivity, and expert treatment options.",

    url: `${FRONTEND_URL}/common-problems`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776857/tooth-sensitivity_lz6puy.png`,
        width: 1200,
        height: 630,
        alt: "Common Dental Problems & Solutions | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Common Dental Problems & Solutions | Rekha Dental",
    description:
      "Learn about common dental problems including tooth pain, cavities, bleeding gums, sensitivity, and expert treatment options.",
    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776857/tooth-sensitivity_lz6puy.png`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
function page() {
  return (
    <div className="pt-10">
      <SectionHeader
        tag="COMMON DENTAL PROBLEMS"
        title="Recognize the signs. Protect your smile."
        subtitle="From tooth decay and sensitivity to missing teeth and gum disease, discover common oral health concerns and the treatments available."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-10">
          {commonDentalProblems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>
      </div>
      <div className="bg-[#EAE4DB] mb-10 py-10 overflow-hidden flex items-center justify-center flex-col">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader tag="FAQ" title="Quietly answered." />
          <FAQ data={commonDentalProblemsFaq} />
        </div>
      </div>
    </div>
  );
}

export default page;
