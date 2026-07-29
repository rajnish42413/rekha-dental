import Footer from "@/components/landingPage/footer";
import Navbar from "@/components/landingPage/navbar";
import TopLoader from "@/components/general/topLoader";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental",
  description:
    "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",
  keywords: [
    "best dental clinic in Raj Nagar Extension",
    "best dentist in Raj Nagar Extension",
    "dental clinic in Raj Nagar Extension",
    "dentist in Raj Nagar Extension Ghaziabad",
    "best dentist in Kotgaon",
    "dental clinic in Kotgaon",
    "dentist near Kotgaon",
    "dental implants Raj Nagar Extension",
    "root canal treatment Raj Nagar Extension",
    "cosmetic dentist Raj Nagar Extension",
    "Rekha Dental",
  ],
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <div className="flex flex-col min-h-screen ">
        <TopLoader />
        <Navbar />
        <main className="grow bg-[#EAE4DB]">{children}</main>
        <Footer />
      </div>
    </ReactQueryProvider>
  );
}
