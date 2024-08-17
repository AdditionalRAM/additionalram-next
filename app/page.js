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

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

async function fetchLocalJson(filename) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/json/${filename}.json`);  
  const data = await response.json();
  return data;
}

export default async function Home() {

  // await externalLinks and parse JSON into array
  const externalLinks = await fetchLocalJson("external-links");

  const smIcons = externalLinks.map((link) => (
    <a href={link.link} key={link.name} className={styles.socialLink} target="_blank">
      <img alt={link.name} src={link.iconURL} className={link.invert ? styles.invert : ""}/>
    </a>
  ));

  const webStack = await fetchLocalJson("web-stack");

  const webStackIcons = webStack.map((data, index) => (
    <div id={`${data.title}-${index}-holder`} className={styles.socialLink}>
      <TravellingIcon key={data.title} iconURL={data.imageURL} iconID={`${data.title}-icon`} shouldInvert={data.invertLogo} travelFromID={`${data.title}-${index}-holder`} travelToID={`${data.title}-stack-member-icon`} travelDuration={0.7} imgAlt={data.title} />
    </div>
  ));

  const webProjects = await fetchLocalJson("web-projects");

  const gameStack = await fetchLocalJson("game-stack");

  const gameStackIcons = gameStack.map((data, index) => (
    <div id={`${data.title}-${index}-holder`} className={styles.socialLink}>
      <TravellingIcon key={data.title} iconURL={data.imageURL} iconID={`${data.title}-icon`} shouldInvert={data.invertLogo} travelFromID={`${data.title}-${index}-holder`} travelToID={`${data.title}-stack-member-icon`} travelDuration={0.7} imgAlt={data.title} />
    </div>
  ));

  const gameProjects = await fetchLocalJson("game-projects");

  return (
    <main>
      <AccessibleHeading text="AdditionalRAM's Portfolio" level={1} />
      <section id="hero" className={styles.hero}>
        <ThreeCRT elementID="threecrt" />
        <RotatingIcons elements={smIcons} centerSelector="#threecrt" radiusVW={16} speed={10} iconClass="socialMediaIcons" uniqueID="herosm" />
        <AccessibleHeading text="AdditionalRAM" level={1} />
        <GlitchyText text="AdditionalRAM" fontClassName={silkscreen.className} />
        <GlitchyText text="Web and Game Developer" fontClassName={silkscreen.className} extraClassName={styles.bottomTitle} />
      </section>
      <section id="about">
        <h2 className={`${styles.heading} ${silkscreen.className}`}>About Me</h2>
        <div className={styles.paragraphHolder}>
          <p className={styles.paragraph}>Hey there! I'm Taha.</p>
          <p className={styles.paragraph}>I'm a self-taught web and game developer based in Berlin, Germany.</p>
          <p className={styles.paragraph}>I've been actively learning by myself since 2018, but my love for programming started all the way back in primary school.</p>
          <p className={styles.paragraph}>Recently, I've had the incredible opportunity to intern at Food for Thought Media & Mad About Pandas Game Dev Studios.</p>
          <p className={styles.paragraph}>During this internship, I was able to demonstrate my skills in game development with state machines in Unity and C# and learn a lot about the game design process.</p>
          <p className={styles.paragraph}>It was also there that I discovered my passion for web development after working on a web-based game.</p>
          <p className={styles.paragraph}>This internship is not the only thing I've been doing. Scroll down to see what technologies I've learned by myself and the projects I've put them to use in!</p>

        </div>
      </section>
      <section id="web-development">
        <OrbittingText iconURL="/icons/globe.svg" textToRotate="WEB-DEVELOPMENT-" rotateSpeed={10} elementID="web-development-orbit" />
        <RotatingIcons elements={webStackIcons} centerSelector="#web-development-orbit" radiusVW={20} speed={10} iconClass="webDevOrbit" uniqueID="webdev" />
        <AccessibleHeading text="Web Development" level={1} />
        <h2 className={`${styles.heading} ${silkscreen.className}`}>My Skills</h2>
        <TechStack dataset={webStack} />
        <h2 className={`${styles.heading} ${silkscreen.className}`}>My Projects</h2>
        <ProjectsGrid projects={webProjects} elementID="web-projects-grid" />
      </section>
      <section id="game-development" className={styles.spaceTop}>
        <OrbittingText iconURL="/icons/game-controller.svg" textToRotate="GAME-DEVELOPMENT-" rotateSpeed={10} elementID="game-development-orbit" />
        <AccessibleHeading text="Game Development" level={1} />
        <RotatingIcons elements={gameStackIcons} centerSelector="#game-development-orbit" radiusVW={20} speed={10} iconClass="gameDevOrbit" uniqueID="gamedev" />
        <h2 className={`${styles.heading} ${silkscreen.className}`}>My Skills</h2>
        <TechStack dataset={gameStack} />
        <h2 className={`${styles.heading} ${silkscreen.className}`}>My Projects</h2>
        <ProjectsGrid projects={gameProjects} elementID="game-projects-grid" />
      </section>
    </main>
  );
}
