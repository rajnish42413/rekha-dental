"use client";

import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const infoCards = [
  {
    title: "Location",
    icon: <EnvironmentOutlined />,
    content: (
      <>
        <a
          href="https://maps.app.goo.gl/HiVTSks8ATLy4rMy5"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-[#0F3B2E] transition"
        >
          <p className="uppercase font-semibold">Rekha Dental — Kotgaon</p>

          <p className="mt-2">
            House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh
            Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh
            201001
          </p>
        </a>

        <a
          href="https://maps.app.goo.gl/uYcdauD5jVtN1bEp6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block hover:text-[#0F3B2E] transition"
        >
          <p className="font-semibold">REKHA DENTAL — RAJ NAGAR EXTENSION</p>

          <p className="mt-2">
            A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas
            Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017
          </p>
        </a>
      </>
    ),
  },
  {
    title: "Working Hours",
    icon: <ClockCircleOutlined />,
    content: (
      <>
        Mon – Sat · 9:30 AM – 2:30 PM & 5 PM – 8 PM
        <br />
        Sun · 9:30 AM – 2:30 PM
      </>
    ),
  },
  {
    title: "Phone",
    icon: <PhoneOutlined />,
    href: "tel:+918130406405",
    content: <span>+918130406405</span>,
  },
  {
    title: "Email",
    icon: <MailOutlined />,
    href: "mailto:support@rekhadental.com",
    content: <span>support@rekhadental.com</span>,
  },
];
export default function ContactInfoSection() {
  return (
    <section className="h-full bg-[#F5F1EA] p-6 md:p-6 lg:p-10">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex mb-4 items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <p className="uppercase tracking-[2px] text-xs font-black text-emerald-600 lg:text-sm ">
              CONTACT INFORMATION
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5">
            {infoCards.map((item) => {
              const Card = item.href ? "a" : "div";

              return (
                <Card
                  key={item.title}
                  {...(item.href
                    ? {
                        href: item.href,
                        target:
                          item.title === "Location" ? "_blank" : undefined,
                        rel:
                          item.title === "Location"
                            ? "noopener noreferrer"
                            : undefined,
                      }
                    : {})}
                  className="group block rounded-2xl border border-[#E5DDD0] bg-[#FAF8F4] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7C2A0] hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex lg:h-12 lg:w-12 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE6D7] text-lg text-[#0F3B2E]">
                      {item.icon}
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-yellow">
                        {item.title}
                      </p>

                      <div className="lg:text-md text-sm leading-7 text-[#4B4B4B]">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
