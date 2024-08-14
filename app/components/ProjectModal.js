"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";
import Image from "next/image";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

export default function ProjectModal({ show, project, onClose }) {
  let formattedTitle = project.title.replace(/\./g, "\u200B.");
  let modalContentRef = useRef(null);

  // useEffect(() => {
  //   if (modalContentRef.current) {
  //     const marginOffset = window.innerHeight * 0.1; // 5vh in pixels
  //     modalContentRef.current.scrollTop = -marginOffset;
  //   }
  // }, [project]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  // whoa this HTML is complicated
  return (
    <div className={`${styles.modalBackdrop} ${show ? "" : styles.hidden}`} onClick={handleBackdropClick}>
      <button className={styles.modalClose} onClick={onClose}><img src="/icons/close-outline.svg" alt="Close" /></button>
      <div className={styles.modalContent} ref={modalContentRef}>
        <div className={styles.verticalSectionHolder}>
          <div className={`${styles.verticalSection} ${styles.imageAndStackHolder}`}>
            <div className={styles.modalImageHolder}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${project.thumbnailImageURL}`} alt={project.title} fill className={styles.projectImage} />
            </div>
            <div className={styles.techStackHolder}>
              {project.techStack.map((tech, index) => (
                <div key={index} className={styles.techStackMember}>
                  <p className={`${styles.techStackTitle} ${silkscreen.className}`}>{tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.verticalSection}>
            <p className={`${styles.projectTitle} ${silkscreen.className}`}>{formattedTitle}</p>
            <div className={styles.basicInfoHolder}>
              <div className={styles.basicInfo}>
                <img src="/icons/calendar-outline.svg" alt="Calendar" className={`${styles.icon} ${styles.invert}`} />
                <p className={styles.basicInfoText}>{project.dateCreated}</p>
              </div>
              <div className={styles.basicInfo}>
                <img src={project.statusIconURL} alt="Status:" className={`${styles.icon} ${project.statusIconInvert ? styles.invert : ""}`} />
                <p className={styles.basicInfoText}>{project.status}</p>
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <p className={`${styles.miniTitle} ${silkscreen.className}`}>Key Features</p>
            <ul className={styles.listHolder}>
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className={styles.listMember}>{feature}</li>
              ))}
            </ul>
            <p className={`${styles.miniTitle} ${silkscreen.className}`}>Potential Improvements</p>
            <ul className={styles.listHolder}>
              {project.improvements.map((improvement, index) => (
                <li key={index} className={styles.listMember}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className={`${styles.miniTitle} ${silkscreen.className}`}>Images</p>
        <div className={styles.imagesHolder}>
          {project.imageURLs.map((image, index) => (
            <div className={styles.individualImageHolder}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`} alt={`${project.title} Image ${index + 1}`} fill className={styles.individualImage} />
            </div>
          ))}
        </div>
        <div className={styles.linksHolder}>
          {project.externalLinks.sourceCode ? (
            <a href={project.externalLinks.sourceCode} target="_blank" rel="noreferrer" className={styles.link}>
              <img src="/icons/arrow-forward-outline.svg" alt="" className={`${styles.linkIcon}`} />
              <p className={`${styles.linkText} ${styles.initial} ${silkscreen.className}`}>Source Code</p>
              <p className={`${styles.linkText} ${styles.hidden} ${silkscreen.className}`}>Source Code</p>
            </a>
          ) : (<></>)}
          {project.externalLinks.liveDemo ? (
            <a href={project.externalLinks.liveDemo} target="_blank" rel="noreferrer" className={styles.link}>
              <img src="/icons/arrow-forward-outline.svg" alt="" className={`${styles.linkIcon}`} />
              <p className={`${styles.linkText} ${styles.initial} ${silkscreen.className}`}>Live Demo</p>
              <p className={`${styles.linkText} ${styles.hidden} ${silkscreen.className}`}>Live Demo</p>
            </a>
          ) : (<></>)}
          {project.externalLinks.download ? (
            <a href={project.externalLinks.download} target="_blank" rel="noreferrer" className={styles.link}>
              <img src="/icons/arrow-forward-outline.svg" alt="" className={`${styles.linkIcon}`} />
              <p className={`${styles.linkText} ${styles.initial} ${silkscreen.className}`}>Download</p>
              <p className={`${styles.linkText} ${styles.hidden} ${silkscreen.className}`}>Download</p>
            </a>
          ) : (<></>)}
        </div>
      </div>
    </div>
  );
}