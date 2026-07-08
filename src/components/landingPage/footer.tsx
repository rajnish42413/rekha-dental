import { contactInfo, footerLinks, socialIcons } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand border-t border-zinc-200 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-serif font-header tracking-widest uppercase text-xl text-white font-semibold">
                Rekha Dental Clinic
              </span>
            </div>
          
          </Link>
          <p className="text-sm leading-relaxed text-white max-w-xs">
            Combining cutting-edge dental technology with expert care to craft
            healthy, beautiful smiles. Where precision meets comfort in every
            treatment.
          </p>

          <div className="space-y-3 text-sm text-white">
            {contactInfo.map(({ icon: Icon, text }, index) => (
              <p key={index} className="flex items-center gap-3">
                <Icon className="text-white" />
                <span className="">{text}</span>
              </p>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Media Link"
                className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-white
        text-md text-white
        transition-all duration-300
        hover:bg-[#CBA553]
        hover:text-white
      "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col space-y-5">
            <h3 className="text-[#CBA553] font-medium text-sm tracking-widest uppercase">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-[#CBA553] transition-all duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="mt-16 pt-8 border-t border-zinc-200 max-w-7xl mx-auto flex flex-col
      md:flex-row justify-between items-center text-[11px] tracking-widest uppercase text-white"
      >
        <p>© 2026 Rekha Dental Clinic.</p>
        <div className="mt-4 md:mt-0 flex items-center gap-4"></div>
      </div>
    </footer>
  );
}
