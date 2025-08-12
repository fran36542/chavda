"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const project = formData.get("project") as string;
    
    const message = `Project Inquiry from ${name}\n\nProject Details: ${project}\n\nEmail: ${email}`;
    const whatsappUrl = `https://wa.me/7021910692?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
              Contact here
            </div>
            <h2 className="text-3xl font-bold font-headline">
              Let&apos;s turn your vision into reality.
            </h2>
            <div className="text-muted-foreground mt-4">
              <p>With creative, user-focused solutions. Contact me today!</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSend}>
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                <span className="bg-pink-100 text-pink-700 px-1">Name</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Zainab Nisa"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                <span className="bg-yellow-100 text-yellow-700 px-1">
                  Your email
                </span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="zainab123@gmail.com"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="project" className="text-sm font-medium">
                <span className="bg-blue-100 text-blue-700 px-1">
                  About Project
                </span>
              </label>
              <Textarea
                id="project"
                name="project"
                placeholder="I want to discuss you about..."
                className="mt-1"
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Send on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;