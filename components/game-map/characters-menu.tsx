"use client";

import { motion } from "framer-motion";
import { Stage, Character } from "@/lib/bible-data";
import { X, Users } from "lucide-react";

interface CharactersMenuProps {
    stage: Stage;
    onClose: () => void;
}

export function CharactersMenu({ stage, onClose }: CharactersMenuProps) {
    const characters = stage.mainCharacters || [];

    // Helper for dynamic colors to ensure Tailwind classes are grounded
    const colorStyles: Record<string, { bg: string, text: string, border: string }> = {
        orange: { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
        blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
        cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
        purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
        indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30" },
        violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/30" },
        red: { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
        rose: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30" },
        green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
        emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
        teal: { bg: "bg-teal-500/20", text: "text-teal-400", border: "border-teal-500/30" },
        yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" },
    };

    const theme = colorStyles[stage.themeColor] || colorStyles.orange;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-stone-900/90 border border-amber-900/40 w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-stone-950/80">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${theme.bg} border ${theme.border}`}>
                            <Users className={`w-8 h-8 ${theme.text}`} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif italic text-amber-50/90 tracking-tight">Registro de Linajes & Actores</h2>
                            <p className="text-stone-500 text-xs uppercase tracking-[0.3em] font-bold mt-1">{stage.name}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-all text-stone-500 hover:text-white"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-10 bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.2)_0%,rgba(10,10,10,0.8)_100%)]">
                    {characters.length > 0 ? (
                        <div className="relative">
                            {/* Decorative Central Line for "Genealogy" view */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-900/30 to-transparent hidden lg:block" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                {characters.map((char, index) => (
                                    <motion.div
                                        key={char.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="bg-stone-900/80 border border-white/5 p-6 rounded-2xl hover:border-amber-500/40 transition-all hover:bg-stone-800/80 hover:shadow-2xl group flex flex-col items-center text-center h-full">
                                            <div className="relative mb-6">
                                                <div className={`absolute inset-0 rounded-full ${theme.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                                <div className="w-16 h-16 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center relative z-10 group-hover:border-amber-500/50 transition-colors shadow-2xl">
                                                    <span className="text-2xl group-hover:scale-110 transition-transform">🤴</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-amber-100/90 mb-2 group-hover:text-amber-200 transition-colors">{char.name}</h3>
                                            <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${theme.bg} ${theme.text} mb-4 border ${theme.border}`}>
                                                {char.role}
                                            </div>
                                            <p className="text-sm text-stone-400 leading-relaxed italic line-clamp-4">
                                                "{char.description}"
                                            </p>

                                            {/* Pulse effect on dot if it's a key lineage character */}
                                            {index === 0 && (
                                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="h-40 flex items-center justify-center text-stone-600 italic">
                            No se han identificado actores principales en esta crónica.
                        </div>
                    )}
                </div>

                {/* Footer Tip */}
                <div className="p-4 bg-stone-950/80 border-t border-white/5 text-center">
                    <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em]">
                        Personajes Clave del {stage.name} — Registro de Linaje v1.0
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
