'use client'; 
import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure autoplay works (some browsers require this)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none', // Prevents interaction
      }}
      // Preload strategy
      preload="auto"
    >
      <source src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_clip_placeholder.webm`} type="video/webm" />
      <source src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_clip_placeholder.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}