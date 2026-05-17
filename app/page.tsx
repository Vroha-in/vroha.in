import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { AgencyMarquee } from "@/components/agency-marquee";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { EnrollmentForm } from "@/components/enrollment-form";
import { Footer } from "@/components/footer";
import FounderSection from "@/components/FounderSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection, { WhatsAppButton } from "@/components/GuaranteeAndWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FounderSection />
      <Services />
      <HowItWorksSection />
      <AgencyMarquee />
      <ResultsSection />
      <Testimonials />
      <Pricing />
      <GuaranteeSection />
      <EnrollmentForm />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
