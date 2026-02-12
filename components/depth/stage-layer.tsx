"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { Stage } from "@/lib/bible-data";
import Image from "next/image";

interface StageLayerProps {
    stage: Stage;
    index: number;
    stageZ: number;
    cameraZ: MotionValue<number>;
}

export function StageLayer({ stage, index, stageZ, cameraZ }: StageLayerProps) {
    // distance from camera. 
    // If stageZ is 2000 and cameraZ is 0, distance is 2000.
    // If cameraZ increases to 2000, distance is 0.

    // We simulate depth. 
    // When distance is 0, scale is 1, opacity is 1.
    // When distance is 2000 (far away), scale is small, opacity low.
    // When distance is -500 (passed), scale is huge, opacity 0.

    const opacity = useTransform(cameraZ, [stageZ - 1000, stageZ, stageZ + 500], [0, 1, 0]);
    const scale = useTransform(cameraZ, [stageZ - 2000, stageZ, stageZ + 500], [0.5, 1, 2]);
    const y = useTransform(cameraZ, [stageZ - 2000, stageZ, stageZ + 500], [50, 0, -100]);
    const blur = useTransform(cameraZ, [stageZ - 1000, stageZ, stageZ + 500], [4, 0, 10]);

    // We only start showing it when camera is somewhat close (e.g. within 2000 units)
    // And hide it when passed.

    // The "active" range is roughly [stageZ - 2000, stageZ + 1000]

    return (
        <motion.div
            style={{
                opacity,
                scale,
                y,
                filter: useTransform(blur, (b) => `blur(${b}px)`),
                zIndex: index, // Ensure correct stacking order if they overlap
            }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
        >
            <div className="relative w-full max-w-4xl px-8 flex flex-col items-center justify-center text-center">

                {/* Background Atmosphere / Glow */}
                <div className={`absolute inset-0 -z-10 rounded-full blur-[100px] opacity-20 bg-${stage.themeColor}-500/30`} />

                {/* Stage Number/ID */}
                <div className="mb-8">
                    <span className={`inline-block px-4 py-1 rounded-full border border-${stage.themeColor}-500/50 text-${stage.themeColor}-200 text-sm tracking-[0.2em] font-light uppercase`}>
                        Stage {index + 1}
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        {stage.name}
                    </span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12">
                    {stage.description}
                </p>

                {/* Books Preview Grid - simplistic for 3D view */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {stage.books.slice(0, 4).map((book) => (
                        <div key={book.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-left">
                            <div className={`text-xs text-${stage.themeColor}-400 mb-1`}>{book.id.substr(0, 3).toUpperCase()}</div>
                            <div className="text-lg font-bold text-white mb-1">{book.name}</div>
                            <div className="text-xs text-gray-400 line-clamp-2">{book.theme}</div>
                        </div>
                    ))}
                    {stage.books.length > 4 && (
                        <div className="flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">
                            + {stage.books.length - 4} more
                        </div>
                    )}
                </div>

                {/* Background Image if available - rendered subtly */}
                {/* {stage.image && (
                    <div className="absolute inset-0 -z-20 opacity-30 mix-blend-overlay">
                        <Image
                            src={stage.image}
                            alt={stage.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                    </div>
                )} */}
            </div>
        </motion.div>
    );
}
