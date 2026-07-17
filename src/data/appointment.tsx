import { CLOUDINARY_BASE } from "@/utils/endpoints";
import { FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";

//Appointment Page
export const appointmentSteps = [
    {
      id: 1,
      number: "01",
      title: "Choose a Centre",
      description:
        "Select the Rekha Dental location that's most convenient for your visit.",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 2,
      number: "02",
      title: "Select Date & Time",
      description:
        "Choose your preferred appointment slot through our secure online booking system.",
      icon: <FaRegCalendarCheck />,
    },
    {
      id: 3,
      number: "03",
      title: "Confirm Appointment",
      description:
        "Complete your booking and receive instant confirmation with your appointment details.",
      icon: <FaShieldAlt />,
    },
  ];
  
  export const centers = [
    {
      id: 1,
      slug: "ghaziabad",
      city: "Ghaziabad",
      name: "Rekha Dental",
      image:
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275326/20260714_170427_ccuqwu.jpg`,
      description:
        "Comprehensive dental care with advanced technology, experienced specialists, and personalized treatment plans.",
      address:
        "House No. 622, First Floor, Satyam Enclave, New Kotgaon, Ghaziabad, Uttar Pradesh 201001",
      timings: "Mon – Sat • 10:00 AM – 2:00 PM & 5:00 PM – 7:00 PM\nSun • 10:00 AM – 2:00 PM",
      phone: "+91-8130-406-405",
    },
    {
      id: 2,
      slug: "raj-nagar",
      city: "Raj Nagar Extension",
      name: "Rekha Dental",
      image:
      `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline1`,
      description:
        "Dedicated center for dental implants, smile makeovers, cosmetic dentistry, and advanced laser treatments.",
      address:
        "A-007, Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",
      timings: "Mon – Sat • 10:00 AM – 2:00 PM & 5:00 PM – 7:00 PM\nSun • 10:00 AM – 2:00 PM",
      phone: "+91-8130-406-405",
    },
  ];
  
  export const centerDetails = [
    {
      slug: "ghaziabad",
  
      heading: "Modern dentistry with a personal touch.",
  
      description:
        "Our Ghaziabad centre combines advanced dental technology with compassionate care. From preventive check-ups to complex implant procedures, every treatment is tailored to your comfort and long-term oral health.",
  
      specialties: [
        "Dental Implants",
        "Smile Designing",
        "Root Canal Treatment",
        "Laser Dentistry",
        "Invisible Aligners",
        "Pediatric Dentistry",
      ],
  
      highlights: [
        "Experienced implant specialists",
        "Digital X-Ray & RVG",
        "Modern sterilization protocols",
        "Pain-free dentistry",
        "Flexible appointments",
        "Comfortable waiting lounge",
      ],
    },
  
    {
      slug: "raj-nagar",
  
      heading: "Advanced implant & laser dentistry.",
  
      description:
        "Our Raj Nagar Extension centre specializes in cosmetic dentistry, implantology and full mouth rehabilitation using modern equipment and evidence-based treatment protocols.",
  
      specialties: [
        "Dental Implants",
        "Laser Dentistry",
        "Full Mouth Rehabilitation",
        "Smile Makeover",
        "Cosmetic Dentistry",
        "Orthodontics",
      ],
  
      highlights: [
        "Latest implant systems",
        "Digital smile planning",
        "Experienced specialists",
        "Advanced sterilization",
        "Comfortable waiting lounge",
        "Flexible appointments",
      ],
    },
  ];
  
  