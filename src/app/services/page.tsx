
import Contact from "@/components/Contact";
import DesignMastery from "@/components/DesignMastery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <DesignMastery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
