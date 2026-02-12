import { BibleWorld } from "@/components/game-map/bible-world";

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden">
      <BibleWorld />

      {/* Tailwind Safelist for Dynamic Colors via String Interpolation */}
      <div className="hidden">
        <div className="
border-orange-200 border-orange-300 border-orange-400 border-orange-500 border-orange-600 border-orange-700 border-orange-800
bg-orange-100 bg-orange-500 bg-orange-500/10 bg-orange-500/20 bg-orange-900/40 from-orange-900
text-orange-100 text-orange-200 text-orange-300 text-orange-400 text-orange-500 text-orange-600 text-orange-700 text-orange-800 text-orange-900
from-orange-500 via-orange-500 to-orange-500

border-blue-200 border-blue-300 border-blue-400 border-blue-500 border-blue-600 border-blue-700 border-blue-800
bg-blue-100 bg-blue-500 bg-blue-500/10 bg-blue-500/20 bg-blue-900/30 from-blue-900
text-blue-100 text-blue-200 text-blue-300 text-blue-400 text-blue-500 text-blue-600 text-blue-700 text-blue-800 text-blue-900
from-blue-500 via-blue-500 to-blue-500

border-cyan-200 border-cyan-300 border-cyan-400 border-cyan-500 border-cyan-600 border-cyan-700 border-cyan-800
bg-cyan-100 bg-cyan-500 bg-cyan-500/10 bg-cyan-500/20 bg-cyan-900/30 from-cyan-900
text-cyan-100 text-cyan-200 text-cyan-300 text-cyan-400 text-cyan-500 text-cyan-600 text-cyan-700 text-cyan-800 text-cyan-900

border-purple-200 border-purple-300 border-purple-400 border-purple-500 border-purple-600 border-purple-700 border-purple-800
bg-purple-100 bg-purple-500 bg-purple-500/10 bg-purple-500/20 bg-purple-900/30 from-purple-900
text-purple-100 text-purple-200 text-purple-300 text-purple-400 text-purple-500 text-purple-600 text-purple-700 text-purple-800 text-purple-900
from-purple-500 via-purple-500 to-purple-500

border-indigo-200 border-indigo-300 border-indigo-400 border-indigo-500 border-indigo-600 border-indigo-700 border-indigo-800
bg-indigo-100 bg-indigo-500 bg-indigo-500/10 bg-indigo-500/20 bg-indigo-900/30 from-indigo-900
text-indigo-100 text-indigo-200 text-indigo-300 text-indigo-400 text-indigo-500 text-indigo-600 text-indigo-700 text-indigo-800 text-indigo-900

border-violet-200 border-violet-300 border-violet-400 border-violet-500 border-violet-600 border-violet-700 border-violet-800
bg-violet-100 bg-violet-500 bg-violet-500/10 bg-violet-500/20 bg-violet-900/30 from-violet-900
text-violet-100 text-violet-200 text-violet-300 text-violet-400 text-violet-500 text-violet-600 text-violet-700 text-violet-800 text-violet-900

border-red-200 border-red-300 border-red-400 border-red-500 border-red-600 border-red-700 border-red-800
bg-red-100 bg-red-500 bg-red-500/10 bg-red-500/20 bg-red-900/30 from-red-900
text-red-100 text-red-200 text-red-300 text-red-400 text-red-500 text-red-600 text-red-700 text-red-800 text-red-900
from-red-500 via-red-500 to-red-500

border-rose-200 border-rose-300 border-rose-400 border-rose-500 border-rose-600 border-rose-700 border-rose-800
bg-rose-100 bg-rose-500 bg-rose-500/10 bg-rose-500/20 bg-rose-900/30 from-rose-900
text-rose-100 text-rose-200 text-rose-300 text-rose-400 text-rose-500 text-rose-600 text-rose-700 text-rose-800 text-rose-900

border-green-200 border-green-300 border-green-400 border-green-500 border-green-600 border-green-700 border-green-800
bg-green-100 bg-green-500 bg-green-500/10 bg-green-500/20 bg-green-900/30 from-green-900
text-green-100 text-green-200 text-green-300 text-green-400 text-green-500 text-green-600 text-green-700 text-green-800 text-green-900
from-green-500 via-green-500 to-green-500

border-emerald-200 border-emerald-300 border-emerald-400 border-emerald-500 border-emerald-600 border-emerald-700 border-emerald-800
bg-emerald-100 bg-emerald-500 bg-emerald-500/10 bg-emerald-500/20 bg-emerald-900/30 from-emerald-900
text-emerald-100 text-emerald-200 text-emerald-300 text-emerald-400 text-emerald-500 text-emerald-600 text-emerald-700 text-emerald-800 text-emerald-900

border-teal-200 border-teal-300 border-teal-400 border-teal-500 border-teal-600 border-teal-700 border-teal-800
bg-teal-100 bg-teal-500 bg-teal-500/10 bg-teal-500/20 bg-teal-900/30 from-teal-900
text-teal-100 text-teal-200 text-teal-300 text-teal-400 text-teal-500 text-teal-600 text-teal-700 text-teal-800 text-teal-900

border-yellow-200 border-yellow-300 border-yellow-400 border-yellow-500 border-yellow-600 border-yellow-700 border-yellow-800
bg-yellow-100 bg-yellow-500 bg-yellow-500/10 bg-yellow-500/20 bg-yellow-900/30 from-yellow-900
text-yellow-100 text-yellow-200 text-yellow-300 text-yellow-400 text-yellow-500 text-yellow-600 text-yellow-700 text-yellow-800 text-yellow-900
from-yellow-500 via-yellow-500 to-yellow-500
        " />
      </div>
    </main>
  );
}
