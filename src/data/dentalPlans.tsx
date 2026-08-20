import { FaRegSmile, FaSmile } from "react-icons/fa";
import { FaChild, FaHandHoldingHeart, FaHandshake, FaHeart, FaPeopleGroup, FaShieldHeart, FaShieldVirus, FaStar, FaTeeth, FaTooth, FaUserDoctor, FaUserShield } from "react-icons/fa6";
import { GiCrownedHeart, GiLaserPrecision, GiMedicines, GiTooth } from "react-icons/gi";
import { MdCleaningServices, MdHealthAndSafety, MdOutlineAlignHorizontalCenter, MdOutlineBiotech, MdOutlineFactCheck, MdOutlineWorkspacePremium, MdVerifiedUser } from "react-icons/md";
import { TbDental, TbDentalBroken } from "react-icons/tb";

//Dental Plans
export const dentalHealthPlans = [
    {
      id: 1,
      slug: "membership-499",
      title: "Dental Membership 499",
      price: 499,
      originalValue: 2499,
      planType:"BASIC",
      savings: 2000,
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
          value: "50% Off",
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
      originalValue: 5999,
      planType:"STANDARD",
      savings: 5000,
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
          value: "10-15% Off on All Procedures",
        },
        {
          title: "Complimentary Polishing",
          value: "50% Off",
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
      originalValue: 7699,
      planType:"PREMIUM",
      savings: 6200,
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
          value: "15% Off on All Procedures",
        },
        {
          title: "Complimentary Polishing",
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
  
  export const offers = [
    {
      title: "Premium Implants",
      offer: "Up to 25% OFF",
      icon: FaTeeth,
      slug:"/treatments/dental-implants"
    },
    {
      title: "Kids Cavity Prevention",
      description: "Varnish & Pit and Fissure Sealants",
      offer: "Up to 30% OFF",
      icon: FaChild,
      slug:"/treatments/preventive-ages-0-13"
    },
    {
      title: "Braces",
      offer: "Up to 30% OFF",
      icon: MdOutlineAlignHorizontalCenter,
      slug:"/treatments/clear-aligners"
    },
    {
      title: "Premium Aligners",
      offer: "Up to 30% OFF",
      icon: TbDental,
      slug:"/treatments/clear-aligners"
    },
    {
      title: "Veneers",
      offer: "Up to 25% OFF",
      icon: FaStar,
      slug:"/treatments/dental-veneers"
    },
    {
      title: "Smile Designing",
      offer: "Up to 25% OFF",
      icon: FaSmile,
      slug:"/treatments/cosmetic-dentistry"
    },
    {
      title: "Premium Full Ceramic Crowns",
      offer: "Up to 25% OFF",
      icon: GiCrownedHeart,
      slug:"/treatments/dental-crowns"
    },
    {
      title: "Pulpectomy",
      price: "₹4,990",
      description: "Up to 2 sittings",
      icon: GiTooth,
      slug:"/treatments/pediatric-dentistry"
    },
    {
      title: "Laser Pulpectomy",
      price: "₹6,990",
      icon: TbDentalBroken,
      slug:"/treatments/pediatric-dentistry"
    },
    {
      title: "Basic RCT (Anterior)",
      price: "₹5,999",
      icon: GiTooth,
      slug:"/treatments/root-canal-treatment"
    },
    {
      title: "Basic RCT (Posterior)",
      price: "₹6,999",
      icon: GiTooth,
      slug:"/treatments/root-canal-treatment"
    },
    {
      title: "Consultant RCT (Anterior)",
      price: "₹6,999",
      description: "Rotary File + Advanced Technology",
      icon: MdHealthAndSafety,
      slug:"/treatments/root-canal-treatment"
    },
    {
      title: "Consultant RCT (Posterior)",
      price: "₹7,999",
      description: "Rotary File + Advanced Technology",
      icon: MdHealthAndSafety,
      slug:"/treatments/root-canal-treatment"
    },
    {
      title: "Laser RCT + Meta Pex RCT (Anterior)",
      price: "₹9,999",
      icon: GiMedicines,
      slug:"/treatments/root-canal-treatment"
    },
    {
      title: "Laser RCT + Meta Pex RCT (Posterior)",
      price: "₹10,990",
      icon: GiMedicines,
      slug:"/treatments/root-canal-treatment"
    },
    // {
    //   title: "Laser RCT + Meta Pex RCT",
    //   description:
    //     "Indicated for Endo Perio Lesion, Cystic Lesion and 3rd Molar cases",
    //   icon: GiMedicines,
    // },
    // {
    //   title: "Core Build-up",
    //   description: "Additional charges applicable",
    //   icon: TbDental,
    // },
    // {
    //   title: "Cap / Onlay / Inlay",
    //   description: "Additional charges applicable",
    //   icon: TbDental,
    // },
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
      serviceSlug: "teeth-cleaning-scaling",
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
      serviceSlug: "teeth-cleaning-scaling",
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
        "Our team maintains strict infection-control standards, with comprehensive hygiene practices, appropriate PPE usage, and routine safety checks to ensure a clean and safe environment for every patient.",
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
  