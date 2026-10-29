import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import foldsImage from "../../../public/assets/images/sections/services-folds.png";
import ribbonsImage from "../../../public/assets/images/sections/services-ribbons.png";
import ringsImage from "../../../public/assets/images/sections/services-rings.png";
import waveImage from "../../../public/assets/images/sections/services-wave.png";
import styles from "./services-section.module.css";


const services = [

  {

    title: "Full-Stack Development",
    body: "Modern web applications built with React, Next.js, TypeScript, and scalable API architecture.",
    href: "#projects",
    image: ribbonsImage,
    lowerArtwork: true,
  },

  {

    title: "Backend Engineering",
    body: "Reliable APIs, databases, authentication, integrations, and business logic for production systems.",
    href: "#projects",
    image: waveImage,
    lowerArtwork: false,
  },

  {

    title: "AI & LLM Engineering",
    body: "Practical AI systems using LLMs, RAG, embeddings, agents, and intelligent automation.",
    href: "#projects",
    image: ringsImage,
    lowerArtwork: true,
  },

  {

    title: "Infrastructure & Deployment",
    body: "Production infrastructure that keeps applications reliable, secure, and ready to scale.",
    href: "#projects",
    image: foldsImage,
    lowerArtwork: true,
  },

];



export function ServicesSection() {

  return (

    <section id="solutions" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="services-title">
            <span>Skills &amp; Expertise.</span> I work across the stack to build
            reliable software — from user interfaces and APIs to databases,
            infrastructure, and AI-powered systems.
          </h2>
        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article key={service.title} className={styles.card} tabIndex={0}>
              <div className={styles.copy}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <Link href={service.href} className={styles.learnMore}>
                Explore projects <ArrowRight aria-hidden="true" />
              </Link>
              <Image
                src={service.image}
                alt=""
                className={`${styles.wave} ${service.lowerArtwork ? styles.lowerArtwork : ""}`}
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className={styles.tint} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>

  );

}

