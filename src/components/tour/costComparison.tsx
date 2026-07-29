"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "../general/sectionHeader";
import GalleryTabs from "../gallery/galleryTabs";
import GeneralButton from "../general/generalButton";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import CalendlyModal from "../calendly/calendlyModal";
import { useRouter, useSearchParams } from "next/navigation";
import { dentalCostComparison } from "@/data/tourism";

function calculateSavings(india: string, us: string) {
  const getMin = (value: string) => {
    const num = value.replace(/\$/g, "").split("-")[0].trim();
    return Number(num);
  };
  const indiaMin = getMin(india);
  const usMin = getMin(us);
  const savings = Math.round(((usMin - indiaMin) / usMin) * 100);
  return `${savings}%`;
}

export default function DentalCostComparison() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = useMemo(() => {
    const tab = searchParams.get("category");

    const exists = dentalCostComparison.some((item) => item.category === tab);

    return exists ? tab! : dentalCostComparison[0].category;
  }, [searchParams]);

  const handleTabChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", category);

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };
  const selectedCategory = dentalCostComparison.find(
    (item) => item.category === activeCategory
  );
  const [showCenters, setShowCenters] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCenters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className=" py-10 lg:py-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-10">
        <SectionHeader
          tag="COST COMPARISON"
          title="Premium dental care at a fraction of the cost."
          subtitle="  Compare treatment prices in India with the United States and discover
            why patients worldwide choose India for affordable, world-class
            dental care."
        />
        <div className="mt-12">
          <GalleryTabs
            tabs={dentalCostComparison.map((item) => ({
              key: item.category,
              label: item.category,
            }))}
            activeTab={activeCategory}
            onChange={handleTabChange}
          />
        </div>
        <div className="mt-10 hidden overflow-hidden  border border-[#DDD4C8]  bg-[#F8F4ED] shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:block">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[#EEE7DD] bg-brand px-8 py-5">
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#CBA553]">
              Procedure
            </p>
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#CBA553]">
              India
            </p>
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#CBA553]">
              USA
            </p>
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#CBA553]">
              Savings
            </p>
          </div>
          <div>
            {selectedCategory?.treatments.map((item, index) => (
              <div
                key={item.procedure}
                className={`grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-8 py-6 transition-colors duration-300 hover:bg-[#FAF7F2]
                  ${
                    index !== selectedCategory.treatments.length - 1
                      ? "border-b border-[#F0E8DD]"
                      : ""
                  }
                `}
              >
                <div>
                  <h3 className="text-lg font-medium text-[#1E3D34]">
                    {item.procedure}
                  </h3>
                </div>

                <p className="text-base font-medium text-[#3F4D48]">
                  {item.india}
                </p>

                <p className="text-base font-medium text-[#8B5E5E]">
                  {item.us}
                </p>

                <div>
                  <span className="inline-flex rounded-full bg-[#E8F5EE] font-semibold px-4 py-2 text-sm  text-[#1E7A4D]">
                    Save up to {calculateSavings(item.india, item.us)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:hidden">
          {selectedCategory?.treatments.map((item, index) => (
            <div
              key={item.procedure}
              className="
        group border border-[#E7DED1]
        bg-[#F8F4ED]
        transition-all duration-300
        hover:border-[#D9C7AA]
      "
            >
              <div className="flex items-start justify-between px-5 pt-5">
                <p className="text-xs tracking-[3px] text-yellow font-extrabold">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                <div
                  className="
            flex items-center gap-2
            bg-[#EFE7DB]
            px-3 py-1.5
          "
                >
                  <HiOutlineCurrencyDollar className="text-sm text-[#1E7A4D]" />
                  <p className="text-[10px] uppercase tracking-[2px] text-[#1E7A4D]">
                    {calculateSavings(item.india, item.us)} Savings
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-6">
                <h3 className=" text-xl font-semibold leading-[1.1] text-[#2E2A27]">
                  {item.procedure}
                </h3>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[2px] text-[#8A8175]">
                        India
                      </p>

                      <p className="mt-1 text-xl font-medium text-[#1E3D34]">
                        {item.india}
                      </p>
                    </div>

                    <div
                      className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-[#D8CEC0]
                bg-white
              "
                    >
                      <FiMapPin className="text-lg text-[#1E7A4D]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[2px] text-[#A17A7A]">
                        USA
                      </p>

                      <p className="mt-1 text-xl font-medium text-[#7D4B4B]">
                        {item.us}
                      </p>
                    </div>
                    <div
                      className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-[#D8CEC0]
                bg-white
              "
                    >
                      <FiMapPin className="text-lg text-[#7D4B4B]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="
    mt-12 border border-[#E7DED1]
    bg-[#F8F4ED]
    px-6 py-8
    lg:px-10 lg:py-10
  "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[4px] text-yellow">
                DENTAL TOURISM
              </p>

              <h3 className="mt-5 font-header text-xl leading-[1.1] text-[#1E3D34] md:text-3xl">
                Why patients choose India for dental tourism.
              </h3>

              <p className="mt-5 max-w-3xl lg:text-md text-sm leading-relaxed text-[#5E6A66]">
                International patients receive globally recognized dental care,
                advanced technology, and experienced specialists — while saving
                significantly compared to treatment costs in Western countries.
              </p>
            </div>

            <div className="shrink-0">
              <div
                ref={dropdownRef}
                className="relative shrink-0 w-full lg:w-auto"
              >
                <GeneralButton
                  onClick={() => setShowCenters((prev) => !prev)}
                  className="w-full lg:w-auto min-w-[240px]"
                >
                  BOOK CONSULTATION
                </GeneralButton>

                {showCenters && (
                  <div
                    className="absolute left-0 top-14 z-50 w-full lg:w-64
      overflow-hidden border border-[#D6C7B2]
      bg-white shadow-xl"
                  >
                    <button
                      onClick={() => {
                        setCalendlyUrl(CALENDLY_URL_RAJ_NAGAR);
                        setShowCalendly(true);
                        setShowCenters(false);
                      }}
                      className="w-full border-b border-[#E5DDD0]
        px-4 py-3 text-left text-sm text-[#1F2A24]
        hover:bg-[#F5F1EA]
        transition-colors cursor-pointer"
                    >
                      Raj Nagar Ext.
                    </button>

                    <button
                      onClick={() => {
                        setCalendlyUrl(CALENDLY_URL_KOTGAON);
                        setShowCalendly(true);
                        setShowCenters(false);
                      }}
                      className="w-full px-4 py-3 text-left text-sm
        text-[#1F2A24] hover:bg-[#F5F1EA]
        transition-colors cursor-pointer"
                    >
                      Kotgaon Center
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CalendlyModal
        url={calendlyUrl}
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </section>
  );
}
