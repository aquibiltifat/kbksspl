"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface AnimationOptions {
    y?: number;
    x?: number;
    opacity?: number;
    scale?: number;
    duration?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    end?: string;
}

export function useGSAPScrollAnimation<T extends HTMLElement>(
    options: AnimationOptions = {}
) {
    const containerRef = useRef<T>(null);

    const {
        y = 60,
        x = 0,
        opacity = 0,
        scale = 1,
        duration = 0.8,
        stagger = 0.15,
        ease = "power3.out",
        start = "top 85%",
        end = "bottom 20%",
    } = options;

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const cards = containerRef.current?.querySelectorAll(".gsap-card");

            if (cards && cards.length > 0) {
                gsap.set(cards, {
                    y,
                    x,
                    opacity,
                    scale,
                });

                gsap.to(cards, {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration,
                    stagger,
                    ease,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start,
                        end,
                        toggleActions: "play none none reverse",
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [y, x, opacity, scale, duration, stagger, ease, start, end]);

    return containerRef;
}

export function useGSAPFadeIn<T extends HTMLElement>(
    options: AnimationOptions = {}
) {
    const elementRef = useRef<T>(null);

    const {
        y = 40,
        opacity = 0,
        duration = 0.8,
        ease = "power2.out",
        start = "top 80%",
    } = options;

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(elementRef.current, { y, opacity });

            gsap.to(elementRef.current, {
                y: 0,
                opacity: 1,
                duration,
                ease,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start,
                    toggleActions: "play none none reverse",
                },
            });
        }, elementRef);

        return () => ctx.revert();
    }, [y, opacity, duration, ease, start]);

    return elementRef;
}
