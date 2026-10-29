import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "TechSaws Mailing Dashboard | Case Study",
  description: "The TechSaws Mailing Dashboard case study is coming soon.",
};

export default function MailingDashboardCaseStudy() {
  return (
    <main className="min-h-[75vh] bg-[#f8f4f8] px-6 py-36 text-black">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"><ArrowLeft size={16} aria-hidden="true" />Back to projects</Link>
        <p className="mt-16 text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Case study coming soon</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight !text-black sm:text-6xl">TechSaws Mailing Dashboard</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">A closer look at the design, architecture and development of this email operations platform is on the way. Explore the live project in the meantime.</p>
        <a href="https://leadflow.techsaws.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Explore live project<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </main>
  );
}
