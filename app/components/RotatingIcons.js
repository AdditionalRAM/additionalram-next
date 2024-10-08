"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './RotatingIcons.module.css';
import gsap from 'gsap';

export default function RotatingIcons({ elements, centerSelector, radiusVW, smallScreenRadiusVW, speed, iconClass, uniqueID }) {
  const [radiusPx, setRadiusPx] = useState(0);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 }); // Keeping centerPos for future use
  const angleStep = (2 * Math.PI) / elements.length;
  const rotateAnimationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateRadiusPx = () => {
      let screenWidth = window.innerWidth;
      let wantedRadiusVW = screenWidth < 790 ? smallScreenRadiusVW : radiusVW;
      const vw = window.innerWidth / 100;
      setRadiusPx(wantedRadiusVW * vw);
    };

    const updateCenterPosition = () => {
      const center = document.querySelector(centerSelector);
      if (center) {
        const rect = center.getBoundingClientRect();
        setCenterPos({
          x: rect.left + window.scrollX + rect.width / 2,
          y: rect.top + window.scrollY + rect.height / 2,
        });
      }
    };

    updateRadiusPx();
    updateCenterPosition(); // Ensure centerPos is updated
    window.addEventListener('resize', () => {
      updateRadiusPx();
      updateCenterPosition();
    });

    rotateAnimationRef.current = gsap.to(`#${uniqueID}-container`, {
      rotation: 360,
      repeat: -1,
      duration: speed,
      ease: 'linear',
    });

    const handleMouseMove = (event) => {
      mousePos.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateCenterPosition);
      window.removeEventListener('mousemove', handleMouseMove);
      rotateAnimationRef.current?.kill();
    };
  }, [centerSelector, radiusVW, uniqueID, speed, iconClass]);

  const clamp = (num, min, max) => {
    return Math.max(min, Math.min(num, max));
  };

  const findSmallestDistance = () => {
    let smallestDistance = Infinity;
    let icons = document.querySelectorAll(`.${styles[uniqueID]}-${iconClass}`);
    icons.forEach((icon) => {
      let rect = icon.getBoundingClientRect();
      let x = rect.left + rect.width / 2;
      let y = rect.top + rect.height / 2;
      let distanceFromMouse = Math.sqrt((x - mousePos.current.x) ** 2 + (y - mousePos.current.y) ** 2);
      if (distanceFromMouse < smallestDistance) {
        smallestDistance = distanceFromMouse;
      }
    });
    return smallestDistance;
  };

  const update = () => {
    if (!rotateAnimationRef.current) return;
    let parentRotation = rotateAnimationRef.current.progress() * 360;
    let icons = document.querySelectorAll(`.${styles[uniqueID]}-${iconClass}`);
    icons.forEach((icon) => {
      icon.style.transform = `translate(-50%, -50%) rotate(${-parentRotation}deg)`;
    });
    let smallestDistance = findSmallestDistance();
    let timeScale = clamp((smallestDistance - 30) / 70, 0, 1);
    rotateAnimationRef.current.timeScale(timeScale);
    requestAnimationFrame(update);
  };

  useEffect(() => {
    requestAnimationFrame(update);
  }, []);

  return (
    <div
      className={styles.centerer}
      style={{
        top: `${centerPos.y}px`, // Tracking centerPos without using it for positioning
      }}
    >
      <div className={styles.container} id={`${uniqueID}-container`}>
        {elements.map((el, i) => {
          const angle = angleStep * i;
          const x = radiusPx * Math.cos(angle);
          const y = radiusPx * Math.sin(angle);

          return (
            <div
              key={i}
              className={`${styles.icon} ${styles[uniqueID]}-${iconClass}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={styles.iconContent}>{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
