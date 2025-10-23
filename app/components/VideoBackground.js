'use client'; 
import { useEffect, useRef, useState } from 'react';

export default function VideoBackground({ webmLink, hevcLink, fallbackImage }) {
  const videoRef = useRef(null);
  const [videoSource, setVideoSource] = useState(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Detect browser engine
    const detectBrowser = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isChromium = /chrome|chromium|edg/.test(ua) && !/firefox/.test(ua);
      const isFirefox = /firefox/.test(ua);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      // Check video format support
      const video = document.createElement('video');
      const canPlayWebM = video.canPlayType('video/webm; codecs="vp9"') !== '';
      const canPlayHEVC = video.canPlayType('video/mp4; codecs="hvc1"') !== '';

      if ((isChromium || isFirefox) && canPlayWebM && webmLink) {
        return { type: 'webm', src: webmLink };
      } else if (isSafari && canPlayHEVC && hevcLink) {
        return { type: 'hevc', src: hevcLink };
      } else {
        // Fallback to PNG if no video format is supported
        setUseFallback(true);
        return null;
      }
    };

    const source = detectBrowser();
    setVideoSource(source);
  }, [webmLink, hevcLink]);

  useEffect(() => {
    // Ensure autoplay works (some browsers require this)
    if (videoRef.current && !useFallback) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // If autoplay fails, fallback to image
        setUseFallback(true);
      });
    }
  }, [videoSource, useFallback]);

  // Render fallback image if video not supported
  if (useFallback && fallbackImage) {
    return (
      <img
        src={fallbackImage}
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
    );
  }

  // Render video if supported
  if (!videoSource) {
    return null; // Or a loading state
  }

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
        pointerEvents: 'none',
      }}
      preload="auto"
    >
      <source src={videoSource.src} type={videoSource.type === 'webm' ? 'video/webm' : 'video/mp4; codecs="hvc1"'} />
      Your browser does not support the video tag.
    </video>
  );
}