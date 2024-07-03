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
        "container mt-40 flex h-screen flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between",
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
            <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
              Melanie Woe
              <br />
            </span>
            <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
              Frontend Engineer.
            </span>
          </h1>
          <p
            data-scroll
            data-scroll-enable-touch-speed
            data-scroll-speed=".06"
            className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
          >
            An experienced frontend developer with a big big thanos brain.
          </p>
        </div>
        <span
          data-scroll
          data-scroll-enable-touch-speed
          data-scroll-speed=".06"
          className="flex flex-row items-center space-x-1.5 pt-6"
        >
          <Link href="mailto:melaniewoe@gmail.com" passHref>
            <Button>
              Get in touch <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </span>

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
