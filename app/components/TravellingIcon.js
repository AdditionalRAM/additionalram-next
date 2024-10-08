"use client";

import styles from "./TravellingIcon.module.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export default function TravellingIcon({
  iconURL,
  iconID,
  shouldInvert,
  travelFromID,
  travelToID,
  travelDuration,
  imgAlt,
}) {
  const iconRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const iconElement = iconRef.current;
    const fromElement = document.getElementById(travelFromID);
    const toElement = document.getElementById(travelToID);

    if (!iconElement || !fromElement || !toElement) return;

    // animate to target parent
    const moveToParent = (targetParent) => {
      if (targetParent.contains(iconElement)) return;

      // Get current position before moving the element
      const fromRect = iconElement.getBoundingClientRect();
      targetParent.appendChild(iconElement);
      const toRect = iconElement.getBoundingClientRect();

      const deltaX = fromRect.left - toRect.left;
      const deltaY = fromRect.top - toRect.top;

      // Kill any ongoing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Set the initial position and animate to the final position
      gsap.set(iconElement, { x: deltaX, y: deltaY });

      animationRef.current = gsap.to(iconElement, {
        x: 0,
        y: 0,
        duration: travelDuration || 0.5,
        ease: CustomEase.create("customEase", "0.175, 0.885, 0.32, 1.0"),
      });
    };

    // watches for scroll stuff
    ScrollTrigger.create({
      trigger: toElement,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => moveToParent(toElement),
      onLeaveBack: () => moveToParent(fromElement),
      invalidateOnRefresh: true,
    });

    moveToParent(fromElement);

    // cleanup on unmount
    return () => {
      ScrollTrigger.killAll();
      if (animationRef.current) {
        animationRef.current.kill();
      }
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
