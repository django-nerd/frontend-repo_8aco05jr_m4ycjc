import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-slate-900">F</span>
          Flames Studio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Layanan</a>
          <a href="#process" className="hover:text-white">Proses</a>
          <a href="#contact" className="hover:text-white">Kontak</a>
        </nav>
        <a href="#contact" className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900">Mulai Proyek</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Flames Studio. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#services" className="hover:text-white">Layanan</a>
          <a href="#process" className="hover:text-white">Proses</a>
          <a href="#contact" className="hover:text-white">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div id="process">
          <Process />
        </div>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
