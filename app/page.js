import Image from "next/image";
import styles from "./page.module.css";
import ThreeCRT from "./components/ThreeCRT";
import RotatingIcons from "./components/RotatingIcons";
import OrbittingText from "./components/OrbittingText";

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
      <img alt={link.name} src={link.iconURL} />
    </a>
  ));

  return (
    <main>
      <section id="hero" style={{height: "130vh"}}>
        <ThreeCRT elementID="threecrt" />
        <RotatingIcons elements={smIcons} centerSelector="#threecrt" radiusVW={20} speed={10} iconClass="socialMediaIcons" uniqueID="herosm" />
      </section>
      <section id="web-development">
        <OrbittingText iconURL="/logos/globe-outline.svg" textToRotate="WEB-DEVELOPMENT-" rotateSpeed={10} elementID="web-development-orbit" />
        <RotatingIcons elements={smIcons} centerSelector="#web-development-orbit" radiusVW={20} speed={10} iconClass="webDevOrbit" uniqueID="webdev" />
      </section>
    </main>
  );
}
