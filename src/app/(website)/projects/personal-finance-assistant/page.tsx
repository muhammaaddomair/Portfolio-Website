import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Personal Finance Assistant | Case Study",
  description: "The Personal Finance Assistant case study is coming soon.",
};

export default function PersonalFinanceCaseStudy() {
  return (
    <main className="min-h-[75vh] bg-[#f8f4f8] px-6 py-36 text-black">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"><ArrowLeft size={16} aria-hidden="true" />Back to projects</Link>
        <p className="mt-16 text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Case study coming soon</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight !text-black sm:text-6xl">Personal Finance Assistant</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">An AI finance MVP with transaction imports, category budgets, receipt extraction and a database-first spending assistant. A closer look at the architecture and development is on the way.</p>
      </div>
    </main>
  );
}
