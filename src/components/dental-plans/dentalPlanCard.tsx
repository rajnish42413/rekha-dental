import { FaCheck, FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_NUMBER } from "@/utils/endpoints";

export interface PlanBenefit {
  title: string;
  value: string;
  worth?: number;
}

export interface DentalHealthPlan {
  id: number;
  slug: string;
  title: string;
  price: number;
  originalValue: number;
  savings: number;
  description: string;
  benefits: PlanBenefit[];
  applicableFor?: string[];
  notes?: string[];
  featured?: boolean;
}

interface DentalPlanCardProps {
  plan: DentalHealthPlan;
  visible?: boolean;
  index?: number;
}

export default function DentalPlanCard({
  plan,
  visible = true,
  index = 0,
}: DentalPlanCardProps) {
  const message = encodeURIComponent(
    `Hello, I would like to enroll in the "${plan.title}" membership plan priced at ₹${plan.price}. Kindly share the benefits, validity period, and enrollment details.`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`
        relative
        flex
        flex-col
        p-8
        rounded-3xl
        bg-white
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        border
        border-[#EFE8DD]
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }
      `}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs px-4 py-1 rounded-full font-medium shadow-sm">
          Most Popular
        </span>
      )}

      <p className="text-xs tracking-[3px] uppercase text-[#B79B63] font-medium">
        Membership Plan
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-[#21282C]">
        ₹{plan.price}
      </h3>

      <div className="mt-2 flex items-center gap-2">
        <span className="line-through text-gray-400 text-sm">
          ₹{plan.originalValue}
        </span>

        <span className="text-brand font-semibold text-sm">
          Save ₹{plan.savings}
        </span>
      </div>

      <p className="mt-4 text-sm text-[#666] leading-relaxed min-h-[48px]">
        {plan.description}
      </p>

      <div className=" bg-[#ECE7DF] my-6" />

      <ul className="space-y-4 flex-1">
        {plan.benefits.slice(0, 6).map((benefit, benefitIndex) => (
          <li
            key={benefitIndex}
            className="flex gap-3 items-start"
          >
            <FaCheck
              size={14}
              className="text-brand mt-1 shrink-0"
            />

            <div>
              <p className="text-[#21282C] text-sm font-medium">
                {benefit.title}
              </p>

              <p className="text-xs text-gray-500">
                {benefit.value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-6 ">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-full
            h-12
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            rounded-xl
            transition-all
            duration-200
            active:scale-95
            ${
              plan.featured
                ? "bg-brand hover:bg-[#093528] text-white"
                : "border border-[#D9D0C4] bg-white hover:bg-[#F8F5F0] text-[#21282C]"
            }
          `}
        >
          <FaWhatsapp size={18} />
          Get Membership
        </a>
      </div>
    </div>
  );
}