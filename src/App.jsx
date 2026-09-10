import Card from "./components/Card";

export default function App() {
  // Array Data Informasi Pribadi
  const personalInfo = [
    { id: 1, label: "Nama Lengkap", value: "Tesalonika Hontong", icon: "👤" },
    { id: 2, label: "Profesi / Status", value: "Frontend Developer / Mahasiswa", icon: "💻" },
    { id: 3, label: "Lokasi", value: "Indonesia", icon: "📍" },
    { id: 4, label: "Email", value: "tesa@example.com", icon: "✉️" },
  ];

  // Array Data Keahlian
  const skills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript (ES6)",
    "Git & GitHub",
    "Vite",
    "HTML & CSS"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Profil */}
        <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 p-1 flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-3xl font-black text-cyan-400">
              T
            </div>
          </div>
          <div>
            <span className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800/80 rounded-full text-xs font-semibold">
              Biodata Diri
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-2">
              Halo, Saya <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tesa</span>
            </h1>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Pengembang web yang berfokus pada pembuatan antarmuka modern, responsif, dan interaktif menggunakan React dan Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Informasi Pribadi (Menggunakan Map & Props) */}
        <div>
          <h2 className="text-xl font-bold text-slate-200 mb-4">Informasi Pribadi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.map((info) => (
              <Card
                key={info.id}
                label={info.label}
                value={info.value}
                icon={info.icon}
              />
            ))}
          </div>
        </div>

        {/* Keahlian (Menggunakan Map) */}
        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-3xl">
          <h2 className="text-xl font-bold text-slate-200 mb-4">Keahlian & Teknologi</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80 rounded-xl text-sm font-medium transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}