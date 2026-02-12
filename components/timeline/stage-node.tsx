"use client";

import { Stage, Book } from "@/lib/bible-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookBranch } from "./book-branch";

interface StageNodeProps {
    stage: Stage;
    index: number;
}

export function StageNode({ stage, index }: StageNodeProps) {
    const isEven = index % 2 === 0;

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* Background Image for Pentateuch (or any stage with an image) */}
            {stage.image && (
                <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl opacity-20 pointer-events-none">
                    <img
                        src={stage.image}
                        alt={`${stage.name} background`}
                        className="w-full h-full object-cover blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
                </div>
            )}

            {/* Stage Marker (The Era Title) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center justify-center mb-16 relative z-20"
            >
                <div className={cn(
                    "w-24 h-24 rounded-full border-4 flex items-center justify-center bg-background shadow-2xl z-20",
                    `border-${stage.themeColor}-500/20 text-${stage.themeColor}-600 dark:text-${stage.themeColor}-400`
                )}>
                    <span className="text-3xl font-bold">{index + 1}</span>
                </div>

                <div className="mt-6 text-center bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 shadow-sm max-w-lg">
                    <h2 className={cn(
                        "text-4xl md:text-5xl font-extrabold tracking-tight mb-2",
                        `text-${stage.themeColor}-600 dark:text-${stage.themeColor}-400`
                    )}>
                        {stage.name}
                    </h2>
                    <p className="text-muted-foreground text-lg">{stage.description}</p>
                </div>
            </motion.div>

            {/* Historical Events Milestones */}
            {stage.events && stage.events.length > 0 && (
                <div className="flex flex-col items-center gap-6 mb-16 relative z-10">
                    {stage.events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "flex items-center gap-3 bg-secondary/80 backdrop-blur-md border border-border px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform cursor-help",
                                `border-${stage.themeColor}-200 dark:border-${stage.themeColor}-800`
                            )}
                            title={event.description}
                        >
                            <span className={cn(
                                "w-2 h-2 rounded-full",
                                `bg-${stage.themeColor}-500`
                            )} />
                            <span className="text-xs font-mono opacity-70">{event.year}</span>
                            <span className="text-sm font-semibold">{event.name}</span>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Book Branches */}
            <div className="grid gap-12 relative">
                {stage.books.map((book, bookIndex) => (
                    <BookBranch
                        key={book.id}
                        book={book}
                        index={bookIndex}
                        themeColor={stage.themeColor}
                        side={bookIndex % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </div>
    );
}
