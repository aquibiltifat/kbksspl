"use client";

import React from "react";
import { Zap, Scaling, Handshake, Trophy, HeartHandshake } from "lucide-react";

interface ValueItem {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    borderColor: string;
}

const values: ValueItem[] = [
    {
        title: "Empowerment",
        description: "Encouraging ownership, accountability, and innovation",
        icon: Zap,
        color: "text-amber-500",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        title: "Flexibility",
        description: "Adapting swiftly to market dynamics and client needs",
        icon: Scaling,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        title: "Collaboration",
        description: "Working as one team with clients, partners, and stakeholders",
        icon: Handshake,
        color: "text-rose-500",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200"
    },
    {
        title: "Recognition",
        description: "Valuing performance, dedication, and excellence",
        icon: Trophy,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        title: "Respect",
        description: "Upholding dignity, diversity, and ethical conduct",
        icon: HeartHandshake,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
];

const ValuesDiagram = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
            {/* Desktop Diagram (Hidden on Mobile) */}
            <div className="hidden lg:block relative h-[650px] w-full">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-glow animate-pulse">
                        <span className="text-primary-foreground font-heading font-bold text-lg text-center leading-tight">
                            OUR<br />CORE<br />VALUES
                        </span>
                    </div>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 650">
                    {/* Lines from center (400, 325) to each node */}
                    <line x1="400" y1="325" x2="200" y2="150" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="400" y1="325" x2="600" y2="150" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="400" y1="325" x2="150" y2="400" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="400" y1="325" x2="650" y2="400" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="400" y1="325" x2="400" y2="550" className="stroke-primary/20 stroke-2 dash-animation" />

                    <style jsx>{`
              .dash-animation {
                stroke-dasharray: 8;
                animation: dash 20s linear infinite;
              }
              @keyframes dash {
                to {
                  stroke-dashoffset: -100;
                }
              }
            `}</style>
                </svg>

                {/* Nodes */}
                {values.map((v, i) => {
                    const Icon = v.icon;
                    // Define positions for each node
                    const positions = [
                        { top: '5%', left: '10%' },    // Empowerment
                        { top: '5%', right: '10%' },   // Flexibility
                        { top: '45%', left: '0%' },    // Collaboration
                        { top: '45%', right: '0%' },   // Recognition
                        { bottom: '5%', left: '37.5%' } // Respect
                    ];
                    const pos = positions[i];

                    return (
                        <div key={v.title} className="absolute group" style={pos}>
                            <div className={`p-6 rounded-2xl border-2 bg-white ${v.borderColor} shadow-medium card-hover w-72 transition-all duration-300 group-hover:shadow-strong group-hover:-translate-y-2`}>
                                <div className={`w-14 h-14 rounded-xl ${v.bgColor} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}>
                                    <Icon className={`w-7 h-7 ${v.color}`} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{v.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile/Tablet Layout (Vertical Diagram) */}
            <div className="lg:hidden space-y-8 max-w-md mx-auto relative">
                {/* Vertical line connecting nodes on mobile */}
                <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-dashed-primary pointer-events-none opacity-20"></div>

                <div className="flex flex-col items-center mb-12 relative z-10">
                    <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-lg mb-4">
                        <span className="text-primary-foreground font-heading font-bold text-xs text-center leading-tight">
                            CORE<br />VALUES
                        </span>
                    </div>
                </div>

                <div className="space-y-6">
                    {values.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <div key={v.title} className="relative z-10">
                                <div className={`p-6 rounded-2xl border-2 bg-white ${v.borderColor} shadow-md flex items-start gap-5 transition-all duration-300 hover:shadow-lg`}>
                                    <div className={`w-14 h-14 shrink-0 rounded-xl ${v.bgColor} flex items-center justify-center`}>
                                        <Icon className={`w-7 h-7 ${v.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-foreground mb-1">{v.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <style jsx>{`
            .bg-dashed-primary {
                background-image: linear-gradient(to bottom, var(--color-primary) 50%, transparent 50%);
                background-size: 2px 10px;
            }
          `}</style>
            </div>
        </div>
    );
};

export default ValuesDiagram;
