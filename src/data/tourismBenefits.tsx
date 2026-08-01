import {
  SafetyCertificateOutlined,
  TrophyOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  PercentageOutlined,
} from "@ant-design/icons";

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
