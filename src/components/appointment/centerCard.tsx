import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock} from "react-icons/fa";

interface CenterCardProps {
  center: {
    id: number;
    slug: string;
    city: string;
    name: string;
    image: string;
    description: string;
    address: string;
    timings: string;
    phone: string;
  };
  index?: number;
}

export default function CenterCard({ center, index }: CenterCardProps) {
  return (
    <div
      className="
      bg-[#F5F1EA]
      group
      rounded-lg
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-2
    "
    >
      <Link href={`/centers/${center.slug}`}>
        <div className="relative h-[260px] overflow-hidden rounded-t-lg">
          <Image
            src={center.image}
            alt={center.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow">
            {center.city}
          </div>
        </div>
      </Link>
      <div className="p-6">
        {typeof index === "number" && (
          <p className="mb-3 text-xs tracking-[2px] text-[#CBA553] font-medium">
            CENTER {String(index + 1).padStart(2, "0")}
          </p>
        )}
        <h3 className="font-header text-2xl text-[#2C2C2C]">{center.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] line-clamp-2">
          {center.description}
        </p>
      </div>
      <div className="mx-4 grid gap-3">
        <div className="flex items-start gap-3 rounded-xl border border-[#DCCEB9] p-4">
          <FaMapMarkerAlt className="mt-1 text-brand shrink-0" size={18} />

          <p className="text-sm text-[#2C2C2C] line-clamp-2">
            {center.address}
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-[#DCCEB9] p-4">
          <FaClock className="mt-1 text-brand shrink-0" size={18} />
          <p className="text-sm text-[#2C2C2C] whitespace-pre-line">
            {center.timings}
          </p>
        </div>
      </div>
      <div className="p-6 flex justify-between items-center gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-[#CBA553] font-medium">
            Contact
          </p>
          <a
            href={`tel:${center.phone}`}
            className="font-bold text-brand text-lg hover:underline"
          >
            {center.phone}
          </a>
        </div>
        <Link
          href={`/appointment/${center.slug}`}
          className="
            bg-brand
            hover:bg-[#093528] transition-all
            text-white
            px-5
            py-1.5
            rounded-lg
            flex
            items-center
            gap-2
            font-medium active:scale-95 duration-200 
          "
        >
         
          View
        </Link>
      </div>
    </div>
  );
}
