"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Book, bibleData } from "@/lib/bible-data"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react"

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    // Flatten all books into a single array
    const allBooks = bibleData.flatMap(stage => stage.books)

    // Generate random questions (simplified for demo)
    const [questions] = useState(() => {
        // Shuffle books and take 5
        const shuffled = [...allBooks].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 5).map(book => {
            // Find the correct stage
            const correctStage = bibleData.find(s => s.books.some(b => b.id === book.id))
            // Get 3 incorrect stages
            const incorrectStages = bibleData
                .filter(s => s.id !== correctStage?.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)

            const options = [correctStage!, ...incorrectStages].sort(() => 0.5 - Math.random())

            return {
                book,
                correctStage,
                options
            }
        })
    })

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
        // In a real app, we would regenerate questions here
        window.location.reload()
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            {showScore ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-10 bg-card border rounded-xl shadow-sm p-8"
                >
                    <h2 className="text-3xl font-bold mb-4">¡Quiz Completado!</h2>
                    <div className="text-6xl font-extrabold text-primary mb-2">
                        {score} / {questions.length}
                    </div>
                    <p className="text-muted-foreground text-lg">
                        {score === questions.length ? "¡Excelente! Eres un experto bíblico." :
                            score > questions.length / 2 ? "¡Buen trabajo! Sigue aprendiendo." :
                                "Sigue practicando para mejorar tu conocimiento."}
                    </p>
                    <Button onClick={resetQuiz} size="lg" className="mt-6 gap-2">
                        <RefreshCw className="w-4 h-4" /> Intentar de nuevo
                    </Button>
                </motion.div>
            ) : (
                <div className="space-y-8">
                    <div className="flex justify-between items-center text-sm font-medium text-muted-foreground pb-4 border-b">
                        <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                        <span>Puntuación: {score}</span>
                    </div>

                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <h3 className="text-xl text-muted-foreground text-center">¿A qué etapa pertenece el libro de?</h3>
                            <h2 className="text-4xl font-extrabold text-center text-primary py-4">{questions[currentQuestion].book.name}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {questions[currentQuestion].options.map((option) => (
                                <Button
                                    key={option.id}
                                    variant="outline"
                                    className="h-16 text-lg justify-start px-6 relative overflow-hidden group hover:border-primary/50 transition-all"
                                    onClick={() => handleAnswerOptionClick(option.id === questions[currentQuestion].correctStage?.id)}
                                >
                                    <span className="z-10">{option.name}</span>
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${option.color.split(' ')[0]}`} />
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}
