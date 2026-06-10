

import SectionHeader from "@/components/general/sectionHeader";
import MilestoneCard from "./milestoneCard";

interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface MilestonesProps {
  tag: string;
  title: string;
  items: MilestoneItem[];
}

export default function MilestonesSection({
  tag,
  title,
  items,
}: MilestonesProps) {
  return (
    <section className="bg-[#EAE4DB] py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag={tag} title={title} />
        <div className="relative mt-6 lg:mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#E0D8CC]" />
          {items.map((item, index) => (
            <MilestoneCard
              key={item.id}
              item={item}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}