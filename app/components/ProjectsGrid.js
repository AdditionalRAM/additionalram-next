"use client";

import styles from "./ProjectsGrid.module.css";
import React from "react";
import ProjectsMember from "./ProjectsMember";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid({ projects, elementID }) {
  // const [showModal, setShowModal] = React.useState(false);

  const onProjectClick = (project) => {
    console.log("Clicked on", project.title);
  }

  const onClose = () => {
    console.log("Closed modal");
  }

  return (
    <>
    <div id={elementID} className={styles.projectsGrid}> 
      {projects.map((project) => {
        return <ProjectsMember project={project} onClick={() => onProjectClick(project)} />
      })}
    </div>
    <ProjectModal show={true} project={projects[0]} onClose={onClose} />
    </>
  );
}