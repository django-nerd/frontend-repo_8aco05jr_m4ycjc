import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Diskusikan Proyek Anda</h2>
          <p className="mt-3 text-white/70">Isi form singkat ini, kami akan hubungi dalam 1x24 jam.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                const subject = encodeURIComponent(`Lead Baru: ${data.name || 'Tanpa Nama'}`);
                const body = encodeURIComponent(
                  `Nama: ${data.name}\nEmail: ${data.email}\nTelepon: ${data.phone}\nLayanan: ${data.service}\nPesan: ${data.message}`
                );
                window.location.href = `mailto:hello@agency.com?subject=${subject}&body=${body}`;
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Nama</label>
                <input name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Nama Anda" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" name="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="email@domain.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Telepon/WA</label>
                <input name="phone" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Layanan</label>
                <select name="service" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <option>Pembuatan Website</option>
                  <option>Optimasi Google Ads</option>
                  <option>Meta Ads</option>
                  <option>Konten Social Media</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Ceritakan kebutuhan Anda</label>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Target, budget, timeline, dll." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-lg transition hover:-translate-y-0.5">
                  <Send size={18} /> Kirim Brief
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-sm text-white/60">Kontak Langsung</div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/70" />
                <a href="mailto:hello@agency.com" className="hover:underline">hello@agency.com</a>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <Phone size={18} className="text-white/70" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:underline">+62 812-3456-7890</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 p-6">
              <div className="text-sm text-white/70">Bonus Konsultasi</div>
              <div className="mt-1 text-lg font-semibold">Gratis audit website & ads</div>
              <p className="mt-2 text-sm text-white/70">Dapatkan rekomendasi cepat untuk peningkatan konversi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
