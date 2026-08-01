import { FiActivity, FiClipboard, FiHeart, FiMapPin, FiMessageSquare, FiRefreshCw } from "react-icons/fi";

//Tourism Page
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