import Image from "next/image";

interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface MilestoneCardProps {
  item: MilestoneItem;
}

export default function MilestoneCard({ item }: MilestoneCardProps) {
  return (
    <article className="group rounded-lg border border-[#DED5C8] bg-[#F5F1EA] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-5">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg sm:h-[220px] lg:h-[240px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="px-1 pb-2 pt-6">
        <p className="font-header text-base font-bold tracking-wide text-[#B88A44] sm:text-lg">
          {item.year}
        </p>
        <h3 className="mt-3 font-header text-xl leading-tight text-[#2C2C2C] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#6B6B6B] sm:text-[15px] sm:leading-7">
          {item.description}
        </p>
      </div>
    </article>
  );
}