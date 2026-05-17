import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { AgencyMarquee } from "@/components/agency-marquee";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { EnrollmentForm } from "@/components/enrollment-form";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/FounderSection";
import { HowItWorks } from "@/components/HowItWorksSection";
import { Results } from "@/components/ResultsSection";
import { FAQ } from "@/components/FAQSection";
import Guarantee, { WhatsAppButton } from "@/components/GuaranteeAndWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Services />
      <HowItWorks />
      <AgencyMarquee />
      <Results />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <EnrollmentForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
