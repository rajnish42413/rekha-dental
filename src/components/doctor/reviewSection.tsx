

import ReviewCard from "../reviews/reviewCard";

interface Review {
  review: string;
  author: string;
  subtitle?: string;
  rating?: number;
}

interface Props {
  data: Review[];
  tag?: string;
  title?: string;
  subtitle?: string;
}

export default function ReviewsSection({
  data,
  tag = "Patient Voices",
  title = "Selected reviews.",
  subtitle = "From those treated personally by us.",
}: Props) {
  return (
    <section className="w-full bg-[#1F4A36] py-20 my-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-[#B89B5E]" />

          <p className="text-xs tracking-[3px] text-[#B89B5E] uppercase">
            {tag}
          </p>

          <span className="h-px w-10 bg-[#B89B5E]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-header text-white">
          {title}
        </h2>

        <p className="text-[#CFCFCF] mt-4 text-sm md:text-base">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 text-left">
          {data.map((item, index) => (
            <ReviewCard
              key={index}
              review={item.review}
              author={item.author}
              subtitle={item.subtitle}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}