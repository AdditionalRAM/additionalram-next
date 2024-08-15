"use client";

import styles from "./ProjectsGrid.module.css";
import React from "react";
import ProjectsMember from "./ProjectsMember";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid({ projects, elementID }) {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  const onProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  }

  const onClose = () => {
    setShowModal(false);
  }

  return (
    <>
    <div id={elementID} className={styles.projectsGrid}> 
      {projects.map((project, index) => {
        return <ProjectsMember key={index} project={project} onClick={() => onProjectClick(project)} />
      })}
    </div>
    <ProjectModal show={showModal} project={selectedProject} onClose={onClose} />
    </>
  );
}