import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/ExperienceModal.module.css";
import gsap from "gsap";

type ExperienceList = {
  src: string;
  color: string;
};

type ModalState = {
  active: boolean;
  index: number;
};

type ExperienceModalProps = {
  modal: ModalState;
  experienceList: ExperienceList[];
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  modal,
  experienceList,
}) => {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalContainer.current) return;

    // Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (modalContainer.current) {
        const rect = modalContainer.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        xMoveContainer(x);
        yMoveContainer(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [modal]);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.modalContainer}
    >
      <div style={{ top: `${index * -100}%` }} className={styles.modalSlider}>
        {experienceList.map((experience, idx) => {
          const { src, color } = experience;
          return (
            <div
              className={styles.modal}
              style={{ backgroundColor: color }}
              key={`modal_${idx}`}
            >
              <Image src={src} width={300} height={0} alt="image" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceModal;
