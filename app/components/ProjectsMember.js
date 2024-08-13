import styles from "./ProjectsMember.module.css";
import React from "react";
import Image from "next/image";

import { Silkscreen, Nunito } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });
const nunito = Nunito({ subsets: ["latin"], weight: '400' });

export default function ProjectsMember({ project }){
  let projectID = project.title.replace(/\s/g, "-").toLowerCase();
  // helps break point at . in title
  const formattedTitle = project.title.replace(/\./g, "\u200B.");


  return (
    <div id={projectID} className={styles.projectHolder}>
      <div className={styles.imageHolder}>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${project.thumbnailImageURL}`} alt={project.title} fill className={styles.projectImage} />
      </div>
      <div className={styles.titleHolder}>
        <p className={styles.title}>{formattedTitle}</p>
      </div>
    </div>
  );
}