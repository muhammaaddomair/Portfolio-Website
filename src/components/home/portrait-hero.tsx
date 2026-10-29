import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./portrait-hero.module.css";

export default function PortraitHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="portrait-hero-title">
      <div className={styles.layout}>
        <div className={styles.portrait}>
          <Image src="/images/omair-portrait-transparent.png" alt="Watercolor portrait of Muhammad Omair" width={1123} height={1401} unoptimized priority sizes="(max-width: 760px) 85vw, 46vw" />
        </div>
        <div className={styles.copy}>
          <h1 id="portrait-hero-title">Turning Vision Into<br className={styles.desktopBreak} /> Reality With Code<br className={styles.desktopBreak} /> And Design.</h1>
          <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
          <div className={styles.actions}>
            <a className={styles.resume} href="mailto:muhammaddomair@gmail.com?subject=Resume%20request">Resume <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a className={styles.contact} href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
