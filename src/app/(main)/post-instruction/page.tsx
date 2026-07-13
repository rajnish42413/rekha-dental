import SectionHeader from "@/components/general/sectionHeader";
import PostInstructionCard from "@/components/postInstruction/postInstructionCard";
import { postInstructionData } from "@/data/postInstruction";

function page() {
  return (
    <div className="my-10">
      <SectionHeader
        tag="Post Treatment Care"
        title="Your Recovery Starts Here"
        subtitle="Follow these simple aftercare instructions to promote healing, protect your treatment, and achieve the best long-term results."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 px-6">
        {postInstructionData.map((item) => (
          <PostInstructionCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
