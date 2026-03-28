"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactFormVariant = "overlay" | "inline";

type ContactFormProps = {
  variant: ContactFormVariant;
  className?: string;
  onSuccess?: () => void;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm({ variant, className, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const payload = (await response.json().catch(() => null)) as { error?: string; ok?: boolean } | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Something went wrong while sending your message.");
      }

      setFormData(initialFormState);
      setFeedback({
        type: "success",
        message: "Your message has been sent. I'll get back to you by email."
      });
      onSuccess?.();
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "inline") {
    return (
      <form className={cn("hidden h-full items-center text-white lg:flex", className)} onSubmit={handleSubmit}>
        <div className="w-full space-y-7">
          <div>
            <label htmlFor="inline-contact-name" className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
              Your Name
            </label>
            <input
              id="inline-contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
              className="w-full border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
            />
          </div>

          <div>
            <label htmlFor="inline-contact-email" className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
              Your Email
            </label>
            <input
              id="inline-contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
              className="w-full border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
            />
          </div>

          <div>
            <label htmlFor="inline-contact-message" className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
              Your Message
            </label>
            <textarea
              id="inline-contact-message"
              rows={2}
              required
              value={formData.message}
              onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
              className="w-full resize-none border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
            />
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="header-pill pp-mono inline-flex h-[50px] w-full items-center justify-between gap-4 px-6 text-[12px] uppercase tracking-[0.16em] text-[#111111] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="header-text-wrap">
                <span className="header-text-track">
                  <span className="header-text-line">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span className="header-text-line">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </span>
              </span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M5 12h12" />
                <path d="m13 7 5 5-5 5" />
              </svg>
            </button>

            {feedback ? (
              <p className={cn("text-sm", feedback.type === "success" ? "text-[#f7c9bd]" : "text-[#ffb4b4]")}>{feedback.message}</p>
            ) : null}
          </div>
        </div>
      </form>
    );
  }

  return (
    <form className={cn("mt-6 sm:mt-8", className)} onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div>
          <input
            id="overlay-contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            className="h-12 w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8 sm:h-14"
            placeholder="Your Name"
          />
        </div>

        <div>
          <input
            id="overlay-contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            className="h-12 w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8 sm:h-14"
            placeholder="Your Email"
          />
        </div>

        <div>
          <textarea
            id="overlay-contact-message"
            rows={5}
            required
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className="w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 py-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8"
            placeholder="Your Message"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-white/48 sm:max-w-[55%]">Responses usually begin with a focused project conversation.</p>
            {feedback ? (
              <p className={cn("text-sm", feedback.type === "success" ? "text-[#f7c9bd]" : "text-[#ffb4b4]")}>{feedback.message}</p>
            ) : null}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full whitespace-nowrap gap-3 px-5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="M5 12h12" />
              <path d="m13 7 5 5-5 5" />
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
}
