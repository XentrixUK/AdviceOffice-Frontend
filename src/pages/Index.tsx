import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import HowWeCanHelp from "@/components/HowWeCanHelp";
import Services from "@/components/Services";
import OurImpact from "@/components/OurImpact";
import EligibilityCheck from "@/components/EligibilityCheck";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MakeADifference from "@/components/MakeADifference";
import SuccessStories from "@/components/SuccessStories";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OurApproach />
      <HowWeCanHelp />
      <Services />
      <OurImpact />
      <EligibilityCheck />
      <Testimonials />
      <MakeADifference />
      <SuccessStories />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
