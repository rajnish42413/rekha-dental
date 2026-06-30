import Image from "next/image";
import Link from "next/link";
import BookAppointmentButton from "../general/bookAppointmentButton";

interface ServiceCardProps {
  image: string;
  index: string;
  title: string;
  description: string;
  slug: string;
  discount: string;
  startingPrice: string;
  price: string;
}

export default function ServiceCard({
  image,
  index,
  title,
  description,
  slug,
  discount,
  startingPrice,
  price,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-[#F5F1EA] group transform rounded-xl transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]
     `}
    >
      <Link
        href={`/services/${slug}`}
        className="block relative w-full lg:h-[260px] h-[200px] overflow-hidden rounded-t-xl"
      >
        {discount && (
          <div className="absolute top-0 left-4 z-10 bg-brand text-white px-3 pb-3 pt-4 font-bold text-center text-sm tracking-wider rounded-b-sm shadow-md flex flex-col items-center">
            <span className="leading-tight">{discount}%</span>
            <span className="text-[10px] font-normal tracking-widest block mt-0.5">
              OFF
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#0F4C3A] clip-path-ribbon"></div>
          </div>
        )}

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
          className="object-cover transition-transform duration-800 ease-out group-hover:scale-105"
        />
      </Link>
      <div className="lg:p-6 p-4">
        <p className="text-xs tracking-[2px] text-[#CBA553] lg:mb-3 mb-2 font-medium">
          {index}
        </p>
        <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-1">
          {description}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-5 flex items-center gap-3 pr-2">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#CBA553] font-medium">
                Starting at
              </p>

              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-brand">
                  ₹{startingPrice}
                </p>

                <p className="text-sm text-gray-400 line-through">₹{price}</p>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <BookAppointmentButton />
          </div>
        </div>
      </div>
    </div>
  );
}
