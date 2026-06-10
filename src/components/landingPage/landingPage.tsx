import HeroBanner from "./heroBanner";
import StatsStrip from "../general/statsCard";
import { aboutStatsData, reviewsData } from "@/utils/constants";
import StorySection from "../about/storySection";
import ServiceGridLand from "./serviceGridLand";
import Pillars from "./pillars";
import GallerySection from "./gallerySection";
import ReviewsSection from "../doctor/reviewSection";
import AcademyBanner from "./academyBanner";
import CtaAction from "./ctaAction";
import { CLOUDINARY_BASE } from "@/utils/endpoints";

function LandingPage() {
  return (
    <div>
      <HeroBanner />
      <StatsStrip data={aboutStatsData} />
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/academyBanner`,
          `${CLOUDINARY_BASE}/rekha-dental/academy/academy1`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current3`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current4`,
          `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline4`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile1`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
         `${CLOUDINARY_BASE}/rekha-dental/events/event7`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
        ]}
        tag="REKHA DENTAL CLINIC"
        title="Where precision dentistry meets human care."
        paragraphs={[
          "Every consultation at Rekha Dental Clinic is designed to feel unhurried, personal, and deeply considered. We believe exceptional dentistry begins with listening before treatment.",

          "From preventive care to complete smile rehabilitation, our team combines modern clinical expertise with a calm, refined patient experience built around comfort, trust, and long-term relationships.",
        ]}
      />
      <ServiceGridLand />
      <GallerySection />
      <ReviewsSection data={reviewsData} />
      <Pillars />
      <AcademyBanner />
      <CtaAction />
    </div>
  );
}

export default LandingPage;
