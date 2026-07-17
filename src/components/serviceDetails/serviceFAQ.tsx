import React from "react";
import SectionHeader from "@/components/general/sectionHeader";
import FAQ from "@/components/general/faq";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs }) => {
  return (
    <section className="lg:py-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 md:gap-12 gap-6">
        <SectionHeader tag="QUESTIONS" title="Frequently asked." align="left" />
        <FAQ data={faqs} />
      </div>
    </section>
  );
};