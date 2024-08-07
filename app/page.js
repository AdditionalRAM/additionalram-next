import Image from "next/image";
import styles from "./page.module.css";
import ThreeCRT from "./components/ThreeCRT";
import RotatingIcons from "./components/RotatingIcons";

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
      <ThreeCRT elementID="threecrt" />
      <RotatingIcons elements={smIcons} centerSelector="#threecrt" radius={200} speed={10} iconClass="socialMediaIcons" />
    </main>
  );
}
