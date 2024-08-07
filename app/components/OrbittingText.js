"use client";

import styles from "./OrbittingText.module.css";
import { Silkscreen } from "next/font/google";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from 'react';

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

export default function OrbittingText({ iconURL, textToRotate, rotateSpeed, elementID }) {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [textStyles, setTextStyles] = useState({});
  const [textPosition, setTextPosition] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current && textRef.current) {
        const imgWidth = imgRef.current.clientWidth;
        const imgHeight = imgRef.current.clientHeight;
        const radius = imgWidth / 2;
        const zMargin = radius * 0.25;
        const idealTranslateZ = radius + zMargin;

        // Update text styles
        const newTextStyles = [...textToRotate].map((text, index) => ({
          transform: `rotateY(${index * 360 / textToRotate.length}deg) translateZ(${idealTranslateZ}px) translateY(-50%)`
        }));

        setTextStyles(newTextStyles);

        // Calculate position to center rotatingText around the image
        const textWidth = textRef.current.offsetWidth;
        const textHeight = textRef.current.offsetHeight;
        const centerX = (imgWidth - textWidth) / 2;
        const centerY = (imgHeight - textHeight) / 2;

        setTextPosition({
          left: centerX,
          top: centerY
        });
      }
    };

    // Initial calculation
    handleResize();

    // Attach ResizeObserver to handle window resize or image size changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (imgRef.current) {
      resizeObserver.observe(imgRef.current);
    }

    return () => {
      // Cleanup observer on component unmount
      resizeObserver.disconnect();
    };
  }, [textToRotate, elementID]);

  useEffect(() => {
    const rotationAnimation = gsap.to(`#${elementID}-holder`, {
      duration: rotateSpeed,
      rotationY: -360,
      repeat: -1,
      ease: "none"
    });
    gsap.set(`#${elementID}-holder`, {
      rotateX: 7
    });
  }, [rotateSpeed, elementID]);

  return (
    <div className={styles.orbitParent} id={elementID}>
      <img src={iconURL} id={`${elementID}-image`} className={styles.orbitImage} alt="Icon" ref={imgRef} />
      <div
        className={styles.rotatingText}
        id={`${elementID}-holder`}
        ref={textRef}
        style={{
          position: 'absolute',
          left: `${textPosition.left}px`,
          top: `${textPosition.top}px`,
          transformOrigin: 'center center'
        }}
      >
        {[...textToRotate].map((text, index) => (
          <span
            key={`${elementID}-${index}`}
            className={`${styles.rotatingLetter} ${silkscreen.className}`}
            style={textStyles[index] || {}}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
