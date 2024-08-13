import styles from "./ProjectsGrid.module.css";
import React from "react";
import ProjectsMember from "./ProjectsMember";

export default function ProjectsGrid({ projects, elementID }) {
  return (
    <div id={elementID} className={styles.projectsGrid}> 
      {projects.map((project) => {
        return <ProjectsMember project={project} />
      })}
    </div>
  );
}