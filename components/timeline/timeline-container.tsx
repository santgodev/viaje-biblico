"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function TimelineContainer({ children, className }: TimelineContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={containerRef} className={cn("relative min-h-screen py-20", className)}>
            {/* Central Trunk Line (Background) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent" />

            {/* Progress Line (Fills up as you scroll) */}
            <motion.div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-primary origin-top"
                style={{ scaleY }}
            />

            <div className="relative z-10 space-y-32">
                {children}
            </div>
        </div>
    );
}
