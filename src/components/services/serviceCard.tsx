import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  index: string;
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({
  image,
  index,
  title,
  description,
  slug,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-[#F5F1EA] group transform rounded-xl transition-all duration-1200  ease-[cubic-bezier(0.22,1,0.36,1)]
     `}
    >
      <div className="relative w-full lg:h-[260px] h-[200px] overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
          className="object-cover transition-transform duration-800 ease-out group-hover:scale-105"
        />
      </div>
      <div className="lg:p-6 p-4">
        <p className="text-xs tracking-[2px] text-[#CBA553] lg:mb-3 mb-2 font-medium">
          {index}
        </p>
        <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 mt-4 font-header text-xs tracking-[2px] text-[#CBA553] uppercase group/link"
        >
          DISCOVER
          <span className="block h-px w-6 bg-[#CBA553] transition-all duration-300 group-hover/link:w-10" />
        </Link>
      </div>
    </div>
  );
}
