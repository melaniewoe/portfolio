import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
// import Picture2 from "../../public/images/2.jpg";
// import Picture3 from "../../public/images/3.jpg";
import Image, { StaticImageData } from "next/image";

interface SlideProps {
  direction: "left" | "right";
  left: string;
  progress: MotionValue<number>;
}

interface PhraseProps {
  // src: StaticImageData;
}

const Skills: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section className="overflow-hidden" id="home" data-scroll-section>
      <div className="h-full" />
      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        ref={container}
      >
        <Slide direction="left" left="-1%" progress={scrollYProgress} />
        <Slide direction="right" left="-70%" progress={scrollYProgress} />
        <Slide direction="left" left="-160%" progress={scrollYProgress} />
      </div>
      <div className="h-full" />
    </section>
  );
};

const Slide: React.FC<SlideProps> = ({ direction, left, progress }) => {
  const directionMultiplier = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionMultiplier, -150 * directionMultiplier],
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase />
      <Phrase2 />
      <Phrase3 />
      <Phrase4 />
    </motion.div>
  );
};

const Phrase: React.FC<PhraseProps> = () => {
  return (
    <div className="flex items-center gap-8 px-5">
      <p className="text-[8.5vw] md:text-[2.5vw]">React.js</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/react.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Javascript</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/js.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">CSS</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/css-3.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">LESS</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/less.png"
          alt="image"
          fill
        />
      </span>
    </div>
  );
};

const Phrase2: React.FC<PhraseProps> = () => {
  return (
    <div className="flex items-center gap-8 px-5">
      <p className="text-[8.5vw] md:text-[2.5vw]">HTML</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/html-5.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">jQuery</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/jQuery1.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">AJAX</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/ajax.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Boostrap</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/bootstrap.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Webpack</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/webpack.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw] ">Figma</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/figma.png"
          alt="image"
          fill
        />
      </span>
    </div>
  );
};

const Phrase3: React.FC<PhraseProps> = () => {
  return (
    <div className="flex items-center gap-8 px-5">
      <p className="text-[8.5vw] md:text-[2.5vw]">Git</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/git.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Jira</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/jira.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">C#</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "cover" }}
          src="/skillIcons/csharp.png"
          alt="image"
          fill
        />
      </span>
    </div>
  );
};

const Phrase4: React.FC<PhraseProps> = () => {
  return (
    <div className="flex items-center gap-8 px-5">
      <p className="text-[8.5vw] md:text-[2.5vw]">REST</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/rest.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Github</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/github.png"
          alt="image"
          fill
        />
      </span>
      <p className="md:text-[2.5vw]] text-[8.5vw]">BitBucket</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: "contain" }}
          src="/skillIcons/bitbucket.png"
          alt="image"
          fill
        />
      </span>
      <p className="text-[8.5vw] md:text-[2.5vw]">Front End Developer</p>
      <span className="relative aspect-[4/2] h-[3.5vw] overflow-hidden rounded-full">
        {/* <Image style={{ objectFit: "cover" }} alt="image" fill /> */}
      </span>
    </div>
  );
};
export default Skills;
