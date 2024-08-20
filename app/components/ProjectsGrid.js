"use client";

import styles from "./ProjectsGrid.module.css";
import React, { useEffect, useRef } from "react";
import ProjectsMember from "./ProjectsMember";
import ProjectModal from "./ProjectModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid({ projects, elementID }) {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  const gridRef = useRef(null);

  const onProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  }

  const onClose = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%", 
            end: "bottom top",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id={elementID} ref={gridRef} className={styles.projectsGrid}>
        {projects.map((project, index) => {
          return <ProjectsMember key={index} project={project} onClick={() => onProjectClick(project)} />;
        })}
      </div>
      <ProjectModal show={showModal} project={selectedProject} onClose={onClose} />
    </>
  );
}
