"use client";

import VideoReviewCard from "./videoReviewCard";

export default function VideoReviews() {
  return (
    <section className=" ">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <VideoReviewCard
            videoUrl="https://youtube.com/shorts/MIq9-llAKbs"
            quote="Rekha Dental changed the way I smile every single day."
            // name="Patient Name"
            // treatment="Full Arch Implants"
            // location="Ghaziabad, India"
          />
          <VideoReviewCard
            videoUrl="https://youtube.com/shorts/TzXky1vxt-8"
            quote="I finally feel confident about my smile again."
            // name="Patient Name"
            // treatment="Smile Makeover"
            // location="Ghaziabad, India"
          />
        </div>
      </div>
    </section>
  );
}
