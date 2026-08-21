// import HeroBanner from "./heroBanner";
import StatsStrip from "../general/statsCard";
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
import { heroBanners } from "@/data/heroBanner";
import { aboutStatsData, reviewsData } from "@/data/doctor";
import { homeFaqs, premiumDentalProcedures } from "@/data/landingPage";
import DoctorSection from "./doctorSection";
import VideoReviewsContainer from "./videoReviews";

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
         "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275463/20220728_100639_krz0gk.jpg",
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
          // `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
          // `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event7`,
          "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275466/FB_IMG_1579334789332_b3incl.jpg",
          // `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
        ]}
        tag="REKHA DENTAL"
        title="Quality dental treatment at an affordable range."

        paragraphs={[
          "Rekha Dental, Ghaziabad – Raj Nagar Extension, is a quality dental clinic offering affordable treatment, conveniently located at Raj Nagar Residency. We offer painless treatments including Laser RCT, Implants, Aligners, Braces, and Full Mouth Rehabilitation. We specialize in teeth straightening using Invisalign® and braces by Invisalign-certified Orthodontists.",
        
          "Our highly experienced specialists provide natural-looking, permanent, fixed teeth with dental implants. We also offer laser dentistry, teeth whitening, veneers, and smile makeover treatments. We follow 10X safety protocols and sterilization standards, provide child dental care and cavity protection, and are your one destination for all dental problems."
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
      <DoctorSection/>
      <GallerySection />
      <ReviewsSection data={reviewsData} />
      <VideoReviewsContainer/>
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
