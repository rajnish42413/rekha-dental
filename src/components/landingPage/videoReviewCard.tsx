"use client";

import ReactPlayer from "react-player";
import { FaStar } from "react-icons/fa";

interface VideoReviewProps {
  videoUrl: string;
  quote: string;
  name?: string;
  treatment?: string;
  location?: string;
}

export default function VideoReviewCard({
  videoUrl,
  quote,
}: VideoReviewProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#E0D8CC] bg-[#F5F1EA]">
      <div className="relative h-130 w-full overflow-hidden bg-black">
        <ReactPlayer
          src={videoUrl}
          width="100%"
          height="100%"
          controls
          playsInline
          config={{
            youtube: {
              rel: 0,
              // modestbranding: 1,
              // playsinline: 1,
            },
          }}
        />
      </div>
      <div className="relative p-5 lg:p-6">
        <div className="flex gap-1 text-[#CBA553]">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={12} />
          ))}
        </div>

        <div className="absolute right-5 top-4 font-serif text-4xl leading-none text-[#CBA553]/30">
          ❞
        </div>

        <p className="mt-4 max-w-[90%] font-header text-base italic leading-relaxed text-[#3D3A36] lg:text-lg">
          “{quote}”
        </p>
      </div>
    </article>
  );
}