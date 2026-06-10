interface GalleryTab {
    key: string;
    label: string;
  }
  
  interface GalleryTabsProps {
    tabs: GalleryTab[];
    activeTab: string;
    onChange: (tab: string) => void;
  }
  
  export default function GalleryTabs({
    tabs,
    activeTab,
    onChange,
  }: GalleryTabsProps) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
  
          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`
                relative overflow-hidden hover:cursor-pointer
                lg:px-6 lg:py-3 px-4 py-1.5 border lg:text-sm text-xs tracking-[1.5px] uppercase
                transition-colors duration-200
                ${
                  isActive
                    ? "bg-brand text-white border-brand"
                    : "bg-transparent text-[#2C2C2C] border-[#D8CEC0] hover:bg-brand hover:text-white hover:border-brand"
                }
              `}
            >
              <span className="relative z-10">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }