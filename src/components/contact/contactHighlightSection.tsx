import {
    CalendarOutlined,
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
  } from "@ant-design/icons";
import SectionHeader from "../general/sectionHeader";
  
  
  const contactCards = [
    {
      id: 1,
      icon: <PhoneOutlined />,
      title: "Call Us",
      description: [
        "+91 81304 06405",
        "Mon – Sat · 10 AM – 2 PM",
        "Evening · 5 PM – 7 PM",
        "Sunday · 10 AM – 2 PM",
      ],
    },
    {
      id: 2,
      icon: <MailOutlined />,
      title: "Email Us",
      description: ["We'll respond", "within 24 hours."],
    },
    {
      id: 3,
      icon: <EnvironmentOutlined />,
      title: "Visit Us",
      description: ["Rekha Dental Clinic, Ghaziabad"],
    },
  ];
  
  export default function ContactHighlightSection() {
    return (
      <section className=" bg-[#FAF8F4] p-8 md:p-12">
        <SectionHeader
          tag="Get In Touch"
          title="We’re here to help."
          subtitle="For appointments, consultations, or international inquiries, our concierge team is available throughout the week."
          align="left"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border border-[#E8E1D7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex lg:h-12 lg:w-12 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5EFE4] text-[22px] text-[#0F3B2E]">
                {item.icon}
              </div>
              <div>
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
                  {item.title}
                </p>
  
                <div className="space-y-1">
                  {item.description.map((line, index) => (
                    <p
                      key={index}
                      className="lg:text-md text-sm leading-[1.7] text-[#4B4B4B]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-6 border border-[#ECE4D8] bg-[#F6F0E6] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-5">
            <div className="flex lg:h-12 lg:w-12  items-center justify-center rounded-full bg-white text-[22px] text-[#0F3B2E] shadow-sm">
              <CalendarOutlined />
            </div>
  
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
                Looking To Book An Appointment?
              </p>
  
              <p className="lg:text-md text-sm leading-[1.8] text-[#5A5A5A]">
                Please call us during business hours for immediate assistance.
              </p>
            </div>
          </div>
          <a
            href="tel:+918130406405"
            className="flex lg:h-12 h-10 active:scale-95 transition-all  items-center justify-center bg-[#0F3B2E] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-white  duration-300 "
          >
            Call Now
          </a>
        </div>
      </section>
    );
  }