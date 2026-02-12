"use client"

import { Stage } from "@/lib/bible-data"
import { BookCard } from "@/components/book-card"
import { motion } from "framer-motion"

interface StageSectionProps {
    stage: Stage
    index: number
}

export function StageSection({ stage, index }: StageSectionProps) {
    return (
        <section className="py-12 md:py-20 border-b last:border-0 border-border/40">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                            {index + 1}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{stage.name}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground ml-14 max-w-2xl">{stage.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ml-0 md:ml-14">
                    {stage.books.map((book) => (
                        <BookCard key={book.id} book={book} color={stage.color} />
                    ))}
                </div>
            </div>
        </section>
    )
}
