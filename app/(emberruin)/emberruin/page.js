import AccessibleHeading from "@/app/components/AccessibleHeading";
import Image from "next/image";
import VideoBackground from "@/app/components/VideoBackground";
import styles from "./page.module.css";
import { Silkscreen, Patrick_Hand } from "next/font/google";
import { FaAppStore, FaDiscord, FaGooglePlay } from "react-icons/fa";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });
const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function EmberRuin() {
  return (
    <main className={styles.gradientBackground}>

      {/* ===== Background Decorations ===== */}
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_rock_lower.webp`} width={512} height={512} className={styles.lowerRock} alt="" />
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_rock_upper_left.webp`} width={512} height={512} className={styles.upperLeftRock} alt="" />
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_rock_upper_right.webp`} width={512} height={512} className={styles.upperRightRock} alt="" />

      {/* ===== Hero Section ===== */}
      <AccessibleHeading level={1}>Ember Ruin</AccessibleHeading>
      <section className={styles.hero} id="playtest">
        <div className={styles.leftColumn}>
          <div className={styles.logoHolder}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/emberruin_logo.webp`} alt="Ember Ruin Logo" width={400} height={800 / 3} className={styles.logo} />
            <p className={`${styles.logoDev} ${silkscreen.className}`}>by AdditionalRAM</p>
            <p className={styles.logoSubtitle}>Precise platforming designed around touch controls</p>
          </div>

          {/* CTA Buttons */}
          <div className={styles.buttonsHolder}>
            {/* <div className={styles.buttonsRow}>
              <a href="https://discord.com/invite/BBGZv4DPQN" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaDiscord /> JOIN THE DISCORD
              </a>
            </div> */}
            <p className={styles.buttonsSubtitle}>Version 0.8.0 available to playtest now on</p>
            <div className={styles.buttonsRow}>
              {/* <a href="https://testflight.apple.com/join/qcfsd457" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaAppStore /> TESTFLIGHT
              </a> */}
              <a href="https://play.google.com/store/apps/details?id=com.AdditionalRAM.EmberRuin" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaGooglePlay /> PLAY STORE
              </a>
            </div>
          </div>
        </div>

        <div className={styles.videoHolder}>
          <VideoBackground webmLink={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/ember-gameplay.webm`} hevcLink={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/ember-gameplay-hevc.mov`} fallbackImage={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/ember-gameplay-fallback.webp`} />
        </div>
      </section>

      {/* ===== Section: Virtual D-Pads ===== */}
      <section className={styles.textSection} id="virtual-dpads">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Virtual D-Pads suck</h2>
          <p className={styles.sectionParagraph}>
            I&apos;ve always loved tight platformers like <em>Kaizo Mario</em> or <em>Celeste</em>. In fact, <em>Celeste</em> is the only game I&apos;ve ever gotten all achievements in on Steam.
          </p>
          <p className={styles.sectionParagraph}>
            And the D-Pad is vital to the genre. That&apos;s why the SNES controller from 1992 remains a favorite among the best players. That&apos;s also why platformers rarely work on mobile:
          </p>
          <p className={`${styles.sectionParagraph} ${styles.important}`}>Virtual D-Pads suck.</p>
          <p className={styles.sectionParagraph}>
            A touchscreen doesn&apos;t provide tactile feedback, which means you can&apos;t feel what you&apos;re pressing or where your thumb is. This makes precise control difficult, and not in a fun way.
          </p>
          <p className={styles.sectionParagraph}>That is the core problem that this game aims to solve.</p>
        </div>
                <div className={styles.screenshotContainer}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-1.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-2.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-3.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
        </div>
      </section>

      {/* ===== Section: Gameplay ===== */}
      <section className={styles.textSection} id="gameplay">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Gameplay</h2>
          <p className={styles.sectionParagraph}>
            Ember Ruin is a precise platformer built from scratch for touch controls. There&apos;s no walking. You instead swipe to dash in four directions, and tap once to wall jump.
          </p>
          <p className={styles.sectionParagraph}>
            The movement system was designed from the ground up around the lack of a D-Pad.
          </p>
          <p className={styles.sectionParagraph}>
            You have a limited amount of dashes which requires you to think about when and where to use them. Each dash moves you a discrete distance, which you can cancel or redirect with good enough timing.
          </p>
          <p className={styles.sectionParagraph}>
            Runs consist of hand crafted rooms in a procedurally generated order, and it gets harder and harder as you progress.
          </p>
          <p className={styles.sectionParagraph}>Master the movement, climb ever higher, and fight for your spot on the leaderboards!</p>
        </div>
        <div className={styles.screenshotContainer}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-4.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-5.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ember-ruin/screenshot-6.webp`} alt="Ember Ruin Gameplay Screenshot" width={1179 / 2} height={2556 / 2} className={styles.screenshot} />
        </div>
      </section>

      {/* ===== Section: Story ===== */}
      <section className={styles.textSection} id="story">
        <div className={styles.storyOverlay}></div>
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Story</h2>
          <p className={styles.sectionParagraph}>
            Throughout the caves, as you explore, you may stumble upon mysterious ghosts.
          </p>
          <p className={styles.sectionParagraph}>
            What are they saying?
          </p>
          <p className={styles.sectionParagraph}>
            Is it even supposed to make sense?
          </p>
          <p className={`${styles.sectionParagraph} ${styles.important}`}>
            Or are you simply forgetting something important?
          </p>
        </div>
      </section>

      {/* ===== Section: Development ===== */}
      <section className={styles.textSection} id="development">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Development</h2>
          <p className={styles.sectionParagraph}>
            Ember Ruin began development during IT class in high school.
          </p>
          <p className={styles.sectionParagraph}>
            However, it was never meant to stay a school project.
          </p>
          <p className={styles.sectionParagraph}>
            I am the main developer, responsible for the game design and programming. The visuals and music are the amazing work of my good friends Mahmud (Mr.MES) and Emre (ect).
          </p>
          <p className={styles.sectionParagraph}>
            And we hope you enjoy playing it as much as we are enjoying making it.
          </p>
          <p className={styles.sectionParagraph}>
            Estimated release date is somewhere in <strong>late 2026</strong> for Android.
          </p>
        </div>
      </section>

      {/* ===== Section: CTA ===== */}
      <section className={styles.textSection} id="join">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Join the journey</h2>
          <p className={styles.sectionParagraph}>Want to playtest Ember Ruin?</p>
          <p className={styles.sectionParagraph}>
            A pre-release version is available now on Google Play. Any and all feedback is very much appreciated! You can submit it through the in-game form.
          </p>
          <div className={styles.buttonsRow}><a href="https://play.google.com/store/apps/details?id=com.AdditionalRAM.EmberRuin" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaGooglePlay /> PLAY STORE
              </a></div>
        </div>
      </section>

    </main>
  );
}
