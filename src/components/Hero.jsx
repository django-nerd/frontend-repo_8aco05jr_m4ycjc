import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:py-28 lg:py-32">
        {/* Copy side */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} />
            <span>Modern • Tech-savvy • Elegant</span>
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Solusi Digital untuk Brand yang Ingin Tumbuh Cepat
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Kami membantu bisnis Anda dengan website premium, optimasi Google Ads, Meta Ads, dan pembuatan konten social media yang strategis dan berkelas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-lg shadow-white/10 transition hover:translate-y-[-2px] hover:shadow-xl"
            >
              <Rocket size={18} />
              Konsultasi Gratis
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-6 grid max-w-md grid-cols-3 gap-6 text-center text-sm text-white/60">
            <div>
              <div className="text-2xl font-semibold text-white">120+</div>
              Proyek Selesai
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">98%</div>
              Klien Puas
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">5x</div>
              ROAS Rata-rata
            </div>
          </div>
        </div>

        {/* Spline 3D side */}
        <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:h-auto">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />
        </div>
      </div>
    </section>
  );
}
