"use client";

import { dentalHealthPlans } from "@/data/dentalPlans";
import GalleryTabs from "../gallery/galleryTabs";

import DentalPlanCard from "./dentalPlanCard";
import OfferSection from "./offerSection";
import { useSearchParams, useRouter } from "next/navigation";

function PlansOffersContainer() {
  const tabs = [
    {
      key: "plans",
      label: "Membership Plans",
    },
    {
      key: "offers",
      label: "Exclusive Offers",
    },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "plans";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };
  return (
    <div>
      <GalleryTabs tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

      <div className="mt-16">
        {activeTab === "plans" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-20 mx-10 lg:mx-18">
            {dentalHealthPlans.map((plan) => (
              <DentalPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}

        {activeTab === "offers" && <OfferSection />}
      </div>
    </div>
  );
}

export default PlansOffersContainer;
