"use client";

import styles from "./Header.module.css";
import { Nunito, Silkscreen } from "next/font/google";
import React, { useState, useEffect } from "react";
import ThreeCRT from "./ThreeCRT";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hide : ""}`} id="header">
      <nav className={styles.nav}>
        <a href="#hero" className={styles.crtHolder} id="header-crt-holder">
          <ThreeCRT elementID="header-crt" obeyParentContainer={true} crtSize={5} />
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
