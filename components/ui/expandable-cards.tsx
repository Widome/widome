"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ExpandableCards({ cards }: { cards: any[] }) {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100] p-4">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]"
                        >
                            <div className="relative">
                                <motion.div layoutId={`image-${active.title}-${id}`}>
                                    <Image
                                        width={800}
                                        height={600}
                                        src={active.src}
                                        alt={active.title}
                                        className="w-full h-80 lg:h-80 object-cover object-top"
                                    />
                                </motion.div>
                                <button
                                    className="absolute top-4 right-4 h-10 w-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                    onClick={() => setActive(null)}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-sky font-black text-[10px] tracking-[0.4em] uppercase mb-2"
                                        >
                                            {active.description}
                                        </motion.p>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="text-3xl font-black text-ink dark:text-neutral-200 uppercase tracking-tighter"
                                        >
                                            {active.title}
                                        </motion.h3>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        className="px-6 py-3 text-sm rounded-full font-bold bg-sky text-white flex items-center gap-2 hover:bg-sky-deep transition-colors shadow-lg"
                                    >
                                        {active.ctaText} <ArrowRight className="w-4 h-4" />
                                    </motion.a>
                                </div>

                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-stone text-base md:text-lg leading-relaxed font-light dark:text-neutral-400"
                                >
                                    {typeof active.content === "function"
                                        ? active.content()
                                        : active.content}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="group flex flex-col bg-white rounded-[32px] border border-mist hover:border-sky/30 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
                    >
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <motion.div layoutId={`image-${card.title}-${id}`} className="h-full w-full">
                                <Image
                                    fill
                                    src={card.src}
                                    alt={card.title}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="flex items-center gap-2 text-white font-black text-[10px] tracking-widest uppercase mb-1">
                                    View Specification <ArrowRight className="w-4 h-4 text-sky" />
                                </span>
                            </div>
                        </div>
                        <div className="p-10">
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-sky font-black text-[10px] tracking-[0.4em] uppercase mb-3"
                            >
                                {card.description}
                            </motion.p>
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="text-3xl font-black text-ink uppercase tracking-tighter"
                            >
                                {card.title}
                            </motion.h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
