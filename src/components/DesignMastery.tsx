import { Card } from "./ui/card";

const masteryData = [
  {
    number: 1,
    title: "UI/UX Design",
    description: "Creating modern, user-friendly designs for seamless user experiences.",
    color: "bg-yellow-100"
  },
  {
    number: 2,
    title: "UX Research",
    description: "Leading data-driven research to craft user-focused design strategies.",
    color: "bg-blue-100"
  },
  {
    number: 3,
    title: "Digital Marketing",
    description: "Boosting your brand's presence through strategic digital marketing.",
    color: "bg-pink-100"
  },
  {
    number: 4,
    title: "E-commerce Development",
    description: "Building robust e-commerce solutions for online business success.",
    color: "bg-purple-100"
  },
];

const DesignMastery = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Design Mastery
            </div>
            <h2 className="text-3xl font-bold font-headline mb-4">
              Crafting modern, user-centered designs
            </h2>
            <p className="text-muted-foreground">
              that blend aesthetics and functionality, specializing in mobile apps and websites with crystal-clear UI, seamless UX, and solutions that engage, inspire, and deliver exceptional digital experiences.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {masteryData.map((item) => (
                <Card key={item.number} className="p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 ${item.color} rounded-md flex items-center justify-center font-bold text-lg`}>
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default DesignMastery;
