import { redirect } from "next/navigation";
import { Silkscreen } from "next/font/google";
import GalaxyBackground from "../components/GalaxyBackground";
import GlitchyText from "../components/GlitchyText";
import AccessibleHeading from "../components/AccessibleHeading";
import AnimatedParagraph from "../components/AnimatedParagraph";
import projectStyles from "../components/ProjectModal.module.css";
import homeStyles from "../page.module.css";
import styles from "./page.module.css";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

async function submitForm(formData) {
  "use server";
  const body = Object.fromEntries(formData);
  await fetch("https://submit-form.com/V0QLDK9iG", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  redirect("/thanks");
}

export default function ContactPage() {
  return (
    <main className={homeStyles.gradientBackground} style={{ overflow: "hidden" }}>
      <GalaxyBackground />
      <AccessibleHeading text="Contact AdditionalRAM" level={1} />
      <section className={`${styles.contactShell} ${homeStyles.spaceTop}`}>
        <div className={styles.intro}>
          <GlitchyText text="CONTACT" fontClassName={silkscreen.className} extraClassName={homeStyles.heading} />
          <div className={homeStyles.paragraphHolder}>
            <AnimatedParagraph>Have a problem or a question about Ember Ruin, or just want to say hello?</AnimatedParagraph>
            <AnimatedParagraph>Send a message and I&apos;ll get back to you.</AnimatedParagraph>
          </div>
        </div>

        <form action={submitForm} className={styles.form}>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              <span className={silkscreen.className}>Name</span>
              <input name="name" type="text" autoComplete="name" required placeholder="Your name (or alias)" />
            </label>
            <label className={styles.field}>
              <span className={silkscreen.className}>Email (so I can get back to you)</span>
              <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </label>
          </div>
          <label className={styles.field}>
            <span className={silkscreen.className}>Subject</span>
            <input name="subject" type="text" required placeholder="What's the matter?" />
          </label>
          <label className={styles.field}>
            <span className={silkscreen.className}>Message</span>
            <textarea name="message" required placeholder="Tell me about it..." rows="7" />
          </label>
          <div className={styles.formFooter}>
            <p>I usually reply within a few days.</p>
            <button className={`${projectStyles.link} ${styles.sendButton}`} type="submit">
              <img src="/icons/arrow-forward-outline.svg" alt="" className={projectStyles.linkIcon} />
              <span className={`${projectStyles.linkText} ${styles.buttonInitial} ${silkscreen.className}`}>SEND MESSAGE</span>
              <span className={`${projectStyles.linkText} ${styles.buttonReplacement} ${silkscreen.className}`}>SEND MESSAGE</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}