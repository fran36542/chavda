
"use client";

import { services } from "@/lib/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">
            What I Do
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
            I offer a range of services to bring your ideas to life. Here's how I can help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
