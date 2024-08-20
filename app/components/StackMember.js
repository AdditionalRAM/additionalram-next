"use client";

import React, { useEffect, useRef } from "react";
import styles from "./StackMember.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Silkscreen } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

export default function StackMember({ title, description, learntAt, memberID, mainColor }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%", // Adjust as needed
            end: "bottom top",
            scrub: false, // Disable scrub for simple entry animation
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ "--main-color": mainColor }}
      id={`${memberID}-container`}
    >
      <div className={styles.flexContainer} id={`${memberID}-flex`}>
        <div className={styles.iconHolder} id={`${memberID}-icon`}>
        </div>
        <p className={`${silkscreen.className} ${styles.title}`} id={`${memberID}-title`}>
          {title}
        </p>
        <div className={styles.learntAtIconHolder} id={`${memberID}-learntat-icon-holder`}>
          <a href={learntAt.url} target="_blank" rel="noreferrer">
            <img
              src={learntAt.iconURL}
              alt={learntAt.name}
              id={`${memberID}-learntat-icon`}
              className={learntAt.invertLogo ? styles.invert : ""}
            />
          </a>
        </div>
      </div>
      <p className={styles.description} id={`${memberID}-description`}>
        {description}
      </p>
      <div className={styles.learntAtDivider} id={`${memberID}-learntat-divider`}>
        <p className={styles.learntAtPrefix} id={`${memberID}-learntat-prefix`}>
          {`${learntAt.prefix} ${learntAt.name}:`}
        </p>
      </div>
    </div>
  );
}
