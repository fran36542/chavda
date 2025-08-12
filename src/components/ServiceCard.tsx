import type { Service } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import ServiceDialog from "./ServiceDialog";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Dialog>
      <Card
        className={`${service.bgColor} p-6 rounded-lg flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
      >
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
             <span className="text-4xl">{service.icon}</span>
             <div className="text-xs font-semibold bg-white px-2 py-1 rounded-full">Process</div>
          </div>
        </CardHeader>
        <CardContent className="p-0 pt-6 flex-grow">
          <CardTitle className="text-xl font-bold font-headline">{service.title}</CardTitle>
          <CardDescription className="mt-2 text-sm">{service.shortBio}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent border-foreground/20 hover:bg-white/50 group-hover:border-foreground/80 transition-colors duration-300">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <ServiceDialog service={service} />
    </Dialog>
  );
};

export default ServiceCard;
