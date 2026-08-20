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
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag={tag} title={title} />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-2 lg:gap-7">
          {items.map((item) => (
            <MilestoneCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}