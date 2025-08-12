import { Card } from "./ui/card";

const services = [
  {
    title: "User Research & Design",
    subtitle: "Pen/Paper",
    icon: "✏️",
    bgColor: "bg-yellow-100",
  },
  {
    title: "UI & Product Design",
    subtitle: "Figma",
    icon: "🎨",
    bgColor: "bg-blue-100",
  },
  {
    title: "No-code Development",
    subtitle: "Webflow",
    icon: "✨",
    bgColor: "bg-pink-100",
  },
  {
    title: "SEO & Digital Marketing",
    subtitle: "Marketing",
    icon: "📈",
    bgColor: "bg-purple-100",
  },
];

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
            <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
                What I do?
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className={`${service.bgColor} h-full rounded-lg shadow-lg flex flex-col justify-center items-center text-center p-8 transition-transform duration-300 hover:-translate-y-2`}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.subtitle}</p>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
