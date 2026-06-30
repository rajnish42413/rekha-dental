import FAQ from "@/components/general/faq";
import SectionHeader from "@/components/general/sectionHeader";
import ProblemCard from "@/components/problems/problemCard";
import { commonDentalProblems, commonDentalProblemsFaq } from "@/utils/constants";

function page() {
  return (
    <div className="pt-10">
      <SectionHeader
        tag="COMMON DENTAL PROBLEMS"
        title="Recognize the signs. Protect your smile."
        subtitle="From tooth decay and sensitivity to missing teeth and gum disease, discover common oral health concerns and the treatments available."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-10">
          {commonDentalProblems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>
      </div>
      <div className='bg-[#EAE4DB] mb-10 py-10 overflow-hidden flex items-center justify-center flex-col'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <SectionHeader
          tag="FAQ"
          title="Quietly answered."
        />
        <FAQ data={commonDentalProblemsFaq}/>
        </div>

    </div>
    </div>
  );
}

export default page;
