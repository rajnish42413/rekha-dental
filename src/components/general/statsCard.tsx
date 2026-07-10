interface StatItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  data: StatItem[];
}

export default function StatsStrip({ data }: StatsStripProps) {
  return (
    <section className="w-full bg-[#F5F5EC]  mt-10 lg:my-14 border rounded-xl border-[#D6D0C6]">
      <div className="max-w-8xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col  justify-center py-10 px-4 text-center border-2 border-transparent
        `}
          >
            <h3 className="text-3xl md:text-5xl font-semibold md:font-bold font-header text-[#1F3D2B]">
              {item.value}
            </h3>
            <p className="text-sm tracking-[3px] uppercase text-[#7A7A7A] mt-4 font-semibold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
