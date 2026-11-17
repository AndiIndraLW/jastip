import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CatalogSection from "@/components/CatalogSection";
import LiveDropSection from "@/components/LiveDropSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import RequestModal from "@/components/RequestModal";
import FeeCalculatorModal from "@/components/FeeCalculatorModal";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <main className="w-full bg-[#EDE4DD] flex justify-center">
      <div
        data-pencil-name="Jastip — Homepage"
        className="w-full max-w-[1440px] flex flex-col bg-[#EDE4DD] overflow-x-hidden shadow-2xl relative"
      >
        <AnnouncementBar />
        <Navbar />
        <Hero />
        <TrustBar />
        <CatalogSection />
        <LiveDropSection />
        <HowItWorksSection />
        <Footer />

        {/* Modals & Folios */}
        <RequestModal />
        <FeeCalculatorModal />
        <CartDrawer />
        <Toast />
      </div>
    </main>
  );
}
