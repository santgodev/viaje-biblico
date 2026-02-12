"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sword, Shield, Trophy, ChevronRight, Hash, Layers } from "lucide-react";
import { bibleData, Stage, Book } from "@/lib/bible-data";

type TrialType = "knowledge" | "order" | null;

export function TrialsMenu({ onClose }: { onClose: () => void }) {
    const [activeTrial, setActiveTrial] = useState<TrialType>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 md:p-12 overflow-hidden backdrop-blur-md"
        >
            <div className="w-full max-w-4xl h-full flex flex-col relative bg-[#1c1917] border border-amber-900/30 rounded-lg shadow-2xl">

                {/* Header */}
                <div className="p-8 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Trophy className="w-8 h-8 text-amber-500" />
                        <div>
                            <h2 className="text-3xl font-serif italic text-amber-100">Pruebas de Sabiduría</h2>
                            <p className="text-stone-500 text-xs tracking-[0.3em] uppercase">Desafíos del Escriba</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-stone-800 rounded hover:bg-stone-700 transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8">
                    {!activeTrial ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                            {/* Selection Card 1 */}
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                                onClick={() => setActiveTrial("knowledge")}
                                className="flex flex-col items-center justify-center p-12 border border-amber-900/20 rounded-xl bg-stone-900/50 group transition-all"
                            >
                                <div className="w-24 h-24 rounded-full bg-stone-800 border-2 border-amber-500/20 flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-all">
                                    <Shield className="w-12 h-12 text-amber-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-amber-100 mb-2">Prueba de Épocas</h3>
                                <p className="text-stone-500 text-center text-sm mb-6">Demuestra tu conocimiento sobre las 12 etapas de la historia sagrada.</p>
                                <div className="px-6 py-2 bg-amber-900/20 border border-amber-500/30 text-amber-500 text-xs font-bold rounded group-hover:bg-amber-500 group-hover:text-black transition-all">INICIAR RETO</div>
                            </motion.button>

                            {/* Selection Card 2 */}
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                                onClick={() => setActiveTrial("order")}
                                className="flex flex-col items-center justify-center p-12 border border-emerald-900/20 rounded-xl bg-stone-900/50 group transition-all"
                            >
                                <div className="w-24 h-24 rounded-full bg-stone-800 border-2 border-emerald-500/20 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-all">
                                    <Sword className="w-12 h-12 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-100 mb-2">Orden de Escribas</h3>
                                <p className="text-stone-500 text-center text-sm mb-6">Ordena los libros sagrados en su secuencia correcta antes de que el tiempo se agote.</p>
                                <div className="px-6 py-2 bg-emerald-900/20 border border-emerald-500/30 text-emerald-500 text-xs font-bold rounded group-hover:bg-emerald-500 group-hover:text-black transition-all">INICIAR RETO</div>
                            </motion.button>
                        </div>
                    ) : (
                        <div className="h-full">
                            <button onClick={() => setActiveTrial(null)} className="flex items-center gap-2 text-stone-500 hover:text-white transition mb-8 text-xs font-bold">
                                <ChevronRight className="w-4 h-4 rotate-180" /> VOLVER AL MENÚ
                            </button>

                            {activeTrial === "knowledge" ? <KnowledgeGame /> : <OrderingGame />}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

// --- Test 1: Knowledge Game ---
function KnowledgeGame() {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const questions = [
        { q: "¿En qué etapa se entregan los 10 mandamientos?", a: ["Pentateuco", "Históricos", "Profetas"], correct: 0 },
        { q: "¿Qué etapa describe el retorno del exilio y la reconstrucción?", a: ["Babel", "Históricos: Retorno", "Éxodo"], correct: 1 },
        { q: "¿Cuál es el último libro de la Biblia?", a: ["Génesis", "Malaquías", "Apocalipsis"], correct: 2 },
        { q: "¿Quién es el autor principal de los Salmos?", a: ["David", "Moisés", "Pablo"], correct: 0 },
    ];

    const handleAnswer = (idx: number) => {
        if (idx === questions[step].correct) setScore(s => s + 1);
        if (step < questions.length - 1) setStep(s => s + 1);
        else setFinished(true);
    };

    if (finished) return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <Trophy className="w-20 h-20 text-amber-500 mb-6" />
            <h3 className="text-4xl font-bold text-amber-100 mb-2">RETRO COMPLETADO</h3>
            <p className="text-stone-400 mb-8 font-mono tracking-widest uppercase">RANGO: {score === questions.length ? 'ERUDITO DE SION' : 'EXPLORADOR NOVICIO'}</p>
            <div className="text-6xl font-black text-amber-500 mb-8">{score}/{questions.length}</div>
            <button onClick={() => { setStep(0); setScore(0); setFinished(false); }} className="px-12 py-3 bg-stone-800 border border-stone-600 rounded font-bold hover:bg-stone-700">REINTENTAR</button>
        </div>
    );

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">Pregunta {step + 1} de {questions.length}</span>
                    <div className="h-1 flex-1 mx-4 bg-stone-800 rounded-full overflow-hidden">
                        <motion.div animate={{ width: `${((step + 1) / questions.length) * 100}%` }} className="h-full bg-amber-500" />
                    </div>
                </div>
                <h4 className="text-2xl font-serif text-amber-50 font-bold leading-tight">
                    {questions[step].q}
                </h4>
            </div>

            <div className="space-y-3">
                {questions[step].a.map((ans, i) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="w-full p-6 text-left bg-stone-900 border border-stone-800 rounded-lg hover:border-amber-500/50 hover:bg-stone-800 transition-all flex justify-between items-center group"
                    >
                        <span className="text-stone-300 group-hover:text-amber-100 font-bold">{ans}</span>
                        <div className="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-[10px] text-stone-600 group-hover:border-amber-500 group-hover:text-amber-500">
                            {i === 0 ? 'A' : i === 1 ? 'B' : 'C'}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

// --- Test 2: Ordering Game ---
function OrderingGame() {
    // Simplified: order 5 random books
    const initialBooks = [
        { id: 'gen', name: 'Génesis', order: 1 },
        { id: 'exo', name: 'Éxodo', order: 2 },
        { id: 'lev', name: 'Levítico', order: 3 },
        { id: 'num', name: 'Números', order: 4 },
        { id: 'deu', name: 'Deuteronomio', order: 5 },
    ];

    const [books, setBooks] = useState<any[]>([]);
    const [finished, setFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        setBooks([...initialBooks].sort(() => Math.random() - 0.5));
    }, []);

    const moveBook = (idx: number, dir: 'up' | 'down') => {
        const newBooks = [...books];
        const target = dir === 'up' ? idx - 1 : idx + 1;
        if (target < 0 || target >= books.length) return;

        [newBooks[idx], newBooks[target]] = [newBooks[target], newBooks[idx]];
        setBooks(newBooks);
    };

    const checkOrder = () => {
        const correct = books.every((b, i) => b.order === i + 1);
        setIsCorrect(correct);
        setFinished(true);
    };

    if (finished) return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            {isCorrect ? <Sword className="w-20 h-20 text-emerald-500 mb-6" /> : <X className="w-20 h-20 text-red-500 mb-6" />}
            <h3 className="text-4xl font-bold text-amber-100 mb-2">{isCorrect ? 'ORDEN RESTABLECIDO' : 'ORDEN ERRÓNEO'}</h3>
            <p className="text-stone-400 mb-8 font-mono tracking-widest uppercase">{isCorrect ? 'HAS DEMOSTRADO TU DOMINIO' : 'LAS CRÓNICAS ESTÁN CONFUNDIDAS'}</p>
            <button onClick={() => { setBooks([...initialBooks].sort(() => Math.random() - 0.5)); setFinished(false); }} className="px-12 py-3 bg-stone-800 border border-stone-600 rounded font-bold hover:bg-stone-700">REINTENTAR</button>
        </div>
    );

    return (
        <div className="max-w-md mx-auto">
            <h4 className="text-xl font-bold text-amber-100 mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
                <Hash className="w-5 h-5 text-emerald-500" /> Restaura la Secuencia
            </h4>
            <div className="space-y-2 mb-12">
                {books.map((book, i) => (
                    <div key={book.id} className="flex items-center gap-4 bg-stone-900 border border-stone-800 p-4 rounded group">
                        <span className="text-stone-600 font-mono text-xs w-4">{i + 1}</span>
                        <div className="flex-1 text-stone-300 font-bold">{book.name}</div>
                        <div className="flex gap-1">
                            <button onClick={() => moveBook(i, 'up')} className="p-1 hover:bg-stone-800 rounded disabled:opacity-20" disabled={i === 0}>▲</button>
                            <button onClick={() => moveBook(i, 'down')} className="p-1 hover:bg-stone-800 rounded disabled:opacity-20" disabled={i === books.length - 1}>▼</button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={checkOrder}
                className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded shadow-xl transition-all uppercase tracking-widest text-sm"
            >
                Confirmar Orden
            </button>
        </div>
    );
}
