'use client';

import { useEffect, useState } from 'react';
import styles from './GalaxyBackground.module.css';

export default function GalaxyBackground() {
  const [starLayers, setStarLayers] = useState([]);

  useEffect(() => {
    const createStars = () => {
      let maxX = document.body.clientWidth;
      let maxY = document.body.clientHeight;
      let starsPerLayer = Math.floor(Math.random() * 25) + 50;
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {starLayers.map((layer, i) => (
        <div key={i} className={styles[`starsLayer${i + 1}`]}>
          {layer.map((star, j) => (
            <div
              key={j}
              className={styles.star}
              style={{ left: star.left, top: star.top }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
