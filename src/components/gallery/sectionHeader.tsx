"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SectionHeader from "../general/sectionHeader";
import GalleryTabs from "./galleryTabs";

const galleryTabs = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "facility",
    label: "Facility",
  },
  {
    key: "technology",
    label: "Technology",
  },
  {
    key: "smiles",
    label: "Smiles",
  },
  {
    key: "events",
    label: "Events",
  },
];

export default function GalleryHeroSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("category") || "all";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", tab);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const isValidTab = galleryTabs.some(
      (tab) => tab.key === activeTab
    );

    if (!isValidTab) {
      const params = new URLSearchParams(searchParams.toString());

      params.set("category", "all");

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    }
  }, [activeTab, pathname, router, searchParams]);

  return (
    <section className="relative overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-6">
        <SectionHeader
          tag="OUR GALLERY"
          title="Moments that reflect our standard of care."
          subtitle="A curated glimpse into our spaces, technology, patient journeys, and the quiet details behind every experience."
        />
        <div className="lg:mt-14">
          <GalleryTabs
            tabs={galleryTabs}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
        </div>
      </div>
    </section>
  );
}