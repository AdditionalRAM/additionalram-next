import { Silkscreen } from "next/font/google";
import AccessibleHeading from "../components/AccessibleHeading";
import GalaxyBackground from "../components/GalaxyBackground";
import GlitchyText from "../components/GlitchyText";
import homeStyles from "../page.module.css";
import projectStyles from "../components/ProjectModal.module.css";
import styles from "./page.module.css";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default function ThanksPage() {
  return (
    <main className={homeStyles.gradientBackground} style={{ overflow: "hidden" }}>
      <GalaxyBackground />
      <AccessibleHeading text="Message sent" level={1} />
      <section className={`${styles.thanks} ${homeStyles.spaceTop}`}>
        <GlitchyText text="MESSAGE SENT" fontClassName={silkscreen.className} extraClassName={homeStyles.heading} />
        <div className={homeStyles.paragraphHolder}>
          <p className={homeStyles.paragraph}>Thanks for reaching out. I&apos;ll get back to you as soon as I can.</p>
          <a href="/#hero" className={`${projectStyles.link} ${styles.homeLink}`}>
            <img src="/icons/arrow-forward-outline.svg" alt="" className={projectStyles.linkIcon} />
            <span className={`${projectStyles.linkText} ${styles.linkInitial} ${silkscreen.className}`}>BACK HOME</span>
            <span className={`${projectStyles.linkText} ${styles.linkReplacement} ${silkscreen.className}`}>BACK HOME</span>
          </a>
        </div>
      </section>
    </main>
  );
}
