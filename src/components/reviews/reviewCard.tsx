

import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  rating?: number;
  review: string;
  author: string;
  subtitle?: string; 
}

export default function ReviewCard({
  rating = 5,
  review,
  author,
  subtitle,
}: ReviewCardProps) {
  return (
    <div className="border border-[#2E5A45] p-6 md:p-8 bg-transparent h-full flex flex-col justify-between">
      <div className="flex gap-1 text-yellow mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>
      <p className="text-[#DADADA] italic leading-relaxed text-sm md:text-base mb-6">
        “{review}”
      </p>
      <div className="mt-auto">
        <p className="text-xs tracking-[3px] uppercase text-[#CFCFCF]">
          {author}
          {subtitle && (
            <span className="text-[#8FA79A]">
              {" "}
              · {subtitle}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}