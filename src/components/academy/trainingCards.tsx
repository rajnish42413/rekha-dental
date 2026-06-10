import {
  FiUsers,
  FiActivity,
  FiAward,
  FiHeart,
} from "react-icons/fi";

import SectionHeader from "../general/sectionHeader";

const trainingFeatures = [
  {
    id: 1,
    number: "01",
    icon: <FiUsers />,
    title: "Live Patient Cases",
    description:
      "Operate on supervised live cases with mentor guidance — not mannequins.",
  },
  {
    id: 2,
    number: "02",
    icon: <FiActivity />,
    title: "Practical Sessions",
    description:
      "70% of every program is hands-on, in our atelier-grade lab.",
  },
  {
    id: 3,
    number: "03",
    icon: <FiAward />,
    title: "1:1 Mentorship",
    description:
      "Faculty mentor ratio capped at 1:6. Every question gets time.",
  },
  {
    id: 4,
    number: "04",
    icon: <FiHeart />,
    title: "Clinical Exposure",
    description:
      "Shadow live cases in our specialist clinic — implants, full arch, cosmetic.",
  },
];

function HandsOnTraining() {
  return (
    <section className="bg-[#EAE4DB] py-10 overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="HANDS-ON TRAINING"
          title="Learn by doing. Supervised by masters."
          subtitle="Built around practical learning, live clinical exposure, and close mentorship from experienced dental professionals."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainingFeatures.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg
                border border-[#E8DED0] bg-[#FCFAF6]
                p-7 transition-all duration-500
                hover:-translate-y-2
                hover:border-[#D9C5A1]
                hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]"
            >
              <div
                className="absolute right-6 top-5 font-header lg:text-6xl text-5xl
                  leading-none text-[#ECE4D8] transition duration-500
                  group-hover:text-[#E1D4BF]"
              >
                {item.number}
              </div>
              <div
                className="relative z-10 flex lg:h-16 lg:w-16 h-12 w-12 items-center
                  justify-center rounded-2xl border border-[#E7DDD0]
                  bg-[#F3ECE1] text-2xl text-[#163828]
                  transition-all duration-500"
              >
                {item.icon}
              </div>

              <div className="relative z-10 mt-8">
                <h3
                  className="font-header text-xl lg:text-3xl leading-tight
                    text-[#2C2A27]"
                >
                  {item.title}
                </h3>
                <p
                  className="mt-5 text-sm lg:leading-7 leading-6 text-[#66625C]
                    md:text-base"
                >
                  {item.description}
                </p>
              </div>
              <div
                className="absolute -bottom-10 -right-10 h-40 w-40
                  rounded-full bg-[#EFE5D7] opacity-0 blur-3xl
                  transition-all duration-500
                  group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HandsOnTraining;