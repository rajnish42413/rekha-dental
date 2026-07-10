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
          <p className="uppercase font-semibold">
            Rekha Dental Clinic Ghaziabad
          </p>
    
          <p className="mt-2">
            House No 622, First Floor, Satyam Enclave,
            New Kotgaon, Opp Rakesh Marg, Kotgaon,
            Kotgaon Village, Daulatpura, Ghaziabad,
            Uttar Pradesh 201001
          </p>
    
          <p className="mt-5 font-semibold">
            REKHA DENTAL CLINIC LASER AND IMPLANT CENTER
          </p>
    
          <p className="mt-2">
            A-007 Raj Nagar Residency, Near KW Delhi 6 Mall,
            Ghukna, Vikas Nagar, Raj Nagar Extension,
            Ghaziabad, Uttar Pradesh 201017
          </p>
        </>
      ),
    },
    {
      title: "Working Hours",
      icon: <ClockCircleOutlined />,
      content: (
        <>
          Mon – Sat · 10 AM – 2 PM & 5 PM – 7 PM
          <br />
          Sun · 10 AM – 2 PM
        </>
      ),
    },
    {
      title: "Phone",
      icon: <PhoneOutlined />,
      content: (
        <a
          href="tel:+918130406405"
          className="transition hover:text-[#0F3B2E]"
        >
          +918130406405
        </a>
      ),
    },
    {
      title: "Email",
      icon: <MailOutlined />,
      content: (
        <a
          href="mailto:support@rekhadental.com"
          className="break-all transition hover:text-[#0F3B2E]"
        >
          support@rekhadental.com
        </a>
      ),
    },
  ];
  
  export default function ContactInfoSection() {
    return (
      <section className="h-full bg-[#F5F1EA] p-6 md:p-6 lg:p-10">
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-yellow">
              Contact Information
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {infoCards.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#E5DDD0] bg-[#FAF8F4] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7C2A0] hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex lg:h-12 lg:w-12 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE6D7] text-lg text-[#0F3B2E] transition  ">
                      {item.icon}
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-yellow">
                        {item.title}
                      </p>
  
                      <div className="lg:text-md text-sm leading-7 text-[#4B4B4B] ">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        </div>
      </section>
    );
  }