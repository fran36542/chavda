import type { Project } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import ProjectDialog from "./ProjectDialog";
import { Dialog, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Dialog>
      <Card className="overflow-hidden flex flex-col h-full group">
        <CardHeader className="p-0">
          <div className="bg-muted aspect-auto overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={800}
              height={600}
              data-ai-hint={`${project.category.toLowerCase()}`}
              className="object-contain w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-xl">
            {project.title}
          </CardTitle>
          <CardDescription className="mt-2">{project.category}</CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <DialogTrigger asChild>
            <Button className="w-full">Explore</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <ProjectDialog project={project} />
    </Dialog>
  );
};

export default ProjectCard;
