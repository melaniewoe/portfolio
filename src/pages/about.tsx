import styles from "@/styles/About.module.css";
import { useTransform, MotionValue, motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScribbleSvg from "@/components/ScribbleSvg";

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Companies worked with", value: "15+" },
];

interface MyComponentProps {
  scrollYProgress: MotionValue<number>;
}

const About: React.FC<MyComponentProps> = ({ scrollYProgress }) => {
  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile =
    typeof window != "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("remove sticky");
            setIsSticky(true); // Set sticky to true when section is intersecting
          } else {
            console.log("remove not sticky");
            setIsSticky(false); // Set sticky to false when section is not intersecting
          }
        });
      },
      {
        threshold: isMobile ? 0.5 : 0.8, // Adjust this value as needed
      },
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("home");
    if (element && isSticky) {
      element.classList.remove("sticky", "top-0");
    }
  }, [isSticky]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="about" data-scroll-section ref={sectionRef}>
      <motion.div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className={styles.aboutSection}
        // style={{ scale }}
      >
        <div className="py-16 text-xl font-light leading-normal text-primary xl:text-[25px]">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h2>
              <span className="Inter text-7xl font-black uppercase">About</span>
              <br />
              <span className="Inter mt--2.5 text-7xl font-black uppercase">
                Me.
              </span>
            </h2>
            <div>
              <Image
                src="/profile-pic.png"
                alt="Profile Picture"
                width={250}
                height={250}
                // layout="responsive"
                className="relative z-10 m-5 mr-12 rounded-full"
              />
              <div className="fill-gradient absolute right-px top-5 z-0 w-1/3">
                <ScribbleSvg />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium md:mt-10 md:w-4/5">
              Hi, I&apos;m Melanie Woe — a frontend developer with extensive
              experience in various technologies. I've worked with various
              companies, contributing to all project phases; from technical
              assessments and ideation to delivery. I've led development efforts
              and collaborated with cross-functional teams.
            </div>
            <br />
            <div className="md:w-4/5 md:self-end">
              Besides frontend work, I've also explored backend development,
              picking up diverse skills. I&apos;m passionate about creating
              seamless, engaging user experiences and continuously enhancing the
              digital landscape.
            </div>
            <br />
            <br />
            <div className="text-sm font-light uppercase">
              Currently BASED <br /> in denver, co
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center xl:items-start xl:text-start"
            >
              <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                {stat.value}
              </span>
              <span className="tracking-tight text-muted-foreground xl:text-lg">
                {stat.label}
              </span>
            </div>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default About;
