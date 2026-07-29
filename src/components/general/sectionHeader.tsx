interface SectionHeaderProps {
  tag?: string; 
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  
  const alignment = isCenter
    ? "items-center text-center mx-auto"
    : "items-start text-left";

  return (
    <div className={`flex flex-col max-w-4xl px-4 ${alignment} gap-3 mb-8 lg:mb-14`}>
      {tag && (
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <p className="uppercase tracking-[2px] text-xs font-black text-emerald-600 lg:text-sm">
            {tag}
          </p>
        </div>
      )}
      {title && (
        <h1 className="font-header text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2c2c2c] tracking-tight leading-[1.15] max-w-2xl mt-2">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className={`text-base md:text-lg text-[#555555] max-w-2xl leading-relaxed mt-2 ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}