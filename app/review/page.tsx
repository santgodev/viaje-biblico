"use client"

import { useState } from "react"
import { bibleData, Book } from "@/lib/bible-data"
import { Flashcard } from "@/components/flashcard"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export default function ReviewPage() {
    // Flatten books
    const allBooks = bibleData.flatMap(stage => stage.books)

    // State for session
    const [queue, setQueue] = useState<Book[]>(() => [...allBooks].sort(() => 0.5 - Math.random()).slice(0, 10))
    const [completed, setCompleted] = useState<Book[]>([])
    const [needsReview, setNeedsReview] = useState<Book[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleResult = (result: 'known' | 'unknown') => {
        const currentBook = queue[currentIndex]

        if (result === 'unknown') {
            setNeedsReview([...needsReview, currentBook])
        } else {
            setCompleted([...completed, currentBook])
        }

        if (currentIndex < queue.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            // Session finished
            setCurrentIndex(-1)
        }
    }

    const restartSession = () => {
        // Determine next session: prioritize needsReview, then new mix
        const nextQueue = needsReview.length > 0
            ? [...needsReview, ...allBooks.filter(b => !needsReview.includes(b)).sort(() => 0.5 - Math.random()).slice(0, 5 - needsReview.length)]
            : [...allBooks].sort(() => 0.5 - Math.random()).slice(0, 10)

        setQueue(nextQueue)
        setNeedsReview([])
        setCompleted([])
        setCurrentIndex(0)
    }

    return (
        <div className="container py-12 md:py-20 flex flex-col items-center justify-center min-h-[80vh]">
            <div className="text-center mb-10 space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Modo Repaso</h1>
                <p className="text-muted-foreground">Sistema de repetición espaciada para memorizar los libros.</p>
            </div>

            {currentIndex === -1 ? (
                <div className="text-center space-y-6 py-10 bg-card border rounded-xl shadow-sm p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold">Sesión Finalizada</h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <span className="block text-2xl font-bold text-green-600">{completed.length}</span>
                            <span className="text-sm text-muted-foreground">Aprendidos</span>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                            <span className="block text-2xl font-bold text-orange-600">{needsReview.length}</span>
                            <span className="text-sm text-muted-foreground">Por Repasar</span>
                        </div>
                    </div>
                    <Button onClick={restartSession} size="lg" className="w-full gap-2">
                        <RotateCcw className="w-4 h-4" /> Nueva Sesión
                    </Button>
                </div>
            ) : (
                <div key={queue[currentIndex].id} className="w-full">
                    <Flashcard book={queue[currentIndex]} onResult={handleResult} />
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        Tarjeta {currentIndex + 1} de {queue.length}
                    </div>
                </div>
            )}
        </div>
    )
}
