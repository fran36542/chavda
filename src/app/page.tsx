import Contact from "@/components/Contact";
import DesignMastery from "@/components/DesignMastery";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatIDo from "@/components/WhatIDo";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIDo />
        <FeaturedProjects />
        <DesignMastery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
