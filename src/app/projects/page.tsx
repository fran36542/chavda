import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import DesignMastery from "@/components/DesignMastery";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIDo />
        <FeaturedProjects />
        <section id="all-projects" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
                All Projects
              </div>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
                Showcasing modern, user-centered mobile apps and websites with crystal-clear UI, seamless UX, and designs that truly engage users.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
        <DesignMastery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
