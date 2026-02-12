"use client";

import { Person } from "@/lib/genealogy-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FamilyNodeProps {
    person: Person;
    depth?: number;
}

export function FamilyNode({ person, depth = 0 }: FamilyNodeProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const hasChildren = person.children && person.children.length > 0;

    return (
        <div className="flex flex-col items-center">
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative z-10 mb-4"
            >
                <div
                    onClick={() => hasChildren && setIsExpanded(!isExpanded)}
                    className={cn(
                        "flex flex-col items-center p-4 rounded-xl border bg-card shadow-sm cursor-pointer transition-all hover:shadow-md hover:border-primary/50 relative overflow-hidden group min-w-[140px]",
                        depth === 0 && "ring-2 ring-primary/20",
                        !isExpanded && hasChildren && "opacity-90"
                    )}
                >
                    {/* Gradient Hint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1 relative z-10">
                        {person.title || "Descendiente"}
                    </span>
                    <h4 className="font-bold text-lg relative z-10">{person.name}</h4>
                    {person.spouse && (
                        <span className="text-xs text-muted-foreground mt-1 relative z-10">+ {person.spouse}</span>
                    )}

                    {hasChildren && (
                        <div className="mt-2 text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                    )}
                </div>
            </motion.div>

            <AnimatePresence>
                {hasChildren && isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col items-center"
                    >
                        {/* Connector Down from Parent */}
                        <div className="w-px h-6 bg-border" />

                        {/* Horizontal Bar */}
                        <div className="relative flex justify-center gap-8 pl-4 pr-4 border-t border-border pt-6">
                            {/* 
                   We need to hide the overhanging horizontal borders for the first and last child. 
                   Standard approach: simpler to just use ::before on children in CSS, 
                   but for now we'll rely on the flex container border-t, 
                   which connects all children topmost points.
                   The vertical lines up from children will connect to this border-t.
                */}

                            {person.children!.map((child, index) => (
                                <div key={child.id} className="relative flex flex-col items-center">
                                    {/* Vertical line UP to the horizontal bar */}
                                    <div className="absolute top-[-25px] w-px h-6 bg-border" />

                                    <FamilyNode person={child} depth={depth + 1} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
