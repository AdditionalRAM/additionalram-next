import React from "react";
import styles from "./StackMember.module.css";

import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

export default function StackMember({ title, description, learntAt, memberID, mainColor }) {
  return (
    <div className={styles.container} style={{ "--main-color": mainColor }} id={`${memberID}-container`}>
      <div className={styles.flexContainer} id={`${memberID}-flex`}>
        <div className={styles.iconHolder} id={`${memberID}-icon`}>
        </div>
        <p className={`${silkscreen.className} ${styles.title}`} id={`${memberID}-title`}>{title}</p>
        <div className={styles.learntAtIconHolder} id={`${memberID}-learntat-icon-holder`}>
          <a href={learntAt.url} target="_blank" rel="noreferrer">
            <img src={learntAt.iconURL} alt={learntAt.name} id={`${memberID}-learntat-icon`} className={learntAt.invertLogo ? styles.invert : ""} />
          </a>
        </div>
      </div>
      <p className={styles.description} id={`${memberID}-description`}>{description}</p>
    </div>
  );
}