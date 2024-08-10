import Image from "next/image";
import styles from "./page.module.css";
import ThreeCRT from "./components/ThreeCRT";
import RotatingIcons from "./components/RotatingIcons";
import OrbittingText from "./components/OrbittingText";
import StackMember from "./components/StackMember";
import AccessibleHeading from "./components/AccessibleHeading";

import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: '400' });

async function fetchExternalLinks() {
  // Fetch the data from the JSON file
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/external-links.json`);  const data = await response.json();
  return data; // Assuming the data is an array of icons or similar
}

export default async function Home() {

  // await externalLinks and parse JSON into array
  const externalLinks = await fetchExternalLinks();

  const smIcons = externalLinks.map((link) => (
    <a href={link.link} key={link.name} className={styles.socialLink} target="_blank">
      <img alt={link.name} src={link.iconURL} className={link.invert ? styles.invert : ""}/>
    </a>
  ));

  return (
    <main>
      <AccessibleHeading text="AdditionalRAM's Portfolio" level={1} />
      <section id="hero" style={{height: "130vh"}}>
        <ThreeCRT elementID="threecrt" />
        <RotatingIcons elements={smIcons} centerSelector="#threecrt" radiusVW={20} speed={10} iconClass="socialMediaIcons" uniqueID="herosm" />
      </section>
      <section id="web-development">
        <OrbittingText iconURL="/logos/globe-outline.svg" textToRotate="WEB-DEVELOPMENT-" rotateSpeed={10} elementID="web-development-orbit" />
        <RotatingIcons elements={smIcons} centerSelector="#web-development-orbit" radiusVW={20} speed={10} iconClass="webDevOrbit" uniqueID="webdev" />
        <AccessibleHeading text="Web Development" level={1} />
        <h2 className={`${styles.heading} ${silkscreen.className}`}>My Stack</h2>
        <StackMember title={"JavaScript"} description={"The essential programming language of web development. It's commonly used to build web applications and literally anything else."} memberID={"stackJS"} learntAt={
          { name: "freeCodeCamp", iconURL: "/logos/fcc_primary_small.svg" }
        } mainColor="#00FF41" />
        <StackMember title={"JavaScript"} description={"The essential programming language of web development. It's commonly used to build web applications and literally anything else."} memberID={"stackJS2"} learntAt={
          { name: "freeCodeCamp", iconURL: "/logos/fcc_primary_small.svg" }
        } mainColor="#00FF41" />
        <StackMember title={"JavaScript"} description={"The essential programming language of web development. It's commonly used to build web applications and literally anything else."} memberID={"stackJS3"} learntAt={
          { name: "freeCodeCamp", iconURL: "/logos/fcc_primary_small.svg", url: "https://www.freecodecamp.org/" }
        } mainColor="#00FF41" />
      </section>
    </main>
  );
}
