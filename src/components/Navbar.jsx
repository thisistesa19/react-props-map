export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-6">
      {/* Efek Latar Cahaya Neon (Glow) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Lencana (Badge) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Teknologi Web Masa Depan</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
            Lihat Fitur Baru &rarr;
          </span>
        </div>

        {/* Judul Utama */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-100 leading-[1.15]">
          Wujudkan Ide Kreatif Menjadi <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Aplikasi Web Modern
          </span>
        </h1>

        {/* Deskripsi */}
        <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Tampilan cepat, responsif, dan kaya warna yang dibangun dengan kombinasi React dan Tailwind CSS.
        </p>

        {/* Tombol Utama */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all">
            🚀 Jelajahi Sekarang
          </button>
          <button className="w-full sm:w-auto px-8 py-4 font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl hover:border-slate-700 hover:scale-105 active:scale-95 transition-all backdrop-blur-md">
            📖 Dokumentasi
          </button>
        </div>

        {/* Kartu Statistik / Fitur Interaktif */}
        <div className="mt-16 relative mx-auto max-w-4xl p-3 rounded-3xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-950/80 rounded-2xl border border-slate-800/60">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="text-3xl font-black text-cyan-400">99.9%</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Uptime Server</div>
              <div className="text-xs text-slate-500 mt-1">Performa sangat stabil tanpa gangguan.</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="text-3xl font-black text-indigo-400">10x</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Lebih Cepat</div>
              <div className="text-xs text-slate-500 mt-1">Dioptimalkan dengan bundler Vite.</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="text-3xl font-black text-fuchsia-400">100%</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Responsif</div>
              <div className="text-xs text-slate-500 mt-1">Tampilan menyesuaikan semua layar HP/PC.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}