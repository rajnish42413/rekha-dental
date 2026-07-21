import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/appointment",
        destination: "/dentist-near-me",
        permanent: true,
      },
      {
        source: "/bindaas-hasne-ka",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/appointment/raj-nagar",
        destination: "/dentist-near-me/raj-nagar",
        permanent: true,
      },
      {
        source: "/treatments/cosmetic-dentistry-ghaziabad",
        destination: "/treatments/cosmetic-dentistry",
        permanent: true,
      },
      {
        source: "/services/root-canal-treatment",
        destination: "/treatments/root-canal-treatment",
        permanent: true,
      },
      {
        source: "/treatments/dental-implant-ghaziabad",
        destination: "/treatments/dental-implants",
        permanent: true,
      },
      {
        source: "/services/teeth-cleaning-scaling",
        destination: "/treatments/teeth-cleaning-scaling",
        permanent: true,
      },
      {
        source: "/do-you-want-to-eat-your-favourite-food-take-care-of-your-oral-health-first",
        destination: "/blogs",
        permanent: true,
      },
    ];

  },
};

export default nextConfig;