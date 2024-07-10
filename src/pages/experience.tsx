import React, { useState } from "react";
import styles from "@/styles/Experience.module.css";
import ExperienceModal from "@/components/ExperienceModal";

const experienceList = [
  {
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
    src: "/vail1.png",
    color: "#000000",
  },
  {
    timeline: "August 2021 - July 2022",
    roleTitle: "Frontend Engineer",
    company: "Vail Resorts",
    roleDescription:
      "Crafted and maintained customer-facing eCommerce applications, spearheaded operations, enhanced analytics, collaborated cross-functionally, ensured code quality, and managed project source code and CI/CD tools.",
    tools: ["JavaScript", "React", "C#", "ASP.Net", "HTML", "LESS", "CSS"],
    src: "/vail2.png",
    color: "#8C8C8C",
  },
  {
    timeline: "March 2020 - July 2021",
    roleTitle: "Software Engineer",
    company: "Vistar PFG Company",
    roleDescription:
      "Responsible for the full-stack development and maintenance of an ecommerce site, implement new features, and streamline processes, including REST API development for seamless integration with internal systems and customizable theme options for efficient content and design updates.",
    tools: ["PHP", "MySQL", "Magento", "JavaScript", "HTML", "CSS", "jQuery"],
    src: "/vistar.png",
    color: "#EFE8D3",
  },
  {
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
    src: "/healthdatacompass.png",
    color: "#706D63",
  },
  {
    timeline: "May 2017 – October 2017",
    roleTitle: "Software Developer Intern",
    company: "Rogue Wave Software",
    roleDescription:
      "I improved web app code for OSS audit system, thoroughly testing functionality and efficiency. Additionally, I developed a Ruby on Rails program to export CVEs files to Excel.",
    tools: ["JavaScript", "HTML", "CSS", "Ruby on Rails"],
    src: "/roguewave.png",
    color: "#3f10cb",
  },
];

const ExperienceItem: React.FC<{
  index: number;
  title: string;
  company: string;
  timeline: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}> = ({ index, title, company, timeline, setModal }) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className={styles.experience}
    >
      <div className="w-full items-center xl:grid xl:grid-cols-12 xl:gap-x-24">
        <h2 className="relative col-span-10 overflow-hidden text-3xl md:col-span-6">
          {company}
        </h2>
        <p className="col-span-4 hidden md:block"> {title}</p>
        <p className="relative col-span-2 hidden text-right md:block">
          {timeline}
        </p>
      </div>
    </div>
  );
};
const Experience: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section id="experience" data-scroll-section className="container">
      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="horizontal"
        className="my-24 flex flex-col justify-start space-y-10"
      >
        <div className="grid items-center gap-1.5">
          <div className="flex flex-col py-6 xl:p-6">
            <h2 className="Inter text-4xl font-black uppercase md:text-7xl">
              Experience<span className="text-gradient">.</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            {experienceList.map((experience, index) => (
              <ExperienceItem
                key={index}
                index={index}
                title={experience.roleTitle}
                company={experience.company}
                timeline={experience.timeline}
                setModal={setModal}
              />
            ))}
          </div>
          <ExperienceModal modal={modal} experienceList={experienceList} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
