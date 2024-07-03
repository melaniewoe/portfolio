// hooks/useSectionInView.ts
import { useEffect, useState } from "react";

const useSectionInView = (sectionIds: string[]) => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);
        setVisibleSections(visible);
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);

  return visibleSections;
};

export default useSectionInView;
