"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Book } from "@/lib/bible-data"
import { cn } from "@/lib/utils"
import { ChevronDown, BookOpen, Info, Clock, User } from "lucide-react"

interface BookCardProps {
    book: Book
    color: string
}

export function BookCard({ book, color }: BookCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
                "relative overflow-hidden rounded-xl border p-4 cursor-pointer transition-all hover:shadow-lg bg-card",
                color
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{book.name}</h3>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="h-5 w-5 opacity-70" />
                </motion.div>
            </div>

            <p className="text-sm opacity-80 mt-1 line-clamp-1">{book.theme}</p>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 border-t pt-3 border-black/10 dark:border-white/10"
                    >
                        <p className="text-sm opacity-90 leading-relaxed mb-4 italic">
                            {book.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2 opacity-80">
                                <User className="h-4 w-4" />
                                <span>{book.author}</span>
                            </div>
                            <div className="flex items-center gap-2 opacity-80">
                                <Clock className="h-4 w-4" />
                                <span>{book.period}</span>
                            </div>
                        </div>

                        <div className="rounded-lg bg-black/5 dark:bg-white/10 p-3 text-sm">
                            <div className="flex items-center gap-2 font-semibold mb-1">
                                <Info className="h-4 w-4" />
                                <span>Dato Curioso</span>
                            </div>
                            {book.fact}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
