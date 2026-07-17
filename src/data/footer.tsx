import { WHATSAPP_NUMBER } from "@/utils/endpoints";
import { FaBriefcaseMedical, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiMagic } from "react-icons/si";
//Footer data
export const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Treatments", href: "/treatments" },
        { label: "Our Team", href: "/doctor" },
        { label: "Dental Tourism", href: "/tour" },
        { label: "Academy", href: "/academy" },
        { label: "Gallery", href: "/gallery" },
        { label: "Dental Plans", href: "/dental-plans" },
        { label: "Common Problems", href: "/common-problems" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Centers", href: "/dentist-near-me" },
        { label: "Blogs", href: "/blogs" },
        { label: "Reviews", href: "/reviews" },
        { label: "Our Legacy", href: "/legacy" },
        { label: "Patient Safety Practices", href: "/patient-safety" },
        { label: "Post Treatment Care", href: "/post-instruction" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Warranty", href: "/warranty" },
      ],
    },
  ];
  
  const message = encodeURIComponent(
    "Hi, I'm interested in your services."
  );
  
  export const socialIcons = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=61590839840757",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/rekha_dental_/",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@drgauravsaxena84?si=OFTPftaGOJNF22Qs",
      label: "YouTube",
    },

    {
      icon: <FaBriefcaseMedical />,
      url: "https://www.practo.com/ghaziabad/clinic/rekha-dental-clinic-and-implant-center-nehru-nagar/doctors",
      label: "Practo",
    },
    // {
    //   icon: <FaLinkedinIn />,
    //   url: "https://www.linkedin.com/company/your-linkedin-page",
    //   label: "LinkedIn",
    // },
    {
      icon: <SiMagic />,
      url: "https://magicpin.in/Ghaziabad/Daulatpura/Healthcare/Rekha-Dental-Clinic-Ghaziabad/store/181b6a9?srsltid=AfmBOoph3cCOGhMp4yg6Sn_eXbB88HJieMezG67cKOXbWA7_8oefqX6U",
      label: "Magicpin",
    },
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      label: "WhatsApp",
    },
  ];

  export const contactInfo = [
    {
      icon: MdPhone,
      text: "+91-8130-406-405",
      href: "tel:+918130406405",
    },
    {
      icon: MdEmail,
      text: "support@rekhadental.com",
      href: "mailto:support@rekhadental.com",
    },
  ];
  
  