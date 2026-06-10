
interface StatItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  data: StatItem[];
}

export default function StatsStrip({ data }: StatsStripProps) {
  return (
    <section className="w-full bg-[#F5F5EC] border-t mt-10 lg:my-14 border-b border-[#D6D0C6]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-10 px-4 text-center 
            ${index !== data.length - 1 ? "border-r border-[#D6D0C6]" : ""}`}
          >
            <h3 className="text-3xl md:text-4xl font-header text-[#1F3D2B]">
              {item.value}
            </h3>
            <p className="text-xs tracking-[3px] uppercase text-[#7A7A7A] mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
