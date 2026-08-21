import SectionHeader from "../general/sectionHeader";
import VideoReviews from "./reviewPlayer";

function VideoReviewsContainer() {
  return (
    <div className="max-w-7xl mx-auto px-6  mt-10 py-12 lg:px-10 lg:py-20">
      <SectionHeader
        tag="Video Stories"
        title="Hear our patients tell it, in their own words."
        subtitle="Real journeys from the chair — told with the calm confidence that comes from care done well."
      />
      <VideoReviews />
    </div>
  );
}

export default VideoReviewsContainer;
