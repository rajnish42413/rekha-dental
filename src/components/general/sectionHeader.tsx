
interface SectionHeaderProps {
    tag?: string; 
    title: string;
    subtitle?: string;
    align?: "left" | "center";
  }
  
  export default function SectionHeader({
    tag,
    title,
    subtitle,
    align = "center",
  }: SectionHeaderProps) {
    const alignment =
      align === "center"
        ? "items-center text-center"
        : "items-start text-left";
  
    return (
      <div className={`flex flex-col mx-3 ${alignment} gap-4 mb-6 lg:mb-10 `}>
        {tag && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-[3px] bg-yellow" />
            <p className="uppercase tracking-[3px]  text-md font-extrabold lg:text-lg  text-yellow ">
              {tag}
            </p>
            <div className="w-8 h-[3px] bg-yellow" />
          </div>
        )}
        <h2 className="font-header text-2xl lg:text-4xl text-[#2C2C2C] leading-tight max-w-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base  text-[#6B6B6B] max-w-xl leading-relaxed ">
            {subtitle}
          </p>
        )}
      </div>
    );
  }