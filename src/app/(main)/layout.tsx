
import Footer from "@/components/landingPage/footer";
import Navbar from "@/components/landingPage/navbar";
import TopLoader from "@/components/general/topLoader";
import ReactQueryProvider from "@/providers/reactQueryProvider";

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
        <main className="grow bg-[#EAE4DB]">
          {children}
        </main>
        <Footer />
      </div>
    </ReactQueryProvider>
  );
}