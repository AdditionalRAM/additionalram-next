import Image from "next/image";
import styles from "./page.module.css";
import ThreeCRT from "./components/ThreeCRT";
import RotatingIcons from "./components/RotatingIcons";
import OrbittingText from "./components/OrbittingText";
import AccessibleHeading from "./components/AccessibleHeading";

import { Silkscreen } from "next/font/google";
import TechStack from "./components/TechStack";
import TravellingIcon from "./components/TravellingIcon";
import ProjectsMember from "./components/ProjectsMember";
import ProjectsGrid from "./components/ProjectsGrid";
import GlitchyText from "./components/GlitchyText";
import AnimatedParagraph from "./components/AnimatedParagraph";
import ThreeLoadManager from "./components/ThreeLoadManager";
import GalaxyBackground from "./components/GalaxyBackground";

import externalLinks from "../public/json/external-links.json";
import webStack from "../public/json/web-stack.json";
import webProjects from "../public/json/web-projects.json";
import gameStack from "../public/json/game-stack.json";
import gameProjects from "../public/json/game-projects.json";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });


export default async function Home() {

  const smIcons = externalLinks.map((link) => (
    <a href={link.link} key={link.name} className={styles.socialLink} target="_blank">
      <img alt={link.name} src={link.iconURL} className={link.invert ? styles.invert : ""}/>
    </a>
  ));

  const webStackIcons = webStack.map((data, index) => (
    <div id={`${data.title}-${index}-holder`} className={styles.socialLink} key={index}>
      <TravellingIcon key={data.title} iconURL={data.imageURL} iconID={`${data.title}-icon`} shouldInvert={data.invertLogo} travelFromID={`${data.title}-${index}-holder`} travelToID={`${data.title}-stack-member-icon`} travelDuration={0.7} imgAlt={data.title} />
    </div>
  ));

  const gameStackIcons = gameStack.map((data, index) => (
    <div id={`${data.title}-${index}-holder`} className={styles.socialLink} key={index}>
      <TravellingIcon key={data.title} iconURL={data.imageURL} iconID={`${data.title}-icon`} shouldInvert={data.invertLogo} travelFromID={`${data.title}-${index}-holder`} travelToID={`${data.title}-stack-member-icon`} travelDuration={0.7} imgAlt={data.title} />
    </div>
  ));

  return (
    <main>
      <GalaxyBackground />
      <AccessibleHeading text="AdditionalRAM's Portfolio" level={1} />
      <section id="hero" className={styles.hero}>
        <ThreeLoadManager elementID={"threecrt"} obeyParentContainer={false} />
        <RotatingIcons elements={smIcons} centerSelector="#threecrt" radiusVW={16} smallScreenRadiusVW={35} speed={10} iconClass="socialMediaIcons" uniqueID="herosm" />
        <AccessibleHeading text="AdditionalRAM" level={1} />
        <GlitchyText text="AdditionalRAM" fontClassName={silkscreen.className} />
        <GlitchyText text="Web and Game Developer" fontClassName={silkscreen.className} extraClassName={styles.bottomTitle} />
      </section>
      <section id="about">
        <AccessibleHeading text="About Me" level={2} />
        <GlitchyText text="About Me" fontClassName={silkscreen.className} extraClassName={styles.heading} />
        <div className={styles.paragraphHolder}>
          <AnimatedParagraph>Hey there! I&apos;m Taha.</AnimatedParagraph>
          <AnimatedParagraph>I&apos;m a self-taught web and game developer based in Berlin, Germany.</AnimatedParagraph>
          <AnimatedParagraph>I&apos;ve been actively learning by myself since 2018, but my love for programming started all the way back in primary school.</AnimatedParagraph>
          <AnimatedParagraph>In February 2023, I had the incredible opportunity to intern for two weeks at <a className={styles.paragraphLink} href="https://foodforthoughtmedia.com/" target="_blank">Food for Thought Media</a> & <a className={styles.paragraphLink} href="https://madaboutpandas.de/" target="_blank">Mad About Pandas</a>.</AnimatedParagraph>
          <AnimatedParagraph>During this internship, I was able to demonstrate my skills in game development with state machines in Unity and C# and learn a lot about the game design process.</AnimatedParagraph>
          <AnimatedParagraph>It was also there that I discovered my passion for web development after working on a web-based game.</AnimatedParagraph>
          <AnimatedParagraph>This internship is not the only thing I&apos;ve been doing.</AnimatedParagraph>
          <AnimatedParagraph>Scroll down to see what technologies I&apos;ve learned by myself and the projects I&apos;ve put them to use in!</AnimatedParagraph>
          <AnimatedParagraph>Contact me at:</AnimatedParagraph>
        </div>
        <div className={styles.smLinksHolder}>
          {smIcons}
        </div>
      </section>
      <section id="web-development">
        <OrbittingText iconURL="/icons/globe.svg" textToRotate="WEB-DEVELOPMENT-" rotateSpeed={10} elementID="web-development-orbit" />
        <RotatingIcons elements={webStackIcons} centerSelector="#web-development-orbit" radiusVW={20} smallScreenRadiusVW={40}  speed={10} iconClass="webDevOrbit" uniqueID="webdev" />
        <AccessibleHeading text="Web Development" level={1} />
        <AccessibleHeading text="My Skills" level={2} />
        <GlitchyText text="My Skills" fontClassName={silkscreen.className} extraClassName={styles.heading} />
        <TechStack dataset={webStack} />
        <AccessibleHeading text="My Projects" level={2} />
        <GlitchyText text="My Projects" fontClassName={silkscreen.className} extraClassName={styles.heading} />
        <ProjectsGrid projects={webProjects} elementID="web-projects-grid" />
      </section>
      <section id="game-development" className={styles.spaceTop}>
        <OrbittingText iconURL="/icons/game-controller.svg" textToRotate="GAME-DEVELOPMENT-" rotateSpeed={10} elementID="game-development-orbit" />
        <AccessibleHeading text="Game Development" level={1} />
        <RotatingIcons elements={gameStackIcons} centerSelector="#game-development-orbit" radiusVW={20} smallScreenRadiusVW={40} speed={10} iconClass="gameDevOrbit" uniqueID="gamedev" />
        <AccessibleHeading text="My Skills" level={2} />
        <GlitchyText text="My Skills" fontClassName={silkscreen.className} extraClassName={styles.heading} />
        <TechStack dataset={gameStack} />
        <AccessibleHeading text="My Projects" level={2} />
        <GlitchyText text="My Projects" fontClassName={silkscreen.className} extraClassName={styles.heading} />
        <ProjectsGrid projects={gameProjects} elementID="game-projects-grid" />
      </section>
      <section id="imprint" className={styles.spaceTop}>
        <AccessibleHeading text="Impressum" level={1} />
        <GlitchyText text="IMPRESSUM AND LEGAL STUFF" fontClassName={silkscreen.className} />
        <div className={styles.paragraphHolder}>
          <AnimatedParagraph>Website made by Ekrem Taha SENER</AnimatedParagraph>
          <AnimatedParagraph>This website is a personal portfolio and is not intended for commercial purposes.</AnimatedParagraph>
          <AnimatedParagraph>The content of this website reflects the personal work and opinions of Ekrem Taha SENER and is maintained by:</AnimatedParagraph>
          <AnimatedParagraph>Sener Engineering GmbH</AnimatedParagraph>
          <AnimatedParagraph>c/o Next Level Offices, Franklinstraße 11, 10587 Berlin</AnimatedParagraph>
          <AnimatedParagraph>Managing Director: BSc (Ing.) Semih SENER</AnimatedParagraph>
          <AnimatedParagraph>Email: semih@sener.ai</AnimatedParagraph>
          <AnimatedParagraph>Registration: District Court Charlottenburg HRB 249792B</AnimatedParagraph>
          <AnimatedParagraph>VAT ID: DE 36 0 36 10 40</AnimatedParagraph>
          <AnimatedParagraph>This page doesn&apos;t collect any user data or use cookies. All copyrighted logos and trademarks belong to their respective owners. &quot;AdditionalRAM&quot; is the username / alias Ekrem Taha SENER goes by and is not a trademark.</AnimatedParagraph>

        </div>
      </section>
    </main>
  );
}
