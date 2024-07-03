import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Experience.module.css";

const experienceList = [
  {
    id: 0,
    timeline: "August 2022 - Present",
    roleTitle: "Senior Frontend Engineer",
    company: "Vail Resorts",
    roleDescription:
      "Led and maintained essential components of Vail Resorts' ecosystem, collaborating with cross-functional teams to streamline gear reservations and enhance development standards",
    tools: [
      "JavaScript",
      "React",
      "C#",
      "ASP.Net",
      "HTML",
      "LESS",
      "CSS",
      "Sitecore",
    ],
    img: "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq",
    color: "black",
  },
  {
    id: 1,
    timeline: "August 2021 - July 2022",
    roleTitle: "Frontend Software Engineer",
    company: "Vail Resorts",
    roleDescription:
      "Crafted and maintained customer-facing eCommerce applications, spearheaded operations, enhanced analytics, collaborated cross-functionally, ensured code quality, and managed project source code and CI/CD tools.",
    tools: ["JavaScript", "React", "C#", "ASP.Net", "HTML", "LESS", "CSS"],
    img: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
    color: "white",
  },
  {
    id: 2,
    timeline: "March 2020 - July 2021",
    roleTitle: "Software Engineer",
    company: "Vistar PFG Company",
    roleDescription:
      "Responsible for the full-stack development and maintenance of an ecommerce site, implement new features, and streamline processes, including REST API development for seamless integration with internal systems and customizable theme options for efficient content and design updates.",
    tools: ["PHP", "MySQL", "Magento", "JavaScript", "HTML", "CSS", "jQuery"],
    color: "black",
  },
  {
    id: 3,
    timeline: "April 2019 – October 2019",
    roleTitle: "Software Developer Intern",
    company: "Health Data Compass",
    roleDescription:
      "I build an onboarding automation system for new hires and contributing to automation and ETL pipeline projects.",
    tools: [
      "JavaScript",
      "Google App Maker",
      "Google BigQuery",
      "Google Cloud Platform",
    ],
    img: "https://psmag.com/.image/t_share/MTU4NzUzMjc3MDkyMDQ2NTUy/gettyimages-1031626122.jpg",
    color: "white",
  },
  {
    id: 4,
    timeline: "May 2017 – October 2017",
    roleTitle: "OSS Research Intern",
    company: "Rogue Wave Software",
    roleDescription:
      "I improved web app code for OSS audit system, thoroughly testing functionality and efficiency. Additionally, I developed a Ruby on Rails program to export CVEs files to Excel.",
    tools: ["JavaScript", "HTML", "CSS", "Ruby on Rails"],
    img: "https://www.gousa.in/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-03/f13bafc9dbcd2df659faac33a29cf4ae.jpeg?itok=rj0Zoh1b",
    color: "black",
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollAmount = experienceList.length * 40; // Adjust based on item height

  return (
    <section id="experience" data-scroll-section className="container ">
      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="my-24 flex flex-col justify-start space-y-10"
      >
        <div className="grid items-center gap-1.5">
          <div className="flex flex-col py-6 xl:p-6">
            <h2 className="text-gradient text-4xl font-medium tracking-tight">
              Experience.
              <br />
            </h2>
          </div>
          <div className="justify-left relative flex h-[calc(100vh-290px)] w-full items-center overflow-hidden rounded-2xl p-5">
            <div className="absolute inset-0">
              {experienceList.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundColor: `url(${item.img})` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{
                    opacity: activeIndex === item.id ? 1 : 0,
                    scale: activeIndex === item.id ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {activeIndex === item.id && (
                    <>
                      <div className="absolute inset-0 hidden flex-row justify-end pr-8 md:flex lg:flex">
                        <div className="m-5 w-6/12 p-5 uppercase tracking-wide">
                          {item.roleDescription}
                          <br />
                          <br />
                          <div className="mt-2 flex space-x-2">
                            {item.tools.map((tool, j) => (
                              <span key={j} className={styles.pill}>
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
            </div>
            <div className="relative z-10 h-full w-full max-w-xl">
              <ul
                className="relative m-0 overflow-hidden p-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: isHovered ? -scrollAmount : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {experienceList.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className="cursor-pointer px-12 py-6"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(0)}
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity: activeIndex === item.id ? 1 : 0.5,
                        x: activeIndex === item.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <p className="relative mb-2 text-sm uppercase tracking-wide">
                          <span className="absolute -left-8">{`0${item.id + 1}`}</span>{" "}
                          {item.timeline}
                        </p>
                        <p className="text-3xl font-bold">{item.roleTitle}</p>
                        <p className="text-2xl">{item.company}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
