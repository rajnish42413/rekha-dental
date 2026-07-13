import { FaRegSmile } from "react-icons/fa";
import { FaChild, FaTooth } from "react-icons/fa6";
import { GiToothbrush } from "react-icons/gi";
import { MdMedicalServices, MdOutlineBiotech, MdOutlineHealthAndSafety } from "react-icons/md";
import { PiToothFill, PiToothLight } from "react-icons/pi";
import { TbDental, TbDentalBroken } from "react-icons/tb";
import {
    ScanOutlined,
    SafetyCertificateOutlined,
    StarOutlined,
    TrophyOutlined,
  } from "@ant-design/icons";

//Landing page
export const pillars = [
    {
      id: 1,
      title: "AI-Guided Diagnostics",
      description:
        "Advanced 3D imaging and precision diagnostics designed to create highly personalized treatment plans.",
      icon: <ScanOutlined />,
      number: "01",
    },
    {
      id: 2,
      title: "Specialist-Only Care",
      description:
        "Every procedure is handled by experienced specialists focused exclusively on their area of expertise.",
      icon: <TrophyOutlined />,
      number: "02",
    },
    {
      id: 3,
      title: "Lifetime Aftercare",
      description:
        "Long-term guidance, transparent follow-ups, and continued support beyond treatment completion with affordable follow-up care as needed.",
      icon: <SafetyCertificateOutlined />,
      number: "03",
    },
    {
      id: 4,
      title: "Private Atelier Experience",
      description:
        "Calm interiors, discreet appointments, and an elevated clinical atmosphere centered around comfort.",
      icon: <StarOutlined />,
      number: "04",
    },
  ];
  
  export const exploreDentalServices = [
    {
      id: 1,
      title: "Dental Implants",
      slug: "dental-implants",
      icon: <FaTooth />,
    },
  
    {
      id: 2,
      title: "Root Canal Treatment",
      slug: "root-canal-treatment",
      icon: <MdMedicalServices />,
    },
  
    {
      id: 3,
      title: "Clear Aligners",
      slug: "clear-aligners",
      icon: <TbDental />,
    },
  
    {
      id: 4,
      title: "Cosmetic Dentistry",
      slug: "cosmetic-dentistry",
      icon: <FaRegSmile />,
    },
  
    {
      id: 5,
      title: "Teeth Cleaning",
      slug: "teeth-cleaning-scaling",
      icon: <GiToothbrush />,
    },
  
    {
      id: 6,
      title: "Dental Fillings",
      slug: "dental-fillings",
      icon: <PiToothFill />,
    },
  
    {
      id: 7,
      title: "Dental Bridges",
      slug: "dental-bridges",
      icon: <TbDentalBroken />,
    },
  
    {
      id: 8,
      title: "Tooth Removal",
      slug: "tooth-removal",
      icon: <MdOutlineHealthAndSafety />,
    },
  
    {
      id: 9,
      title: "Pediatric Dentistry",
      slug: "pediatric-dentistry",
      icon: <FaChild />,
    },
  
    {
      id: 10,
      title: "Laser Treatment",
      slug: "laser-dental-treatment",
      icon: <PiToothLight />,
    },
  
    {
      id: 11,
      title: "Digital Scanning",
      slug: "digital-robotic-scanning",
      icon: <MdOutlineBiotech />,
    },
  
    {
      id: 12,
      title: "Full Mouth Rehabilitation",
      slug: "full-mouth-rehabilitation",
      icon: <FaTooth />,
    },
  ];
  
  export const homeFaqs = [
    {
      question: "How often should I visit a dentist?",
      answer:
        "Most patients benefit from a dental check-up and professional cleaning every six months. Regular visits help detect issues early and maintain long-term oral health.",
    },
  
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "While walk-ins may be accommodated when possible, scheduling an appointment helps minimize waiting time and ensures dedicated attention from our dental team.",
    },
  
    {
      question: "Are dental treatments painful?",
      answer:
        "Modern dental techniques, advanced equipment, and effective anesthesia make most treatments comfortable with minimal discomfort during and after the procedure.",
    },
  
    {
      question: "Do you provide dental implants?",
      answer:
        "Yes, we offer advanced dental implant solutions to replace missing teeth and restore both function and aesthetics with long-lasting results.",
    },
  
    {
      question: "Do you offer clear aligner treatment?",
      answer:
        "Yes, we provide clear aligner solutions designed to straighten teeth discreetly and comfortably without the appearance of traditional braces.",
    },
  
    {
      question: "Can children receive treatment at Rekha Dental?",
      answer:
        "Absolutely. Our pediatric dental services are designed to provide gentle, child-friendly care that supports healthy smiles from an early age.",
    },
  
    {
      question: "What should I do during a dental emergency?",
      answer:
        "If you experience severe pain, swelling, trauma, or a broken tooth, contact our clinic immediately so we can guide you and arrange prompt care.",
    },
  
    {
      question: "Do you offer smile makeover treatments?",
      answer:
        "Yes, we provide cosmetic dentistry services including teeth whitening, veneers, aligners, and comprehensive smile makeover solutions tailored to individual goals.",
    },
  
    {
      question: "What payment options are available?",
      answer:
        "We accept multiple payment methods and can guide you through available treatment plans and membership options during your consultation.",
    },
  
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be scheduled through our website, by phone, or directly through WhatsApp for quick assistance from our team.",
    },
  ];
  
  export const dentalPlanHighlights = [
    {
      id: 1,
      title: "Exclusive Discounts",
      description:
        "Save on consultations, diagnostics, and selected dental treatments.",
    },
    {
      id: 2,
      title: "Preventive Care",
      description:
        "Regular check-ups and early intervention help protect your long-term oral health.",
    },
    {
      id: 3,
      title: "Family Benefits",
      description:
        "Choose plans designed to support individuals and families alike.",
    },
  ];
  
  export const premiumDentalProcedures = [
    {
      id: 1,
      index: "01",
      title: "Immediate Implantology",
      slug: "immediate-implantology",
      description:
        "Immediate Implantology enables tooth replacement in a significantly shorter timeframe by placing dental implants soon after extraction. This advanced approach helps preserve bone structure, reduces treatment duration, improves aesthetics, and restores function quickly. Using precise digital planning and modern surgical techniques, patients can enjoy a faster, more comfortable path to a confident smile.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847949/implants_rorvzs.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  
    {
      id: 2,
      index: "02",
      title: "Zimmer Dental Implants",
      slug: "zimmer-dental-implants",
      description:
        "Zimmer Dental Implants are globally recognized for their precision engineering, exceptional stability, and long-term success rates. Designed to integrate naturally with the jawbone, these premium implants provide superior function and aesthetics. They offer a durable solution for missing teeth while ensuring optimal comfort, chewing efficiency, and a natural-looking smile that lasts for years.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847949/zimmer_ujhbp4.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  
    {
      id: 3,
      index: "03",
      title: "Dental Veneers",
      slug: "dental-veneers",
      description:
        "Dental Veneers are ultra-thin custom-crafted shells designed to enhance the appearance of teeth by correcting stains, chips, gaps, and minor alignment concerns. Crafted from high-quality porcelain or composite materials, veneers deliver a natural, bright, and symmetrical smile. They are one of the most sought-after cosmetic dental treatments for achieving dramatic smile transformations.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847949/veneers_g2bsb0.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  
    {
      id: 4,
      index: "04",
      title: "Clear Aligners & Braces",
      slug: "clear-aligners-braces",
      description:
        "Clear Aligners and Braces provide effective solutions for correcting crowded, crooked, or misaligned teeth. Modern orthodontic treatments improve smile aesthetics while enhancing bite function and oral health. Whether choosing nearly invisible aligners or traditional braces, patients benefit from customized treatment plans designed to deliver predictable, comfortable, and long-lasting alignment results.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847948/aligners_axk9vz.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  
    {
      id: 5,
      index: "05",
      title: "Full Mouth Rehabilitation",
      slug: "full-mouth-rehabilitation",
      description:
        "Full Mouth Rehabilitation is a comprehensive treatment approach that restores the health, function, and appearance of the entire mouth. Combining restorative, cosmetic, and rehabilitative procedures, it addresses worn, damaged, missing, or compromised teeth. This customized solution helps patients regain confident smiles, improved chewing ability, balanced bite function, and long-term oral wellness.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847948/full-mouth_l1kruz.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  
    {
      id: 6,
      index: "06",
      title: "Professional Teeth Bleaching",
      slug: "professional-teeth-bleaching",
      description:
        "Professional Teeth Bleaching is an advanced cosmetic procedure designed to safely remove stains and discoloration caused by food, beverages, aging, and lifestyle habits. Performed under expert supervision, the treatment delivers noticeably whiter teeth while maintaining enamel safety. It enhances smile confidence, creates a youthful appearance, and provides faster, more predictable results than over-the-counter whitening products.",
      image:
        "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781847948/bleaching_nsgpgz.png",
      discount: "10",
      startingPrice: "999",
      price: "1110",
    },
  ];
  