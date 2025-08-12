"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactDialog = () => {

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Inquiry from: ${name} (${email})\n\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/7021910692?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };


  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="font-headline">Contact Me</DialogTitle>
        <DialogDescription>
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSend}>
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hi Fuya, I'd like to talk about..."
              rows={5}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full sm:w-auto">
            Send on WhatsApp
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default ContactDialog;
    