'use client';

import { useEffect, useState } from 'react';
import styles from './GalaxyBackground.module.css';

export default function GalaxyBackground() {
  const [starLayers, setStarLayers] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      let starLayers = document.querySelectorAll(`.${styles.starsLayer1}, .${styles.starsLayer2}, .${styles.starsLayer3}`);
      let scrollY = window.scrollY;
      starLayers.forEach((layer, i) => {
        layer.style.transform = `translateY(${scrollY * (i + 1) * -0.1}px)`;
      });
    };

    const createStars = () => {
      let maxX = document.body.clientWidth;
      let maxY = document.body.clientHeight + window.innerHeight * 3;
      let starsPerLayer = Math.floor(Math.random() * 40) + 75;
      let layerAmount = 3;

      const newStarLayers = [];

      for (let i = 0; i < layerAmount; i++) {
        let stars = [];
        for (let j = 0; j < starsPerLayer; j++) {
          stars.push({
            left: Math.floor(Math.random() * maxX) + 'px',
            top: Math.floor(Math.random() * maxY) + 'px'
          });
        }
        newStarLayers.push(stars);
      }

      setStarLayers(newStarLayers);
    };

    const handleResize = createStars;

    createStars();

    // window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      // window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {starLayers.map((layer, i) => (
        <div key={i} className={styles[`starsLayer${i + 1}`]} 
        style={{height: document.body.clientHeight, width: document.body.clientWidth}}
        >
          {layer.map((star, j) => {
            let starSize = Math.random() * i + 2;
            return (<div
              key={j}
              className={styles.star}
              style={{ left: star.left, top: star.top, width: `${starSize}px`, height: `${starSize}px` }}
            />);
          })}
        </div>
      ))}
    </div>
  );
}
