import Image from "next/image";
import Link from "next/link";

export interface CommonDentalProblem {
  image: string;
  title: string;
  medicalTerm: string;
  symptoms: string[];
  treatment: string;
  serviceSlug: string;
}

interface ProblemCardProps {
  problem: CommonDentalProblem;
  index?: number;
}

export default function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div
      className="
        bg-[#F5F1EA]
        group
        rounded-lg
        overflow-hidden
        h-full
        flex
        flex-col
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
      "
    >
      <Link href={`/treatments/${problem.serviceSlug}`}>
        <div className="relative w-full h-[220px] overflow-hidden cursor-pointer">
          <Image
            src={problem.image}
            alt={problem.title}
            fill
            sizes="
              (max-width:768px) 100vw,
              (max-width:1024px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          {typeof index === "number" && (
            <p className="text-xs tracking-[2px] text-yellow mb-3 font-extrabold">
              CONDITION {String(index + 1).padStart(2, "0")}
            </p>
          )}

          <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3">
            {problem.title}
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div
              className="
      border
      border-[#DCCEB9]
      rounded-xl
      h-[82px]
      px-3
      flex
      flex-col
      items-center
      justify-center
      text-center
    "
            >
              <p className="text-xs text-yellow font-extrabold uppercase tracking-wide">
                Medical Term
              </p>

              <p
                className="
        text-sm
        font-semibold
        text-[#2C2C2C]
        mt-1
        leading-tight
        line-clamp-2
      "
              >
                {problem.medicalTerm}
              </p>
            </div>

            <div
              className="
      border
      border-[#DCCEB9]
      rounded-xl
      h-[82px]
      px-3
      flex
      flex-col
      items-center
      justify-center
      text-center
    "
            >
              <p className="text-xs text-yellow font-extrabold uppercase tracking-wide">
                Symptoms
              </p>

              <p className="text-sm font-semibold text-[#2C2C2C] mt-1">
                {problem.symptoms.length}
              </p>
            </div>
          </div>

          <div className="border border-[#DCCEB9] rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-yellow font-extrabold mb-3">
              Common Symptoms
            </p>

            <ul className="space-y-2">
              {problem.symptoms.slice(0, 4).map((symptom, symptomIndex) => (
                <li
                  key={symptomIndex}
                  className="text-sm text-[#555] flex items-start gap-2"
                >
                  <span className="text-brand mt-1">•</span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 border border-[#DCCEB9] rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-yellow font-extrabold mb-2">
              Recommended Treatment
            </p>
            <p className="text-sm text-[#666] line-clamp-3">
              {problem.treatment}
            </p>
          </div>
        </div>
        <Link
          href={`/treatments/${problem.serviceSlug}`}
          className="
            mt-5
            bg-brand
            hover:bg-[#093528]
            active:scale-95
            duration-200
            transition-all
            text-white
            py-3
            rounded-lg
            font-medium
            text-sm
            flex
            items-center
            justify-center
            gap-2
            shadow-sm
          "
        >
          Explore Treatment
        </Link>
      </div>
    </div>
  );
}
