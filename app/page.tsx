import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Founder } from "@/components/Founder";
import { HowItWorks } from "@/components/HowItWorks";
import { Results } from "@/components/Results";
import { FAQ } from "@/components/FAQ";
import { Services } from "@/components/services";
import { AgencyMarquee } from "@/components/agency-marquee";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { EnrollmentForm } from "@/components/enrollment-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <HowItWorks />
      <Results />
      <FAQ />
      <Services />
      <AgencyMarquee />
      <Testimonials />
      <Pricing />
      <EnrollmentForm />
      <Footer />
    </main>
  );
}
