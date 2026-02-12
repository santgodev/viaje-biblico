"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Stage, bibleData, Book, Character } from "@/lib/bible-data";
import { Maximize2, X, BookOpen, Scroll, Map as MapIcon, Info, HelpCircle, Trophy, Layers, ChevronRight, Users } from "lucide-react";
import { TrialsMenu } from "./trials-menu";
import { CharactersMenu } from "./characters-menu";

// --- Game Map Constants ---
const MAP_WIDTH = 3000;
const MAP_HEIGHT = 2000;
const VIEWPORT_WIDTH = 1000; // Conceptual viewport width
const VIEWPORT_HEIGHT = 800; // Conceptual viewport height

// Region Configuration (Coordinates on the big map)
const REGIONS: Record<string, { x: number; y: number; scale: number; icon: string }> = {
    pentateuch: { x: 400, y: 1600, scale: 1.2, icon: "🏜️" },     // Desert / Origins (Bottom Left)
    "historical-1": { x: 800, y: 1400, scale: 1, icon: "🏰" },   // Kingdom / Fortresses
    "historical-2": { x: 1200, y: 1400, scale: 1, icon: "🧱" },  // Rebuilding / Walls
    poetry: { x: 1000, y: 1000, scale: 1.1, icon: "🎶" },        // Temple / High Place (Center)
    "major-prophets": { x: 1400, y: 800, scale: 1, icon: "📜" }, // Mountains / Watchtowers
    "minor-prophets": { x: 1600, y: 900, scale: 0.9, icon: "🗣️" }, // Hills
    gospels: { x: 1300, y: 500, scale: 1.3, icon: "✝️" },        // The Cross / Center (Top Center)
    acts: { x: 1600, y: 400, scale: 1, icon: "🔥" },             // Fire spread
    "pauline-church": { x: 2000, y: 300, scale: 1, icon: "🏛️" }, // Cities / Churches (Top Right)
    "pauline-pastoral": { x: 2200, y: 500, scale: 0.9, icon: "✉️" },
    "general-epistles": { x: 2400, y: 400, scale: 0.9, icon: "🌍" },
    apocalyptic: { x: 2600, y: 100, scale: 1.5, icon: "🌩️" },    // The End / Sky (Far Top Right)
};

export function BibleWorld() {
    const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedStageCharacters, setSelectedStageCharacters] = useState<Stage | null>(null);
    const [showGenealogy, setShowGenealogy] = useState(false);
    const [showTrials, setShowTrials] = useState(false);

    // Camera Pan
    const constraintsRef = useRef(null);

    // Initial Tutorial / Intro
    const [introVisible, setIntroVisible] = useState(true);

    return (
        <div className="fixed inset-0 bg-[#0c0a09] overflow-hidden text-amber-50 cursor-grab active:cursor-grabbing font-sans select-none">

            {/* --- Performance Background Layer (Parallax) --- */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50" />
            </div>

            {/* --- Draggable Map Container --- */}
            <motion.div
                ref={constraintsRef}
                className="absolute inset-0"
            >
                <motion.div
                    drag
                    dragConstraints={{ left: -2200, right: 0, top: -1400, bottom: 0 }}
                    dragElastic={0.05}
                    dragMomentum={true}
                    initial={{ x: -200, y: -1200 }}
                    className="relative origin-top-left"
                    style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
                >
                    {/* --- Procedural Terrain / Map Background --- */}
                    <div className="absolute inset-0 bg-[#171717]">
                        {/* Biomes / Regions */}
                        {/* Desert (Pentateuch) */}
                        <div className="absolute bottom-[100px] left-[100px] w-[900px] h-[900px] bg-orange-950/20 rounded-full blur-[120px]" />
                        {/* Kingdom (History) */}
                        <div className="absolute bottom-[400px] left-[700px] w-[1100px] h-[800px] bg-blue-950/20 rounded-full blur-[150px]" />
                        {/* Poetry (Mid) */}
                        <div className="absolute top-[800px] left-[800px] w-[800px] h-[800px] bg-purple-950/20 rounded-full blur-[130px]" />
                        {/* Gospels (Top Center) */}
                        <div className="absolute top-[200px] left-[1000px] w-[700px] h-[700px] bg-red-950/30 rounded-full blur-[150px]" />
                        {/* Epistles (Spread) */}
                        <div className="absolute top-[100px] right-[400px] w-[1200px] h-[800px] bg-emerald-950/10 rounded-full blur-[180px]" />
                        {/* Revelation (Edge) */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-900/10 rounded-full blur-[120px]" />

                        {/* Map Grid */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}
                        />

                        {/* Route Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            <path
                                d="M 400 1600 C 600 1550 700 1500 800 1400 S 1100 1450 1200 1400 S 1100 1100 1000 1000 S 1300 900 1400 800 S 1200 600 1300 500 S 1500 450 1600 400 S 1800 350 2000 300 S 2400 200 2600 100"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="3"
                                strokeDasharray="12 12"
                            />
                        </svg>
                    </div>

                    {/* --- Interactive Stage Markers --- */}
                    {bibleData.map((stage) => {
                        const config = REGIONS[stage.id] || { x: 0, y: 0, scale: 1, icon: '?' };
                        return (
                            <motion.button
                                key={stage.id}
                                className="absolute group flex flex-col items-center justify-center p-4 outline-none"
                                style={{ left: config.x - 60, top: config.y - 60 }} // Offset for center
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedStage(stage)}
                            >
                                {/* Halo effect */}
                                <div className={`absolute inset-0 bg-${stage.themeColor}-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className={`relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-stone-900 border border-stone-800 shadow-2xl flex items-center justify-center z-10 transition-all duration-300 group-hover:border-${stage.themeColor}-500 group-hover:shadow-${stage.themeColor}-500/20`}>
                                    {/* Inner Circle Decoration */}
                                    <div className="absolute inset-1 rounded-full border border-stone-800 pointer-events-none" />
                                    <div className="absolute inset-2 rounded-full border border-stone-800/50 pointer-events-none" />

                                    <span className="relative text-4xl md:text-5xl filter transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                                        {config.icon}
                                    </span>

                                    {/* Active Ring */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className={`absolute inset-0 rounded-full border border-dashed border-${stage.themeColor}-500/20 pointer-events-none`}
                                    />
                                </div>

                                <motion.div
                                    className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 flex items-center group/genealogy"
                                >
                                    <motion.button
                                        className="p-2.5 bg-stone-900 border border-amber-900/40 rounded-full shadow-2xl hover:bg-amber-900 hover:border-amber-500 transition-all flex items-center justify-center"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedStageCharacters(stage);
                                        }}
                                    >
                                        <Users className="w-3.5 h-3.5 text-amber-500 group-hover/genealogy:text-amber-100" />
                                    </motion.button>

                                    {/* Tooltip-like label */}
                                    <span className="ml-2 px-2 py-1 bg-black/80 border border-amber-900/20 rounded text-[8px] font-bold text-amber-500/80 uppercase tracking-widest opacity-0 group-hover/genealogy:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        Linajes
                                    </span>
                                </motion.div>

                                {/* Medieval-style Label */}
                                <div className="mt-4 px-4 py-1.5 bg-[#1c1917]/90 backdrop-blur-md rounded-sm border border-amber-900/30 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-200/80 shadow-2xl group-hover:text-amber-100 group-hover:border-amber-500/40 transition-all">
                                    {stage.name}
                                </div>
                            </motion.button>
                        );
                    })}

                </motion.div>
            </motion.div>

            {/* --- HUD / UI Overlay --- */}
            <div className="absolute top-0 left-0 p-8 pointer-events-none flex justify-between w-full items-start z-30">
                <div className="flex flex-col gap-1 pointer-events-auto">
                    <div className="flex items-center gap-3">
                        <MapIcon className="w-6 h-6 text-amber-600" />
                        <h1 className="text-3xl font-serif italic tracking-wider text-amber-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Atlas Bíblico
                        </h1>
                    </div>
                    <div className="h-0.5 w-32 bg-gradient-to-r from-amber-700 to-transparent my-1" />
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                        Exploración de Épocas & Crónicas
                    </p>
                </div>

                <div className="pointer-events-auto flex flex-col items-end gap-3">
                    <div className="flex items-center gap-2">
                        {/* Trials Button */}
                        <button
                            onClick={() => setShowTrials(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 hover:bg-stone-800 border border-amber-900/30 rounded shadow-xl transition-all group"
                        >
                            <Trophy className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold text-stone-300 group-hover:text-amber-200 uppercase tracking-widest">Pruebas</span>
                        </button>
                        {/* Genealogy Button */}
                        <button
                            onClick={() => setShowGenealogy(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 hover:bg-stone-800 border border-amber-900/30 rounded shadow-xl transition-all group"
                        >
                            <Layers className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-bold text-stone-300 group-hover:text-amber-200 uppercase tracking-widest">Árbol</span>
                        </button>
                        <button onClick={() => setIntroVisible(true)} className="p-2 rounded bg-stone-900/80 border border-amber-900/30 hover:bg-stone-800 transition">
                            <HelpCircle className="w-5 h-5 text-amber-500/70" />
                        </button>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded border border-white/5 text-[10px] font-mono text-stone-500 tracking-tighter">
                        REGION: <span className="text-stone-300 uppercase">TIERRA PROMETIDA</span> — DEPTH: 1.25.0
                    </div>
                </div>
            </div>

            {/* --- Mini-Map Guide (Small floating UI) --- */}
            <div className="absolute bottom-10 right-10 p-4 pointer-events-auto z-30">
                <div className="w-48 h-32 bg-stone-950/80 border border-amber-900/20 rounded shadow-2xl relative overflow-hidden backdrop-blur-md">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/gray-paper.png')]" />
                    <div className="p-2 text-[8px] text-amber-500/50 uppercase font-bold tracking-[0.2em] mb-1">Mapa de Sector</div>
                    <div className="grid grid-cols-12 gap-1 px-2">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className={`h-1 rounded-full ${i < 12 ? 'bg-amber-900/20' : 'bg-stone-800'}`} />
                        ))}
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_#f59e0b]" />
                        <span className="text-[10px] text-stone-400 font-mono">UBICACIÓN ACTUAL</span>
                    </div>
                </div>
            </div>

            {/* --- Trials Modal --- */}
            <AnimatePresence>
                {showTrials && <TrialsMenu onClose={() => setShowTrials(false)} />}
            </AnimatePresence>

            {/* --- Characters/Genealogy Modal --- */}
            <AnimatePresence>
                {selectedStageCharacters && (
                    <CharactersMenu
                        stage={selectedStageCharacters}
                        onClose={() => setSelectedStageCharacters(null)}
                    />
                )}
            </AnimatePresence>

            {/* --- Genealogy Modal --- */}
            <AnimatePresence>
                {showGenealogy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 backdrop-blur-md"
                    >
                        <div className="w-full max-w-6xl h-full flex flex-col relative">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h2 className="text-4xl font-serif italic text-amber-100">Linaje de Promesa</h2>
                                    <p className="text-stone-400 text-sm">El árbol genealógico de los patriarcas y reyes</p>
                                </div>
                                <button onClick={() => setShowGenealogy(false)} className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Genealogy Tree Visual (Abstract Representation) */}
                            <div className="flex-1 relative overflow-auto rounded-xl border border-white/5 bg-stone-900/50 p-8">
                                <div className="min-w-[1000px] h-[600px] flex flex-col items-center">
                                    {/* Root */}
                                    <div className="flex flex-col items-center mb-20 relative">
                                        <div className="p-4 bg-amber-900/40 border border-amber-500/50 rounded-lg text-amber-100 font-bold z-10 w-48 text-center shadow-2xl">ADÁN & EVA</div>
                                        <div className="h-20 w-px bg-amber-900 absolute top-full" />
                                    </div>

                                    {/* Branching */}
                                    <div className="flex gap-40 mb-20 relative">
                                        <div className="flex flex-col items-center">
                                            <div className="p-3 bg-stone-800 border border-stone-600 rounded text-stone-300 w-40 text-center">SET</div>
                                            <div className="h-10 w-px bg-stone-700" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="p-3 bg-stone-800 border border-stone-600 rounded text-stone-300 w-40 text-center opacity-40">CAÍN</div>
                                        </div>
                                    </div>

                                    {/* Multi-branch */}
                                    <div className="flex flex-col items-center mb-20 relative">
                                        <div className="p-4 bg-amber-900/20 border border-amber-800/50 rounded-lg text-amber-200 font-bold w-48 text-center">NOÉ</div>
                                        <div className="h-1 w-[600px] bg-amber-900/30 absolute top-full mt-4" />
                                        <div className="h-1 w-[600px] bg-amber-900/30 absolute top-full mt-4 flex justify-between">
                                            <div className="h-10 w-px bg-amber-900/30" />
                                            <div className="h-10 w-px bg-amber-900/30" />
                                            <div className="h-10 w-px bg-amber-900/30" />
                                        </div>
                                        <div className="flex justify-between w-[600px] mt-14">
                                            <div className="p-2 bg-stone-900 border border-stone-800 rounded text-stone-400 w-32 text-center text-xs tracking-widest">SEM</div>
                                            <div className="p-2 bg-stone-900 border border-stone-800 rounded text-stone-400 w-32 text-center text-xs tracking-widest">CAM</div>
                                            <div className="p-2 bg-stone-900 border border-stone-800 rounded text-stone-400 w-32 text-center text-xs tracking-widest">JAFET</div>
                                        </div>
                                    </div>

                                    <div className="mt-auto text-stone-600 text-[10px] italic">
                                        * Seccion en construcción. El árbol crecerá mientras exploras.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Intro Modal --- */}
            <AnimatePresence>
                {introVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <div className="bg-stone-900 border border-amber-900/50 p-8 max-w-md rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                            <h2 className="text-2xl font-bold text-amber-100 mb-4">Bienvenido al Viaje</h2>
                            <p className="text-stone-400 mb-6 text-sm leading-relaxed">
                                Explora la historia bíblica como un mundo abierto. Viaja desde los orígenes en el desierto hasta la revelación final en la ciudad celestial.
                            </p>
                            <div className="flex justify-center gap-4 text-xs text-stone-500 mb-8">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700">👆</div>
                                    <span>Arrastra</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700">🔍</div>
                                    <span>Explora</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700">📖</div>
                                    <span>Aprende</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIntroVisible(false)}
                                className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold rounded transition-colors w-full"
                            >
                                COMENZAR EXPEDICIÓN
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Stage Detail View (The "Dungeon" / Location View) --- */}
            <AnimatePresence>
                {selectedStage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-40 bg-stone-950/95 flex flex-col items-center p-6 md:p-12 overflow-y-auto"
                    >
                        {/* Header Actions */}
                        <div className="w-full max-w-5xl flex justify-between items-start mb-8 z-50 relative">
                            <div className="flex flex-col">
                                <span className={`text-xs font-mono uppercase tracking-widest text-${selectedStage.themeColor}-400 mb-2`}>
                                    REGIÓN EXPLORADA
                                </span>
                                <h2 className={`text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400`}>
                                    {selectedStage.name}
                                </h2>
                            </div>
                            <button
                                onClick={() => setSelectedStage(null)}
                                className="p-2 bg-stone-800 hover:bg-stone-700 rounded-full border border-stone-600 transition"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Stage Description & Stats */}
                        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
                            <div className="md:col-span-2">
                                <p className="text-xl text-stone-300 font-serif leading-relaxed italic border-l-4 border-stone-700 pl-6">
                                    "{selectedStage.description}"
                                </p>

                                {/* Events Timeline for this Stage */}
                                {selectedStage.events && (
                                    <div className="mt-8 space-y-4">
                                        <h3 className="text-sm font-bold uppercase text-stone-500 tracking-wider mb-4">Eventos Críticos</h3>
                                        <div className="space-y-4 border-l border-stone-800 ml-2 pl-6 relative">
                                            {selectedStage.events.map(event => (
                                                <div key={event.id} className="relative">
                                                    <div className={`absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-${selectedStage.themeColor}-500`} />
                                                    <div className="text-stone-200 font-bold text-lg">{event.name}</div>
                                                    <div className="text-stone-500 text-xs font-mono">{event.year}</div>
                                                    <div className="text-stone-400 text-sm mt-1">{event.description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Books (Artifacts) Grid */}
                        <div className="w-full max-w-5xl relative z-10">
                            <h3 className="text-sm font-bold uppercase text-stone-500 tracking-wider mb-6 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Libros Sagrados ({selectedStage.books.length})
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {selectedStage.books.map((book) => (
                                    <motion.div
                                        key={book.id}
                                        layoutId={`book-${book.id}`}
                                        onClick={() => setSelectedBook(book)}
                                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                        className={`
                                    cursor-pointer bg-stone-900 border border-stone-800 p-5 rounded-lg
                                    group hover:border-${selectedStage.themeColor}-500/50 transition-colors
                                    relative overflow-hidden
                                `}
                                    >
                                        <div className={`absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity text-${selectedStage.themeColor}-500`}>
                                            <Info className="w-4 h-4" />
                                        </div>
                                        <div className="text-xs font-mono text-stone-500 mb-2">{book.period}</div>
                                        <h4 className="text-lg font-bold text-stone-100 mb-1 group-hover:text-amber-200 transition-colors">{book.name}</h4>
                                        <div className="h-0.5 w-8 bg-stone-700 mb-3 group-hover:bg-amber-500/50 transition-colors" />
                                        <p className="text-sm opacity-80 mt-1 line-clamp-1 italic">{book.theme}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Background Decor for Modal */}
                        <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
                            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${selectedStage.themeColor}-900/40 blur-[150px]`} />
                            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-${selectedStage.themeColor}-900/40 blur-[150px]`} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Book Detail Cards (Item Description) --- */}
            <AnimatePresence>
                {selectedBook && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedBook(null)}
                    >
                        <motion.div
                            className="bg-[#1c1917] w-full max-w-lg border border-stone-700 rounded-xl overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {/* Item Header (Elden Ring Style) */}
                            <div className="bg-stone-900 p-6 flex items-start gap-4 border-b border-stone-800">
                                <div className="w-16 h-16 bg-stone-800 rounded border border-stone-700 flex items-center justify-center shrink-0">
                                    <Scroll className="w-8 h-8 text-amber-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-amber-100">{selectedBook.name}</h3>
                                    <p className="text-stone-500 text-sm font-mono mt-1">Artifact Type: Sacred Text</p>
                                    <p className="text-stone-500 text-sm font-mono">Period: {selectedBook.period}</p>
                                </div>
                                <button onClick={() => setSelectedBook(null)} className="text-stone-500 hover:text-white transition">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Item Content */}
                            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                                <div className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-2">Descripción</div>
                                <p className="text-stone-300 text-sm leading-relaxed italic">
                                    {selectedBook.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-stone-900/50 p-3 rounded border border-stone-800">
                                        <div className="text-[10px] uppercase text-stone-500 mb-1">Autor</div>
                                        <div className="text-stone-200 font-bold text-sm">{selectedBook.author}</div>
                                    </div>
                                    <div className="bg-stone-900/50 p-3 rounded border border-stone-800">
                                        <div className="text-[10px] uppercase text-stone-500 mb-1">Dato Curioso</div>
                                        <div className="text-amber-500/80 font-bold text-xs leading-tight">{selectedBook.fact}</div>
                                    </div>
                                </div>

                                <div className="bg-stone-800/30 p-4 rounded border border-stone-800/50">
                                    <div className="text-[10px] uppercase text-stone-500 mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                        Tema Principal
                                    </div>
                                    <p className="text-stone-300 text-sm font-medium">
                                        "{selectedBook.theme}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Helper removed as data is now rich in bible-data.ts
