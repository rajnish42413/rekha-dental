import Link from "next/link";
import React from "react";

interface OfferCardProps {
  title: string;
  offer?: string;
  price?: string;
  description?: string;
  icon: React.ElementType;
  slug:string;
}

export default function OfferCard({
  title,
  offer,
  price,
  description,
  icon: Icon,
  slug
}: OfferCardProps) {
  return (
    <Link href={slug}
      className="
        bg-white border border-[#E8DED0]
        rounded-3xl p-6 cursor-pointer
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        group
      "
    >
      <div className="w-16 h-16 rounded-full bg-[#F8F3EA] flex items-center justify-center mx-auto mb-5">
        <Icon className="text-[#CBA553] text-3xl" />
      </div>
      <h3 className="text-[#163B2F] text-xl font-semibold text-center leading-tight min-h-[56px]">
        {title}
      </h3>

      {(offer || price) && (
        <div className="border-t border-dashed border-[#E8DED0] my-5" />
      )}

      {offer && (
        <div className="text-center">
          <p className="text-sm text-gray-500 uppercase tracking-[2px] mb-1">
            Up To
          </p>

          <p className="text-4xl font-serif text-[#CBA553] font-medium">
            {offer.replace("Up to ", "")}
          </p>
        </div>
      )}
      {price && (
        <div className="text-center">
          <p className="text-4xl font-semibold text-[#163B2F]">{price}</p>
        </div>
      )}
      {description && (
        <p className="text-center text-gray-500 text-sm mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </Link>
  );
}