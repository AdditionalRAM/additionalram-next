"use client";

import styles from "./TravellingIcon.module.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TravellingIcon({ iconURL, iconID, shouldInvert, travelFromID, travelToID, travelDuration, imgAlt, }) {
  const iconRef = useRef(null);

  useEffect(() => {
    const iconElement = iconRef.current;
    const fromElement = document.getElementById(travelFromID);
    const toElement = document.getElementById(travelToID);

    if (!iconElement || !fromElement || !toElement) return;

    const moveToParent = (targetParent) => {
      if (targetParent.contains(iconElement)) return;

      targetParent.appendChild(iconElement);

      // animation
      gsap.fromTo(
        iconElement,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: travelDuration || 0.5 }
      );
    };

    ScrollTrigger.create({
      trigger: toElement,
      start: "top bottom",
      end: "center center",
      onEnter: () => moveToParent(toElement),
      onLeaveBack: () => moveToParent(fromElement),
      invalidateOnRefresh: true,
    });

    moveToParent(fromElement);

    // cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, [iconID, travelFromID, travelToID, travelDuration]);

  return (
    <img
      id={iconID}
      src={iconURL}
      alt={imgAlt != null ? imgAlt : "travelling icon"}
      className={`${styles.icon} ${shouldInvert ? styles.invert : ""}`}
      ref={iconRef}
    />
  );
}
