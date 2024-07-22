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
  // const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  // const isMobile =
  //   typeof window != "undefined"
  //     ? window.matchMedia("(max-width: 768px)").matches
  //     : false;

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   if (!section) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("remove sticky");
  //           setIsSticky(true); // Set sticky to true when section is intersecting
  //         } else {
  //           console.log("remove not sticky");
  //           setIsSticky(false); // Set sticky to false when section is not intersecting
  //         }
  //       });
  //     },
  //     {
  //       threshold: isMobile ? 0.5 : 0.7, // Adjust this value as needed
  //     },
  //   );

  //   observer.observe(section);

  //   return () => {
  //     observer.unobserve(section);
  //   };
  // }, []);

  // useEffect(() => {
  //   const element = document.getElementById("home");
  //   if (element && isSticky) {
  //     element.classList.remove("sticky", "top-0");
  //   }
  // }, [isSticky]);

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

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
            <h2
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              data-scroll-direction="horizontal"
            >
              <span className="Inter text-7xl font-black uppercase">About</span>
              <br />
              <span className="Inter mt--2.5 text-7xl font-black uppercase">
                Me<span className="text-gradient">.</span>
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
              <div className="fill-gradient z--99 right-px top-5 md:absolute">
                <ScribbleSvg />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium md:mt-10 md:w-4/5">
              Hi, I&apos;m Melanie Woe — a frontend developer with extensive
              experience in various technologies. I&apos;ve worked with various
              companies, contributing to all project phases; from technical
              assessments and ideation to delivery. I&apos;ve led development
              efforts and worked closely with cross-functional teams.
            </div>
            <br />
            <div className="md:w-4/5 md:self-end">
              In addition to frontend development, I&apos;ve also explored
              backend development, broadening my skill set. I&apos;m passionate
              about creating seamless, engaging user experiences and
              continuously enhancing the digital landscape.
            </div>
            <br />
            <br />
            <div className="bottom-0 left-0 text-sm font-light uppercase">
              [Currently BASED <br /> in denver, co]
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
