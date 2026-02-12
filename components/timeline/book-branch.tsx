"use client";

import { Book } from "@/lib/bible-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { useState } from "react";
import { BookDetailDialog } from "./book-detail-dialog";

interface BookBranchProps {
    book: Book;
    index: number;
    themeColor: string;
    side: "left" | "right";
}

export function BookBranch({ book, themeColor, side }: BookBranchProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BookDetailDialog
                book={book}
                themeColor={themeColor}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <motion.div
                initial={{ opacity: 0, x: side === "left" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "flex items-center gap-8 md:gap-12 relative",
                    side === "left" ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left",
                    "flex-row text-left" // Mobile default
                )}
            >
                {/* Spacer for the other side (Desktop only) */}
                <div className="hidden md:block flex-1" />

                {/* Connection Point (The "Leaf") */}
                <div className="absolute left-4 md:left-1/2 -ml-[5px] md:-ml-[5px] w-3 h-3 rounded-full bg-background border-2 border-primary z-10" />

                {/* Connector Line (Horizontal Branch) */}
                <div className={cn(
                    "absolute top-1/2 h-px bg-border w-8 md:w-12",
                    side === "left" ? "md:right-1/2 md:mr-0" : "md:left-1/2 md:ml-0",
                    "left-4 ml-0" // Mobile
                )} />

                {/* The Book Node */}
                <div
                    className={cn(
                        "flex-1 ml-12 md:ml-0 group cursor-pointer transition-all hover:-translate-y-1",
                        side === "left" ? "md:mr-0" : "md:ml-0"
                    )}
                    onClick={() => setIsOpen(true)}
                >
                    <div className={cn(
                        "relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all hover:shadow-md bg-card",
                        `hover:border-${themeColor}-500/50`
                    )}>
                        {/* Subtle gradient background hint */}
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                            `bg-${themeColor}-500`
                        )} />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2 justify-between">
                                <span className={cn(
                                    "text-xs font-mono uppercase tracking-wider opacity-60",
                                    side === "left" ? "md:ml-auto" : ""
                                )}>
                                    {book.period}
                                </span>
                            </div>

                            <h3 className={cn(
                                "text-2xl font-bold mb-2 group-hover:text-primary transition-colors",
                                `text-${themeColor}-900 dark:text-${themeColor}-100`
                            )}>
                                {book.name}
                            </h3>

                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {book.theme}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                                <Info className="w-3 h-3" />
                                <span>Ver detalles</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer for alignment on mobile (hidden) */}
                <div className="block md:hidden w-0" />
            </motion.div>
        </>
    );
}
