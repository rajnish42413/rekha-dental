import {
  GoogleOutlined,
  MedicineBoxOutlined,
  SafetyCertificateOutlined,
  StarFilled,
} from "@ant-design/icons";

import SectionHeader from "../general/sectionHeader";

const reviewPlatforms = [
  {
    id: 1,
    name: "Google Reviews",
    icon: <GoogleOutlined />,
    rating: "4.9",
    reviews: "500+ Verified Reviews",
  },
  {
    id: 2,
    name: "Practo",
    icon: <SafetyCertificateOutlined />,
    rating: "4.5",
    reviews: "1,200+ Patient Experiences",
  },
  {
    id: 3,
    name: "1mg",
    icon: <MedicineBoxOutlined />,
    rating: "4.9",
    reviews: "900+ Trusted Ratings",
  },
];

export default function ReviewPlatformSection() {
  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Patient Trust"
          title="Recognized by patients across leading healthcare platforms."
          subtitle="Consistent experiences, verified feedback, and exceptional patient satisfaction reflected across trusted review platforms."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviewPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="
                group relative overflow-hidden rounded-[32px]
                border border-[#E7DED1]
                bg-[#FCFAF7]
                p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#D7C5AC]
                hover:shadow-[0_20px_50px_rgba(32,28,20,0.06)]
              "
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#EFE7DA] opacity-40 blur-3xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B08A52]">
                    Verified Platform
                  </p>

                  <h3 className="font-header text-2xl text-[#2D2B28] lg:text-3xl">
                    {platform.name}
                  </h3>
                </div>

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl border border-[#E8DFD2]
                    bg-[#F4EEE4]
                    text-xl text-[#1F3D2B]
                  "
                >
                  {platform.icon}
                </div>
              </div>

              <div className="relative z-10 mt-6 lg:mt-14">
                <div className="flex items-end gap-3">
                  <h2 className="font-header text-5xl leading-none text-[#1F1D1A] lg:text-7xl">
                    {platform.rating}
                  </h2>

                  <span className="mb-2 text-lg text-[#8A847C]">
                    /5
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[#C6A56B]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarFilled
                      key={index}
                      className="text-base"
                    />
                  ))}
                </div>

                <p className="mt-6 text-sm tracking-wide text-[#746F68]">
                  {platform.reviews}
                </p>
              </div>

              <div className="relative z-10 mt-4 border-t border-[#ECE3D8] pt-6 lg:mt-10">
                <p className="text-sm leading-7 text-[#706B65]">
                  Trusted by patients for refined care,
                  transparent treatment, and consistently
                  exceptional experiences.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}