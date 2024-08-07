"use client";

import React, { useEffect, useState } from 'react';
import styles from './RotatingIcons.module.css';
import gsap from 'gsap';

export default function RotatingIcons({ elements, centerSelector, radius, speed }) {
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const angleStep = (2 * Math.PI) / elements.length;
  const rotateAnimationRef = React.useRef(null);

  useEffect(() => {
    const updateCenterPosition = () => {
      const center = document.querySelector(centerSelector);
      const rect = center.getBoundingClientRect();
      setCenterPos({
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.top + window.scrollY + rect.height / 2
      });
    };

    updateCenterPosition();
    window.addEventListener('scroll', updateCenterPosition);
    window.addEventListener('resize', updateCenterPosition);

    rotateAnimationRef.current = gsap.to(`.${styles.centerer}`, {
      rotation: 360,
      repeat: -1,
      duration: speed,
      ease: 'linear'
    });

    return () => {
      window.removeEventListener('scroll', updateCenterPosition);
      window.removeEventListener('resize', updateCenterPosition);
      rotateAnimationRef.current.kill();
    };
  }, [centerSelector]);

  const update = () => {
    let parentRotation = rotateAnimationRef.current.progress() * 360;
    let icons = document.querySelectorAll(`.${styles.icon}`);
    icons.forEach((icon, i) => {
      icon.style.transform = `translate(-50%, -50%) rotate(${-parentRotation}deg)`;
    });
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);

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
      <div className={styles.container}>
        {elements.map((el, i) => {
          const angle = angleStep * i;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div key={i} className={styles.icon} style={{
                position: 'absolute',
                left: `${radius + x}px`,
                top: `${radius + y}px`,
                transform: 'translate(-50%, -50%)' }} >
              <div className={styles.iconContent}
              >{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}