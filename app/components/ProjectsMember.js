"use client";

import styles from "./ProjectsMember.module.css";
import React from "react";
import Image from "next/image";

import { Silkscreen, Nunito } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });
const nunito = Nunito({ subsets: ["latin"], weight: '400' });

export default function ProjectsMember({ project, onClick }){
  let projectID = project.title.replace(/\s/g, "-").toLowerCase();
  // helps break point at . in title
  const formattedTitle = project.title.replace(/\./g, "\u200B.");

  // TODO: modal displays details on click
  return (
    <div id={projectID} className={styles.projectHolder} onClick={onClick}>
      <div className={styles.imageHolder}>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${project.thumbnailImageURL}`} alt={project.title} fill className={styles.projectImage} sizes="(max-width: 1250px) 250px, 20vw" />
      </div>
      <div className={styles.titleHolder}>
        <p className={`${styles.title}`}>{formattedTitle}</p>
      </div>
    </div>
  );
}