import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import styles from "@/styles/About.module.css";
import { useTransform, MotionValue, motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("issticky");
            setIsSticky(true); // Set sticky to true when section is intersecting
          } else {
            console.log("not issticky");
            setIsSticky(false); // Set sticky to false when section is not intersecting
          }
        });
      },
      {
        threshold: 0.9, // Adjust this value as needed
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
        <h2 className="py-16 pb-2 text-xl font-light leading-normal tracking-tighter text-foreground xl:text-[30px]">
          <span className="text-gradient clash-grotesk text-xl font-semibold tracking-tighter">
            ✨ About Me
          </span>
          <br />
          I&apos;m Melanie, a frontend developer with extensive experience in
          technologies like{" "}
          <Link
            href="https://create.t3.gg/"
            target="_blank"
            className="underline"
          >
            React
          </Link>{" "}
          . I've worked with various companies, contributing to all project
          phases—from technical assessments and ideation to delivery. I've led
          development efforts and collaborated with cross-functional teams.
          <br /> <br />
          Besides frontend work, I've also explored backend development, picking
          up diverse skills. I&apos;m passionate about creating seamless,
          engaging user experiences and continuously enhancing the digital
          landscape.
        </h2>
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
        <div className={styles.profileCanvas}>
          <Suspense fallback={<span>Loading...</span>}>
            <Spline scene="https://prod.spline.design/fwZby6NV6lkUHNsy/scene.splinecode" />
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
