"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./Header.module.css";
import { Nunito, Silkscreen } from "next/font/google";
import ThreeCRT from "./ThreeCRT";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [crtSize, setCrtSize] = useState(8);

  useEffect(() => {
    const handleScroll = () => {
      let desiredScrollHeight = window.innerHeight * 0.8;
      if (window.scrollY >= desiredScrollHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        gsap.to(window, {
          scrollTo: {
            y: targetElement.offsetTop - headerHeight,
            offsetY: headerHeight * 1.3,
          },
          duration: 0.4,
          ease: "power2.out", // easing
        });
      }
    };

    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      let newCrtSize = screenWidth < 800 ? 16 : 8;
      setCrtSize(newCrtSize);

      console.log("Resized da crt to", newCrtSize, crtSize, "for a screen the width of", screenWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hide : ""}`} id="header">
      <nav className={styles.nav}>
        <a href="#hero" className={styles.crtHolder} id="header-crt-holder">
          <ThreeCRT elementID="header-crt" obeyParentContainer={true} crtSize={crtSize} />
        </a>
        <a href="#about" className={`${silkscreen.className} ${styles.navLink}`}>
          About
        </a>
        <a href="#web-development" className={`${silkscreen.className} ${styles.navLink}`}>
          Web
        </a>
        <a href="#game-development" className={`${silkscreen.className} ${styles.navLink}`}>
          Game
        </a>
        <a href="#imprint" className={`${silkscreen.className} ${styles.navLink}`}>
          Imprint
        </a>
      </nav>
    </header>
  );
}
