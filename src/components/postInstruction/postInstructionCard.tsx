import Image from "next/image";

interface PostInstructionCardProps {
  item: {
    slug: string;
    title: string;
    image: string;
    summary: string;
    instructions: string[];
  };
}

export default function PostInstructionCard({
  item,
}: PostInstructionCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E8DDD1] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[230px] overflow-hidden bg-[#FCFAF6]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <div className="mb-8">
          <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-[#6B6B6B] leading-relaxed min-h-[50px]">
            {item.summary}
          </p>
        </div>
        <div className="space-y-5">

<ul className="space-y-2">
            {item.instructions.map((term, index) => (
              <li
                key={index}
                className="flex items-start gap-2  leading-6 text-sm text-[#6B6B6B] "
              >
                <span className="min-w-6 font-semibold text-yellow">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}