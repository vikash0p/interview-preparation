'use client';
import { tipsGuidesData } from '@/main/data/home/tipsGuidesData';
import Link from 'next/link';
export default function TipsPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white bg-gradient-to-br from-gray-900 to-black">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Tips & Guides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tipsGuidesData.map((tip, i) => (
            <Link
              key={i}
              href={`/tips/${tip.slug}`}
              className="bg-gray-800 border border-gray-700 rounded-md p-6 hover:border-cyan-500 transition"
            >
              <div className="mb-4">{tip.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
              <p className="text-sm text-gray-400">{tip.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
