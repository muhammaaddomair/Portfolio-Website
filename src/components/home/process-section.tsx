"use client";



import { useEffect, useRef, type CSSProperties } from "react";

import {

  BrainCircuit,

  ClipboardCheck,

  Layers3,

  LifeBuoy,

  Network,

  Rocket,

} from "lucide-react";



import styles from "./process-section.module.css";



const steps = [

  {

    title: "Planning",

    description: "I define the goals, requirements, and clearest path before the build begins.",

    icon: BrainCircuit,

  },

  {

    title: "Design",

    description: "I shape the experience, system flows, and visual direction around your users.",

    icon: Layers3,

  },

  {

    title: "Development",

    description: "I turn the approved direction into a fast, reliable, production-ready system.",

    icon: Network,

  },

  {

    title: "Testing",

    description: "I validate functionality, responsiveness, integrations, and edge cases thoroughly.",

    icon: ClipboardCheck,

  },

  {

    title: "Launch",

    description: "I deploy carefully, monitor the rollout, and make sure every detail is ready.",

    icon: Rocket,

  },

  {

    title: "Support",

    description: "I continue improving, maintaining, and scaling the system after launch.",

    icon: LifeBuoy,

  },

] as const;



export function ProcessSection() {

  const sectionRef = useRef<HTMLElement>(null);



  useEffect(() => {

    const section = sectionRef.current;

    if (!section) return;



    let frame = 0;



    const updateProgress = () => {

      frame = 0;



      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        section.style.setProperty("--scroll-progress", "1");

        return;

      }



      const { top, height } = section.getBoundingClientRect();

      const leadIn = Number.parseFloat(

        window.getComputedStyle(section).getPropertyValue("--scroll-lead-in"),

      );

      const contentHeight = section.firstElementChild?.getBoundingClientRect().height ?? window.innerHeight;
      const scrollDistance = Math.max(height - contentHeight - leadIn, 1);

      const nextProgress = Math.min(1, Math.max(0, (-top - leadIn) / scrollDistance));

      section.style.setProperty("--scroll-progress", String(nextProgress));

    };



    const requestUpdate = () => {

      if (!frame) frame = window.requestAnimationFrame(updateProgress);

    };



    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });

    window.addEventListener("resize", requestUpdate);



    return () => {

      window.removeEventListener("scroll", requestUpdate);

      window.removeEventListener("resize", requestUpdate);

      if (frame) window.cancelAnimationFrame(frame);

    };

  }, []);



  const revealPoints = [0, 0.143, 0.286, 0.686, 0.831, 0.975];



  return (

    <section

      id="how-i-work"
      ref={sectionRef}

      className={styles.section}

      aria-labelledby="process-title"

    >

      <div className={styles.inner}>

        <p className={styles.eyebrow}>Step-by-step process</p>

        <h2 id="process-title" className={styles.heading}>

          I complete every <span>step carefully.</span>

        </h2>



        <div className={styles.process}>

          <svg

            className={styles.connector}

            viewBox="0 0 1200 432"

            preserveAspectRatio="none"

            aria-hidden="true"

          >

            <path pathLength="1" d="M135 46 H1065 C1138 46 1175 88 1175 156 C1175 218 1138 250 1065 250 H135 A110 68 0 0 0 135 386 H1065" />

          </svg>



          <div className={styles.grid}>

            {steps.map(({ title, description, icon: Icon }, index) => (

              <article

                key={title}

                className={styles.step}

                style={{ "--reveal-point": revealPoints[index] } as CSSProperties}

              >

                <div className={styles.iconWrap}>

                  <Icon aria-hidden="true" strokeWidth={1.6} />

                </div>

                <h3>{title}</h3>

                <p>{description}</p>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

