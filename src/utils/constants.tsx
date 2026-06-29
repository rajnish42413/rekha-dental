import {
  FaFacebookF,
  FaHandHoldingHeart,
  FaHandshake,
  FaHeart,
  FaInstagram,
  FaPeopleGroup,
  FaShieldHeart,
  FaShieldVirus,
  FaTooth,
  FaUserDoctor,
  FaUserShield,
  FaYoutube,
} from "react-icons/fa6";
import {
  MdCleaningServices,
  MdEmail,
  MdHealthAndSafety,
  MdMedicalServices,
  MdOutlineBiotech,
  MdOutlineFactCheck,
  MdOutlineWorkspacePremium,
  MdPhone,
  MdVerifiedUser,
} from "react-icons/md";
import {
  ScanOutlined,
  SafetyCertificateOutlined,
  StarOutlined,
  TrophyOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiCheckCircle,
  FiClipboard,
  FiCpu,
  FiDatabase,
  FiEdit3,
  FiHeart,
  FiLayers,
  FiLink,
  FiLock,
  FiMapPin,
  FiMessageSquare,
  FiRefreshCw,
  FiShield,
  FiSmile,
  FiStar,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { CLOUDINARY_BASE } from "./endpoints";
import { FaRegSmile } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiLaserPrecision } from "react-icons/gi";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiToothbrush } from "react-icons/gi";
import { PiToothLight, PiToothFill } from "react-icons/pi";
import { TbDentalBroken } from "react-icons/tb";
//Navbar
export const menuLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Our Team",
    href: "/doctor",
  },
  {
    label: "Dental Tourism",
    href: "/tour",
  },
  {
    label: "Academy",
    href: "/academy",
  },

  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Our Legacy",
    href: "/legacy",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

//Footer data
export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Services", href: "/services" },
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
      { label: "Blogs", href: "/blogs" },
      { label: "Reviews", href: "/reviews" },
      { label: "Our Legacy", href: "/legacy" },
      { label: "Patient Safety Practices", href: "/patient-safety" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const socialIcons = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/mamtaraghav21" },
  // { icon: <FaTwitter />, url: "#" },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/rekhadentalgzb?utm_source=qr&igsh=bTRvMzU2eHQ2eW44",
  },
  {
    icon: <FaYoutube />,
    url: "https://youtube.com/@drgauravsaxena84?si=OFTPftaGOJNF22Qs",
  },
];

export const contactInfo = [
  {
    icon: MdPhone,
    text: "+918130406405",
  },
  {
    icon: MdEmail,
    text: "support@rekhadental.com",
  },
];

//Services
export const serviceCards = [
  {
    id: 1,
    index: "01",
    title: "Immediate Implantology",
    slug: "immediate-implantology",
    description: "Same-day implants with surgical precision.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781613968/old-implant_llbay6.png`,
    discount: "10",
    startingPrice: "32990",
    price: "45990",
  },
  {
    id: 2,
    index: "02",
    title: "Clear Aligners",
    slug: "clear-aligners",
    description:
      "Discreet and comfortable orthodontic treatment for straighter teeth.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service16/thumbnail`,
    discount: "10",
    startingPrice: "6000",
    price: "70000",
  },
  {
    id: 3,
    index: "03",
    title: "Preventive · Ages 0–13",
    slug: "preventive-ages-0-13",
    description: "Gentle first visits for the youngest smiles.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781614234/preventive-pit_mdjbzb.png`,
    discount: "10",
    startingPrice: "1499",
    price: "2499",
  },
  {
    id: 4,
    index: "04",
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    description: "Compassionate dental care tailored for children.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service5/thumbnail`,
    discount: "10",
    startingPrice: "1499",
    price: "3999",
  },

  {
    id: 5,
    index: "05",
    title: "General and Restorative",
    slug: "general-restorative",
    description: "Hygiene, fillings, crowns meticulously done.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service4/thumbnail`,
    discount: "10",
    startingPrice: "1250",
    price: "3500",
  },
  {
    id: 6,
    index: "06",
    title: "Digital Robotic Scanning",
    slug: "digital-robotic-scanning",
    description: "AI-guided 3D scans for sub-millimetric care.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781600169/robotic_zqztvx.png`,
    discount: "10",
    startingPrice: "2000",
    price: "2200",
  },
  {
    id: 7,
    index: "07",
    title: "Dental Fillings",
    slug: "dental-fillings",
    description: "Natural-looking restorations for healthy smiles.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service6/thumbnail`,
    discount: "10",
    startingPrice: "1250",
    price: "12500",
  },

  {
    id: 8,
    index: "08",
    title: "Dental Bridges",
    slug: "dental-bridges",
    description:
      "Durable tooth replacement solutions for function and aesthetics.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service7/thumbnail`,
    discount: "10",
    startingPrice: "5500",
    price: "15990",
  },

  {
    id: 9,
    index: "09",
    title: "Dental Implants",
    slug: "dental-implants",
    description: "Advanced implant procedures for permanent tooth replacement.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service8/thumbnail`,
    discount: "10",
    startingPrice: "32990",
    price: "45990",
  },

  {
    id: 10,
    index: "10",
    title: "Orthodontic Treatment",
    slug: "orthodontic-treatment",
    description: "Modern alignment solutions for beautifully straight teeth.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service9/thumbnail`,
    discount: "10",
    startingPrice: "40000",
    price: "70000",
  },

  {
    id: 11,
    index: "11",
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    description: "Precision endodontic care focused on tooth preservation.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service10/thumbnail`,
    discount: "10",
    startingPrice: "4990",
    price: "8990",
  },

  {
    id: 12,
    index: "12",
    title: "Tooth Removal",
    slug: "tooth-removal",
    description: "Safe and comfortable extraction procedures with expert care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service11/thumbnail`,
    discount: "10",
    startingPrice: "1000",
    price: "7990",
  },

  {
    id: 13,
    index: "13",
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description:
      "Smile-enhancing treatments designed for aesthetic excellence.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service12/thumbnail`,
    discount: "10",
    startingPrice: "1490",
    price: "15990",
  },

  {
    id: 14,
    index: "14",
    title: "Teeth Cleaning & scaling",
    slug: "teeth-cleaning-scaling",
    description: "Professional scaling and polishing for optimal oral hygiene.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service13/thumbnail`,
    discount: "10",
    startingPrice: "990",
    price: "3490",
  },

  {
    id: 15,
    index: "15",
    title: "Laser Dental Treatment",
    slug: "laser-dental-treatment",
    description: "Minimally invasive laser procedures with enhanced precision.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service14/thumbnail`,
    discount: "10",
    startingPrice: "1000",
    price: "4990",
  },
  {
    id: 16,
    index: "16",
    title: "Tooth Jewellery",
    slug: "tooth-jewellery",
    description:
      "Enhance your smile with stylish and safe tooth jewellery applications.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service15/thumbnail`,
    discount: "10",
    startingPrice: "2500",
    price: "2500",
  },
  {
    id: 17,
    index: "17",
    title: "Full Mouth Rehabilitation",
    slug: "full-mouth-rehabilitation",
    description:
      "Comprehensive restoration of oral health, function, and aesthetics.",
    image: `${CLOUDINARY_BASE}/rekha-dental/services/service18/thumbnail`,
    discount: "10",
    startingPrice: "32990",
    price: "Custom Quote",
  },

  {
    id: 19,
    index: "19",
    title: "Dental Crowns",
    slug: "dental-crowns",
    description:
      "Custom-crafted dental crowns designed to restore damaged, weakened, or root canal treated teeth. From durable PFM crowns to premium ceramic and Emax restorations, our crowns blend strength, function, and natural aesthetics for long-lasting smile rehabilitation.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781857257/ChatGPT_Image_Jun_19_2026_01_45_07_PM_tilxyt.png`,
    discount: "10",
    startingPrice: "4500",
    price: "5000",
  },
  {
    id: 20,
    index: "20",
    title: "Dental Veneers",
    slug: "dental-veneers",
    description:
      "Transform chipped, stained, uneven, or worn teeth with ultra-thin custom veneers designed to enhance smile aesthetics. Our direct and indirect veneer solutions create a brighter, more symmetrical smile while preserving a natural appearance and long-term durability.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781858744/ChatGPT_Image_Jun_19_2026_02_13_50_PM_i6r1dk.png`,
    discount: "10",
    startingPrice: "5490",
    price: "7490",
  },
  {
    id: 21,
    index: "21",
    title: "Dental Splints",
    slug: "dental-splints",
    description:
      "Custom-made dental splints and night guards designed to protect teeth from grinding, clenching, and excessive bite forces. These appliances help reduce jaw pain, prevent tooth wear, relieve muscle tension, and improve comfort for patients affected by bruxism and TMJ-related concerns.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859345/Gemini_Generated_Image_sk6bask6bask6bas_uuyrxz.png`,
    discount: "10",
    startingPrice: "4500",
    price: "8500",
  },
  {
    id: 22,
    index: "22",
    title: "Dentures",
    slug: "dentures",
    description:
      "Restore confidence, speech, and chewing ability with custom-crafted complete and partial dentures. Designed for comfort, stability, and natural aesthetics, our denture solutions help replace missing teeth while improving facial support and overall oral function for a confident everyday smile.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859910/Gemini_Generated_Image_fmvfgqfmvfgqfmvf_dvceiq.png`,
    discount: "10",
    startingPrice: "8990",
    price: "25990",
  },
  {
    id: 23,
    index: "23",
    title: "General Dental Procedures",
    slug: "general-dental-procedures",
    description:
      "Comprehensive dental care covering routine examinations, dental X-rays, emergency treatments, sensitivity management, preventive procedures, minor surgical care, and essential oral health services. Designed to address everyday dental concerns with timely diagnosis, comfort, and professional clinical care.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781860548/Gemini_Generated_Image_lhoye4lhoye4lhoy_v4ijx4.png`,
    discount: "10",
    startingPrice: "300",
    price: "2500",
  },
];
export const serviceDetails = [
  {
    id: 1,
    slug: "immediate-implantology",
    hero: {
      title: "Immediate Implantology",
      subtitle: "Same-day implants with surgical precision.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781613968/old-implant_llbay6.png`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Immediate implantology, often referred to as 'Teeth in a Day,' represents the pinnacle of modern restorative dentistry. This advanced procedure allows for the placement of a dental implant into the extraction socket immediately after a tooth is removed. By bypassing the traditional several-month waiting period, patients can maintain their facial aesthetics and oral function without interruption. Our clinic utilizes high-resolution bone density mapping to ensure every implant is placed in the optimal position for long-term stability. This approach significantly reduces the number of surgical interventions and shortens the overall healing timeline. It is an ideal solution for those seeking a rapid transition back to a complete, confident smile. Each case is meticulously planned using virtual surgical software to guarantee sub-millimetric accuracy and predictable aesthetic outcomes.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "3D guided implant placement",
        "Minimally invasive techniques",
        "High-precision surgical planning",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Step by considered step.",
      steps: [
        {
          index: "01",
          title: "Consultation",
          description:
            "Detailed consultation and imaging to plan implant placement.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service1/process1`,
        },
        {
          index: "02",
          title: "Same-day Placement",
          description:
            "Implant is placed immediately after extraction with precision.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service1/process2`,
        },
        {
          index: "03",
          title: "Recovery",
          description: "Guided healing process with follow-up care.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service1/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Is same-day implant safe?",
        answer:
          "Yes, with proper planning and case selection it is highly safe and effective.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Initial healing takes a few days, full integration takes a few months.",
      },
    ],
    treatments: [
      {
        name: "Osstem Dio",
        price: "₹32,990",
      },
      {
        name: "Neodent Aqua Straumann Implant",
        price: "₹34,990",
      },
      {
        name: "ZimVie BioHorizons Implant",
        price: "₹45,990",
      },
      {
        name: "Bone Graft",
        price: "₹3,990 - ₹7,990",
      },
      {
        name: "Densa Burs",
        price: "₹4,990 - ₹6,990",
      },
      {
        name: "Colla Plug / Tape",
        price: "₹1,200 - ₹2,000",
      },
      {
        name: "Piezo Use",
        price: "₹4,990 per implant",
      },
      {
        name: "Abutment Cost (Milled & Custumised is Extra ",
        price: "Approx. ₹3,000 - ₹6,000",
      },
    ],
  },
  {
    id: 2,
    slug: "digital-robotic-scanning",
    hero: {
      title: "Digital Robotic Scanning",
      subtitle: "AI-guided 3D scans for sub-millimetric care.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781600169/robotic_zqztvx.png`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Digital Robotic Scanning has revolutionized the way we capture the topography of the mouth, moving far beyond the era of messy, uncomfortable putty impressions. Utilizing state-of-the-art intraoral sensors and AI-assisted robotics, we can now create a perfect digital twin of your teeth and gums in mere seconds. This technology allows for a level of precision that human hands alone cannot achieve, capturing details at a sub-millimetric scale. These scans serve as the foundation for everything from clear aligners to custom-milled crowns. The real-time feedback loop allows patients to see their dental structure on-screen immediately, fostering a collaborative environment for treatment planning. By integrating AI, the software can identify potential issues such as micro-fractures or early-stage decay that might be invisible to the naked eye. This commitment to digital excellence ensures that every restoration fits perfectly the first time.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "AI-powered diagnostics",
        "High-resolution 3D scans",
        "Real-time treatment planning",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Precision at every step.",
      steps: [
        {
          index: "01",
          title: "Digital Scan",
          description: "Comfortable intraoral scanning within minutes.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service2/process1`,
        },
        {
          index: "02",
          title: "AI Analysis",
          description: "Automated analysis for precise diagnostics.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service2/process2`,
        },
        {
          index: "03",
          title: "Planning",
          description: "Detailed planning using accurate digital models.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service2/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Is scanning painful?",
        answer: "No, it is completely non-invasive and comfortable.",
      },
      {
        question: "How accurate is it?",
        answer:
          "It provides extremely high precision compared to traditional methods.",
      },
    ],
    treatments: [
      {
        name: "Digital Intraoral Scan",
        price: "Included with Treatment",
      },
      {
        name: "3D Digital Smile Scan",
        price: "Included with Treatment",
      },
      {
        name: "Digital Treatment Planning",
        price: "Included with Treatment",
      },
      {
        name: "Robotic Guided Dental Scan",
        price: "Included with Treatment",
      },
    ],
  },
  {
    id: 3,
    slug: "preventive-ages-0-13",
    hero: {
      title: "Preventive · Ages 0–13",
      subtitle: "Gentle first visits for the youngest smiles.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781614234/preventive-pit_mdjbzb.png`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "The foundation of a lifetime of oral health begins well before the first permanent tooth appears. Our preventive program for ages 0–2 is designed to introduce infants and toddlers to the dental environment in a way that is nurturing and entirely stress-free. We focus on the 'Age One Visit' philosophy, which allows us to monitor the early eruption of primary teeth and the development of the jaw. This stage is crucial for educating parents on proper cleaning techniques, the impact of nutrition on dental health, and the prevention of 'nursing bottle' decay. By establishing a 'dental home' early, we significantly reduce the likelihood of dental anxiety in later years. Our child-friendly suites are equipped to make these first interactions playful and engaging. We don't just look at teeth; we look at the overall growth and development of your child's facial structure. Our goal is to ensure that your child's first memories of the dentist are filled with smiles and comfort.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Child-friendly suites",
        "Behavior-guided approach",
        "Parent education programs",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Building trust early.",
      steps: [
        {
          index: "01",
          title: "First Visit",
          description: "Relaxed knee-to-knee examination with parents.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service3/process1`,
        },
        {
          index: "02",
          title: "Assessment",
          description: "Evaluation of feeding habits and oral development.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service3/process2`,
        },
        {
          index: "03",
          title: "Routine",
          description: "Friendly check-ins to monitor growth.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service3/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "When should the first visit be?",
        answer: "Between 6–12 months of age.",
      },
      {
        question: "Will my baby be afraid?",
        answer: "No, visits are designed to be calm and comforting.",
      },
    ],
    treatments: [
      {
        name: "Pit & Fissure Sealant",
        price: "₹1,499-₹1,999",
      },
      {
        name: "Varnish",
        price: "₹1999/-(Voco)",
      },
      {
        name: "Varnish",
        price: "₹2499/-(Ivoclar)",
      },
    ],
  },
  {
    id: 4,
    slug: "general-restorative",
    hero: {
      title: "General and Restorative",
      subtitle: "Hygiene, fillings, crowns meticulously done.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service4/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "General and restorative dentistry forms the backbone of our practice, focusing on the repair and preservation of your natural teeth. Whether you require a routine hygiene session or a complex multi-unit bridge, our approach is defined by meticulous attention to detail. We utilize the latest biocompatible materials that mimic the light-reflecting properties of natural enamel, ensuring your restorations are invisible to the eye. Beyond aesthetics, we prioritize the functional integrity of your bite, ensuring that every crown and filling is perfectly balanced. Our restorative techniques are designed to be minimally invasive, preserving as much of the healthy tooth structure as possible. We incorporate advanced diagnostic tools like digital X-rays and intraoral cameras to catch issues before they require extensive intervention. This proactive approach helps maintain your oral health while avoiding unnecessary costs. Our commitment is to provide restorations that are as durable as they are beautiful.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Modern restorative materials",
        "Precision crown systems",
        "Digital diagnostics",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Care that lasts.",
      steps: [
        {
          index: "01",
          title: "Assessment",
          description: "Comprehensive oral health evaluation.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service4/process1`,
        },
        {
          index: "02",
          title: "Treatment",
          description: "Precision-driven restorative procedures.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service4/process2`,
        },
        {
          index: "03",
          title: "Maintenance",
          description: "Ongoing care for lasting dental health.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service4/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Do fillings last long?",
        answer: "Yes, modern materials ensure durability for many years.",
      },
      {
        question: "Are crowns noticeable?",
        answer: "No, they are designed to look completely natural.",
      },
    ],
    treatments: [
      {
        name: "Basic GIC Filling",
        price: "₹1,250",
      },
      {
        name: "Premium GIC Filling",
        price: "₹1,800",
      },
      {
        name: "Nano Hybrid Composite Filling",
        price: "₹1,500",
      },
      {
        name: "VOCO Premium Filling",
        price: "₹1,990",
      },
      {
        name: "Ivoclar VIP Premium Filling",
        price: "₹2,490",
      },
      {
        name: "Direct Composite Filling",
        price: "₹3,500",
      },
      {
        name: "Class II Restoration Under Rubber Dam",
        price: "₹3,500",
      },
    ],
  },
  {
    id: 5,
    slug: "pediatric-dentistry",
    hero: {
      title: "Pediatric Dentistry",
      subtitle: "Compassionate dental care tailored for children.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service5/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Pediatric dentistry at our clinic is about more than just cleaning teeth; it’s about creating a positive relationship with healthcare. We understand that children have unique anatomical and emotional needs, which is why our environment is specifically tailored to be vibrant and welcoming. From specialized instruments designed for smaller mouths to sedation options for anxious patients, every detail is considered. Our team is trained in pediatric behavior management, ensuring that every child feels empowered and safe during their visit. We offer a full range of services including sealants, fluoride treatments, and early orthodontic assessments. By focusing on education, we teach children the importance of oral hygiene in a way that is fun and memorable. We also work closely with parents to manage developmental milestones like losing baby teeth and the arrival of permanent molars. Our mission is to ensure every child leaves our office with a healthy smile and a sense of pride in their oral health.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Gentle sedation options",
        "Pediatric-sized imaging",
        "Sealant protection technology",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Friendly and fast.",
      steps: [
        {
          index: "01",
          title: "Introduction",
          description: "Meet and greet to build comfort.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service5/process1`,
        },
        {
          index: "02",
          title: "Examination",
          description: "Gentle cleaning and check-up.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service5/process2`,
        },
        {
          index: "03",
          title: "Education",
          description: "Fun lessons on brushing and flossing.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service5/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "At what age should kids see a dentist?",
        answer:
          "As soon as their first tooth appears, or by their first birthday.",
      },
      {
        question: "Are dental X-rays safe for kids?",
        answer:
          "Yes, we use digital X-rays with minimal radiation and lead aprons.",
      },
    ],
    treatments: [

      {
        name: "Pulpectomy",
        price: "₹3,500",
      },
      {
        name: "Pit & Fissure Sealant",
        price: "₹1,499-₹1,999",
      },
      {
        name: "Varnish",
        price: "₹1999/-(Voco)",
      },
      {
        name: "Varnish",
        price: "₹2499/-(Ivoclar)",
      },
    ],
  },
  {
    id: 6,
    slug: "dental-fillings",
    hero: {
      title: "Dental Fillings",
      subtitle: "Natural-looking restorations for healthy smiles.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service6/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Gone are the days of silver-mercury fillings that darken over time. Our modern dental fillings utilize composite resins and ceramic particles that are matched precisely to the shade of your natural tooth. This procedure is designed to restore teeth damaged by decay or minor fractures while maintaining a seamless aesthetic. We use a multi-layered bonding technique that strengthens the tooth structure, effectively sealing off the area to prevent future decay. The process is quick, often completed in a single visit, and requires minimal removal of the healthy tooth. Our materials are mercury-free and highly resistant to the daily wear and tear of chewing. We also prioritize patient comfort, using advanced local anesthetics and isolation techniques to ensure a painless experience. The result is a restoration that is not only functional but completely indistinguishable from the rest of your smile.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Tooth-colored composite resins",
        "Advanced bonding agents",
        "Digital decay detection",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Restore and protect.",
      steps: [
        {
          index: "01",
          title: "Preparation",
          description: "Removing decay and cleaning the area.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service6/process1`,
        },
        {
          index: "02",
          title: "Bonding",
          description: "Layering composite material to fill the cavity.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service6/process2`,
        },
        {
          index: "03",
          title: "Polishing",
          description: "Shaping and buffing for a natural finish.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service6/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "How long do composite fillings last?",
        answer: "Typically 7–10 years with good oral hygiene.",
      },
      {
        question: "Will the filling match my tooth?",
        answer: "Yes, we use a shade guide to match your enamel perfectly.",
      },
    ],
    treatments: [
      {
        name: "Basic Restoration GIC Filling",
        price: "₹1,250",
      },
      {
        name: "Premium Restoration GIC Filling",
        price: "₹1,800",
      },
      {
        name: "Nano Hybrid Composite Filling",
        price: "₹1,500",
      },
      {
        name: "VOCO Premium Composite Filling",
        price: "₹1,990",
      },
      {
        name: "Ivoclar VIP Composite Filling",
        price: "₹2,490",
      },
      {
        name: "Direct Composite Restoration",
        price: "₹3,500",
      },
      {
        name: "Class II Restoration Under Rubber Dam",
        price: "₹3,500",
      },
      {
        name: "Metal Inlay / Onlay",
        price: "₹3,500",
      },
      {
        name: "Ceramic (Emax) Inlay / Onlay",
        price: "₹9,500 - ₹12,500",
      },
      {
        name: "Direct",
        price: "₹3500/- I ₹4500/- I ₹5500/- (R-DAM)",
      },
      {
        name: "Calss 2 Or Under Rubber Dam",
        price: "₹3500/",
      },
    ],
  },
  {
    id: 7,
    slug: "dental-bridges",
    hero: {
      title: "Dental Bridges",
      subtitle:
        "Durable tooth replacement solutions for function and aesthetics.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service7/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "A dental bridge is a sophisticated solution for replacing one or more missing teeth by 'bridging' the gap between existing teeth. This restoration consists of custom-made crowns for the teeth on either side of the gap, which support the artificial tooth in the middle. Our bridges are crafted from high-grade porcelain or zirconia, providing both the strength needed for chewing and the translucency of natural teeth. Beyond restoring your smile, bridges prevent the remaining teeth from shifting out of position, which can lead to bite problems and jaw pain. We utilize digital impressions to ensure a perfect fit, which is critical for the long-term health of the supporting teeth. The procedure typically involves two visits: one for preparation and a second for the final placement. A well-maintained bridge can last for many years, significantly improving your quality of life and confidence.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "High-strength Zirconia",
        "Digital impression scanning",
        "CAD/CAM manufacturing",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Bridging the gap.",
      steps: [
        {
          index: "01",
          title: "Prep",
          description: "Preparing anchor teeth for crowns.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service7/process1`,
        },
        {
          index: "02",
          title: "Impression",
          description: "Capturing a 3D model for the lab.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service7/process2`,
        },
        {
          index: "03",
          title: "Fitting",
          description: "Permanent placement and adjustment.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service7/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Can a bridge be replaced?",
        answer: "Yes, old bridges can be removed and replaced with new ones.",
      },
      {
        question: "Is it hard to clean under a bridge?",
        answer:
          "It requires special flossing tools, which we will show you how to use.",
      },
    ],
    treatments: [
      {
        name: "Metal/PFM/Ceramic",
        price: "Per tooth ₹16500/-, ₹19500/-, ₹22500/- include 3 Units",
      },
      // {
      //   name: "Metal Bridge",
      //   price: "₹4,500 per unit",
      // },
      // {
      //   name: "Ceramic Bridge",
      //   price: "₹10,990 per unit",
      // },
      // {
      //   name: "Emax Bridge",
      //   price: "₹15,990 per unit",
      // },
    ],
  },
  {
    id: 8,
    slug: "dental-implants",
    hero: {
      title: "Dental Implants",
      subtitle: "Advanced implant procedures for permanent tooth replacement.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service8/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Dental implants are widely considered the gold standard for tooth replacement because they replicate the entire structure of a tooth, including the root. By surgically placing a titanium post into the jawbone, we provide a stable foundation for a custom crown. This process, known as osseointegration, allows the bone to grow around the implant, making it a permanent part of your anatomy. Implants offer unparalleled stability, allowing you to eat, speak, and smile with total confidence. They also play a vital role in preventing bone loss in the jaw, which naturally occurs after a tooth is lost. Our clinic uses 3D CT scanning to assess bone volume and plan the surgery with extreme precision. Whether you are missing a single tooth or require a full-mouth reconstruction, implants provide a lifelong solution. They look, feel, and function exactly like your natural teeth.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Titanium and Ceramic implants",
        "CBCT 3D Bone Imaging",
        "Plasma-rich growth factors",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Foundation for a smile.",
      steps: [
        {
          index: "01",
          title: "Placement",
          description: "Surgical insertion of the implant post.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service8/process1`,
        },
        {
          index: "02",
          title: "Healing",
          description: "Bone integration over several months.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service8/process2`,
        },
        {
          index: "03",
          title: "Restoration",
          description: "Attaching the custom permanent crown.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service8/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Are implants painful?",
        answer:
          "Most patients report less discomfort than a simple extraction.",
      },
      {
        question: "How long do they last?",
        answer: "With proper care, dental implants can last a lifetime.",
      },
    ],
    treatments: [
      {
        name: "Osstem Dio",
        price: "₹32,990",
      },
      {
        name: "Neodent Aqua Straumann Implant",
        price: "₹34,990",
      },
      {
        name: "ZimVie BioHorizons Implant",
        price: "₹45,990",
      },
      {
        name: "Bone Grafting",
        price: "₹3,990 - ₹7,990",
      },
      {
        name: "Densah Burs",
        price: "₹4,990 - ₹6,990",
      },
      {
        name: "Colla Plug / Colla Tape",
        price: "₹1,200 - ₹2,000",
      },
      {
        name: "Piezo Use",
        price: "₹4,990 per implant",
      },
      {
        name: "Abutment Cost (Milled & Custumised is Extra ",
        price: "₹3,000 - ₹6,000",
      },
    ],
  },
  {
    id: 9,
    slug: "orthodontic-treatment",
    hero: {
      title: "Orthodontic Treatment",
      subtitle: "Modern alignment solutions for beautifully straight teeth.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service9/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Orthodontics has evolved far beyond traditional metal braces, offering a variety of discreet and efficient ways to align your teeth. We specialize in both traditional brackets and clear aligner systems like Invisalign, tailored to fit your lifestyle. Straightening your teeth is about more than just a beautiful smile; it also improves oral hygiene by making teeth easier to clean and reduces the risk of TMJ disorders. Our process begins with a comprehensive digital scan to map out every tooth movement before the treatment even begins. This allow us to show you a virtual preview of your final result. We treat patients of all ages, from interceptive orthodontics for children to advanced alignment for adults. Our goal is to achieve perfect occlusion, where the upper and lower teeth meet harmoniously. Every plan is customized to the individual’s facial profile to ensure the most aesthetic and functional outcome.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Clear Aligner Therapy",
        "Self-ligating brackets",
        "Digital smile simulation",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Aligning your future.",
      steps: [
        {
          index: "01",
          title: "Scanning",
          description: "Creating a digital map of your bite.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service9/process1`,
        },
        {
          index: "02",
          title: "Fitting",
          description: "Applying braces or delivering aligners.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service9/process2`,
        },
        {
          index: "03",
          title: "Monitoring",
          description: "Regular adjustments to guide movement.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service9/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Am I too old for braces?",
        answer: "Never! We treat many adults using discreet clear aligners.",
      },
      {
        question: "How long does treatment take?",
        answer: "Typically 12–24 months, depending on the complexity.",
      },
    ],
    treatments: [
      {
        name: "SELF LIGATING CERAMIC",
        price: "(P) ₹70000/-(VP) ₹90000/",
      },
      {
        name: " FIXED IN VISIBLE",
        price: "₹7,000-₹8,000",
      },
      {
        name: "Extra Premium Braces",
        price: "₹70,000 onwards",
      },
      {
        name: "REMOVABLE(PLATE)-",
        price: "₹4,500 onwards",
      },
      {
        name: "ALIGNERESS TYPE",
        price: "₹6,000 onwards",
      },
    ],
  },
  {
    id: 10,
    slug: "root-canal-treatment",
    hero: {
      title: "Root Canal Treatment",
      subtitle: "Precision endodontic care focused on tooth preservation.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service10/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Root canal treatment is a vital procedure designed to save a tooth that has become severely infected or decayed. Contrary to popular belief, modern root canals are no more uncomfortable than getting a standard filling, thanks to advanced anesthesia and rotary endodontic tools. During the procedure, the infected pulp is carefully removed from the interior of the tooth, and the canals are cleaned, disinfected, and sealed. This eliminates pain and prevents the spread of infection to the surrounding bone. We use high-magnification microscopes to ensure that even the smallest, most complex canals are thoroughly treated. Preserving your natural tooth is always our priority, as it maintains your natural bite and prevents the need for more complex replacements. Following the treatment, a crown is typically placed to restore the tooth's strength. It is a highly successful procedure that can extend the life of your tooth indefinitely.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Microscopic Endodontics",
        "Rotary instrumentation",
        "Apex locators",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Saving the natural tooth.",
      steps: [
        {
          index: "01",
          title: "Access",
          description: "Creating a small opening to reach the pulp.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service10/process1`,
        },
        {
          index: "02",
          title: "Cleaning",
          description: "Removing infection and shaping canals.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service10/process2`,
        },
        {
          index: "03",
          title: "Sealing",
          description: "Filling the space with biocompatible material.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service10/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Is a root canal painful?",
        answer:
          "No, the procedure actually relieves the pain caused by infection.",
      },
      {
        question: "Will I need a crown after?",
        answer: "Usually, yes, to protect the tooth from fracturing.",
      },
    ],
    treatments: [
      {
        name: "Root Canal Treatment Starts from ",
        price: "₹5,990",
      },
      {
        name: "Re-RCT",
        price: "₹6500/- +(₹2500/- + ₹3500/-) + ₹5500/- Crown ",
      },
    ],
  },
  {
    id: 11,
    slug: "tooth-removal",
    hero: {
      title: "Tooth Removal",
      subtitle: "Safe and comfortable extraction procedures.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service11/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "While our primary goal is always to save your natural teeth, there are instances where an extraction is the best option for your overall health. This may be due to severe decay, advanced periodontal disease, or impacted wisdom teeth that threaten the alignment of your smile. We approach every extraction with a focus on 'atraumatic' techniques, which prioritize the preservation of the surrounding bone and tissue. This is especially important if you plan to replace the tooth with a dental implant in the future. We offer various levels of sedation to ensure that the experience is entirely stress-free and painless. Post-operative care is a cornerstone of our service, and we provide detailed instructions to ensure a fast and complication-free recovery. Our team is expert in surgical extractions, including the removal of complex wisdom teeth. We ensure you are fully informed of your replacement options before the procedure begins.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Atraumatic extraction tools",
        "Piezosurgery (ultrasonic bone cutting)",
        "Sedation dentistry",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Gentle extraction.",
      steps: [
        {
          index: "01",
          title: "Numbing",
          description: "Ensuring the area is completely insensitive.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service11/process1`,
        },
        {
          index: "02",
          title: "Extraction",
          description: "Careful removal of the tooth structure.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service11/process2`,
        },
        {
          index: "03",
          title: "Aftercare",
          description: "Clot protection and healing guidance.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service11/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "How long is the recovery?",
        answer: "Most patients feel normal within 3–5 days.",
      },
      {
        question: "What can I eat after?",
        answer:
          "Soft foods like yogurt and soup are best for the first 24 hours.",
      },
    ],
    treatments: [
      {
        name: "Anterior Mobile Tooth Extraction",
        price: "₹1,500",
      },
      {
        name: "Anterior Normal Tooth Extraction",
        price: "₹1,800-₹2,200",
      },
      {
        name: "Upper Surgical Extraction",
        price: "₹5,000",
      },
      {
        name: "Lower Surgical Extraction",
        price: "₹6,000",
      },
      {
        name: "Posterior Mobile Tooth Extraction",
        price: "₹1,500",
      },
      {
        name: "Posterior Normal Tooth Extraction",
        price: "₹1,800-₹2,200",
      },
      {
        name: "Posterior Upper Surgical Extraction",
        price: "₹8,000",
      },
      {
        name: "Posterior Lower Surgical Extraction",
        price: "₹12,000",
      },
      {
        name: "Posterior Implant Tooth Extraction",
        price: "₹5,000-₹8,000",
      },
    ],
  },
  {
    id: 12,
    slug: "cosmetic-dentistry",
    hero: {
      title: "Cosmetic Dentistry",
      subtitle: "Smile-enhancing treatments designed for excellence.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service12/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Cosmetic dentistry is the art of creating a smile that perfectly complements your unique facial features. We offer a comprehensive suite of aesthetic services, ranging from chair-side teeth whitening to full porcelain veneers. Our process begins with a 'Digital Smile Design,' where we use photography and 3D imaging to simulate your new look before any work is done. This allows for a collaborative approach where you can provide input on the shape, color, and alignment of your teeth. Whether you want to close a gap, fix a chipped tooth, or completely transform your appearance, we use the most advanced materials available. Our veneers are ultra-thin yet incredibly strong, requiring minimal tooth preparation while providing a life-changing result. We focus on 'natural' beauty, ensuring your smile looks healthy and authentic rather than artificial. A beautiful smile is a powerful tool for confidence, and our goal is to help you achieve it.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital Smile Design (DSD)",
        "Porcelain Veneer systems",
        "Laser whitening",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Designing your smile.",
      steps: [
        {
          index: "01",
          title: "Design",
          description: "Digital simulation of your ideal smile.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service12/process1`,
        },
        {
          index: "02",
          title: "Prep",
          description: "Preparing the teeth for restorations.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service12/process2`,
        },
        {
          index: "03",
          title: "Reveal",
          description: "Final placement of your custom veneers.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service12/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Will veneers look fake?",
        answer:
          "Not at all; we customize the translucency to match natural teeth.",
      },
      {
        question: "How long does whitening last?",
        answer: "Results can last 1–3 years depending on your habits.",
      },
    ],
    treatments: [
      {
        name: "Basic Teeth Bleaching",
        price: "₹8000",
      },
      {
        name: "1 Cycle Teeth Bleaching",
        price: "₹8000",
      },
      {
        name: "2 Cycle Teeth Bleaching",
        price: "₹12000",
      },
      {
        name: "Premium Laser Bleaching",
        price: "₹18000",
      },
      {
        name: "Direct Composite Veneer",
        price: "₹5,490",
      },
      {
        name: "Indirect Ceramic Veneer",
        price: "₹15,990",
      },
    ],
  },
  {
    id: 13,
    slug: "teeth-cleaning-scaling",
    hero: {
      title: "Teeth Cleaning & Scaling",
      subtitle: "Professional scaling and polishing for hygiene.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service13/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Professional teeth cleaning, or prophylaxis, is the most effective way to prevent periodontal disease and tooth decay. Even with perfect brushing habits, plaque can harden into tartar (calculus) in hard-to-reach areas, which can only be removed by a dental professional. Our hygiene sessions are comprehensive, involving ultrasonic scaling to remove buildup and airflow polishing to eliminate surface stains from coffee, tea, or tobacco. We also perform a thorough periodontal screening to check for early signs of gum recession or inflammation. Beyond cleaning, our hygienists provide personalized coaching on home care techniques tailored to your specific oral anatomy. This preventive approach is essential for maintaining the health of both your natural teeth and any dental restorations you may have. We recommend a professional cleaning every six months to keep your breath fresh and your smile bright. It is a painless and refreshing experience that forms the foundation of oral wellness.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Ultrasonic Scalers",
        "Airflow stain removal",
        "Prophy-jet technology",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Foundation of health.",
      steps: [
        {
          index: "01",
          title: "Scaling",
          description: "Removing tartar from above and below the gumline.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service13/process1`,
        },
        {
          index: "02",
          title: "Polishing",
          description: "Smoothing the tooth surface and removing stains.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service13/process2`,
        },
        {
          index: "03",
          title: "Fluoride",
          description: "Optional treatment to strengthen enamel.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service13/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "How often should I get a cleaning?",
        answer: "Every six months is standard for most patients.",
      },
      {
        question: "Does scaling hurt?",
        answer:
          "No, we use gentle techniques and can apply numbing gel if you are sensitive.",
      },
    ],
    treatments: [
      {
        name: "Buccal Only (Anterior)",
        price: "₹1499",
      },
      {
        name: "Buccal Upper Teeth Only",
        price: "₹999",
      },
      {
        name: "First Premolar to First Premolar",
        price: "₹2,490",
      },
      {
        name: "(Ant+Post) Full Mouth",
        price: "₹2,990",
      },
      {
        name: "Polishing",
        price: "₹990",
      },
      {
        name: "Air Polishing",
        price: "₹990",
      },
    ],
  },
  {
    id: 14,
    slug: "laser-dental-treatment",
    hero: {
      title: "Laser Dental Treatment",
      subtitle: "Minimally invasive laser procedures.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service14/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Laser dentistry represents a significant leap forward in patient comfort and clinical precision. By using focused light energy, we can perform a wide variety of procedures—ranging from cavity preparation to gum contouring—without the need for traditional drills or scalpels. Lasers are incredibly precise, allowing us to target specific areas while leaving the surrounding healthy tissue untouched. One of the greatest benefits of laser treatment is the reduction in bleeding and swelling, as the laser cauterizes and sterilizes the area as it works. This often leads to much faster healing times and a reduced need for local anesthesia. We use lasers to treat gum disease by removing infected tissue and stimulating the regrowth of healthy gums. It is also an excellent tool for treating cold sores and hypersensitivity. For many patients, the absence of the 'drill sound' makes for a much more relaxed and pleasant dental visit. Laser technology is safe, effective, and at the cutting edge of modern care.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "WaterLase iPlus",
        "Diode lasers for soft tissue",
        "Laser-assisted biostimulation",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Light-speed healing.",
      steps: [
        {
          index: "01",
          title: "Calibration",
          description: "Setting the laser wavelength for your specific needs.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service14/process1`,
        },
        {
          index: "02",
          title: "Treatment",
          description: "Applying laser energy to the target area.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service14/process2`,
        },
        {
          index: "03",
          title: "Recovery",
          description: "Rapid healing with minimal post-op care.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service14/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Are dental lasers safe?",
        answer:
          "Yes, they are FDA-approved and very safe when used by trained professionals.",
      },
      {
        question: "Do lasers replace drills entirely?",
        answer:
          "For many procedures, yes, but some traditional tools are still needed for certain tasks.",
      },
    ],
    treatments: [
      {
        name: "Laser Bio-Stimulation",
        price: "₹1,499/-sitting",
      },
      {
        name: "Laser Tooth Eruption",
        price: "₹1,499-₹1,999",
      },
      {
        name: "Laser Root Canal Treatment",
        price: "₹1000/-sitting",
      },
      {
        name: "Laser Periodontal Therapy (Per Quadrant)",
        price: "₹3,000-₹5,000",
      },
      {
        name: "Periodontal Therapy",
        price: "₹1,499/-tooth",
      },
    ],
  },
  {
    id: 15,
    slug: "tooth-jewellery",
    hero: {
      title: "Tooth Jewellery",
      subtitle: "Add a sparkle to your smile.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service15/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Tooth jewellery is a safe, painless, and non-invasive cosmetic dental procedure that enhances your smile with a touch of elegance. Small decorative crystals or gems are carefully bonded to the surface of a tooth using dental-grade adhesive without drilling or damaging the enamel. The procedure is quick, reversible, and completely safe when performed by dental professionals. Tooth gems are available in various shapes and designs, allowing patients to personalize their smile according to their style. With proper care and oral hygiene, tooth jewellery can remain securely attached for months or even years while maintaining its sparkle and appearance.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Dental-grade crystal bonding",
        "LED curing technology",
        "Non-invasive enamel-safe application",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Sparkle with confidence.",
      steps: [
        {
          index: "01",
          title: "Tooth Preparation",
          description:
            "The tooth surface is cleaned and prepared for secure bonding.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service15/process1`,
        },
        {
          index: "02",
          title: "Gem Placement",
          description: "The selected crystal or jewel is precisely positioned.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service15/process2`,
        },
        {
          index: "03",
          title: "Light Curing",
          description:
            "The jewel is bonded and secured using curing light technology.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service15/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Does tooth jewellery damage teeth?",
        answer:
          "No. The procedure is completely non-invasive and does not damage the tooth enamel.",
      },
      {
        question: "How long does tooth jewellery last?",
        answer:
          "With proper care, tooth jewellery can last from several months to several years.",
      },
    ],
    treatments: [
      {
        name: "Tooth Jewellery",
        price: "₹5,000",
      },
    ],
  },
  {
    id: 16,
    slug: "clear-aligners",
    hero: {
      title: "Clear Aligners",
      subtitle: "Straighten your smile discreetly.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service16/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Clear aligners provide a modern alternative to traditional braces for correcting misaligned teeth. These custom-made transparent trays gradually move teeth into their ideal positions while remaining virtually invisible. Aligners are removable, allowing patients to eat, brush, and floss comfortably without restrictions. Digital treatment planning ensures predictable and precise tooth movement, while the smooth plastic design minimizes irritation often associated with metal braces. Clear aligners are ideal for patients seeking a comfortable, aesthetic, and effective orthodontic solution.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital smile planning",
        "3D intraoral scanning",
        "Custom clear aligner fabrication",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Transform your smile step by step.",
      steps: [
        {
          index: "01",
          title: "Digital Scanning",
          description:
            "Advanced intraoral scanning creates a precise 3D model of your teeth.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service16/process1`,
        },
        {
          index: "02",
          title: "Aligner Delivery",
          description:
            "Custom aligners are fabricated and provided according to the treatment plan.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service16/process2`,
        },
        {
          index: "03",
          title: "Progress Monitoring",
          description:
            "Regular reviews ensure teeth are moving according to plan.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service16/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Are aligners better than braces?",
        answer:
          "For many cases, aligners offer a more comfortable and aesthetic alternative to traditional braces.",
      },
      {
        question: "How many hours should I wear aligners daily?",
        answer:
          "Aligners should typically be worn for 20–22 hours per day for optimal results.",
      },
    ],
    treatments: [
      {
        name: "Extra Premium",
        price: "₹55,000",
      },
      {
        name: "SELF LIGATING METAL",
        price: "₹45000/-₹55000/-₹65000/-",
      },
      {
        name: "CERAMIC",
        price: "₹40,000-₹50,000",
      },
      {
        name: "Fixed Invisible Braces",
        price: "₹7,000 - ₹8,000",
      },
    ],
  },
  {
    id: 17,
    slug: "minimally-invasive-technology",
    hero: {
      title: "Minimally Invasive Technology",
      subtitle: "Preserving more of your natural smile.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service17/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Minimally invasive dentistry focuses on preserving healthy tooth structure while delivering highly effective treatment outcomes. Using advanced diagnostic tools, digital imaging, magnification systems, and precision instruments, we can detect and treat dental concerns at their earliest stages. This approach reduces discomfort, minimizes tissue removal, shortens recovery time, and improves long-term oral health. Patients benefit from gentler procedures that prioritize conservation of natural teeth while maintaining exceptional treatment precision and aesthetics.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital intraoral scanning",
        "Microscope-assisted dentistry",
        "Advanced diagnostic imaging",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Precision with preservation.",
      steps: [
        {
          index: "01",
          title: "Digital Assessment",
          description:
            "Comprehensive digital scanning identifies issues with exceptional accuracy.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service17/process1`,
        },
        {
          index: "02",
          title: "Treatment Planning",
          description:
            "Customized treatment plans are developed using advanced digital tools.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service17/process2`,
        },
        {
          index: "03",
          title: "Precision Treatment",
          description:
            "Targeted procedures preserve healthy tissue while addressing concerns effectively.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service17/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "What is minimally invasive dentistry?",
        answer:
          "It is an approach that aims to preserve as much healthy tooth structure as possible while providing effective treatment.",
      },
      {
        question: "Is recovery faster with minimally invasive procedures?",
        answer:
          "Yes, patients often experience less discomfort and faster healing compared to traditional techniques.",
      },
    ],
  },
  {
    id: 18,
    slug: "full-mouth-rehabilitation",
    hero: {
      title: "Full Mouth Rehabilitation",
      subtitle: "Complete restoration of oral function and aesthetics.",
      image: `${CLOUDINARY_BASE}/rekha-dental/services/service18/thumbnail`,
    },
    overview: {
      tag: "OVERVIEW",
      description:
        "Full mouth rehabilitation is a comprehensive treatment approach designed for patients with multiple dental concerns affecting function, appearance, and oral health. It combines restorative, cosmetic, and rehabilitative procedures such as crowns, bridges, implants, veneers, and bite correction to rebuild the entire smile. Through careful diagnosis and treatment planning, we restore proper chewing function, improve aesthetics, relieve discomfort, and enhance overall quality of life. Every rehabilitation plan is tailored to the unique needs and goals of the patient.",
    },
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital smile design",
        "Implant-supported restorations",
        "Comprehensive occlusal analysis",
      ],
    },
    process: {
      tag: "THE PROCESS",
      title: "Rebuilding smiles comprehensively.",
      steps: [
        {
          index: "01",
          title: "Comprehensive Evaluation",
          description:
            "Detailed examination, digital scans, and diagnostics establish treatment goals.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service18/process1`,
        },
        {
          index: "02",
          title: "Treatment Planning",
          description:
            "A personalized rehabilitation plan is designed to restore function and aesthetics.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service18/process2`,
        },
        {
          index: "03",
          title: "Smile Restoration",
          description:
            "Advanced restorative procedures are performed to achieve a healthy, confident smile.",
          image: `${CLOUDINARY_BASE}/rekha-dental/services/service18/process3`,
        },
      ],
    },
    faqs: [
      {
        question: "Who needs full mouth rehabilitation?",
        answer:
          "Patients with extensive tooth wear, missing teeth, bite issues, or multiple dental concerns may benefit from full mouth rehabilitation.",
      },
      {
        question: "How long does full mouth rehabilitation take?",
        answer:
          "Treatment duration varies depending on complexity and may range from a few months to over a year.",
      },
    ],

    treatments: [
      {
        name: "Dental Implants",
        price: "₹32,990 onwards",
      },
      {
        name: "Root Canal Treatment",
        price: "₹5,990 onwards",
      },
      {
        name: "Dental Crowns",
        price: "₹4,500 onwards",
      },
      // {
      //   name: "Dental Bridges",
      //   price: "₹4,500 per unit onwards",
      // },
      {
        name: "Complete Dentures",
        price: "₹40,000 onwards",
      },
      {
        name: "Cast Partial Dentures",
        price: "₹6,000 onwards",
      },
      {
        name: "Bone Grafting",
        price: "₹3,990-₹7,990",
      },
      // {
      //   name: "Smile Rehabilitation Plan",
      //   price: "Custom Quote",
      // },
    ],
  },
  {
    id: 19,
    slug: "dental-crowns",
    hero: {
      title: "Dental Crowns",
      subtitle: "Strength, protection, and natural aesthetics restored.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781857257/ChatGPT_Image_Jun_19_2026_01_45_07_PM_tilxyt.png`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Dental crowns are custom-crafted restorations designed to rebuild damaged, weakened, fractured, or root canal treated teeth. Acting as a protective cap, a crown restores the tooth's shape, strength, function, and appearance while preventing further deterioration. At Rekha Dental, we offer a wide range of crown options including Metal, PFM, Ceramic, Zirconia, and premium Emax crowns to suit varying functional and aesthetic needs. Using advanced digital scanning and precision fabrication techniques, every crown is designed to blend seamlessly with surrounding teeth. Our focus is to provide long-lasting restorations that look natural, feel comfortable, and withstand everyday chewing forces. Whether restoring a single tooth or supporting a larger rehabilitation plan, dental crowns play a vital role in preserving oral health and smile confidence.",
    },

    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital crown design and smile planning",
        "High-strength ceramic and Emax restorations",
        "Precision shade matching for natural aesthetics",
      ],
    },

    process: {
      tag: "THE PROCESS",
      title: "Crafted for strength and beauty.",
      steps: [
        {
          index: "01",
          title: "Assessment & Preparation",
          description:
            "The tooth is carefully examined, prepared, and digitally scanned to ensure an accurate fit and long-term success.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781857199/ChatGPT_Image_Jun_19_2026_01_46_17_PM_p1neso.png`,
        },

        {
          index: "02",
          title: "Custom Crown Fabrication",
          description:
            "Your crown is designed using advanced dental technology to achieve optimal strength, comfort, and aesthetics.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781857195/ChatGPT_Image_Jun_19_2026_01_47_19_PM_sqggno.png`,
        },

        {
          index: "03",
          title: "Placement & Refinement",
          description:
            "The crown is securely bonded, adjusted for bite accuracy, and polished for a natural, seamless appearance.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781857197/ChatGPT_Image_Jun_19_2026_01_49_07_PM_lxgzji.png`,
        },
      ],
   
    },
    treatments: [
      {
        name: "Metal Crown",
        price: "₹4,500",
      },
      {
        name: "Premium Robotic Digital Scan Crown",
        price: "₹5,500",
      },
      {
        name: "PFM Crown",
        price: "₹5,500",
      },
      { name: "PFM Premium Robotic Digital Scan", price: "₹6,500" },
      {
        name: "VVIP PFM Crown",
        price: "₹7,500",
      },
      {
        name: "All Ceramic Crown",
        price: "₹10990/- Monolith, ₹12990/- (Emax Basic)",
      },
      {
        name: "All Cermaic Crown (Emax Premium)",
        price: "₹15,990",
      },
      {
        name: "All Cermaic Crown VVIP Premium",
        price: "₹20,000",
      },
    ],

    faqs: [
      {
        question: "How long does a dental crown last?",
        answer:
          "With proper care and regular dental visits, most crowns can last between 10 and 15 years or even longer.",
      },

      {
        question: "Which crown material is best?",
        answer:
          "The ideal material depends on the tooth location, bite forces, aesthetics, and budget. Ceramic, Zirconia, and Emax crowns are popular choices for natural-looking results.",
      },

      {
        question: "Is getting a dental crown painful?",
        answer:
          "The procedure is generally comfortable and performed under local anesthesia. Most patients experience minimal discomfort.",
      },

      {
        question: "Do crowns look natural?",
        answer:
          "Yes. Modern ceramic, Zirconia, and Emax crowns are carefully shade-matched to blend naturally with surrounding teeth.",
      },
    ],
  },
  {
    id: 20,
    slug: "dental-veneers",
    hero: {
      title: "Dental Veneers",
      subtitle: "Transform imperfections into a naturally radiant smile.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781858744/ChatGPT_Image_Jun_19_2026_02_13_50_PM_i6r1dk.png`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Dental veneers are ultra-thin custom-crafted shells designed to enhance the appearance of teeth by correcting discoloration, chips, gaps, minor misalignment, and uneven tooth shapes. Bonded to the front surface of the teeth, veneers create a brighter, more symmetrical, and aesthetically pleasing smile while preserving a natural appearance. At Rekha Dental, we offer both direct and indirect veneer solutions tailored to individual smile goals. Using advanced smile design principles and precision shade matching, every veneer is customized to complement facial features and dental proportions. Veneers are one of the most sought-after cosmetic dentistry treatments for patients seeking dramatic smile transformations with minimal tooth preparation and long-lasting results.",
    },

    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital smile design and facial analysis",
        "High-aesthetic composite and porcelain veneers",
        "Precision shade matching for natural results",
      ],
    },

    process: {
      tag: "THE PROCESS",
      title: "Designed for a confident smile.",
      steps: [
        {
          index: "01",
          title: "Smile Assessment",
          description:
            "A detailed consultation evaluates smile aesthetics, tooth proportions, facial harmony, and patient expectations.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781858741/ChatGPT_Image_Jun_19_2026_02_13_59_PM_on3ali.png`,
        },

        {
          index: "02",
          title: "Custom Veneer Design",
          description:
            "The ideal shape, shade, and smile design are planned to achieve natural and personalized results.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781858739/ChatGPT_Image_Jun_19_2026_02_14_06_PM_z8lqtj.png`,
        },

        {
          index: "03",
          title: "Bonding & Smile Reveal",
          description:
            "The veneers are precisely bonded and polished to create a seamless, beautiful, and long-lasting smile.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781858742/Gemini_Generated_Image_c35uj7c35uj7c35u_wsmk5f.png`,
        },
      ],
  
    },
    treatments: [
      {
        name: "Direct Composite Veneer",
        price: "₹5,490",
      },
      {
        name: "Premium Direct Composite Veneer",
        price: "₹7,490",
      },
      {
        name: "VIP Direct Composite Veneer",
        price: "₹9,490",
      },
      {
        name: "Indirect Ceramic Veneer",
        price: "₹12,500",
      },
      {
        name: "Premium Ceramic / Emax Veneer",
        price: "₹15,500",
      },
    ],

    faqs: [
      {
        question: "How long do dental veneers last?",
        answer:
          "With proper care, porcelain veneers can last 10–15 years or longer, while composite veneers typically last several years before requiring maintenance.",
      },

      {
        question: "Do veneers look natural?",
        answer:
          "Yes. Modern veneers are carefully designed to mimic the color, translucency, and texture of natural teeth for highly aesthetic results.",
      },

      {
        question: "Are veneers permanent?",
        answer:
          "Veneers are considered a long-term cosmetic solution. Depending on the type of veneer, minimal tooth preparation may be required.",
      },

      {
        question: "Can veneers fix gaps and chipped teeth?",
        answer:
          "Yes. Veneers are commonly used to correct gaps, chips, worn edges, discoloration, and minor alignment concerns.",
      },
    ],
  },
  {
    id: 21,
    slug: "dental-splints",
    hero: {
      title: "Dental Splints",
      subtitle: "Protect your teeth, relieve jaw strain, and restore comfort.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859345/Gemini_Generated_Image_sk6bask6bask6bas_uuyrxz.png`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Dental splints are custom-made oral appliances designed to protect teeth from excessive grinding, clenching, and abnormal bite forces. Commonly prescribed for patients suffering from bruxism, TMJ disorders, jaw pain, or excessive tooth wear, splints help reduce pressure on teeth and jaw joints while promoting healthier bite function. At Rekha Dental, every splint is carefully fabricated using precise dental impressions and bite analysis to ensure maximum comfort and effectiveness. Whether used during sleep or as part of a comprehensive bite correction plan, dental splints can prevent long-term damage, relieve muscle tension, reduce headaches, and improve overall oral health. Our solutions include basic, premium, and occlusal splints tailored to individual needs.",
    },

    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Custom bite analysis and jaw evaluation",
        "Precision-fabricated splints for optimal fit",
        "Advanced TMJ and bruxism management solutions",
      ],
    },

    process: {
      tag: "THE PROCESS",
      title: "Designed for protection and comfort.",
      steps: [
        {
          index: "01",
          title: "Diagnosis & Bite Assessment",
          description:
            "A detailed examination evaluates teeth wear, jaw function, bite alignment, and symptoms related to grinding or clenching.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859346/Gemini_Generated_Image_72rua572rua572ru_g66sep.png`,
        },

        {
          index: "02",
          title: "Custom Splint Fabrication",
          description:
            "Precise impressions or digital scans are used to create a personalized splint that fits comfortably and functions effectively.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859346/Gemini_Generated_Image_k9w8a6k9w8a6k9w8_kgk7rv.png`,
        },

        {
          index: "03",
          title: "Fitting & Follow-Up",
          description:
            "The splint is adjusted for comfort and bite accuracy, followed by periodic reviews to ensure long-term effectiveness.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859344/Gemini_Generated_Image_2xuxrx2xuxrx2xux_cfwwfl.png`,
        },
      ],
    },

    faqs: [
      {
        question: "Who needs a dental splint?",
        answer:
          "Dental splints are commonly recommended for patients who grind their teeth, clench their jaw, experience TMJ discomfort, or show signs of excessive tooth wear.",
      },

      {
        question: "Do I have to wear the splint every night?",
        answer:
          "Most patients wear their splints during sleep, although some conditions may require additional daytime use as advised by the dentist.",
      },

      {
        question: "Can a splint stop teeth grinding completely?",
        answer:
          "A splint protects teeth from damage and reduces the effects of grinding, but it does not eliminate the underlying habit itself.",
      },

      {
        question: "How long does a dental splint last?",
        answer:
          "With proper care and regular check-ups, a quality dental splint can last several years depending on usage and grinding intensity.",
      },
    ],
    treatments: [
      {
        name: "Basic Occlusal Splint",
        price: "₹4,500",
      },
      {
        name: "Premium Occlusal Splint",
        price: "₹5,500",
      },
      {
        name: "Basic Splint",
        price: "₹4,500",
      },
      {
        name: "Premium Splint",
        price: "₹5,000",
      },
      {
        name: "PERIO PACK(GC COMPANY)-",
        price: "₹1,200",
      },
      {
        name: "PER SUTURE",
        price: "₹800-₹1000",
      },
    ],
  },
  {
    id: 22,
    slug: "dentures",
    hero: {
      title: "Dentures",
      subtitle: "Restore confidence, comfort, and the ability to smile freely.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859910/Gemini_Generated_Image_fmvfgqfmvfgqfmvf_dvceiq.png`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Dentures are custom-crafted prosthetic solutions designed to replace missing teeth and restore essential oral functions such as chewing, speaking, and smiling with confidence. Whether replacing a few teeth or an entire arch, modern dentures offer significantly improved comfort, aesthetics, and stability compared to traditional designs. At Rekha Dental, we provide complete dentures, partial dentures, cast partial dentures, and precision attachment dentures tailored to each patient's needs. Using advanced impressions, bite analysis, and aesthetic planning, every denture is designed to achieve a natural appearance and comfortable fit. Our goal is to help patients regain oral function, facial support, and confidence while improving their overall quality of life.",
    },
    treatments: [
      {
        name: "Cast Partial Denture with Precision Attachment",
        price: "₹6,000",
      },
      {
        name: "RPD- Cast Partial Denture with Precision Attachment",
        price: "₹13,000 onwards",
      },
      {
        name: "Complete Denture",
        price: "STARTING AT ₹40000/-₹60000/- ₹8000/-, *6000/- Extra For ivoclar Teeth",
      },
    ],

    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Precision-fit complete and partial dentures",
        "Advanced bite registration and jaw relation analysis",
        "Natural tooth selection and aesthetic smile planning",
      ],
    },

    process: {
      tag: "THE PROCESS",
      title: "Designed for comfort and confidence.",
      steps: [
        {
          index: "01",
          title: "Consultation & Evaluation",
          description:
            "A detailed assessment is performed to evaluate missing teeth, oral tissues, jaw structure, and treatment goals.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859909/Gemini_Generated_Image_rydlemrydlemrydl_w3orag.png`,
        },

        {
          index: "02",
          title: "Custom Denture Fabrication",
          description:
            "Precise impressions and measurements are used to create dentures that offer optimal fit, function, and aesthetics.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859832/Gemini_Generated_Image_a15fqfa15fqfa15f_rbgso7.png`,
        },

        {
          index: "03",
          title: "Delivery & Adjustments",
          description:
            "The dentures are fitted, adjusted for comfort, and reviewed periodically to ensure long-term satisfaction and performance.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781859828/Gemini_Generated_Image_2jogdy2jogdy2jog_aamhwg.png`,
        },
      ],
    },

    faqs: [
      {
        question: "What types of dentures do you offer?",
        answer:
          "We provide complete dentures, partial dentures, cast partial dentures, and precision attachment dentures based on individual requirements.",
      },

      {
        question: "Will dentures look natural?",
        answer:
          "Yes. Modern dentures are carefully designed to match facial features, gum contours, and natural tooth appearance for an aesthetic result.",
      },

      {
        question: "How long does it take to get dentures?",
        answer:
          "The timeline varies depending on the type of denture and individual case requirements, but treatment typically involves multiple appointments for optimal results.",
      },

      {
        question: "Can I eat normally with dentures?",
        answer:
          "Most patients regain significant chewing function after adapting to their dentures, allowing them to enjoy a wide variety of foods comfortably.",
      },
    ],
  },
  {
    id: 23,
    slug: "general-dental-procedures",

    hero: {
      title: "General Dental Procedures",
      subtitle: "Essential dental care for everyday oral health needs.",
      image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781860548/Gemini_Generated_Image_lhoye4lhoye4lhoy_v4ijx4.png`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "General dental procedures form the foundation of long-term oral health by focusing on prevention, diagnosis, routine care, and timely intervention. From comprehensive dental examinations and digital X-rays to sensitivity management, preventive treatments, emergency care, and minor dental procedures, these services help detect problems early and maintain healthy teeth and gums. At Rekha Dental, every treatment is delivered with a patient-first approach, combining modern technology, clinical expertise, and personalized care. Whether you need a routine check-up, pain relief, diagnostic assessment, or preventive treatment, our goal is to provide effective solutions that support lifelong oral wellness.",
    },
    treatments: [
      {
        name: "IOPA",
        price: "₹300",
      },
      {
        name: "Eugenol Dressing",
        price: "₹600/- First Sitting, ₹600/- Second Sitting Onwards",
      },
      {
        name: "Sharp Tooth Trimming",
        price: "₹999",
      },
      {
        name: "Sensitivity Test",
        price: "₹500",
      },
      {
        name: "Local Anesthesia Test",
        price: "₹500",
      },
    ],
    technology: {
      tag: "TECHNOLOGY",
      points: [
        "Digital diagnostic imaging and dental X-rays",
        "Comprehensive oral health assessment",
        "Modern preventive and minimally invasive techniques",
      ],
    },

    process: {
      tag: "THE PROCESS",
      title: "Simple, preventive, and patient-focused.",
      steps: [
        {
          index: "01",
          title: "Examination & Diagnosis",
          description:
            "A detailed oral examination helps identify concerns, evaluate oral health, and determine the most appropriate treatment plan.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781860550/Gemini_Generated_Image_1pen5n1pen5n1pen_aqksrf.png`,
        },

        {
          index: "02",
          title: "Treatment Planning",
          description:
            "Based on clinical findings, preventive, diagnostic, or corrective procedures are recommended according to individual needs.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781860550/Gemini_Generated_Image_q29wwyq29wwyq29w_zugoze.png`,
        },

        {
          index: "03",
          title: "Care & Follow-Up",
          description:
            "Treatment is completed with appropriate guidance, preventive recommendations, and follow-up support when required.",
          image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781860550/Gemini_Generated_Image_s9i61cs9i61cs9i6_ukkzen.png`,
        },
      ],
    },

    faqs: [
      {
        question:
          "What treatments are included under general dental procedures?",
        answer:
          "General dental procedures include examinations, dental X-rays, sensitivity management, preventive care, emergency dental treatment, minor procedures, and routine oral health services.",
      },

      {
        question: "How often should I have a dental check-up?",
        answer:
          "Most patients should visit their dentist every six months for routine examinations and preventive care, although individual needs may vary.",
      },

      {
        question: "Do I need an X-ray at every visit?",
        answer:
          "Not always. Dental X-rays are recommended only when clinically necessary to diagnose conditions that may not be visible during a routine examination.",
      },

      {
        question: "Can I visit for dental pain or an emergency?",
        answer:
          "Yes. General dental care includes the assessment and management of dental pain, infections, trauma, and other urgent oral health concerns.",
      },
    ],
  },
];

//About Us
export const milestonesTimeline = {
  tag: "OUR JOURNEY",
  title: "Years of trusted dental excellence.",

  items: [
    {
      id: "1",
      year: "2007",
      title: "The Beginning",
      description:
        "Rekha Dental Clinic was established in Ghaziabad with a vision to provide ethical, patient-focused, and modern dental care for families across the city.",

      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline1`,
    },

    {
      id: "2",
      year: "2010",
      title: "Advanced Dental Care",
      description:
        "The clinic expanded its services to include advanced restorative and cosmetic dentistry with a strong focus on precision and long-term patient care.",

      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline2`,
    },

    {
      id: "3",
      year: "2013",
      title: "Specialized Expertise",
      description:
        "With experienced specialists joining the practice, Rekha Dental Clinic strengthened its expertise in oral medicine, radiology, root canal treatments, and smile restoration.",

      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline3`,
    },

    {
      id: "4",
      year: "2016",
      title: "Implant And Laser Dentistry",
      description:
        "The clinic introduced modern implantology and laser dental procedures, offering minimally invasive treatments with faster healing and greater comfort.",
      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline4`,
    },

    {
      id: "5",
      year: "2020",
      title: "Technology Expansion",
      description:
        "Digital diagnostics, advanced imaging systems, and modern treatment protocols were integrated to deliver safer, faster, and more accurate dental solutions.",

      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline5`,
    },

    {
      id: "6",
      year: "2025",
      title: "A Trusted Name in Ghaziabad",
      description:
        "Today, Rekha Dental Clinic continues to serve patients across Ghaziabad with comprehensive dental care, compassionate treatment, and a commitment to clinical excellence.",

      image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline6`,
    },
  ],
};

export const accreditationsData = {
  tag: "ACCREDITATIONS",
  title: "Recognized by those who set the standard.",
  items: [
    `${CLOUDINARY_BASE}/rekha-dental/certificates/certificate1`,
    `${CLOUDINARY_BASE}/rekha-dental/certificates/certificate2`,
    `${CLOUDINARY_BASE}/rekha-dental/certificates/certificate3`,
    `${CLOUDINARY_BASE}/rekha-dental/certificates/certificate4`,
  ],
};
export const clinicJourneyData = [
  {
    id: 1,
    title: "Where the Journey Began",
    description:
      "The original reception and patient waiting area that marked the beginning of Rekha Dental's commitment to compassionate and accessible dental care.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781156413/old-clinic1_wzmpna.jpg`,
  },
  {
    id: 2,
    title: "Personalized Patient Consultations",
    description:
      "A dedicated consultation space where treatment planning, patient education, and personalized care discussions formed the foundation of every successful treatment.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781156422/old-clinic2_z0gtxv.jpg`,
  },
  {
    id: 3,
    title: "Advancing Clinical Excellence",
    description:
      "One of the early treatment rooms equipped to provide comprehensive dental procedures, reflecting the clinic's focus on quality care and continuous growth.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781156410/old-clinic3_jb3vda.jpg`,
  },
  {
    id: 4,
    title: "Building a Legacy of Trust",
    description:
      "An early clinical workspace that served hundreds of patients and helped establish Rekha Dental as a trusted name in modern dentistry.",
    image: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781156415/old-clinic4_etadh2.jpg`,
  },
];
// Doctor Page
export const aboutStatsData = [
  {
    value: "19",
    label: "Years of Practice",
  },
  {
    value: "8400+",
    label: "Smiles Restored",
  },
  {
    value: "12000+",
    label: "Implants Placed",
  },
  {
    value: "99.2%",
    label: "Success Rate",
  },
];

export const doctorGauravDetails = {
  qualifications: [
    "BDS — DJ College of Dental Sciences & Research, Modinagar",
    "MDS — Institute of Dental Sciences & Technologies",
    "19+ Years of Clinical Practice",
    "Director — Rekha Dental Clinic & Implant Center",
  ],

  languages: ["English", "Hindi"],

  practiceAreas: [
    "Root Canal Treatment",
    "Dental Implants",
    "Crown & Bridge",
    "Laser Dentistry",
    "Esthetic Fillings",
    "Smile Rehabilitation",
  ],

  memberships: [
    "Indian Dental Association (IDA)",
    "IAOMR — Indian Academy of Oral Medicine & Radiology",
    "ISOI — Indian Society of Oral Implantologists",
    "Founder of AIHWA",
  ],
};

export const doctorDetailsMamta = {
  qualifications: [
    "BDS — King George’s Medical College (KGMC), Lucknow",
    "MDS — Nair Government Hospital, Mumbai",
    "Specialization in Oral Medicine & Radiology",
    "16+ Years of Clinical Experience",
  ],

  languages: ["English", "Hindi"],

  practiceAreas: [
    "Implant Dentistry",
    "Cosmetic Dentistry",
    "Oral Lesions & Ulcers",
    "Precancerous Oral Lesions",
    "Laser Dentistry",
    "Comprehensive Oral Diagnosis",
  ],

  memberships: [
    "Director — Rekha Dental, Laser & Implant Center",
    "Former Associate Professor — Govt. Dental College, Aurangabad",
    "Former Senior Lecturer — ITS Dental College",
  ],
};

export const reviewsData = [
  {
    review:
      "From the welcome to the recovery, every detail felt considered. The result is so natural I forget it isn't my own.",
    author: "Karan Kapoor",
    subtitle: "Full Arch Implants",
    rating: 5,
  },
  {
    review:
      "The technology is breathtaking, but it is the calm of the team that I remember most.",
    author: "Ritika Singh",
    subtitle: "Robotic Scanning",
    rating: 5,
  },
  {
    review:
      "Dr. Gaurav turned what I dreaded into a moment my daughter actually looks forward to.",
    author: "Abhishek Singh",
    subtitle: "Pediatric Care · Age 1",
    rating: 5,
  },
];

// Gallery Images
export const galleryImages = [
  {
    id: 1,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline1`,
    category: "facility",
    alt: "Luxury dental clinic reception area",
  },
  {
    id: 2,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline2`,
    category: "facility",
    alt: "Premium dental treatment room",
  },
  {
    id: 3,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline3`,
    category: "facility",
    alt: "Dental Facilities",
  },
  {
    id: 4,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline4`,
    category: "facility",
    alt: "Our Team",
  },
  {
    id: 5,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline5`,
    category: "facility",
    alt: "Our facilities",
  },
  {
    id: 6,
    image: `${CLOUDINARY_BASE}/rekha-dental/clinic/clinic1`,
    category: "facility",
    alt: "Clinic",
  },
  {
    id: 7,
    image: `${CLOUDINARY_BASE}/rekha-dental/clinic/clinic2`,
    category: "facility",
    alt: "Clinic",
  },
  {
    id: 8,
    image: `${CLOUDINARY_BASE}/rekha-dental/clinic/clinic3`,
    category: "facility",
    alt: "Clinic",
  },
  {
    id: 9,
    image: `${CLOUDINARY_BASE}/rekha-dental/clinic/clinic4`,
    category: "facility",
    alt: "Clinic",
  },
  {
    id: 10,
    image: `${CLOUDINARY_BASE}/rekha-dental/clinic/clinic5`,
    category: "facility",
    alt: "Clinic",
  },

  {
    id: 11,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-1`,
    category: "technology",
    alt: "Advanced dental scanning equipment",
  },
  {
    id: 12,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-2`,
    category: "technology",
    alt: "3D dental imaging technology",
  },
  {
    id: 13,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-3`,
    category: "technology",
    alt: "Modern dental instruments setup",
  },
  {
    id: 14,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-4`,
    category: "technology",
    alt: "Modern dental instruments setup",
  },
  {
    id: 15,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-5`,
    category: "technology",
    alt: "Modern dental instruments setup",
  },
  {
    id: 16,
    image: `${CLOUDINARY_BASE}/rekha-dental/gallery/technology-6`,
    category: "technology",
    alt: "Modern dental instruments setup",
  },

  {
    id: 17,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current1`,
    category: "smiles",
    alt: "Patient smile transformation",
  },
  {
    id: 18,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current2`,
    category: "smiles",
    alt: "Confident patient after treatment",
  },
  {
    id: 19,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current3`,
    category: "smiles",
    alt: "Workshop",
  },
  {
    id: 20,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile1`,
    category: "smiles",
    alt: "Happy Patient",
  },
  {
    id: 21,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile2`,
    category: "smiles",
    alt: "Smiles",
  },
  {
    id: 22,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
    category: "smiles",
    alt: "Happy Patient",
  },
  {
    id: 23,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
    category: "smiles",
    alt: "Little Smile",
  },
  {
    id: 24,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
    category: "smiles",
    alt: "Live Training",
  },
  {
    id: 25,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current5`,
    category: "smiles",
    alt: "Beautiful smile makeover result",
  },

  {
    id: 26,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
    category: "events",
    alt: "Dental awareness event",
  },
  {
    id: 27,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
    category: "events",
    alt: "Clinic celebration moment",
  },
  {
    id: 28,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
    category: "events",
    alt: "Professional dental seminar",
  },
  {
    id: 29,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
    category: "events",
    alt: "Certification",
  },
  {
    id: 30,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
    category: "events",
    alt: "Professional dental seminar",
  },
  {
    id: 31,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
    category: "events",
    alt: "Certification",
  },
  {
    id: 32,
    image: `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
    category: "smiles",
    alt: "Happy Patient",
  },
  {
    id: 33,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
    category: "events",
    alt: "Events",
  },
  {
    id: 34,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
    category: "events",
    alt: "Events",
  },
];

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
    slug: "teeth-cleaning",
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

//Academy Page
export const academyCourses = [
  {
    title: "General Dentistry Course",
    slug: "general-dentistry-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course1`,
    discount: "10",
    startingPrice: "49,000",
    price: "53,900",
    duration: "45 days",
    handsOn:false,
    description:
      "Learn the fundamentals of clinical dentistry including diagnosis, treatment planning, restorative procedures, and patient management.",
  },
  {
    title: "Endodontic Course",
    slug: "endodontic-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course2`,
    discount: "10",
    startingPrice: "15,000",
    price: "16,500",
    duration: "3 days",
    handsOn:false,
    description:
      "Master root canal procedures, rotary endodontics, access preparation, obturation techniques, and endodontic case management.",
  },
  {
    title: "Prosthodontics Course",
    slug: "prosthodontics-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course3`,
    discount: "10",
    startingPrice: "20,000",
    price: "22,000",
    duration: "3 days",
    handsOn:false,
    description:
      "Gain hands-on experience in crowns, bridges, dentures, smile rehabilitation, and fixed prosthodontic procedures.",
  },
  {
    title: "Oral Surgery Course",
    slug: "oral-surgery-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course4`,
    discount: "10",
    startingPrice: "30,000",
    price: "33,000",
    duration: "15 days",
    description:
      "Understand surgical extractions, flap design, suturing techniques, impaction management, and minor oral surgical procedures.",
  },
  {
    title: "Basic Implant Course",
    slug: "basic-implant-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course5`,
    discount: "10",
    startingPrice: "60,000",
    price: "66,000",
    duration: "4 months",
    description:
      "An introductory implantology course covering implant planning, placement protocols, instruments, and restorative basics.",
  },
  {
    title: "Complete Implant Course",
    slug: "complete-implant-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course6`,
    discount: "10",
    startingPrice: "99,000",
    price: "1,08,900",
    duration: "3 months",
    description:
      "Comprehensive implant training with advanced surgical protocols, sinus lift concepts, prosthetic workflows, and live cases.",
  },
  {
    title: "Radiology (CBCT) Course",
    slug: "radiology-cbct-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course7`,
    discount: "10",
    startingPrice: "15,000",
    price: "16,500",
    duration: "2 days",
    handsOn:true,
    description:
      "Learn CBCT interpretation, radiographic diagnosis, imaging protocols, and digital treatment planning for modern dentistry.",
  },
  {
    title: "Esthetic Dentistry",
    slug: "esthetic-dentistry-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course8`,
    discount: "10",
    startingPrice: "49,000",
    price: "53,900",
    duration: "3 days",
    description:
      "Explore smile designing, veneers, teeth whitening, composite artistry, and minimally invasive cosmetic dental procedures.",
  },
  {
    title: "Orthodontic Course",
    slug: "orthodontic-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course9`,
    discount: "10",
    startingPrice: "99,000",
    price: "1,08,900",
    duration: "6 months",
    description:
      "Study orthodontic diagnosis, treatment planning, wire bending basics, aligners, and fixed appliance mechanics.",
  },
  {
    title: "Laser Course",
    slug: "laser-dentistry-course",
    image: `${CLOUDINARY_BASE}/rekha-dental/courses/course10`,
    discount: "10",
    startingPrice: "15,000",
    price: "16,500",
    duration: "2 days",
    description:
      "Get trained in dental laser applications for soft tissue procedures, periodontal therapy, pain management, and esthetics.",
  },
];

export const commonCourseFaqs = [
  {
    question: "Who can enroll in this course?",
    answer:
      "The course is designed for dental students, interns, and practicing dentists looking to enhance their clinical skills.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, participants receive a certificate of completion upon successfully finishing the course.",
  },
];

export const commonCourseBenefits = {
  tag: "WHAT YOU WILL GAIN",
  points: [
    "Hands-on clinical exposure",
    "Real patient case discussions",
    "Expert mentorship",
    "Certificate of completion",
    "Practical treatment planning skills",
    "Enhanced clinical confidence",
  ],
};

export const courseDetails = [
  {
    slug: "general-dentistry-course",

    hero: {
      title: "General Dentistry Course",
      subtitle: "Build a strong foundation in modern clinical dentistry.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course1`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "This comprehensive course covers the essential principles of diagnosis, treatment planning, restorative procedures, preventive dentistry, and patient management. Participants gain practical insights into day-to-day clinical dentistry and develop confidence in managing routine dental cases.",
    },
    details: [
      {
        title: "Comprehensive Oral Examination and Diagnosis",
        description:
          "Learn how to perform a systematic oral examination and identify common dental conditions through clinical evaluation and radiographic interpretation. The course covers diagnostic protocols, case history recording, risk assessment, and methods to arrive at accurate treatment decisions for routine dental cases.",
      },
    
      {
        title: "Treatment Planning and Restorative Procedures",
        description:
          "Understand the principles of treatment planning and sequencing of dental procedures for optimal patient outcomes. Participants will learn cavity preparation techniques, restorative material selection, direct restorations, and evidence-based approaches for managing common restorative cases in daily practice.",
      },
    
      {
        title: "Preventive Dentistry and Patient Management",
        description:
          "Develop expertise in preventive care strategies including oral hygiene education, fluoride therapy, scaling recommendations, and long-term maintenance planning. The course also focuses on patient communication, informed consent, treatment acceptance, and building trust for successful clinical practice.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Comprehensive Oral Examination",
        "Diagnosis & Treatment Planning",
        "Restorative Procedures",
        "Preventive Dentistry",
        "Patient Communication",
        "Clinical Case Discussions",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "endodontic-course",

    hero: {
      title: "Endodontic Course",
      subtitle: "Master modern root canal treatment techniques.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course2`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Designed for dentists seeking expertise in endodontics, this course focuses on diagnosis, access cavity preparation, rotary instrumentation, obturation techniques, and management of complex root canal cases.",
    },
    details: [
      {
        title: "Diagnosis and Treatment Planning in Endodontics",
        description:
          "Learn to diagnose pulpal and periapical pathologies through clinical examination, vitality testing, radiographic interpretation, and case assessment. The course covers differential diagnosis, case selection, treatment planning, and decision-making protocols for successful endodontic therapy.",
      },
    
      {
        title: "Access Opening, Working Length and Canal Preparation",
        description:
          "Master the fundamental steps of root canal treatment including access cavity preparation, canal identification, working length determination, glide path creation, and biomechanical preparation. Participants will gain practical knowledge of hand files, rotary instrumentation systems, and irrigation protocols used in modern endodontics.",
      },
    
      {
        title: "Obturation Techniques and Management of Complex Cases",
        description:
          "Understand the principles of three-dimensional obturation and post-endodontic restoration to achieve long-term treatment success. The course also covers the management of curved canals, calcified canals, retreatment cases, procedural errors, and methods to prevent common endodontic complications.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Endodontic Diagnosis",
        "Access Preparation",
        "Rotary Endodontics",
        "Working Length Determination",
        "Obturation Techniques",
        "Management of Difficult Cases",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "prosthodontics-course",

    hero: {
      title: "Prosthodontics Course",
      subtitle: "Restore function, aesthetics, and confidence.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course3`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Gain practical experience in crowns, bridges, dentures, fixed prosthodontics, and smile rehabilitation. Learn modern restorative workflows and treatment planning strategies.",
    },
    details: [
      {
        title: "Principles of Prosthodontic Diagnosis and Treatment Planning",
        description:
          "Learn the fundamentals of prosthodontic diagnosis, patient evaluation, occlusal assessment, and treatment planning for partially and completely edentulous patients. The course focuses on selecting appropriate prosthetic solutions based on functional, aesthetic, and biological considerations.",
      },
    
      {
        title: "Fixed and Removable Prosthodontic Procedures",
        description:
          "Gain in-depth knowledge of tooth preparation principles, impression techniques, temporization, and cementation procedures for crowns and bridges. Participants will also learn the design, fabrication, and clinical management of removable partial dentures and complete dentures.",
      },
    
      {
        title: "Occlusion, Aesthetics, and Full Mouth Rehabilitation",
        description:
          "Understand the role of occlusion in prosthodontic success and learn techniques for achieving functional and aesthetic rehabilitation. The course covers smile design principles, vertical dimension assessment, occlusal rehabilitation, and multidisciplinary approaches for complex restorative cases.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Crown Preparation",
        "Bridge Design",
        "Complete Dentures",
        "Partial Dentures",
        "Smile Rehabilitation",
        "Occlusion Principles",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "oral-surgery-course",

    hero: {
      title: "Oral Surgery Course",
      subtitle: "Develop confidence in surgical dental procedures.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course4`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "This course introduces participants to oral surgical procedures including extractions, flap design, suturing techniques, impaction management, and post-operative care.",
    },
    details: [
      {
        title: "Patient Evaluation and Surgical Treatment Planning",
        description:
          "Learn the principles of case selection, medical history evaluation, clinical examination, and radiographic interpretation for oral surgical procedures. The course covers diagnosis, treatment planning, informed consent, and pre-operative assessment to ensure safe and predictable surgical outcomes.",
      },
    
      {
        title: "Exodontia and Minor Oral Surgical Procedures",
        description:
          "Gain hands-on knowledge of extraction techniques including forceps and elevator principles, flap design, bone removal, tooth sectioning, and suturing methods. Participants will learn the management of routine extractions, impacted teeth, retained roots, and other minor oral surgical procedures.",
      },
    
      {
        title: "Management of Surgical Complications and Post-Operative Care",
        description:
          "Understand the prevention and management of common surgical complications such as bleeding, dry socket, root fractures, oro-antral communication, and infection. The course also covers post-operative instructions, pain management, wound healing, and follow-up protocols for successful patient recovery.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Surgical Extractions",
        "Flap Design",
        "Suturing Techniques",
        "Impaction Management",
        "Post-operative Care",
        "Minor Oral Surgery",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "basic-implant-course",

    hero: {
      title: "Basic Implant Course",
      subtitle: "Start your journey into implant dentistry.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course5`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "An introductory implantology course covering treatment planning, implant placement concepts, instrumentation, and restorative basics for beginners.",
    },
    details: [
      {
        title: "Case Selection and Implant Treatment Planning",
        description:
          "Learn the fundamentals of implant case selection, patient evaluation, CBCT interpretation, bone assessment, and treatment planning. The course covers indications and contraindications for implant therapy, implant positioning principles, and methods for selecting the appropriate implant system for different clinical situations.",
      },
    
      {
        title: "Surgical Protocol for Implant Placement",
        description:
          "Gain practical knowledge of implant surgery including flap design, osteotomy preparation, implant insertion protocols, torque values, and achieving primary stability. Participants will understand the step-by-step workflow involved in single implant placement and immediate post-operative management.",
      },
    
      {
        title: "Healing, Prosthetic Considerations, and Complication Management",
        description:
          "Understand the biological principles of osseointegration, healing timelines, and prosthetic planning for implant-supported restorations. The course also covers the prevention and management of common surgical complications, post-operative care, and long-term maintenance protocols for successful implant outcomes.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Implant Basics",
        "Case Selection",
        "Treatment Planning",
        "Surgical Protocols",
        "Implant Instruments",
        "Restorative Concepts",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "complete-implant-course",

    hero: {
      title: "Complete Implant Course",
      subtitle: "Comprehensive implantology from planning to restoration.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course6`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "An advanced implant training program featuring surgical placement, prosthetic workflows, bone augmentation concepts, and live clinical cases.",
    },

    details: [
      {
        title: "Advanced Implant Diagnosis and Comprehensive Treatment Planning",
        description:
          "Develop expertise in advanced implant treatment planning through CBCT interpretation, bone quality assessment, prosthetically driven implant placement, and management of partially and completely edentulous patients. The course covers single tooth replacements, multiple implants, full arch rehabilitation, and interdisciplinary treatment planning for complex cases.",
      },
    
      {
        title: "Advanced Surgical Techniques and Immediate Implant Protocols",
        description:
          "Master advanced implant surgical procedures including immediate implant placement, immediate loading protocols, guided implant surgery, flapless implant placement, sinus lift procedures, ridge expansion, and bone grafting techniques. Participants will gain a thorough understanding of surgical decision-making and case selection for predictable outcomes.",
      },
    
      {
        title: "Implant Prosthetics, Complications, and Full Mouth Rehabilitation",
        description:
          "Learn the principles of implant prosthetics including impression techniques, abutment selection, screw-retained and cement-retained restorations, and occlusal considerations for implant-supported prostheses. The course also covers the management of surgical and prosthetic complications, peri-implant diseases, maintenance protocols, and full mouth implant rehabilitation workflows.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Advanced Implant Planning",
        "Surgical Placement",
        "Bone Augmentation Concepts",
        "Immediate Loading",
        "Prosthetic Workflows",
        "Live Cases",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "radiology-cbct-course",

    hero: {
      title: "Radiology (CBCT) Course",
      subtitle: "Master dental imaging and radiographic diagnosis.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course7`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Learn CBCT interpretation, digital imaging workflows, radiographic diagnosis, and treatment planning using modern radiology techniques.",
    },
    details: [
      {
        title: "Fundamentals of Dental Radiology and CBCT Imaging",
        description:
          "Learn the principles of dental radiology including image formation, radiation physics, exposure parameters, and radiation safety protocols. The course introduces the indications, advantages, and limitations of Cone Beam Computed Tomography (CBCT) and its role in modern dental diagnosis and treatment planning.",
      },
    
      {
        title: "CBCT Interpretation and Anatomical Landmark Identification",
        description:
          "Develop the skills required to systematically interpret CBCT scans by identifying normal anatomical structures and pathological findings in the maxillofacial region. Participants will learn to evaluate bone quality, sinus anatomy, mandibular canal location, impacted teeth, periapical lesions, and other clinically relevant findings.",
      },
    
      {
        title: "Clinical Applications of CBCT in Dentistry",
        description:
          "Understand the use of CBCT imaging in implant planning, endodontics, oral surgery, orthodontics, and TMJ assessment. The course covers three-dimensional treatment planning, measurement techniques, diagnostic workflows, and methods for integrating CBCT findings into everyday clinical practice for improved treatment outcomes.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "CBCT Interpretation",
        "Radiographic Anatomy",
        "Diagnostic Imaging",
        "Pathology Identification",
        "Implant Planning",
        "Digital Workflow Integration",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "esthetic-dentistry-course",

    hero: {
      title: "Esthetic Dentistry Course",
      subtitle: "Create beautiful smiles with modern cosmetic dentistry.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course8`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "Explore smile design principles, veneers, whitening procedures, composite artistry, and minimally invasive cosmetic treatments.",
    },

    details: [
      {
        title: "Principles of Smile Design and Facial Aesthetics",
        description:
          "Learn the fundamentals of aesthetic analysis including facial proportions, smile line evaluation, gingival architecture, tooth proportions, and dentofacial harmony. The course covers Digital Smile Design (DSD) concepts and methods for creating treatment plans that balance function with aesthetics.",
      },
    
      {
        title: "Direct and Indirect Aesthetic Restorations",
        description:
          "Gain practical knowledge of modern aesthetic procedures including composite bonding, diastema closure, tooth reshaping, veneers, and ceramic restorations. Participants will learn material selection, shade matching protocols, layering techniques, and preparation principles for predictable aesthetic outcomes.",
      },
    
      {
        title: "Minimally Invasive Cosmetic Dentistry Techniques",
        description:
          "Understand contemporary minimally invasive approaches to aesthetic dentistry including enamel preservation, adhesive dentistry, tooth whitening protocols, and conservative smile enhancement procedures. The course also covers case selection, patient communication, and long-term maintenance of aesthetic restorations.",
      },
    ],

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Smile Design",
        "Composite Bonding",
        "Teeth Whitening",
        "Veneers",
        "Facial Aesthetics",
        "Case Planning",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "orthodontic-course",

    hero: {
      title: "Orthodontic Course",
      subtitle: "Learn the fundamentals of tooth movement and alignment.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course9`,
    },

    overview: {
      tag: "OVERVIEW",
      description:
        "This course covers orthodontic diagnosis, treatment planning, aligners, fixed appliance therapy, and essential biomechanics.",
    },
    details: [
      {
        title: "Orthodontic Diagnosis and Treatment Planning",
        description:
          "Learn the fundamentals of orthodontic diagnosis through facial analysis, cephalometric evaluation, space analysis, and occlusal assessment. The course covers classification of malocclusions, growth assessment, case selection, and treatment planning for both adolescent and adult patients.",
      },
    
      {
        title: "Biomechanics and Appliance Therapy",
        description:
          "Develop a thorough understanding of orthodontic biomechanics including force systems, anchorage control, and tooth movement principles. Participants will learn the indications, mechanics, and clinical applications of fixed appliances, removable appliances, self-ligating brackets, and clear aligner therapy.",
      },
    
      {
        title: "Management of Orthodontic Cases and Retention Protocols",
        description:
          "Understand the clinical management of crowding, spacing, crossbites, deep bites, open bites, and Class II and Class III malocclusions. The course also covers treatment progress monitoring, finishing and detailing, retention strategies, and prevention of relapse to achieve stable long-term outcomes.",
      },
    ],
    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Orthodontic Diagnosis",
        "Treatment Planning",
        "Aligners",
        "Wire Bending",
        "Fixed Appliances",
        "Biomechanics",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },

  {
    slug: "laser-dentistry-course",

    hero: {
      title: "Laser Dentistry Course",
      subtitle: "Discover the future of minimally invasive dental care.",
      image: `${CLOUDINARY_BASE}/rekha-dental/courses/course10`,
    },
    details: [
      {
        title: "Fundamentals of Laser Physics and Tissue Interaction",
        description:
          "Learn the principles of laser technology, wavelength characteristics, and the interaction of laser energy with soft and hard oral tissues. The course covers different dental laser systems, tissue absorption properties, laser safety protocols, and selection criteria for various clinical applications.",
      },
    
      {
        title: "Soft Tissue Applications in Laser Dentistry",
        description:
          "Develop expertise in soft tissue laser procedures including gingivectomy, frenectomy, operculectomy, depigmentation, crown lengthening, and management of soft tissue lesions. Participants will understand laser settings, technique selection, and methods to achieve precise tissue management with minimal discomfort and bleeding.",
      },
    
      {
        title: "Hard Tissue Applications and Advanced Clinical Procedures",
        description:
          "Understand the applications of lasers in cavity preparation, caries removal, periodontal therapy, peri-implantitis management, and endodontic procedures. The course also covers post-operative care, complication management, and the integration of laser technology into modern dental practice for minimally invasive treatment outcomes.",
      },
    ],
    overview: {
      tag: "OVERVIEW",
      description:
        "Gain expertise in dental laser applications for soft tissue procedures, periodontal therapy, pain management, and aesthetic treatments.",
    },

    curriculum: {
      tag: "CURRICULUM",
      points: [
        "Laser Physics",
        "Soft Tissue Applications",
        "Periodontal Therapy",
        "Pain Management",
        "Aesthetic Procedures",
        "Clinical Protocols",
      ],
    },

    benefits: commonCourseBenefits,
    faqs: commonCourseFaqs,
  },
];
export const alumniReviewsData = [
  {
    review:
      "The hands-on implant sessions completely changed my confidence in clinical practice. The mentorship was exceptional throughout.",
    author: "Dr. Aarav Mehta",
    subtitle: "Complete Implant Course",
    rating: 5,
  },
  {
    review:
      "Unlike conventional workshops, this academy focused heavily on live patient exposure and real-world decision making.",
    author: "Dr. Raman Saxena",
    subtitle: "Endodontic Course",
    rating: 5,
  },
  {
    review:
      "The faculty were approachable, detail-oriented, and deeply invested in every participant’s growth.",
    author: "Dr. Rohan Kapoor",
    subtitle: "Esthetic Dentistry",
    rating: 5,
  },
  {
    review:
      "The CBCT training helped me integrate advanced radiology into my clinic immediately after the program.",
    author: "Dr. Karan Singh",
    subtitle: "Radiology (CBCT) Course",
    rating: 5,
  },
  {
    review:
      "Every session balanced theory with practical execution beautifully. It felt more like mentorship than a course.",
    author: "Dr. Ishaan Verma",
    subtitle: "Basic Implant Course",
    rating: 5,
  },
  {
    review:
      "The orthodontic module was incredibly structured and clinically relevant. I left with techniques I now use daily.",
    author: "Dr. Raj Singh",
    subtitle: "Orthodontic Course",
    rating: 5,
  },
];

export const academyFaqData = [
  {
    question: "Who is eligible to enroll?",
    answer:
      "Our programs are designed for dental students, fresh graduates, practicing dentists, and clinicians looking to upgrade their clinical expertise.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course durations vary depending on the program. Short-term workshops may last a few days, while advanced clinical programs can extend over several weeks.",
  },
  {
    question: "What are the fees?",
    answer:
      "Fees differ based on the course structure, clinical exposure, and specialization. Detailed fee information is shared during the consultation and enrollment process.",
  },
  {
    question: "What certification do I receive?",
    answer:
      "Participants receive an academy certification upon successful completion of the course, recognizing their practical and theoretical training.",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "Yes, we assist outstation and international participants with accommodation recommendations and nearby stay arrangements for a comfortable learning experience.",
  },
  {
    question: "Will I work on real patients?",
    answer:
      "Selected advanced programs include supervised live patient exposure, allowing participants to gain real clinical experience under expert mentorship.",
  },
];

export const aluminiData = [
  {
    id: 1,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
    title: "Annual Alumni Meet 2025",
    description:
      "Graduates and faculty reunited for an evening of networking, memories, and discussions about the future of modern dentistry.",
  },
  {
    id: 2,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
    title: "Advanced Implantology Workshop",
    description:
      "Alumni participated in a hands-on implantology session led by experienced dental surgeons and international mentors.",
  },
  {
    id: 3,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
    title: "Dental Health Live Workshop",
    description:
      "Former professionals collaborated to demonstrate dental procedures live to showcase advanced dentistry practices.",
  },
  {
    id: 4,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
    title: "Certification",
    description:
      "Alumni researchers presented innovative studies and clinical advancements in restorative and cosmetic dentistry.",
  },
  {
    id: 5,
    image: `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
    title: "Achievements",
    description:
      "A proud moment celebrating the achievements of dental professionals and their journey.",
  },
];

export const currentBatchData = [
  {
    id: 1,
    image: `${CLOUDINARY_BASE}/rekha-dental/academyBanner`,
    title: "Chairside Clinical Observation Session",
    description:
      "Students observed live patient examinations under expert supervision, gaining practical exposure to diagnosis, communication, and clinical workflow.",
  },
  {
    id: 2,
    image: `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline3`,
    title: "Advanced Live Patient Demonstration",
    description:
      "Faculty-led demonstrations allowed students to closely understand treatment planning, patient assessment, and precision-based clinical procedures.",
  },
  {
    id: 3,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current3`,
    title: "Oral Healthcare Awareness Drive",
    description:
      "Students conducted an awareness campaign promoting preventive dental care and oral hygiene practices within local communities.",
  },
  {
    id: 4,
    image: `${CLOUDINARY_BASE}/rekha-dental/current/current4`,
    title: "Pre-Clinical Simulation Workshop",
    description:
      "Hands-on simulation exercises helped students build confidence in restorative techniques, patient handling, and procedural accuracy.",
  },
  {
    id: 5,
    image: `${CLOUDINARY_BASE}/rekha-dental/academy/academy2`,
    title: "Interactive Clinical Mentorship Program",
    description:
      "Students participated in real-time mentorship sessions featuring live patient evaluations, case discussions, and guided clinical learning experiences.",
  },
];

export const academyActivities = [
  {
    id: 1,
    title: "Live Implant Demonstration",
    subtitle:
      "Hands-on implant placement training conducted under expert supervision.",
    image: `${CLOUDINARY_BASE}/rekha-dental/extra/extra1`,
  },
  {
    id: 2,
    title: "Advanced Endodontic Workshop",
    subtitle:
      "Practical training focused on modern root canal treatment techniques.",
    image: `${CLOUDINARY_BASE}/rekha-dental/extra/extra2`,
  },
  {
    id: 3,
    title: "Clinical Case Discussion",
    subtitle:
      "Interactive learning sessions covering complex restorative cases and treatment planning.",
    image: `${CLOUDINARY_BASE}/rekha-dental/extra/extra3`,
  },
];
//Tourism Page
export const medicalTourismBenefits = [
  {
    id: 1,
    title: "70% More Affordable",
    description:
      "World-class dentistry at a fraction of US, UK and Australian prices — without compromise.",
    icon: <PercentageOutlined />,
    number: "01",
  },
  {
    id: 2,
    title: "Internationally Trained",
    description:
      "Dentists with degrees and fellowships from Karolinska, NYU, King's College and beyond.",
    icon: <TrophyOutlined />,
    number: "02",
  },
  {
    id: 3,
    title: "Advanced Technology",
    description:
      "Robotic scanning, CBCT, digital smile design and 3D-printed surgical guides.",
    icon: <ExperimentOutlined />,
    number: "03",
  },
  {
    id: 4,
    title: "ISO Hygiene Standards",
    description:
      "Hospital-grade sterilization with autoclave-validated protocols on every instrument.",
    icon: <SafetyCertificateOutlined />,
    number: "04",
  },
  {
    id: 5,
    title: "English-Speaking Team",
    description:
      "Every clinician and concierge fluent in English — translators on request.",
    icon: <GlobalOutlined />,
    number: "05",
  },
  {
    id: 6,
    title: "Compressed Timelines",
    description:
      "Treatments completed in a single trip — implants, veneers and full-arch restorations.",
    icon: <ClockCircleOutlined />,
    number: "06",
  },
];

export const dentalCostComparison = [
  {
    category: "General Dentistry",
    treatments: [
      {
        procedure: "Teeth Cleaning",
        india: "$15 - $30",
        us: "$180 - $220",
      },
      {
        procedure: "Scaling & Root Planing",
        india: "$10 - $20",
        us: "$150 - $250",
      },
      {
        procedure: "Root Canal Treatment",
        india: "$30 - $50",
        us: "$1000 - $1300",
      },
      {
        procedure: "Composite Filling",
        india: "$15 - $25",
        us: "$200 - $300",
      },
      {
        procedure: "Regular Tooth Extraction",
        india: "$10 - $20",
        us: "$250 - $350",
      },
      {
        procedure: "Surgical Tooth Extraction",
        india: "$25 - $40",
        us: "$600 - $700",
      },
      {
        procedure: "Wisdom Tooth Extraction",
        india: "$30 - $50",
        us: "$750 - $850",
      },
    ],
  },

  {
    category: "Dental Implants",
    treatments: [
      {
        procedure: "Titanium Implant with Abutment or Crown",
        india: "$200 - $700",
        us: "$4500 - $6500",
      },
      {
        procedure: "Zirconium Implant with Abutment",
        india: "$150 - $250",
        us: "$5500 - $6500",
      },
      {
        procedure: "Same-Day Implant with Crown",
        india: "$200 - $400",
        us: "$5000 - $7000",
      },
      {
        procedure: "All on 4 / All on 6 Dental Implants with Fixed Bridge",
        india: "$1500 - $2000",
        us: "$25000 - $30000",
      },
    ],
  },

  {
    category: "Dental Crowns & Bridges",
    treatments: [
      {
        procedure: "CAD/CAM PFM Crown",
        india: "$80 - $150",
        us: "$1000 - $1500",
      },
      {
        procedure: "Only Porcelain Crown",
        india: "$30 - $60",
        us: "$1700 - $2000",
      },
      {
        procedure: "CAD/CAM Ceramic Crown",
        india: "$70 - $100",
        us: "$1000 - $2000",
      },
      {
        procedure: "Zirconia Crown",
        india: "$70 - $100",
        us: "$1500 - $2500",
      },
      {
        procedure: "PFM Bridge",
        india: "$100 - $150",
        us: "$3000 - $3500",
      },
      {
        procedure: "All Ceramic Bridge",
        india: "$150 - $200",
        us: "$4200 - $4700",
      },
      {
        procedure: "Only Porcelain Bridge",
        india: "$50 - $100",
        us: "$5200 - $5500",
      },
    ],
  },

  {
    category: "Dental Veneers",
    treatments: [
      {
        procedure: "Composite Veneer",
        india: "$30 - $50",
        us: "$800 - $1000",
      },
      {
        procedure: "Porcelain Veneer",
        india: "$80 - $120",
        us: "$2000 - $3000",
      },
      {
        procedure: "Ceramic Veneer",
        india: "$50 - $100",
        us: "$2000 - $2500",
      },
    ],
  },

  {
    category: "Orthodontic Treatments",
    treatments: [
      {
        procedure: "Metal Braces",
        india: "$250 - $350",
        us: "$2800 - $3200",
      },
      {
        procedure: "Ceramic Braces",
        india: "$300 - $400",
        us: "$3800 - $4500",
      },
      {
        procedure: "Lingual Braces",
        india: "$550 - $650",
        us: "$7500 - $8500",
      },
      {
        procedure: "Clear Aligners",
        india: "$600 - $2500",
        us: "$2500 - $3500",
      },
    ],
  },

  {
    category: "Teeth Whitening",
    treatments: [
      {
        procedure: "Laser Teeth Whitening",
        india: "$20 - $50",
        us: "$1200 - $1700",
      },
    ],
  },
];

export const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Share records or photos. We respond within 24 hours.",
    icon: FiMessageSquare,
  },
  {
    id: "02",
    title: "Treatment Plan",
    description: "Personalized written plan with exact costs and timeline.",
    icon: FiClipboard,
  },
  {
    id: "03",
    title: "Travel",
    description: "We arrange visa support, flights and hotel partners.",
    icon: FiMapPin,
  },
  {
    id: "04",
    title: "Treatment",
    description: "Compressed sessions with same-day digital workflows.",
    icon: FiActivity,
  },
  {
    id: "05",
    title: "Recovery",
    description: "Quiet stay with daily follow-ups and concierge support.",
    icon: FiHeart,
  },
  {
    id: "06",
    title: "Follow-Up",
    description: "Lifetime virtual aftercare in your time zone.",
    icon: FiRefreshCw,
  },
];

export const tourismReviews = [
  {
    review:
      "From airport pickup to the final smile makeover, everything was organized flawlessly. The treatment quality exceeded my expectations.",
    author: "James Walker",
    subtitle: "Patient from United States",
    rating: 5,
  },
  {
    review:
      "I saved nearly 70% compared to treatment costs in London while receiving world-class care and incredible hospitality.",
    author: "Olivia Bennett",
    subtitle: "Patient from United Kingdom",
    rating: 5,
  },
  {
    review:
      "The doctors explained every step patiently and made me feel completely comfortable during my implant treatment journey.",
    author: "Daniel Foster",
    subtitle: "Full Mouth Implant Patient",
    rating: 5,
  },
  {
    review:
      "The clinic was modern, spotless, and highly professional. I completed my veneers and crowns in a single trip.",
    author: "Sophia Turner",
    subtitle: "Smile Makeover Patient",
    rating: 5,
  },
  {
    review:
      "Their team handled accommodation guidance, scheduling, and follow-ups seamlessly. It felt like a luxury healthcare experience.",
    author: "Michael Harris",
    subtitle: "Patient from Australia",
    rating: 5,
  },
  {
    review:
      "I was nervous about traveling abroad for treatment, but the warmth and expertise of the team made the process stress-free.",
    author: "Emma Richardson",
    subtitle: "Dental Tourism Patient",
    rating: 5,
  },
];

export const tourismFaqData = [
  {
    question: "Why choose India for dental treatment?",
    answer:
      "India offers internationally trained dentists, advanced technology, and significantly lower treatment costs compared to many Western countries — without compromising on quality or safety.",
  },
  {
    question: "How much can I save with dental tourism?",
    answer:
      "Patients often save between 60% to 80% on treatments such as implants, veneers, crowns, and smile makeovers compared to prices in the USA, UK, or Australia.",
  },
  {
    question: "How long do I need to stay for treatment?",
    answer:
      "The duration depends on the procedure. Cosmetic treatments may take only a few days, while implants or full-mouth rehabilitation can require multiple visits or a longer stay.",
  },
  {
    question: "Do you assist with travel and accommodation?",
    answer:
      "Yes, we guide international patients with travel planning, airport pickup coordination, hotel recommendations, and local assistance for a smooth experience.",
  },
  {
    question: "Is the treatment safe and hygienic?",
    answer:
      "Our clinic follows strict international sterilization and hygiene protocols, using advanced equipment and globally accepted treatment standards.",
  },
  {
    question: "Can I get an online consultation before traveling?",
    answer:
      "Absolutely. Patients can share dental records, X-rays, or photographs online to receive an initial consultation, treatment plan, and estimated cost before booking their trip.",
  },
];

//Privacy Page
export const privacySections = [
  {
    title: "Information We Collect",
    icon: FiDatabase,
    description:
      "We may collect personal information such as your name, phone number, email address, appointment preferences, and treatment-related inquiries when you interact with our website.",
  },
  {
    title: "How We Use Your Information",
    icon: FiCheckCircle,
    description:
      "Your information is used to schedule appointments, respond to inquiries, improve patient experience, and communicate important updates related to our services.",
  },
  {
    title: "Patient Confidentiality",
    icon: FiLock,
    description:
      "We respect the confidentiality of all patient information and maintain appropriate safeguards to protect your personal and medical details.",
  },
  {
    title: "Cookies & Analytics",
    icon: FiBarChart2,
    description:
      "Our website may use cookies and analytics tools to understand visitor interactions and improve overall website performance and usability.",
  },
  {
    title: "Third-Party Services",
    icon: FiUsers,
    description:
      "We may use trusted third-party services such as appointment scheduling platforms, payment providers, and analytics tools that process limited information securely.",
  },
  {
    title: "Your Rights",
    icon: FiShield,
    description:
      "You may request access, correction, or deletion of your personal information by contacting our clinic directly.",
  },
];

//Terms of Service
export const termsSections = [
  {
    title: "Dental Crowns",
    icon: FiShield,
    description:
      "Warranty: 3–10 years depending on crown type. Covers crown dislodgement, chipping, and manufacturing defects. Excludes damage to the underlying tooth, gum disease, trauma, or crown loss. Regular check-ups are required.",
  },

  {
    title: "Dental Implants",
    icon: FiActivity,
    description:
      "Warranty: Up to 10 years on implant fixtures under normal conditions. Covers manufacturing defects in implant components. Excludes failures caused by smoking, poor oral hygiene, trauma, bone loss, or medical conditions affecting healing.",
  },

  {
    title: "Dental Veneers",
    icon: FiSmile,
    description:
      "Warranty: Up to 3 years against manufacturing defects. Covers veneer debonding under normal use. Excludes fractures caused by teeth grinding, hard foods, trauma, or misuse. Proper care and maintenance are essential.",
  },

  {
    title: "Tooth Jewellery",
    icon: FiStar,
    description:
      "Warranty: 6 months for bonding defects only. Covers detachment caused by adhesive failure. Excludes loss of jewellery, accidental damage, trauma, or removal by the patient. Replacement charges may apply.",
  },

  {
    title: "Root Canal Treatment (RCT)",
    icon: FiTool,
    description:
      "Treatment success is monitored for up to 1 year. Covers treatment-related concerns requiring clinical review. Does not guarantee lifetime success and excludes reinfection, tooth fractures, or delays in crown placement.",
  },

  {
    title: "Implant Prosthesis",
    icon: FiCpu,
    description:
      "Warranty: 3–5 years depending on prosthesis type. Covers manufacturing defects and prosthetic screw issues. Excludes damage caused by excessive force, poor maintenance, trauma, or implant-related complications.",
  },

  {
    title: "Braces Treatment",
    icon: FiTrendingUp,
    description:
      "Typical treatment duration ranges from 12–24 months. Results depend on patient cooperation and appointment compliance. Appliance breakage, poor oral hygiene, or missed visits may affect treatment outcomes.",
  },

  {
    title: "Clear Aligners",
    icon: FiLayers,
    description:
      "Typical treatment duration ranges from 6–18 months. Aligners must be worn 20–22 hours daily for optimal results. Lost aligners, poor compliance, or missed reviews may require additional charges.",
  },

  {
    title: "Dental Bridges",
    icon: FiLink,
    description:
      "Warranty: Up to 5 years against manufacturing defects. Covers bridge debonding under normal use. Excludes decay, gum disease, trauma, excessive biting forces, or inadequate oral hygiene maintenance.",
  },

  {
    title: "Dental Fillings",
    icon: FiEdit3,
    description:
      "Warranty: Up to 1 year for material failure under normal conditions. Covers filling dislodgement due to material defects. Excludes recurrent decay, tooth fractures, grinding habits, or accidental trauma.",
  },
  {
    title: "Metal Crown",
    icon: FiShield,
    description:
      "Price Range: ₹4,500–₹5,500. Covers crown removal, crown dislodgement, and crown breakage for 3 months from placement. After the warranty period, replacement or repair may be subject to up to 80% of the treatment cost.",
  },

  {
    title: "PFM Crown",
    icon: FiAward,
    description:
      "Price: ₹6,500. Includes 1 year comprehensive warranty covering crown removal, crown breakage, and related manufacturing concerns. After 1 year, replacement or repair may be subject to approximately 20% of the treatment cost.",
  },

  {
    title: "Premium PFM Crown",
    icon: FiStar,
    description:
      "Price: ₹7,500. Includes 1+1 year warranty covering crown removal and crown breakage under normal usage conditions. After the warranty period, replacement or repair may be subject to approximately 20% of the treatment cost.",
  },

  {
    title: "Full Ceramic Crown",
    icon: BsFillDiamondFill,
    description:
      "Price: ₹12,990. Includes 2 years comprehensive warranty covering crown removal, crown fracture, and manufacturing defects. After 2 years, replacement or repair may be subject to approximately 30% of the treatment cost.",
  },

  {
    title: "E-Max Crown",
    icon: FiCpu,
    description:
      "Price: ₹15,000. Includes 2 years warranty covering crown removal, crown fracture, and manufacturing defects under normal usage conditions. After 2 years, replacement or repair may be subject to approximately 30% of the treatment cost.",
  },
];
//Reviews page
export const googleReviews = [
  {
    id: "1",
    reviewer_name: "Prateek Kumar",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjU8Zho8caBM1USn1AEPwYSAkzIUSvejRqKBgHM3QUacEGmT17Z6=s120-c-rp-mo-br100",
    rating: 5,
    text: "Great service and painless treatment. Highly recommended if you are looking for the best dentist in Ghaziabad.",
    published_at: 1778933865,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "2",
    reviewer_name: "Jyoti Tyagi",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKFitYG-K2GLCdXiCKhyIypKlzINrO1QEK4lDHpzZEb6zJSWw=s120-c-rp-mo-br100",
    rating: 5,
    text: "I had a great experience at Rekha Dental Clinic.",
    published_at: 1778846531,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "3",
    reviewer_name: "Poornima Gautam",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjX5Xv4nldD45cdj13cofVKXrIZ682VVdiipOqURPYH4pznGYa6OYQ=s120-c-rp-mo-br100",
    rating: 5,
    text: "The doctors are highly experienced, and the treatment was smooth, painless, and very comfortable. I would definitely recommend Rekha Dental Clinic for quality dental care.",
    published_at: 1777708800,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "4",
    reviewer_name: "Sandeep Mandal",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjX_2LoPe7uMJ9A_170pXE-LatUxSuvox4A6h6tegWGdVPgGYdl1=s120-c-rp-mo-ba3-br100",
    rating: 5,
    text: "Excellent work done by Dr. Gaurav and team. My RCT treatment was painless and I am very happy with the overall experience.",
    published_at: 1777523636,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "5",
    reviewer_name: "Amit Kumar",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUGsmpB4fFt1kd_zLIthzWzK68_tnZxKqUPV-MblFpjF6vMMOjN=s120-c-rp-mo-br100",
    rating: 5,
    text: "Very nice experience. I am fully satisfied with the treatment.",
    published_at: 1776175801,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "6",
    reviewer_name: "Sweaty Mandal",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUyPwmVrkRnddcSm6LUu4orl98jHmy4uqQky-_61zcjnOOgUOtcWw=s120-c-rp-mo-br100",
    rating: 5,
    text: "I recently got veneers done for my front tooth and I’m extremely happy with the results. The entire experience was smooth and comfortable.",
    published_at: 1776156905,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "7",
    reviewer_name: "Munni Yadav",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKZ2SHHb2bHnPuuY0exfH_vulj7oODump13PWZnbdqGcMNGFg=s120-c-rp-mo-br100",
    rating: 5,
    text: "Professional and experienced doctors with great service and a very composed staff.",
    published_at: 1771226446,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "8",
    reviewer_name: "Azad Sirohi",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a/ACg8ocIZXLzW4KMnmYI-AU4dt_4PK3gTZlxokqI8sk9kJucT2sgKwo0=s120-c-rp-mo-br100",
    rating: 5,
    text: "The treatment quality was outstanding and the staff made me feel extremely comfortable throughout the visit.",
    published_at: 1770798798,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "9",
    reviewer_name: "Samriddhi",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUqhEgKggUuxcgkhFo_f6sHUJXTw5f0mXhFmTAx2kvwThx6I2l6xA=s120-c-rp-mo-ba3-br100",
    rating: 5,
    text: "The doctors explained every treatment option clearly and ensured I was fully satisfied with the final result. A very reassuring experience.",
    published_at: 1770386788,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },

  {
    id: "10",
    reviewer_name: "Harshit Singh",
    reviewer_picture_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjWsrAdPl46CO4-GVDs7O_BfXnTv9M7swxQFFrCzb_xn-MxiIVn2=s120-c-rp-mo-br100",
    rating: 5,
    text: "The clinic premises and behaviour of the doctors were excellent.",
    published_at: 1770360376,
    url: "https://www.google.com/search?q=rekha+dental+clinic+reviews",
  },
];

//Legacy Page
export const achievementsData = [
  {
    id: 1,
    title: "Implantology Workshop",
    description:
      "Participated in an advanced implantology workshop alongside leading dental professionals from around the world, exchanging clinical knowledge and modern treatment techniques.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement1`,
  },
  {
    id: 2,
    title: "Global Dental Excellence Meet",
    description:
      "Recognized for contributions to modern dentistry during an international gathering of dental experts and educators.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement2`,
  },

  {
    id: 4,
    title: "International Faculty Interaction",
    description:
      "Engaged in collaborative discussions with international faculty members to explore emerging trends in modern dentistry.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement4`,
  },
  {
    id: 5,
    title: "Global Implant Symposium",
    description:
      "Attended a prestigious symposium featuring global leaders in implant dentistry, digital workflows, and patient-centered care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement5`,
  },

  {
    id: 7,
    title: "International Continuing Education Event",
    description:
      "Enhanced professional expertise through advanced continuing dental education programs conducted by international speakers.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement7`,
  },
  {
    id: 8,
    title: "Advanced Prosthodontic Workshop",
    description:
      "Received specialized training in modern prosthodontic techniques aimed at improving long-term restorative outcomes.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement8`,
  },
  {
    id: 9,
    title: "International Dental Conference",
    description:
      "Represented the academy at a global conference dedicated to innovation, technology, and excellence in dental care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement9`,
  },
  {
    id: 10,
    title: "Masterclass in Implant Rehabilitation",
    description:
      "Successfully completed an intensive masterclass covering advanced implant placement and full-mouth rehabilitation concepts.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement10`,
  },
  {
    id: 11,
    title: "Global Knowledge Exchange Program",
    description:
      "Collaborated with international clinicians and educators to exchange ideas and discuss advancements in patient care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/achievements/achievement11`,
  },
];

export const dentalCampsData = [
  {
    id: 1,
    title: "School Dental Awareness Drive",
    description:
      "Conducted an oral health awareness session for students, focusing on proper brushing techniques and preventive dental care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp1`,
  },
  {
    id: 2,
    title: "Free Dental Check-up Camp",
    description:
      "Organized a community dental screening program to identify oral health concerns and provide preventive guidance.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp2`,
  },
  {
    id: 3,
    title: "Student Oral Health Initiative",
    description:
      "Educated young students about the importance of oral hygiene and regular dental examinations.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp3`,
  },
  {
    id: 4,
    title: "Kids Dental Outreach",
    description:
      "Provided free dental consultations and awareness sessions to promote healthier smiles within the community.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`,
  },
  {
    id: 5,
    title: "Dental Education Program",
    description:
      "Interactive sessions conducted to spread awareness about preventive dentistry and oral health habits.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp5`,
  },
  {
    id: 6,
    title: "School Health Screening Camp",
    description:
      "Performed dental examinations for school children and educated them on maintaining lifelong oral health.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp6`,
  },
  {
    id: 7,
    title: "Preventive Dentistry Awareness",
    description:
      "Focused on early detection and prevention of dental issues through educational activities and screenings.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp7`,
  },
  {
    id: 8,
    title: "Students Dental Care Initiative",
    description:
      "Extended oral healthcare awareness and dental check-up services to underserved communities.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp8`,
  },
  {
    id: 9,
    title: "Healthy Smile Campaign",
    description:
      "Promoted oral hygiene awareness through engaging educational activities and dental assessments.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp9`,
  },
  {
    id: 10,
    title: "Community's Dental Awareness Session",
    description:
      "Encouraged healthy dental habits among community through demonstrations and interactive learning.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp10`,
  },
  {
    id: 11,
    title: "Community Oral Hygiene Program",
    description:
      "Conducted awareness sessions emphasizing preventive care and regular dental visits.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp11`,
  },
  {
    id: 12,
    title: "Community Wellness Camp",
    description:
      "Integrated oral healthcare awareness into broader health initiatives for local communities.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp12`,
  },
  {
    id: 13,
    title: "Smile Awareness Initiative",
    description:
      "Educated participants about cavity prevention, gum health, and oral hygiene best practices.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp13`,
  },
  {
    id: 14,
    title: "Dental Screening & Counseling",
    description:
      "Provided dental examinations and personalized oral health recommendations to attendees.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp14`,
  },
  {
    id: 15,
    title: "Youth Oral Health Program",
    description:
      "Focused on building awareness among young students regarding preventive dental care and nutrition.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp15`,
  },
  {
    id: 16,
    title: "School Dental Check-up Drive",
    description:
      "Comprehensive dental screenings conducted to identify oral health concerns at an early stage.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp16`,
  },
  {
    id: 17,
    title: "Oral Health Awareness Workshop",
    description:
      "Engaged students and educators in discussions about maintaining healthy teeth and gums.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp17`,
  },
  {
    id: 18,
    title: "School Oral Care Program",
    description:
      "Promoted preventive dentistry and regular dental check-ups through public awareness initiatives.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp18`,
  },
  {
    id: 19,
    title: "Dental Health Education Camp",
    description:
      "Conducted educational activities to encourage better oral hygiene habits among participants.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp19`,
  },
  {
    id: 20,
    title: "School Wellness & Dental Camp",
    description:
      "Combined health awareness and dental screening services to support student well-being.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp20`,
  },
  {
    id: 21,
    title: "Children's Smile Initiative",
    description:
      "A large-scale awareness and screening program dedicated to improving oral health within the community.",
    image: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp21`,
  },
];

export const lecturesData = [
  {
    id: 1,
    title: "Advanced Implantology Masterclass",
    description:
      "Delivered an in-depth lecture on modern implantology techniques, treatment planning, and long-term clinical success.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture1`,
  },
  {
    id: 2,
    title: "Contemporary Restorative Dentistry",
    description:
      "Shared insights on restorative procedures, material selection, and achieving predictable aesthetic outcomes.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture2`,
  },

  {
    id: 4,
    title: "Smile Design & Aesthetic Excellence",
    description:
      "Conducted an educational session on smile design principles and minimally invasive cosmetic dentistry.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture4`,
  },
  {
    id: 5,
    title: "Clinical Success in Implant Rehabilitation",
    description:
      "Focused on implant-supported restorations, case selection, and achieving long-term functional outcomes.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture5`,
  },
  {
    id: 6,
    title: "Advancements in Endodontic Treatment",
    description:
      "Explored modern root canal treatment techniques, magnification, and precision-driven clinical protocols.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture6`,
  },

  {
    id: 8,
    title: "Comprehensive Treatment Planning",
    description:
      "Highlighted interdisciplinary approaches to diagnosis, rehabilitation, and patient-centered care.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture8`,
  },

  {
    id: 10,
    title: "Excellence in Clinical Education",
    description:
      "Shared knowledge and practical experience with dental professionals through interactive academic sessions.",
    image: `${CLOUDINARY_BASE}/rekha-dental/lectures/lecture10`,
  },
];

export const mediaData = [
  {
    id: 1,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media1`,
  },
  {
    id: 2,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media2`,
  },
  {
    id: 3,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media3`,
  },
  {
    id: 4,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media4`,
  },
  {
    id: 5,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media5`,
  },
  {
    id: 6,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media6`,
  },
  {
    id: 7,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media7`,
  },
  {
    id: 8,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media8`,
  },
  {
    id: 9,
    image: `${CLOUDINARY_BASE}/rekha-dental/media/media9`,
  },
];

//Hero Banner

export const heroBanners = [
  {
    image: `${CLOUDINARY_BASE}/rekha-dental/banner`,
    alt: "Dental Banner 1",
  },
  {
    image: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
    alt: "Dental Banner 2",
  },
  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/f_auto,q_auto/rekha-dental/services/service5/thumbnail",
    alt: "Dental Banner 3",
  },
];

//Dental Plans
export const dentalHealthPlans = [
  {
    id: 1,
    slug: "membership-499",
    title: "Dental Membership 499",
    price: 499,
    originalValue: 1300,
    planType:"BASIC",
    savings: 801,
    description: "Basic preventive dental care package for individuals.",

    benefits: [
      {
        title: "Dental Consultation",
        value: "2 Consultations",
        worth: 600,
      },
      {
        title: "Dental X-Ray",
        value: "1 X-Ray",
        worth: 200,
      },
      {
        title: "Front Teeth Scaling",
        value: "50% Off",
      },
      {
        title: "Complimentary Polishing",
        value: "Worth ₹700",
      },
      {
        title: "Treatment Voucher",
        value: "₹500 Discount Voucher",
      },
    ],

    applicableFor: ["Bleaching", "Implant Treatment", "Tooth Jewellery"],

    featured: false,
  },

  {
    id: 2,
    slug: "membership-999",
    title: "Dental Membership 999",
    price: 999,
    originalValue: 2500,
    planType:"STANDARD",
    savings: 1500,
     description:
      "Enhanced membership plan with family benefits and preventive care.",

    benefits: [
      {
        title: "Dental Consultation",
        value: "3 Consultations",
        worth: 900,
      },
      {
        title: "Dental X-Ray",
        value: "2 X-Rays",
        worth: 400,
      },
      {
        title: "Full Mouth Scaling",
        value: "Single Sitting",
      },
      {
        title: "Family Benefit",
        value: "50% Off on 2 Consultations + 2 X-Rays",
      },
      {
        title: "Procedure Discount",
        value: "5% Off on All Procedures",
      },
      {
        title: "Complimentary Polishing",
        value: "Worth ₹700",
      },
      {
        title: "Treatment Voucher",
        value: "₹1000 Discount Voucher",
      },
    ],

    applicableFor: [
      "Implant Planning",
      "Bleaching",
      "Tooth Jewellery",
      "Smile Makeover",
      "Aligners",
      "Smile Treatment",
    ],

    notes: ["Pictures will not be shared with patient."],

    featured: true,
  },

  {
    id: 3,
    slug: "membership-1499",
    title: "Dental Membership 1499",
    price: 1499,
    originalValue: 4500,
    planType:"PREMIUM",
    savings: 3000,
     description:
      "Comprehensive family-focused membership with maximum savings.",

    benefits: [
      {
        title: "Dental Consultation",
        value: "5 Consultations",
        worth: 1500,
      },
      {
        title: "Dental X-Ray",
        value: "3 X-Rays",
        worth: 600,
      },
      {
        title: "Full Mouth Scaling",
        value: "Single Sitting with Polishing",
      },
      {
        title: "Family Benefit",
        value: "50% Off on 3 Consultations + 3 X-Rays",
      },
      {
        title: "Procedure Discount",
        value: "10-15% Off on All Procedures",
      },
      {
        title: "Complimentary Air Polishing",
        value: "Worth ₹1000",
      },
    ],

    applicableFor: [
      "Implant Planning",
      "Bleaching",
      "Tooth Jewellery",
      "Smile Makeover",
      "Aligners",
      "Smile Treatment",
    ],

    notes: ["Pictures will be shared with patient."],

    featured: false,
  },
];

export const whyChooseRekhaDental = [
  {
    id: 1,
    number: "01",
    title: "Expert-Led Dentistry",
    description:
      "Receive care from experienced dental professionals committed to delivering excellence through precision, compassion, and clinical expertise.",
    icon: <FaUserDoctor />,
  },
  {
    id: 2,
    number: "02",
    title: "Modern Dental Technology",
    description:
      "Digital diagnostics, advanced imaging, and contemporary treatment techniques help ensure accurate diagnosis and predictable results.",
    icon: <MdOutlineBiotech />,
  },
  {
    id: 3,
    number: "03",
    title: "Comprehensive Smile Solutions",
    description:
      "From routine check-ups and preventive care to implants, aligners, smile makeovers, and full mouth rehabilitation.",
    icon: <FaShieldHeart />,
  },
  {
    id: 4,
    number: "04",
    title: "Safety & Patient Comfort",
    description:
      "Strict sterilization protocols, patient-focused care, and transparent treatment planning create a safe and comfortable dental experience.",
    icon: <MdHealthAndSafety />,
  },
];

export const dentalPlanFaqs = [
  {
    question: "What is the Rekha Dental Membership Plan?",
    answer:
      "The Rekha Dental Membership Plan is a preventive dental care program that offers consultations, diagnostic benefits, treatment discounts, and exclusive savings on selected dental procedures.",
  },
  {
    question: "Who can enroll in a dental membership plan?",
    answer:
      "Anyone can enroll in a membership plan. We offer plans suitable for individuals as well as families looking for affordable and comprehensive dental care benefits.",
  },
  {
    question: "How long is the membership valid?",
    answer:
      "The validity period may vary depending on the selected plan. Please contact our team for complete details regarding membership duration and renewal options.",
  },
  {
    question: "Can I use my membership benefits immediately?",
    answer:
      "Yes, most membership benefits can be availed immediately after successful enrollment, subject to the terms and conditions of the selected plan.",
  },
  {
    question: "Are consultations included in the membership plans?",
    answer:
      "Yes. Depending on your chosen plan, you can receive multiple complimentary dental consultations throughout the membership period.",
  },
  {
    question: "Do the plans include dental X-rays?",
    answer:
      "Yes. Selected membership plans include complimentary dental X-rays, helping patients maintain regular oral health monitoring and diagnosis.",
  },
  {
    question: "Can family members use my membership benefits?",
    answer:
      "Certain plans include family benefits and discounts. Please review the plan details or contact us to understand the specific family coverage available.",
  },
  {
    question: "Do members receive discounts on treatments?",
    answer:
      "Yes. Members enjoy exclusive discounts on various dental procedures, including preventive, restorative, cosmetic, and advanced dental treatments.",
  },
  {
    question: "Which treatments are eligible for membership discounts?",
    answer:
      "Discounts may be applicable on treatments such as implants, aligners, smile makeovers, tooth jewellery, bleaching, and other eligible procedures depending on the selected plan.",
  },
  {
    question: "Can I upgrade my membership plan later?",
    answer:
      "Yes. Existing members may upgrade to a higher plan to unlock additional benefits and savings. Our team will guide you through the upgrade process.",
  },
  {
    question: "Is the membership fee refundable?",
    answer:
      "Membership fees are generally non-refundable once benefits have been activated. Please speak with our team regarding specific terms and conditions.",
  },
  {
    question: "How can I enroll in a Rekha Dental Membership Plan?",
    answer:
      "You can enroll by contacting our clinic directly, visiting us in person, or clicking the 'Get Membership' button on the website to connect with our team via WhatsApp.",
  },
];

export const commonDentalProblems = [
  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776993/tooth-decay_ns9ldh.png",
    title: "Tooth Decay",
    serviceSlug: "dental-fillings",
    symptoms: [
      "Toothache",
      "Sensitivity to hot and cold foods",
      "Visible holes in teeth",
      "Pain while chewing",
    ],
    medicalTerm: "Dental Caries",
    treatment:
      "Dental fillings, fluoride treatment, crowns, or root canal treatment depending on severity.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776995/bleeding_c91jtv.png",
    title: "Bleeding Gums",
    serviceSlug: "teeth-cleaning",
    symptoms: [
      "Bleeding while brushing",
      "Swollen gums",
      "Bad breath",
      "Tender gum tissue",
    ],
    medicalTerm: "Gingivitis",
    treatment:
      "Professional scaling, improved oral hygiene, medicated mouthwash, and periodontal care.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776940/bad-breathe_ydbzgt.png",
    title: "Chronic Bad Breath",
    serviceSlug: "teeth-cleaning",
    symptoms: [
      "Persistent bad breath",
      "Dry mouth",
      "Unpleasant taste",
      "White coating on tongue",
    ],
    medicalTerm: "Halitosis",
    treatment:
      "Professional cleaning, treatment of underlying dental issues, and improved oral hygiene habits.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776857/tooth-sensitivity_lz6puy.png",
    title: "Tooth Sensitivity",
    serviceSlug: "general-restorative",
    symptoms: [
      "Sharp pain with cold drinks",
      "Discomfort while eating sweets",
      "Sensitivity to hot foods",
      "Pain during brushing",
    ],
    medicalTerm: "Dentin Hypersensitivity",
    treatment:
      "Desensitizing toothpaste, fluoride therapy, bonding procedures, or gum treatment.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776856/severe-tooth-infection_xlqpdv.png",
    title: "Severe Tooth Infection",
    serviceSlug: "root-canal-treatment",
    symptoms: [
      "Persistent toothache",
      "Swelling around tooth",
      "Pus discharge",
      "Pain while biting",
    ],
    medicalTerm: "Dental Abscess",
    treatment:
      "Root canal treatment, drainage of infection, antibiotics, or tooth extraction if necessary.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776849/crooked_j09jg7.png",
    title: "Crooked or Misaligned Teeth",
    serviceSlug: "clear-aligners",
    symptoms: [
      "Crowded teeth",
      "Difficulty cleaning teeth",
      "Bite problems",
      "Jaw discomfort",
    ],
    medicalTerm: "Malocclusion",
    treatment: "Clear aligners, braces, retainers, or orthodontic correction.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776854/wisdom_cdnttc.png",
    title: "Wisdom Tooth Pain",
    serviceSlug: "tooth-removal",
    symptoms: [
      "Jaw pain",
      "Swollen gums",
      "Difficulty opening mouth",
      "Pain at back of mouth",
    ],
    medicalTerm: "Impacted Third Molar",
    treatment: "Monitoring, medication, or surgical wisdom tooth extraction.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776857/grinding_t1umlw.png",
    title: "Teeth Grinding",
    serviceSlug: "general-restorative",
    symptoms: [
      "Worn teeth",
      "Jaw pain",
      "Morning headaches",
      "Tooth sensitivity",
    ],
    medicalTerm: "Bruxism",
    treatment:
      "Night guards, bite correction, stress management, and restorative dentistry.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781776854/missing_l6ce7m.png",
    title: "Missing Teeth",
    serviceSlug: "dental-implants",
    symptoms: [
      "Difficulty chewing",
      "Speech issues",
      "Shifting of nearby teeth",
      "Bone loss in jaw",
    ],
    medicalTerm: "Partial Edentulism",
    treatment:
      "Dental implants, bridges, dentures, or full mouth rehabilitation.",
  },

  {
    image:
      "https://res.cloudinary.com/dygrzu3sm/image/upload/v1781777267/yellow_ijiubl.png",
    title: "Yellow or Stained Teeth",
    serviceSlug: "cosmetic-dentistry",
    symptoms: [
      "Tooth discoloration",
      "Surface stains",
      "Uneven tooth shade",
      "Loss of smile confidence",
    ],
    medicalTerm: "Extrinsic / Intrinsic Tooth Staining",
    treatment:
      "Professional teeth whitening, bleaching, polishing, veneers, or smile makeover treatments.",
  },
];

export const commonDentalProblemsFaq = [
  {
    question: "When should I see a dentist for tooth pain?",
    answer:
      "You should visit a dentist if tooth pain lasts more than a day or two, becomes severe, causes swelling, or interferes with eating and sleeping. Early diagnosis can prevent more complex treatments later.",
  },

  {
    question: "Can bleeding gums be a sign of a serious dental problem?",
    answer:
      "Yes. Bleeding gums are often an early sign of gingivitis or gum disease. If left untreated, gum disease can progress and affect the supporting structures of your teeth.",
  },

  {
    question: "Why are my teeth sensitive to hot and cold foods?",
    answer:
      "Tooth sensitivity may occur due to worn enamel, exposed tooth roots, cavities, gum recession, or teeth grinding. A dental examination can identify the exact cause and appropriate treatment.",
  },

  {
    question: "What causes chronic bad breath?",
    answer:
      "Persistent bad breath can result from poor oral hygiene, gum disease, tooth decay, dry mouth, or certain medical conditions. Professional cleaning and proper oral care often help resolve the issue.",
  },

  {
    question: "Can crooked teeth affect oral health?",
    answer:
      "Yes. Misaligned teeth can make brushing and flossing difficult, increasing the risk of cavities and gum disease. They may also contribute to bite problems and jaw discomfort.",
  },

  {
    question: "When is a root canal treatment necessary?",
    answer:
      "A root canal is usually recommended when the tooth pulp becomes infected or inflamed due to deep decay, trauma, or severe infection. The procedure helps save the natural tooth.",
  },

  {
    question: "What are the treatment options for missing teeth?",
    answer:
      "Common solutions include dental implants, bridges, dentures, and full mouth rehabilitation. The best option depends on your oral health, bone condition, and treatment goals.",
  },

  {
    question: "Do wisdom teeth always need to be removed?",
    answer:
      "Not always. Wisdom teeth only require removal when they are impacted, causing pain, infection, crowding, or damage to adjacent teeth.",
  },

  {
    question: "Can yellow or stained teeth become white again?",
    answer:
      "Yes. Professional teeth whitening, polishing, bleaching, veneers, and cosmetic dental treatments can significantly improve tooth color and appearance.",
  },

  {
    question: "How can I prevent common dental problems?",
    answer:
      "Maintaining good oral hygiene, brushing twice daily, flossing regularly, limiting sugary foods, and scheduling routine dental check-ups can help prevent most dental problems.",
  },
];

export const patientFriendlyCare = [
  {
    id: 1,
    number: "01",
    title: "Comfort-First Experience",
    description:
      "Every treatment is planned with patient comfort in mind, creating a calm and stress-free dental experience from consultation to recovery.",
    icon: <FaRegSmile />,
  },
  {
    id: 2,
    number: "02",
    title: "Transparent Treatment Planning",
    description:
      "We explain diagnoses, treatment options, costs, and expected outcomes clearly, empowering patients to make informed decisions.",
    icon: <MdOutlineFactCheck />,
  },
  {
    id: 3,
    number: "03",
    title: "Gentle & Compassionate Care",
    description:
      "Our team prioritizes empathy, patience, and personalized attention to ensure every patient feels heard, valued, and comfortable.",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 4,
    number: "04",
    title: "Family-Friendly Environment",
    description:
      "From children to senior citizens, our clinic is designed to provide safe, welcoming, and accessible dental care for all age groups.",
    icon: <FaPeopleGroup />,
  },
];
export const sterilizationProcess = [
  {
    id: 1,
    number: "01",
    title: "Medical-Grade Instrument Sterilization",
    description:
      "All reusable instruments undergo thorough cleaning, packaging, and autoclave sterilization to eliminate bacteria, viruses, and contaminants.",
    icon: <MdHealthAndSafety />,
  },
  {
    id: 2,
    number: "02",
    title: "Single-Use Disposable Materials",
    description:
      "Wherever applicable, disposable items are used once and safely discarded to maintain the highest standards of hygiene.",
    icon: <FaShieldVirus />,
  },
  {
    id: 3,
    number: "03",
    title: "Operatory Disinfection Protocols",
    description:
      "Treatment areas are disinfected after every patient using approved medical-grade surface disinfectants and strict sanitation procedures.",
    icon: <MdCleaningServices />,
  },
  {
    id: 4,
    number: "04",
    title: "Continuous Infection Control",
    description:
      "Our team follows internationally accepted infection-control protocols, including PPE usage, hand hygiene, and regular compliance checks.",
    icon: <FaUserShield />,
  },
];
export const advancedDentalTechnologies = [
  {
    id: 1,
    number: "01",
    title: "Digital Robotic Scanning",
    description:
      "High-precision digital scans replace traditional impressions, delivering greater comfort, accuracy, and treatment predictability.",
    icon: <MdOutlineBiotech />,
  },
  {
    id: 2,
    number: "02",
    title: "3D Diagnostic Imaging",
    description:
      "Advanced imaging technology provides detailed visualization of teeth, bone, and surrounding structures for precise treatment planning.",
    icon: <FaTooth />,
  },
  {
    id: 3,
    number: "03",
    title: "Laser-Assisted Dentistry",
    description:
      "Modern dental lasers enable minimally invasive procedures with improved precision, reduced discomfort, and faster healing.",
    icon: <GiLaserPrecision />,
  },
  {
    id: 4,
    number: "04",
    title: "Technology-Driven Treatment Planning",
    description:
      "Digital workflows, AI-assisted diagnostics, and advanced planning tools help deliver predictable, efficient, and personalized care.",
    icon: <TbDental />,
  },
];

export const ourCoreValues = [
  {
    id: 1,
    number: "01",
    title: "Trust",
    description:
      "We build lasting relationships through honest communication, transparent treatment planning, and consistent clinical excellence that patients can rely on.",
    icon: <FaHandshake />,
  },

  {
    id: 2,
    number: "02",
    title: "Respect",
    description:
      "Every patient is treated with dignity, empathy, and understanding. We listen carefully, value individual needs, and create a welcoming environment for all.",
    icon: <FaHeart />,
  },

  {
    id: 3,
    number: "03",
    title: "Integrity",
    description:
      "Our recommendations are guided by what is best for the patient. We uphold the highest ethical standards in every diagnosis, treatment, and interaction.",
    icon: <MdVerifiedUser />,
  },

  {
    id: 4,
    number: "04",
    title: "Excellence",
    description:
      "We continuously pursue clinical excellence through advanced technology, ongoing education, and a commitment to delivering exceptional dental care.",
    icon: <MdOutlineWorkspacePremium />,
  },
];
