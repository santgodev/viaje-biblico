"use client";

import { genealogyData } from "@/lib/genealogy-data";
import { FamilyNode } from "@/components/genealogy/family-node";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, RefreshCw, Move } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GenealogyPage() {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const resetView = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div className="flex flex-col h-screen bg-background overflow-hidden selection:bg-primary/20">
            {/* Header / Controls */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight pointer-events-auto">Árbol de la Vida</h1>
                    <p className="text-muted-foreground max-w-md pointer-events-auto">
                        Explora el linaje desde Adán hasta las 12 Tribus.
                        Arrastra para moverte, usa los controles para zoom.
                    </p>
                </div>

                <div className="flex flex-col gap-2 pointer-events-auto bg-card/80 backdrop-blur border p-2 rounded-xl shadow-lg">
                    <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.min(s + 0.1, 2))}>
                        <Plus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.max(s - 0.1, 0.4))}>
                        <Minus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={resetView}>
                        <RefreshCw className="w-4 h-4" />
                    </Button>
                    <div className="h-px bg-border my-1" />
                    <div className="flex justify-center p-2 text-muted-foreground">
                        <Move className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Canvas */}
            <div
                ref={containerRef}
                className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <motion.div
                    className="min-h-full min-w-full flex items-center justify-center p-20 origin-center"
                    animate={{
                        x: position.x,
                        y: position.y,
                        scale: scale
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="pt-20">
                        <FamilyNode person={genealogyData} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
