import React from 'react';
import { ArrowRight, Layout, Target, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Layout,
    title: 'Discovery & Strategy',
    desc: 'Audit kebutuhan, riset pasar, dan perumusan strategi berbasis data.'
  },
  {
    icon: Target,
    title: 'Design & Build',
    desc: 'Desain modern, pengembangan cepat, dan integrasi tracking yang presisi.'
  },
  {
    icon: BarChart3,
    title: 'Launch & Scale',
    desc: 'Peluncuran, optimasi iklan, iterasi konten, dan scale yang terukur.'
  }
];

export default function Process() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Cara Kerja Kami</h2>
          <p className="mt-3 text-white/70">Kolaborasi transparan, berfokus pada hasil nyata.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3"><Icon size={22} /></div>
              <div className="text-sm text-white/50">Langkah {idx + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              {idx < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-white/30 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
