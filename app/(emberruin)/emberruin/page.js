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
            <div className={styles.buttonsRow}>
              <a href="https://discord.com/invite/BBGZv4DPQN" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaDiscord /> JOIN THE DISCORD
              </a>
            </div>
            <p className={styles.buttonsSubtitle}>Version 0.6.2 available to playtest now on</p>
            <div className={styles.buttonsRow}>
              <a href="https://testflight.apple.com/join/qcfsd457" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaAppStore /> TESTFLIGHT
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.AdditionalRAM.EmberRuin" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
                <FaGooglePlay /> PLAY STORE
              </a>
            </div>
            <p className={styles.buttonsSubtitle}>You need to be added to the testing group on Discord to access the Play Store version</p>
          </div>
        </div>

        <div className={styles.videoHolder}>
          <VideoBackground />
        </div>
      </section>

      {/* ===== Section: Virtual D-Pads ===== */}
      <section className={styles.textSection} id="virtual-dpads">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Virtual D-Pads suck</h2>
          <p className={styles.sectionParagraph}>
            I&apos;ve always loved tight platformers - like <em>Kaizo Mario</em> or <em>Celeste</em>. In fact, <em>Celeste</em> is the only game I&apos;ve ever gotten all achievements in on Steam.
          </p>
          <p className={styles.sectionParagraph}>
            And the D-Pad is <em>vital</em> to the genre. That&apos;s why the SNES controller from 1992 remains a favorite among the best players. That&apos;s also why you&apos;ve <em>never</em> played a good platformer on mobile:
          </p>
          <p className={`${styles.sectionParagraph} ${styles.important}`}>Virtual D-Pads suck.</p>
          <p className={styles.sectionParagraph}>
            There&apos;s no haptic feedback. You can&apos;t <em>feel</em> what you&apos;re pressing. Without a precise input device, it&apos;s impossible to control precisely.
          </p>
          <p className={styles.sectionParagraph}>So, I decided to come up with a solution.</p>
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
            Ember Ruin is a precise and atmospheric platformer built from scratch for touch controls. There&apos;s no walking - you swipe to dash in four directions, and tap once to wall jump.
          </p>
          <p className={styles.sectionParagraph}>
            Every movement is quick, clean and intentional. The result feels as reliable as a classic D-Pad - but designed for your phone touchscreen.
          </p>
          <p className={styles.sectionParagraph}>
            Each run is built from handcrafted segments that blend seamlessly through procedural generation, creating endless journeys upward through <em>The Depths</em>.
          </p>
          <p className={styles.sectionParagraph}>Climb higher, master every movement, and fight for your spot on the <strong>leaderboards</strong>.</p>
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
            Somewhere in <em>the other world</em>, a little girl wanders through endless, surreal caverns - warm light flickering on the walls, shadows whispering like ghosts.
          </p>
          <p className={styles.sectionParagraph}>
            She follows the echoes of forgotten spirits, chasing something she can&apos;t quite name.
          </p>
          <p className={styles.sectionParagraph}>Will she discover the truth behind this dream-like world?</p>
        </div>
      </section>

      {/* ===== Section: Development ===== */}
      <section className={styles.textSection} id="development">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Development</h2>
          <p className={styles.sectionParagraph}>
            Ember Ruin began as a school project: a simple experiment in making mobile controls that feel good.
          </p>
          <p className={styles.sectionParagraph}>
            But it quickly grew into something much more - a full game about precision, atmosphere, and reflection.
          </p>
          <p className={styles.sectionParagraph}>
            I&apos;m building it solo, with help from friends for music and art - with an estimated release in <strong>2026</strong> for Android &amp; iOS.
          </p>
        </div>
      </section>

      {/* ===== Section: CTA ===== */}
      <section className={styles.textSection} id="join">
        <div className={styles.sectionTextContent}>
          <h2 className={`${styles.sectionHeading} ${patrickHand.className}`}>Join the journey</h2>
          <p className={styles.sectionParagraph}>Want to follow the development and playtest Ember Ruin?</p>
          <p className={styles.sectionParagraph}>
            Get updates, devlogs, and sneak peeks. Playtesting and feedback are greatly appreciated.
          </p>
          <div className={styles.buttonsRow}><a href="https://discord.com/invite/BBGZv4DPQN" target="_blank" rel="noopener noreferrer" className={`${styles.stylizedLink} ${patrickHand.className}`}>
            <FaDiscord /> JOIN THE DISCORD
          </a></div>
        </div>
      </section>

    </main>
  );
}
