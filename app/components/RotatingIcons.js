"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './RotatingIcons.module.css';
import gsap from 'gsap';

export default function RotatingIcons({ elements, centerSelector, radius, speed, iconClass, uniqueID }) {
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const angleStep = (2 * Math.PI) / elements.length;
  const rotateAnimationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCenterPosition = () => {
      const center = document.querySelector(centerSelector);
      if (center) {
        const rect = center.getBoundingClientRect();
        setCenterPos({
          x: rect.left + window.scrollX + rect.width / 2,
          y: rect.top + window.scrollY + rect.height / 2
        });
      }
    };

    updateCenterPosition();
    window.addEventListener('scroll', updateCenterPosition);
    window.addEventListener('resize', updateCenterPosition);

    rotateAnimationRef.current = gsap.to(`#${uniqueID}-container`, {
      rotation: 360,
      repeat: -1,
      duration: speed,
      ease: 'linear'
    });

    const handleMouseMove = (event) => {
      mousePos.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', updateCenterPosition);
      window.removeEventListener('resize', updateCenterPosition);
      window.removeEventListener('mousemove', handleMouseMove);
      rotateAnimationRef.current?.kill();
    };
  }, [centerSelector, uniqueID, speed, iconClass]);

  const clamp = (num, min, max) => {
    return Math.max(min, Math.min(num, max));
  }

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
  }

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
        position: 'absolute',
        top: `${centerPos.y}px`,
        left: `${centerPos.x}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        transform: 'translate(-50%, -50%)' // Centers the container
      }}
    >
      <div className={styles.container} id={`${uniqueID}-container`}>
        {elements.map((el, i) => {
          const angle = angleStep * i;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div key={i} className={`${styles.icon} ${styles[uniqueID]}-${iconClass}`} style={{
                position: 'absolute',
                left: `${radius + x}px`,
                top: `${radius + y}px`,
                transform: 'translate(-50%, -50%)' }} >
              <div className={styles.iconContent}>{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
