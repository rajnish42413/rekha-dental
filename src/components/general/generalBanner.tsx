import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  tag?: string;
  title: string;
  subtitle?: string;
  highlightText?: string;
  overlayColor?: string;
}

function Banner({
  imageSrc,
  tag,
  title,
  subtitle,
  highlightText,
  overlayColor = "bg-teal-900/60",
}: BannerProps) {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[85vh] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-zoomSlow"
        />
        <div className={`absolute inset-0 ${overlayColor}`} />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-white">
            {tag && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#CBA553]" />

                <p className="uppercase tracking-[3px] text-sm text-[#CBA553] font-semibold whitespace-nowrap">
                  {tag}
                </p>

                <div className="w-8 h-[2px] bg-[#CBA553]" />
              </div>
            )}
            <h1 className="font-header text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
              {title}{" "}
              {highlightText && (
                <span className="block font-script text-4xl md:text-6xl lg:text-7xl mt-2 text-teal-200">
                  {highlightText}
                </span>
              )}
            </h1>
            {subtitle && (
              <p className="mt-6 text-sm md:text-base lg:text-lg max-w-xl text-gray-200 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
