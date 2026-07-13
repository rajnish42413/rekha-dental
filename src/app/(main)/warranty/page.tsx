import SectionHeader from "@/components/general/sectionHeader";
import WarrantyCard from "@/components/warranty/warrantyCard";
import { warrantyPolicies } from "@/data/warranty";

import React from "react";

function page() {
  return (
    <div className="my-10">
      <SectionHeader
        tag="Warranty Policy"
        title="We've Got You Covered"
        subtitle="Know what's covered, for how long, and the conditions for re-treatment."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8  md:grid-cols-2 xl:grid-cols-3 px-6">
        {warrantyPolicies.map((item) => (
          <WarrantyCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
