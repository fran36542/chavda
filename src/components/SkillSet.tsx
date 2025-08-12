import Image from "next/image";
import { Card } from "./ui/card";
import { FigmaIcon, WebflowIcon, XDIcon, SketchIcon, WordpressIcon, ReactIcon, AIIcon, CanvaIcon, ShopifyIcon, WoocommerceIcon, FirebaseStudioIcon } from "./icons/TechIcons";
import { Brain, Heart, Lightbulb, MessageSquare, Rocket, Users } from "lucide-react";

const skills = [
    { name: "UI/UX Design & Research", description: "Designing modern, user-friendly mobile apps and websites with crystal-clear UI/UX, based on in-depth research.", bgColor: "bg-pink-100", textColor: "text-pink-700" },
    { name: "SEO + Marketing", description: "Boosting online presence through strategic SEO and digital marketing.", bgColor: "bg-red-100", textColor: "text-red-700" },
    { name: "AI Web Development", description: "Building intelligent web solutions with cutting-edge AI technologies.", bgColor: "bg-blue-100", textColor: "text-blue-700" },
    { name: "Content Creation / Strategy", description: "Developing compelling content and strategies that resonate with audiences.", bgColor: "bg-indigo-100", textColor: "text-indigo-700" },
];

const techSkills = [
  { Icon: FigmaIcon },
  { Icon: XDIcon },
  { Icon: SketchIcon },
  { Icon: WebflowIcon },
  { Icon: WordpressIcon },
  { Icon: ReactIcon },
  { Icon: AIIcon },
  { Icon: CanvaIcon },
  { Icon: ShopifyIcon },
  { Icon: WoocommerceIcon },
  { Icon: FirebaseStudioIcon },
];

const softSkills = [
  { Icon: Lightbulb, text: "Creativity" },
  { Icon: Rocket, text: "Problem Solving" },
  { Icon: Users, text: "Team Work" },
  { Icon: MessageSquare, text: "Communication" },
  { Icon: Brain, text: "Emotional Intelligence" },
  { Icon: Heart, text: "Friendly" },
];


const TechSkill = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center p-2">
        <Icon className="w-full h-full" />
    </div>
);

const SoftSkill = ({ Icon, text }: { Icon: React.ElementType, text: string }) => (
    <div className="w-32 h-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex flex-col items-center justify-center p-2 text-center">
        <Icon className="w-6 h-6 mb-1 text-pink-500" />
        <p className="text-xs font-semibold">{text}</p>
    </div>
)


const SkillSet = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-center gap-8">
                        <div className="grid grid-cols-4 gap-4">
                            {techSkills.slice(0, 4).map((skill, index) => (
                               <TechSkill key={index} Icon={skill.Icon} />
                            ))}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                             {techSkills.slice(4, 8).map((skill, index) => (
                               <TechSkill key={index + 4} Icon={skill.Icon} />
                            ))}
                        </div>
                         <div className="grid grid-cols-3 gap-4">
                             {techSkills.slice(8).map((skill, index) => (
                               <TechSkill key={index + 8} Icon={skill.Icon} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                          Skill Set
                        </div>
                        <p className="text-muted-foreground mb-8">
                            Delivering modern, user-focused solutions across design, development, marketing, and AI innovation.
                        </p>
                        <div className="space-y-2">
                            {skills.map((skill) => (
                                <Card key={skill.name} className="p-4">
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                       <div className={`text-sm font-semibold ${skill.textColor} ${skill.bgColor} py-1 px-2 rounded-md`}>{skill.name}</div>
                                        <p className="col-span-2 text-sm text-muted-foreground">{skill.description}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSet;
