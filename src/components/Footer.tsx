"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const Copyright = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    return null;
  }

  return <>Copyright Portfolio {year}</>;
};

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo />
          </div>
          <div className="flex gap-4">
            <a
              href="https://dribbble.com/CHAVDA365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="font-semibold hover:text-primary transition-colors"
            >
              DRIBBBLE
            </a>
            <a
              href="https://www.linkedin.com/in/finshchavda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="font-semibold hover:text-primary transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.behance.net/fuyaram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="font-semibold hover:text-primary transition-colors"
            >
              BEHANCE
            </a>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8 border-t border-border pt-6">
          <p>
            <Copyright />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
