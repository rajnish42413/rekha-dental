// import HeroBanner from "./heroBanner";
import StatsStrip from "../general/statsCard";
import {
  aboutStatsData,
  heroBanners,
  // heroBanners,
  homeFaqs,
  premiumDentalProcedures,
  reviewsData,
} from "@/utils/constants";
import StorySection from "../about/storySection";
import ServiceGridLand from "./serviceGridLand";
import Pillars from "./pillars";
import GallerySection from "./gallerySection";
import ReviewsSection from "../doctor/reviewSection";
import AcademyBanner from "./academyBanner";
import CtaAction from "./ctaAction";
import { CLOUDINARY_BASE } from "@/utils/endpoints";
import ExploreDentalServices from "./iconCards";
import SectionHeader from "../general/sectionHeader";
import FAQ from "../general/faq";
import DentalPlanHighlights from "./dentalPlanHighlights";
import PremiumProcedureSwiper from "./premiumProceduresSwiper";
import HeroSwiper from "../general/heroSwiper";

function LandingPage() {
  return (
    <div>
      {/* <HeroBanner /> */}
      <HeroSwiper slides={heroBanners} />
      <div className="px-5 lg:px-10">
      <StatsStrip data={aboutStatsData} />
      </div>
     
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/academyBanner`,
          // `${CLOUDINARY_BASE}/rekha-dental/academy/academy1`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current3`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current4`,
          `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline4`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
          // `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event7`,
          // `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
        ]}
        tag="REKHA DENTAL CLINIC"
        title="Where precision dentistry meets human care."
        paragraphs={[
          "Every consultation at Rekha Dental Clinic is designed to feel unhurried, personal, and deeply considered. We believe exceptional dentistry begins with listening before treatment.",

          "From preventive care to complete smile rehabilitation, our team combines modern clinical expertise with a calm, refined patient experience built around comfort, trust, and long-term relationships.",
        ]}
      />
      <ExploreDentalServices />
      <SectionHeader
        tag="PREMIUM DENTISTRY"
        title="Signature treatments for extraordinary smiles"
        subtitle="Explore some of our most advanced and sought-after dental procedures."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
        <PremiumProcedureSwiper procedures={premiumDentalProcedures} />
      </div>
      <ServiceGridLand />
      <GallerySection />
      <ReviewsSection data={reviewsData} />
      <Pillars />
      <AcademyBanner />
      <DentalPlanHighlights />
      <div className=" mb-10 py-10 overflow-hidden flex items-center justify-center flex-col">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader tag="FAQ" title="Quietly answered." />
          <FAQ data={homeFaqs} />
        </div>
      </div>
      <CtaAction />
    </div>
  );
}

export default LandingPage;
