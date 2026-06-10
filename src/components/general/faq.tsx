"use client";

import {  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQProps {
  data: FAQItem[];
}

export default function FAQ({ data }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="w-full max-w-3xl">
      {data.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border-b border-[#E0D8CC] py-5 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-header text-base md:text-lg text-[#2C2C2C]">
                {item.question}
              </h4>

              <span
                className={`transition-transform duration-300 text-[#2C2C2C] ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-sm text-[#6B6B6B] leading-relaxed pr-6">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}