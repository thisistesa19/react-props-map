export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Performa Super Cepat",
      desc: "Waktu muat instan memanfaatkan arsitektur ES Module dari Vite.",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "hover:border-cyan-500/50"
    },
    {
      icon: "🎨",
      title: "Desain Berwarna & Estetik",
      desc: "Penggunaan kombinasi warna gradient yang menarik perhatian pengunjung.",
      color: "from-indigo-500/20 to-purple-500/10",
      border: "hover:border-indigo-500/50"
    },
    {
      icon: "🧩",
      title: "Komponen Rapi",
      desc: "Struktur kode teratur sehingga sangat mudah untuk ditambahkan fitur baru.",
      color: "from-fuchsia-500/20 to-pink-500/10",
      border: "hover:border-fuchsia-500/50"
    }
  ];

  return (
    <section id="fitur" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          Mengapa Menggunakan Website Ini?
        </h2>
        <p className="mt-3 text-slate-400 max-w-lg mx-auto">
          Dibuat dengan standar pengembangan modern untuk kenyamanan pengguna.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-3xl bg-gradient-to-b ${item.color} bg-slate-900/60 border border-slate-800 ${item.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-md`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}