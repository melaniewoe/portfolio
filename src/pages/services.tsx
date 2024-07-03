import { motion } from "framer-motion";
import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" data-scroll-section className="container">
      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="my-24 flex flex-col justify-start space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            staggerChildren: 0.5,
          }}
          viewport={{ once: true }}
          className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
        >
          <div className="flex flex-col py-6 xl:p-6">
            <h2 className="text-4xl font-medium tracking-tight">
              Need more info?
              <br />
              <span className="text-gradient clash-grotesk tracking-normal">
                I got you.
              </span>
            </h2>
            <p className="mt-2 tracking-tighter text-secondary-foreground">
              Here are some of the services I offer. If you have any questions,
              feel free to reach out.
            </p>
          </div>
          {services.map((service) => (
            <div
              key={service.service}
              className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
            >
              <service.icon className="my-6 text-primary" size={20} />
              <span className="text-lg tracking-tight text-foreground">
                {service.service}
              </span>
              <span className="mt-2 tracking-tighter text-muted-foreground">
                {service.description}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
