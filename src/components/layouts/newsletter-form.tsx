"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6" id="newsletter">
      <label htmlFor="newsletter-email" className="sr-only">Work email address</label>
      <div className="flex items-center rounded-full border border-black/10 bg-white p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 focus-within:border-black/30 focus-within:shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="Enter your work email" className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-black outline-none placeholder:text-black/40" onChange={() => submitted && setSubmitted(false)} />
        <button type="submit" className="group flex h-11 shrink-0 items-center gap-2 rounded-full bg-black px-4 text-sm font-manrope font-light tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-5">
          Subscribe
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
      <p aria-live="polite" className={`mt-3 flex min-h-5 items-center gap-1.5 text-xs transition-opacity duration-300 ${submitted ? "text-emerald-700 opacity-100" : "opacity-0"}`}>
        <Check aria-hidden="true" className="h-3.5 w-3.5" />
        Thanks, we&apos;ll keep you in the loop.
      </p>
    </form>
  );
}
