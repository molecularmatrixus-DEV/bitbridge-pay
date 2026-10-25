import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MerchantBenefits from "@/components/MerchantBenefits";
import SupportedIndustries from "@/components/SupportedIndustries";
import PricingAndOnboarding from "@/components/PricingAndOnboarding";
import ApplicationSection from "@/components/ApplicationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MerchantBenefits />
        <SupportedIndustries />
        <PricingAndOnboarding />
        <ApplicationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
