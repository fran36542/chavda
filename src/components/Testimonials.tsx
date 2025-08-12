"use client";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    comment:
      "UI design is so amazing. One of the best things is call support and humble for design multiple changes. I change, you change, only one call and then explain and prototype. So amazing and good.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKBUyi0i_gqeV-bizpoXyYsywY5ISEsRaqw&s",
    dataAiHint: "woman portrait",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Rohan Mehta",
    comment:
      "UI design is so good and perfect. Personally, thank you for this design and great work, young techy boy.",
    avatar: "https://i.pinimg.com/736x/42/a7/1b/42a71be4dca58106f4828c2d2c58fb73.jpg",
    dataAiHint: "man portrait professional",
    bgColor: "bg-blue-100",
  },
  {
    name: "Parik Jain - Founder of Propeers",
    comment:
      "Solving my app's UI design is a great solution. The app is looking so modern and user-friendly, a user-centered design. The menus all fit well in the top of the nav and searching bar, and all is perfect for user quick access. Good.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGcwZgVg24lww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708439479531?e=2147483647&v=beta&t=APgYKkn9hEcOWNpILrZMD0m_ZtvyYcRKp8w1zPSX_eQ",
    dataAiHint: "man portrait professional",
    bgColor: "bg-pink-100",
  },
  {
    name: "Mayank Aggarwal - Founder of Stealth AI",
    comment:
      "Stealth AI design is so good and beautiful, looking so clean and responsive. A user-friendly, user-centered design and a great UX combination with AI power.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHBf2gxh3PPIA/profile-displayphoto-scale_400_400/B56ZgjyroQG0Ag-/0/1752947149490?e=1758153600&v=beta&t=sVRfMmyK3PjS8DuJhhzNyIm6AWJRNJrX9P4-HA8MenA",
    dataAiHint: "man portrait",
    bgColor: "bg-purple-100",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
            What Client Say
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card
                    className={`p-6 rounded-lg h-full flex flex-col ${testimonial.bgColor} border-0`}
                  >
                     <CardContent className="p-0 flex-grow flex flex-col">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-lg mb-6 flex-grow">
                        &quot;{testimonial.comment}&quot;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            data-ai-hint={testimonial.dataAiHint}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name.split(' - ')[0]}</p>
                          {testimonial.name.split(' - ')[1] && <p className="text-sm text-muted-foreground">{testimonial.name.split(' - ')[1]}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
