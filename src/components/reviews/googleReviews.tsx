// import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SectionHeader from "../general/sectionHeader";
import { FiExternalLink } from "react-icons/fi";
import { googleReviews } from "@/data/reviews";



export default function GoogleReviews() {

  return (
    <section className="px-6 lg:py-10 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="GOOGLE REVIEWS"
          title=" Real Stories. Real Smiles."
          subtitle=" Thousands of patients trust Rekha Dental
            Clinic for compassionate care, precision
            treatments, and long-lasting dental
            solutions."
        />
        <div className="lg:mt-16 mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {googleReviews?.map((review) => (
            <div
              key={review.id}
              className="group flex h-full flex-col justify-between border border-[#E7DED2] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div>
                <div className="flex items-center gap-4">
                  {/* <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={review.reviewer_picture_url}
                      alt={review.reviewer_name}
                      fill
                      className="object-cover"
                    />
                  </div> */}

                  <div>
                    <h2 className="font-header text-lg text-[#2C2C2C]">
                      {review.reviewer_name}
                    </h2>

                    <p className="mt-1 text-xs uppercase tracking-[2px] text-[#A0A0A0]">
                      Verified Google Review
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-1">
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <FaStar key={index} size={14} className="text-[#CBA553]" />
                  ))}
                </div>

                <p className="mt-6 line-clamp-6 text-sm leading-relaxed text-[#5E5E5E]">
                  “{review.text}”
                </p>
              </div>
              <div className="mt-8 border-t border-[#EFE7DB] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[2px] text-[#A0A0A0]">
                    Google Reviews
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#8A8A8A]">
                      {new Intl.DateTimeFormat("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(review.published_at * 1000))}
                    </span>

                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7DED2] text-[#CBA553] transition-all duration-300 hover:border-[#CBA553] hover:bg-[#CBA553] hover:text-white"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
