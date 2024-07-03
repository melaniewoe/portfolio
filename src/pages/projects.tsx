import React from "react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Unqueue",
    description: "E-commerce platform for selling digital products",
    image: "/assets/unqueue.webm",
    href: "https://unqueue.shop/",
  },
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: "/assets/infinitevps.webm",
    href: "#",
  },
  {
    title: "TranslateBot",
    description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/translate_bot.webm",
    href: "https://translatebot.app/",
  },
  {
    title: "Wrona",
    description: "Robotics-focused technology company",
    image: "/assets/wrona.jpeg",
    href: "https://www.wrona.com/",
  },
  {
    title: "This website",
    description: "My personal website",
    image: "/assets/portfolio.webm",
    href: "https://github.com/melaniewoe/portfolio",
  },
];

const Projects: React.FC = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <section id="projects" data-scroll-section className="container">
      {/* Gradient */}
      <div className="relative isolate -z-10">
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div data-scroll data-scroll-speed=".4" className="my-64">
        <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
          ✨ Projects
        </span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
          Streamlined digital experiences.
        </h2>
        <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
          I&apos;ve worked on a variety of projects, from small websites to
          large-scale web applications. Here are some of my favorites:
        </p>

        {/* Carousel */}
        <div className="mt-14">
          <Carousel setApi={setCarouselApi} className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2">
                  <Card id="tilt">
                    <CardHeader className="p-0">
                      <Link href={project.href} target="_blank" passHref>
                        {project.image.endsWith(".webm") ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={300}
                            quality={100}
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        )}
                      </Link>
                    </CardHeader>
                    <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                      <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                        {project.description}
                      </CardTitle>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            <span className="font-semibold">
              {current} / {count}
            </span>{" "}
            projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
