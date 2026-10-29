import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "./top-automation-hero.module.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const countries = [
  "Australia",
  "Canada",
  "Germany",
  "Pakistan",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

export function TopAutomationHero() {
  return (
    <section id="contact" className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.content}>
        <h1
          id="home-hero-title"
          className={`${styles.title} ${plusJakartaSans.className}`}
        >
          <span className={styles.accent}>Let&apos;s build</span>what&apos;s
          <br />
          next, together.
        </h1>

        <EnquiryForm
          className={`${styles.form} ${plusJakartaSans.className}`}
        >
          <div className={styles.fullField}>
            <label htmlFor="challenge">
              Your challenge/goal <span>*</span>
            </label>
            <textarea id="challenge" name="challenge" rows={2} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="first-name">
              First Name <span>*</span>
            </label>
            <input id="first-name" name="firstName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="last-name">
              Last Name <span>*</span>
            </label>
            <input id="last-name" name="lastName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">
              Company name <span>*</span>
            </label>
            <input id="company" name="company" type="text" required />
          </div>

          <div className={styles.fullField}>
            <label htmlFor="country">
              Country <span>*</span>
            </label>
            <select id="country" name="country" defaultValue="" required>
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

        </EnquiryForm>
      </div>
    </section>
  );
}
