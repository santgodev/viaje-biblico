"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Stage } from "@/lib/bible-data";
import { StageLayer } from "./stage-layer";

interface DepthTimelineProps {
    data: Stage[];
}

export function DepthTimeline({ data }: DepthTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Each stage corresponds to 1 viewport height (100vh) of travel in the scroll container
    // We map this scroll to Z-depth for 3D effects
    // We use CSS Scroll Snap for "magnetic" alignment

    const { scrollYProgress } = useScroll({
        container: containerRef,
    });

    const totalZ = (data.length - 1) * 2000;

    // Use spring physics for smooth camera movement even when snapping
    const scrollSpring = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        mass: 0.5
    });

    // Map 0..1 scroll progress to 0..totalZ depth
    const cameraZ = useTransform(scrollSpring, [0, 1], [0, totalZ]);

    return (
        // Main Scroll Container
        // Added 'touch-none' to prevent browser back swipe interference if needed, but 'overflow-y-auto' is key
        <div
            ref={containerRef}
            className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-black relative scroll-smooth"
        >
            {/* Fixed Background Layer */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
                {data.map((stage, index) => (
                    <GlobalBackground
                        key={`bg-${stage.id}`}
                        stage={stage}
                        index={index}
                        cameraZ={cameraZ}
                    />
                ))}
            </div>

            {/* Fixed 3D Scene Layer */}
            <div className="fixed inset-0 perspective-container pointer-events-none z-10">
                <Starfield cameraZ={cameraZ} />

                <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
                    {data.map((stage, index) => (
                        <StageLayer
                            key={stage.id}
                            stage={stage}
                            index={index}
                            stageZ={index * 2000}
                            cameraZ={cameraZ}
                        />
                    ))}
                </div>

                <NavIndicator total={data.length} currentZ={cameraZ} />
            </div>

            {/* Scrollable Track - This MUST have physical height and be scrollable */}
            <div className="relative w-full z-20">
                {/* z-20 to be above fixed layers so mouse wheel hits it? 
                    Actually, if fixed layers are pointer-events-none, clicks pass through to this. 
                    But this is empty div.
                    Let's make sure it catches events. 
                 */}
                {data.map((stage, index) => (
                    <div
                        key={`snap-${stage.id}`}
                        className="h-screen w-full snap-center border-b border-white/5"
                    />
                ))}
            </div>
        </div>
    );
}

function GlobalBackground({ stage, index, cameraZ }: { stage: Stage, index: number, cameraZ: MotionValue<number> }) {
    const stageZ = index * 2000;
    // Opacity logic:
    // Visible when approaching (stageZ - 1000)
    // Peak visibility at stageZ
    // Fades out when leaving (stageZ + 1000)
    const opacity = useTransform(cameraZ, [stageZ - 1500, stageZ, stageZ + 1500], [0, 1, 0]);

    // Optional: Slow zoom effect for background
    const scale = useTransform(cameraZ, [stageZ - 2000, stageZ + 2000], [1.1, 1]);

    if (stage.image) {
        return (
            <motion.div
                style={{ opacity, scale }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={stage.image}
                    alt=""
                    className="w-full h-full object-cover blur-sm opacity-50"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-${stage.themeColor}-950/40 to-black/80`} />
            </motion.div>
        );
    }

    // Fallback: Dynamic Color Background for stages without images
    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 w-full h-full overflow-hidden"
        >
            {/* Large colorful orb/gradient based on theme color */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] rounded-full bg-gradient-to-br from-${stage.themeColor}-900/10 via-${stage.themeColor}-950/40 to-black blur-[100px] opacity-60`} />
            <div className={`absolute inset-0 bg-${stage.themeColor}-950/5`} />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black`} />
        </motion.div>
    );
}

function Starfield({ cameraZ }: { cameraZ: MotionValue<number> }) {
    // Simple particle effect moving towards camera
    // In a real app we might use Canvas, but standard divs are okay for simple stars
    const denseStars = useMemo(() => Array.from({ length: 50 }), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {denseStars.map((_, i) => {
                // Random positions
                const x = Math.random() * 100 - 50; // -50% to 50%
                const y = Math.random() * 100 - 50;
                const zOffset = Math.random() * 10000; // Spread out straight ahead

                const z = useTransform(cameraZ, (v) => {
                    // Wrap stars so they feel infinite
                    return (v + zOffset) % 2000;
                });

                const opacity = useTransform(z, [0, 1500, 2000], [0, 1, 0]);
                const scale = useTransform(z, [0, 2000], [0.5, 3]);

                return (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full w-1 h-1"
                        style={{
                            left: "50%",
                            top: "50%",
                            x: `${x}vw`,
                            y: `${y}vh`,
                            opacity,
                            scale,
                        }}
                    />
                );
            })}
        </div>
    )
}

function NavIndicator({ total, currentZ }: { total: number, currentZ: MotionValue<number> }) {
    const progress = useTransform(currentZ, [0, (total - 1) * 2000], [0, 100]);

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
            <div className="h-64 w-1 bg-white/10 rounded-full relative">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-white rounded-full"
                    style={{ height: useTransform(progress, (p) => `${p}%`) }}
                />
            </div>
        </div>
    )
}
