import Banner from "@/components/general/generalBanner";
import Achievements from "@/components/legacy/achievements";
import DentalCamps from "@/components/legacy/dentalCamps";
import Lectures from "@/components/legacy/lectures";
import NewspaperCuttings from "@/components/legacy/newspaperCuttings";
import { CLOUDINARY_BASE } from "@/utils/endpoints";
import React from "react";

function page() {
  return (
    <div>
      <Banner
        imageSrc={`${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`}
        tag="PROFESSIONAL LEGACY"
        title="Years of excellence, measured in lives touched."
        subtitle="An ongoing story of professional growth, international collaborations, dental education, and community service dedicated to advancing oral healthcare."
        highlightText=""
      />
      <DentalCamps />
      <Achievements />
      <Lectures/>
      <NewspaperCuttings/>
    </div>
  );
}

export default page;
