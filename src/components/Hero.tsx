import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FigmaIcon, WebflowIcon, XDIcon, SketchIcon } from "./icons/AboutPageTechIcons";


const DefaultHero = () => {
 return (
    <section
      id="hero"
      className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 text-center md:text-left"
    >
      <div className="max-w-xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image 
              src="https://media.licdn.com/dms/image/v2/D5635AQHeAb6CvD2Vqw/profile-framedphoto-shrink_200_200/B56ZkFr69.IAAk-/0/1756737024292?e=1757415600&v=beta&t=J-9Pjpbk0uRoynD4gBpG9FP4JaPzmfazI0Rcjpx_PAI"
              alt="Fuya" 
              width={100}
              height={100}
              className="object-cover"
              data-ai-hint="profile picture"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👋</span>
            <span className="font-mono text-lg">fuya</span>
          </div>
           <div className="inline-flex items-center bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full">
            <svg className="w-4 h-4 mr-1.5" viewBox="0 0 16 16" fill="currentColor"><path d="M10.75 3.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z M5.25 3.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z"/></svg>
            UI/UX DESIGNER
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter font-headline uppercase">
          I design top notch products and apps
        </h1>
      </div>
      <div className="max-w-sm mt-8 md:mt-0">
        <p className="text-lg text-muted-foreground">
         I'll design your website and will develop it too on the best using No-code
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a
            href="https://www.linkedin.com/in/finshchavda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me
          </a>
        </Button>
      </div>
    </section>
  );
}

const Hero = ({ isAboutPage = false }: { isAboutPage?: boolean }) => {
  return <DefaultHero />;
};

export default Hero;
