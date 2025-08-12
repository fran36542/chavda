"use client";

import type { Service } from "@/lib/data";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ContactDialog from "./ContactDialog";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { CheckCircle, Linkedin, MessageSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

type ServiceDialogProps = {
  service: Service;
};

const ServiceDialog = ({ service }: ServiceDialogProps) => {
  return (
    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold font-headline">
          {service.title}
        </DialogTitle>
        <DialogDescription className="text-base pt-2">
          {service.shortBio}
        </DialogDescription>
      </DialogHeader>

      {service.pricingTiers && (
        <div className="py-4">
            <h4 className="font-semibold mb-2">Industry-Specific Market Pricing (India – 2025)</h4>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Service</TableHead>
                        <TableHead>Price Range (₹)</TableHead>
                        <TableHead>Delivery Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {service.pricingTiers.map((tier) => (
                        <TableRow key={tier.service}>
                            <TableCell className="font-medium">{tier.service}</TableCell>
                            <TableCell>{tier.price}</TableCell>
                            <TableCell>{tier.delivery}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      )}


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        <div>
          <h4 className="font-semibold mb-2">What I Provide:</h4>
          <ul className="space-y-2">
            {service.whatIProvide.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Why Work With Me:</h4>
          <ul className="space-y-2">
            {service.whyWorkWithMe.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-2">
        <h4 className="font-semibold mb-2">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="py-2">
        <h4 className="font-semibold">Price:</h4>
        <p className="text-lg font-medium">{service.price}</p>
      </div>

      <DialogFooter className="sm:justify-start gap-2 pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </DialogTrigger>
          <ContactDialog />
        </Dialog>
        <Button variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/finshchavda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" /> DM on LinkedIn
          </a>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ServiceDialog;
