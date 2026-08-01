import {
  ScanOutlined,
  SafetyCertificateOutlined,
  StarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

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
