"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedParagraph.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedParagraph({ children, extraClassName }) {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%", // Adjust as needed
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
    <p ref={paragraphRef} className={`${styles.animatedParagraph} ${extraClassName || ""}`}>
      {children}
    </p>
  );
}
