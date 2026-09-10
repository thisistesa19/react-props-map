export default function Card({ label, value, icon }) {
  return (
    <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-all">
      <div className="text-2xl p-3 bg-slate-800/80 rounded-xl text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-base font-semibold text-slate-200 mt-0.5">{value}</p>
      </div>
    </div>
  );
}