"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function EnquiryForm({ children, className }: { children: ReactNode; className: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || (process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : "");
  const testMode = process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!ready || !siteKey || !container.current || !window.turnstile) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, theme: "light", action: "contact", size: "flexible",
      callback: (value: string) => { setToken(value); setMessage(""); },
      "expired-callback": () => { setToken(""); setMessage("Verification expired. Please verify again."); },
      "error-callback": () => { setToken(""); setMessage("Verification could not load. Please reload and try again."); },
    });
    return () => { if (widget.current) window.turnstile?.remove(widget.current); widget.current = null; };
  }, [ready, siteKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    if (!token) { setMessage("Please complete the verification before submitting."); return; }
    const data = new FormData(event.currentTarget);
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/contact/verify", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Verification failed. Please try again.");
      const body = ["Project enquiry", ...["challenge", "firstName", "lastName", "email", "company", "country"].map(key => `${key}: ${String(data.get(key) || "")}`)].join("\n\n");
      window.location.href = `mailto:muhammaddomair@gmail.com?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(body)}`;
      setMessage("Verified. Your email app will open with your enquiry. Send the email there to complete it.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Verification failed. Please try again.");
    } finally {
      setToken(""); if (widget.current) window.turnstile?.reset(widget.current); setBusy(false);
    }
  }

  return <form className={className} onSubmit={submit} aria-busy={busy}>
    {children}
    <div style={{ gridColumn: "1 / -1", color: "#000", minWidth: 0 }}>
      {siteKey ? <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setReady(true)} onError={() => setMessage("Verification could not load. Please reload and try again.")} /><div ref={container} /></> : <p>Verification is not configured yet.</p>}
      {testMode && <p style={{ fontSize: 11, marginTop: 8 }}>Development preview: Cloudflare test verification. Live keys are required before publishing.</p>}
      <p style={{ fontSize: 11, lineHeight: 1.6, marginTop: 12, color: "#000" }}>I would like to receive a reply from Muhammad Omair about this project.<br />Your details will only be used to respond to your project enquiry.<br />Verification is provided by Cloudflare Turnstile.</p>
      {message && <p role="status" style={{ fontSize: 13, marginTop: 12, color: "#000" }}>{message}</p>}
    </div>
    <button type="submit" disabled={busy || !token} style={{ width: "fit-content", minHeight: 49, display: "inline-flex", alignItems: "center", gap: 15, padding: "0 20px", border: "1px solid #000", borderRadius: 999, background: "#000", color: "#fff", fontSize: 13, fontWeight: 600, opacity: busy || !token ? .5 : 1, cursor: busy || !token ? "not-allowed" : "pointer" }}>{busy ? "Verifying…" : "Submit enquiry"}<span aria-hidden="true">→</span></button>
  </form>;
}
