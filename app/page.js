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

  return (
    <main>
      <AccessibleHeading text="AdditionalRAM's Portfolio" level={1} />
      <section id="hero" style={{height: "130vh"}}>
        <ThreeCRT elementID="threecrt" />
        <RotatingIcons elements={smIcons} centerSelector="#threecrt" radiusVW={20} speed={10} iconClass="socialMediaIcons" uniqueID="herosm" />
      </section>
      <section id="web-development" className={styles.spaceTop}>
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
      </section>
    </main>
  );
}
