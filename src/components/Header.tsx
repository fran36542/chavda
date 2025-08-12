
"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Briefcase, Settings, Users, Mail, Linkedin, User } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/about", label: "About us", icon: User },
  { href: "/contact", label: "Contact us", icon: Mail },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Logo />
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:block">
        <Button asChild>
          <a
            href="https://www.linkedin.com/in/finshchavda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" /> Hire Me
          </a>
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-background p-0">
             <SheetHeader className="p-6 pb-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
            <div className="flex flex-col h-full p-6">
              <div className="mb-8">
                <Logo />
              </div>
              <nav className="flex flex-col gap-4 text-lg">
                {navLinks.map((link) => (
                   <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                    onClick={() => {
                      if (link.href.startsWith("#")) {
                        closeSheet();
                        setTimeout(() => {
                           const element = document.querySelector(link.href);
                           if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 0);
                      } else {
                        closeSheet();
                      }
                    }}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button asChild className="w-full">
                  <a
                    href="https://www.linkedin.com/in/finshchavda/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
