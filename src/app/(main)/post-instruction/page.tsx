import SectionHeader from "@/components/general/sectionHeader";
import PostInstructionCard from "@/components/postInstruction/postInstructionCard";
import { postInstructionData } from "@/data/postInstruction";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Post Treatment Care Instructions | Rekha Dental",

  description:
    "Follow expert post-treatment care instructions after dental implants, root canal, extraction, braces, and cosmetic procedures.",

  keywords: [
    "post treatment care",
    "dental instructions",
    "implant care",
    "root canal aftercare",
    "tooth extraction care",
    "braces care",
    "oral surgery recovery",
    "dentist advice",
    "Rekha Dental",
    "aftercare guide",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/post-treatment-care`,
  },

  openGraph: {
    title: "Post Treatment Care Instructions | Rekha Dental",

  description:
    "Follow expert post-treatment care instructions after dental implants, root canal, extraction, braces, and cosmetic procedures.",

    url: `${FRONTEND_URL}/post-treatment-care`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Post Treatment Care Instructions | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Post Treatment Care Instructions | Rekha Dental",

    description:
      "Follow expert post-treatment care instructions after dental implants, root canal, extraction, braces, and cosmetic procedures.",
  
    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div className="my-10">
      <SectionHeader
        tag="Post Treatment Care"
        title="Your Recovery Starts Here"
        subtitle="Follow these simple aftercare instructions to promote healing, protect your treatment, and achieve the best long-term results."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 px-6">
        {postInstructionData.map((item) => (
          <PostInstructionCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
