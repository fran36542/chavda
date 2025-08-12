import type { Project } from "@/lib/data";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BehanceIcon from "./icons/BehanceIcon";
import DribbbleIcon from "./icons/DribbbleIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { CheckCircle, Award, Rocket } from "lucide-react";

type ProjectDialogProps = {
  project: Project;
};

const Section = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <h4 className="text-xl font-bold font-headline mb-3 text-primary">{title}</h4>
    <div className="space-y-2 text-muted-foreground prose prose-sm max-w-none">{children}</div>
  </div>
);

const ProjectDialog = ({ project }: ProjectDialogProps) => {
  return (
    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold font-headline text-primary">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-lg text-muted-foreground pt-1">
          {project.category}
        </DialogDescription>
      </DialogHeader>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 py-4">
        <div className="md:col-span-8 space-y-8">
          
          {project.overview && (
            <Section title="Overview">
              <p>{project.overview}</p>
            </Section>
          )}

          <Section title="Objective">
            <p>{project.objection}</p>
          </Section>

          <Section title="Problems Identified">
            <ul className="list-disc list-outside pl-5 space-y-1">
              {project.problems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Solution">
            <ul className="list-disc list-outside pl-5 space-y-1">
              {project.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Impact">
            <ul className="space-y-2">
              {project.impact.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Rocket className="h-4 w-4 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

           {project.milestone && (
            <Section title="Milestone / Recognition">
              <div className="p-4 rounded-lg bg-secondary border border-primary/20">
                <h5 className="font-bold font-headline flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    {project.milestone.title}
                </h5>
                <p className="mt-2 text-muted-foreground">{project.milestone.description}</p>
                {project.milestone.details && (
                   <ul className="mt-3 list-disc list-outside pl-5 space-y-1 text-sm">
                        {project.milestone.details.map((detail, index) => (
                            <li key={index} className="italic">{detail.includes('"') ? `"${detail.replace(/"/g, '')}"` : detail}</li>
                        ))}
                    </ul>
                )}
              </div>
            </Section>
          )}

          <Section title="Process">
            <ul className="list-decimal list-outside pl-5 space-y-4">
              {project.process.map((item, index) => (
                <li key={index}>
                    {typeof item === 'string' ? (
                        <p>{item}</p>
                    ) : (
                        <div>
                            <h5 className="font-semibold">{item.title}</h5>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1">
                                {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
              ))}
            </ul>
          </Section>

        </div>
        <div className="md:col-span-4 space-y-8">
          <Section title="Used Tools">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </Section>
          <Section title="Project Links">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href={project.links.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                  className="w-12 h-12"
                >
                  <DribbbleIcon className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={project.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                   className="w-12 h-12"
                >
                  <BehanceIcon className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={project.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                   className="w-12 h-12"
                >
                  <LinkedinIcon className="h-7 w-7" />
                </a>
              </Button>
            </div>
          </Section>
        </div>
      </div>

      <Section title="Gallery" className="pt-8 border-t">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {project.gallery.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="relative rounded-lg overflow-hidden bg-muted border">
                  <Image
                    src={src}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={1280}
                    height={720}
                    className="object-contain w-full h-auto"
                    data-ai-hint={`${project.category.toLowerCase()} screenshot`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-center gap-4">
             <CarouselPrevious />
             <CarouselNext />
          </div>
        </Carousel>
      </Section>
    </DialogContent>
  );
};

export default ProjectDialog;
