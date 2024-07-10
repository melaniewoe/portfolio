import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import styles from "@/styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useTransform, MotionValue, motion } from "framer-motion";

interface MyComponentProps {
  isScrolled: boolean;
  scrollYProgress: MotionValue<number>;
}

const Intro: React.FC<MyComponentProps> = ({ isScrolled, scrollYProgress }) => {
  const [isSticky, setIsSticky] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(true); // Set sticky to true when section is intersecting
          } else {
            setIsSticky(false); // Set sticky to false when section is not intersecting
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      },
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      id="home"
      ref={sectionRef}
      data-scroll-section
      // add container for blob
      className={cn(
        "relative mt-40 flex h-screen flex-col items-center justify-between xl:mt-0 xl:min-h-screen xl:flex-col",
        // isSticky ? "sticky" : "", // Apply sticky class conditionally
        // isSticky ? "top-0" : "", // Apply top-0 class conditionally
      )}
    >
      <motion.div
        className={cn(styles.intro, "w-full xl:w-auto xl:flex-grow")}
        style={{ scale, clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="container flex w-full justify-between font-extralight">
          <h2>[PORTFOLIO]</h2>
          <h2 className="font-bold uppercase">[Melanie Woe]</h2>
          <h2>[2024]</h2>
        </div>
        <h1
          data-scroll
          data-scroll-enable-touch-speed
          data-scroll-speed=".06"
          data-scroll-direction="horizontal"
        >
          <span className="aalto-opentype text-8xl uppercase text-foreground xl:text-15xl">
            Frontend
          </span>
          <span className="aalto-opentype text-8xl uppercase xl:text-15xl">
            {" "}
            <span className="aalto-opentype">Engineer</span>
            <span className="text-gradient font-SpaceGrostek">.</span>
          </span>
        </h1>
        <div className="font-semibold">
          <h2>
            turning coffee into code and code into <span>awesome</span>{" "}
            websites.
          </h2>
        </div>
        <div
          className={cn(styles.scroll, isScrolled && styles["scroll--hidden"])}
        >
          Scroll to discover{" "}
          <TriangleDownIcon className="mt-1 animate-bounce" />
        </div>
      </motion.div>
      <div
        data-scroll
        data-scroll-speed="-.01"
        id={styles["canvas-container"]}
        className="absolute right-5 top-0 h-full w-full"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <Spline scene="/assets/intro_blob.spline" />
        </Suspense>
      </div>
    </section>
  );
};

export default Intro;
