"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GlitchyText.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function GlitchyText({ text, fontClassName, extraClassName }) {
  const [displayText, setDisplayText] = useState(text);
  const textRef = useRef(null);

  useEffect(() => {
    let isMounted = true;  // To prevent state updates if component unmounts
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&?";

    const randomify = (string, amount) => {
      let newString = "";
      let amtFromBeginning = string.length - amount;
      for (let i = 0; i < string.length; i++) {
        if (i < amtFromBeginning) newString += string[i];
        else if (string[i] === ' ') newString += ' ';
        else {
          newString += possibleChars[Math.floor(Math.random() * possibleChars.length)];
        }
      }
      return newString;
    };

    const slowlyRandomize = async () => {
      for (let i = text.length; i >= 0; i--) {
        await new Promise(r => setTimeout(r, 40));
        if (isMounted) {
          setDisplayText(randomify(text, i));
        }
      }
    };

    // setup ScrollTrigger
    const triggerAnimation = () => {
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top bottom", 
        end: "bottom top",  
        onEnter: () => {
          slowlyRandomize();
        },
        onLeaveBack: () => {
          slowlyRandomize();
        },
        onEnterBack: () => {
          slowlyRandomize();
        },
        onLeave: () => {
          setDisplayText(text); // Reset to original text when scrolling away
        },
        once: false,  // Allow multiple triggers
      });
    };

    if (textRef.current) {
      triggerAnimation();
    }

    return () => {
      isMounted = false;  // Cleanup to avoid memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up GSAP triggers
    };
  }, [text]);

  return (
    <p ref={textRef} className={`${extraClassName || ""} ${fontClassName} ${styles.glitchyText}`}>
      {displayText}
    </p>
  );
}
