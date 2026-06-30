import { FaCrown, FaGem, FaShieldHeart, FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_NUMBER } from "@/utils/endpoints";

export interface PlanBenefit {
  title: string;
  value: string;
  worth?: number;
}
import {
  FaUserDoctor,
  FaTooth,
  FaUsers,
  FaPercent,
  FaStar,
  FaTicket,
  FaGift,
} from "react-icons/fa6";

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
  planType: string;
}

interface DentalPlanCardProps {
  plan: DentalHealthPlan;
  visible?: boolean;
  index?: number;
}
const getBenefitIcon = (title: string) => {
  const lower = title.toLowerCase();

  if (lower.includes("consultation")) return <FaUserDoctor size={14} />;

  if (lower.includes("x-ray")) return <FaTooth size={14} />;

  if (lower.includes("family")) return <FaUsers size={14} />;

  if (lower.includes("discount")) return <FaPercent size={14} />;

  if (lower.includes("voucher")) return <FaTicket size={14} />;

  if (lower.includes("polishing") || lower.includes("scaling"))
    return <FaStar size={14} />;

  return <FaGift size={14} />;
};

export default function DentalPlanCard({
  plan,
  visible = true,
  index = 0,
}: DentalPlanCardProps) {
  const message = encodeURIComponent(
    `Hello, I would like to enroll in the "${plan.title}" membership plan priced at ₹${plan.price}. Kindly share the benefits, validity period, and enrollment details.`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const getPlanIcon = () => {
    switch (plan.planType) {
      case "BASIC":
        return <FaShieldHeart className="text-2xl text-[#B8871A]" />;

      case "STANDARD":
        return <FaGem className="text-2xl text-brand" />;

      case "PREMIUM":
        return <FaCrown className="text-2xl text-[#B8871A]" />;

      default:
        return <FaShieldHeart className="text-2xl text-[#B8871A]" />;
    }
  };

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
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs px-4 py-1 rounded-full font-medium shadow-sm">
          Most Popular
        </span>
      )}

      <div className="flex gap-4 items-center">
        <div
          className={`
      w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
      ${
        plan.planType.toLowerCase() === "standard"
          ? "bg-[#EAF6F0]"
          : "bg-[#FFF3DA]"
      }
    `}
        >
          {getPlanIcon()}
        </div>
        <div>
          <p className="text-xs tracking-[3px] uppercase text-[#B79B63] font-medium">
            {plan.planType} Plan
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
        </div>
      </div>

      <p className="mt-4 text-sm text-[#666] leading-relaxed min-h-[48px]">
        {plan.description}
      </p>

      <div className=" bg-[#ECE7DF] my-6" />

      <ul className="space-y-4 flex-1">
        {plan.benefits.slice(0, 6).map((benefit, benefitIndex) => (
          <li key={benefitIndex} className="flex gap-3 items-start">
            <div
              className={`
          w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5
          ${
            plan.featured
              ? "bg-[#E8F5EE] text-brand"
              : "bg-[#FDF3D8] text-[#C79A2B]"
          }
        `}
            >
              {getBenefitIcon(benefit.title)}
            </div>

            <div>
              <p className="text-[#21282C] text-sm font-medium">
                {benefit.title}
              </p>

              <p className="text-xs text-gray-500">{benefit.value}</p>
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
                : "border border-[#D9D0C4] bg-white hover:bg-[#CBA553] text-[#21282C]"
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
