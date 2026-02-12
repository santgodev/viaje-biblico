"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Book } from "@/lib/bible-data"
import { Button } from "@/components/ui/button"
import { Check, X, RotateCcw } from "lucide-react"

interface FlashcardProps {
    book: Book
    onResult: (result: 'known' | 'unknown') => void
}

export function Flashcard({ book, onResult }: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="w-full max-w-md mx-auto [perspective:1000px] h-96 relative">
            <motion.div
                className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => !isFlipped && setIsFlipped(true)}
            >
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-card border shadow-xl rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Libro</span>
                    <h2 className="text-4xl font-extrabold text-primary">{book.name}</h2>
                    <p className="mt-8 text-muted-foreground text-sm">Toca para revelar</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary text-primary-foreground shadow-xl rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                    <div className="space-y-4 mb-8">
                        <div>
                            <span className="text-xs uppercase opacity-70">Tema Principal</span>
                            <p className="font-semibold text-lg">{book.theme}</p>
                        </div>
                        <div>
                            <span className="text-xs uppercase opacity-70">Etapa</span>
                            <p className="font-medium">{book.stage}</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                            <span className="text-xs uppercase opacity-70 block mb-1">Dato</span>
                            <p className="text-sm italic">{book.fact}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full justify-center">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="h-12 w-12 rounded-full hover:bg-red-100 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                onResult('unknown');
                            }}
                        >
                            <X className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="h-12 w-12 rounded-full hover:bg-green-100 hover:text-green-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                onResult('known');
                            }}
                        >
                            <Check className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
