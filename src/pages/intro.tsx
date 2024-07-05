import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { ChevronRight } from "lucide-react";
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
            console.log("home sticky");
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      id="home"
      ref={sectionRef}
      data-scroll-section
      className={cn(
        "container relative mt-40 flex h-screen flex-col items-center justify-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between",
        isSticky ? "sticky" : "", // Apply sticky class conditionally
        isSticky ? "top-0" : "", // Apply top-0 class conditionally
      )}
    >
      <motion.div className={styles.intro} style={{ scale }}>
        <div>
          <h1
            data-scroll
            data-scroll-enable-touch-speed
            data-scroll-speed=".06"
            data-scroll-direction="horizontal"
          >
            <div className="font-SpaceGrostek 2xl:text-15xl text-6xl font-bold tracking-tighter text-foreground">
              Frontend —
              <br />
            </div>
            <div className="plumpeto-outlined 2xl:text-15xl mt-7 text-5xl">
              <span className="plumpeto-plumpy">E</span>
              ngineer
              <span className="text-gradient font-SpaceGrostek">.</span>
            </div>
          </h1>
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
        className="mt-14 h-full w-full xl:mt-0"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <Spline scene="https://prod.spline.design/RaVIl9YcreC8uTno/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
};

export default Intro;
