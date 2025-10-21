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
  const [crtSize, setCrtSize] = useState(7);

  useEffect(() => {
    const handleScroll = () => {
      let desiredScrollHeight = window.innerHeight * 0.05;
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
      const href = event.currentTarget.getAttribute("href");
      const url = new URL(href, window.location.origin);
      const targetId = url.hash;
      const targetPath = url.pathname;
      const currentPath = window.location.pathname;

      // If navigating to a different page, let the browser handle it
      if (targetPath !== currentPath) {
        return; // Don't prevent default, allow normal navigation
      }

      // Same page, smooth scroll to target
      if (targetId) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          gsap.to(window, {
            scrollTo: {
              y: targetElement.offsetTop - headerHeight,
              offsetY: headerHeight * 1.3,
            },
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      }
    };

    const links = document.querySelectorAll("nav a, #header-main-link");
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Handle hash on page load (for direct navigation or page refresh)
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          gsap.to(window, {
            scrollTo: {
              y: targetElement.offsetTop - headerHeight,
              offsetY: headerHeight * 1.3,
            },
            duration: 0.4,
            ease: "power2.inOut",
          });
        }, 100);
      }
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        const screenWidth = window.innerWidth;

        let newCrtSize = screenWidth < 800 ? 16 : 7;
        setCrtSize(newCrtSize);
      },300);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hide : ""}`} id="header">
      <a href="/#hero" className={`${styles.mainLink}`} id="header-main-link">
        <div className={styles.crtHolder}>
          <ThreeCRT elementID="header-crt" obeyParentContainer={true} crtSize={crtSize} />
        </div>
        <span className={`${silkscreen.className}`}>AdditionalRAM</span>
      </a>
      <nav className={styles.nav}>
        <a href="/emberruin" className={`${silkscreen.className} ${styles.navLink}`}>
          EMBER RUIN
        </a>
        <a href="/#about" className={`${silkscreen.className} ${styles.navLink}`}>
          About
        </a>
        <a href="/#game-development" className={`${silkscreen.className} ${styles.navLink}`}>
          Gamedev
        </a>
        <a href="/#web-development" className={`${silkscreen.className} ${styles.navLink}`}>
          Webdev
        </a>
        <a href="/#imprint" className={`${silkscreen.className} ${styles.navLink}`}>
          Imprint
        </a>
      </nav>
    </header>
  );
}
