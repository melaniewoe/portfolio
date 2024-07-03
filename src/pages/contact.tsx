import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <section id="contact" data-scroll-section className="container my-64">
      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
      >
        <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
          Get In <span className="text-gradient clash-grotesk">Touch.</span>
        </h2>
        <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
          I&apos;m currently available for freelance work and open to discussing
          new projects.
        </p>
        <Link href="mailto:melaniewoe@gmail.com" passHref>
          <Button className="mt-6">Get in touch</Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
