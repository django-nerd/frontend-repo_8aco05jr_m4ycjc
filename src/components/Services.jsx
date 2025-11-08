import React from 'react';
import { Globe, Search, Megaphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Pembuatan Website',
    desc:
      'Website cepat, aman, dan elegan dengan performa tinggi. Dibangun dengan stack modern dan berfokus pada konversi.',
    points: ['Desain kustom', 'SEO Ready', 'Responsive & cepat'],
  },
  {
    icon: Search,
    title: 'Optimasi Google Ads',
    desc:
      'Strategi iklan berorientasi hasil: keyword riset, struktur campaign tepat, dan optimasi harian untuk ROAS maksimal.',
    points: ['Riset & setup', 'Tracking konversi', 'Optimasi berkelanjutan'],
  },
  {
    icon: Megaphone,
    title: 'Meta Ads (Facebook/Instagram)',
    desc:
      'Creative yang menarik + segmentasi audiens presisi untuk meningkatkan reach dan konversi brand Anda.',
    points: ['Creative testing', 'Audience targeting', 'A/B Testing'],
  },
  {
    icon: PenTool,
    title: 'Konten Social Media',
    desc:
      'Produksi konten konsisten yang relevan dan on-brand: kalender konten, copywriting, dan desain visual.',
    points: ['Strategi konten', 'Desain & copy', 'Scheduling'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Layanan Kami</h2>
          <p className="mt-3 text-white/70">
            Paket lengkap untuk kebutuhan digital marketing dan brand presence Anda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/70">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
