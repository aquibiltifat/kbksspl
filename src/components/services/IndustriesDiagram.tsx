"use client";

import React from "react";
import Image from "next/image";

interface IndustryItem {
    name: string;
    description: string;
    image: string;
    color: string;
    bgColor: string;
    borderColor: string;
}

const industries: IndustryItem[] = [
    {
        name: "Oil & Gas",
        description: "Exploration, production, and distribution support",
        image: "/images/industries/oil-gas.png",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        name: "Mining & Metals",
        description: "Materials and equipment for mining and processing",
        image: "/images/industries/mining-metals.png",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        name: "Petrochemical & Chemical Plants",
        description: "Raw materials and process solutions",
        image: "/images/industries/petrochemical.png",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
    {
        name: "Pharmaceuticals",
        description: "Products meeting strict quality standards",
        image: "/images/industries/pharmaceuticals.png",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200"
    },
    {
        name: "Construction & EPC Projects",
        description: "Materials and services for large-scale projects",
        image: "/images/industries/construction-epc.png",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
    },
    {
        name: "Cement Industry",
        description: "Industrial supplies for cement manufacturing",
        image: "/images/industries/cement-industry.png",
        color: "text-slate-600",
        bgColor: "bg-slate-50",
        borderColor: "border-slate-200"
    },
];

const IndustriesDiagram = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto py-20 px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    Our Target <span className="text-primary">Industries</span>
                </h2>
                <p className="text-muted-foreground">
                    We serve a wide range of industries, delivering quality products and solutions tailored to each sector.
                </p>
            </div>

            {/* Desktop Diagram (Hidden on Mobile) */}
            <div className="hidden lg:block relative h-[800px] w-full mt-10">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-64 h-64 rounded-full border-[8px] border-black bg-white flex items-center justify-center ring-8 ring-black">
                        <div className="text-center p-4">
                            <span className="text-primary font-heading font-bold text-3xl block tracking-tight">INDUSTRIES</span>
                            <span className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em] mt-1 block">WE SERVE</span>
                        </div>
                    </div>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800">
                    <line x1="600" y1="400" x2="250" y2="150" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="600" y1="400" x2="950" y2="150" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="600" y1="400" x2="200" y2="400" className="stroke-primary/30 stroke-2 dash-animation" />
                    <line x1="600" y1="400" x2="1000" y2="400" className="stroke-primary/30 stroke-2 dash-animation" />
                    <line x1="600" y1="400" x2="250" y2="650" className="stroke-primary/20 stroke-2 dash-animation" />
                    <line x1="600" y1="400" x2="950" y2="650" className="stroke-primary/20 stroke-2 dash-animation" />

                    <style jsx>{`
                        .dash-animation {
                            stroke-dasharray: 10;
                            animation: dash 15s linear infinite;
                        }
                        @keyframes dash {
                            to {
                                stroke-dashoffset: -100;
                            }
                        }
                    `}</style>
                </svg>

                {/* Nodes */}
                {industries.map((ind, i) => {
                    const positions = [
                        { top: '0%', left: '5%' },     // Oil & Gas
                        { top: '0%', right: '5%' },    // Mining
                        { top: '35%', left: '-5%' },   // Petrochemical
                        { top: '35%', right: '-5%' },  // Pharmaceuticals
                        { bottom: '0%', left: '5%' },  // Construction
                        { bottom: '0%', right: '5%' }  // Cement
                    ];
                    const pos = positions[i];

                    return (
                        <div key={ind.name} className="absolute group z-10 hover:z-[60] transition-all duration-300" style={pos}>
                            <div className={`relative p-0 rounded-2xl border-2 bg-white ${ind.borderColor} shadow-medium card-hover w-[300px] overflow-hidden transition-all duration-500 group-hover:shadow-glow group-hover:-translate-y-4 group-hover:scale-105`}>
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={ind.image}
                                        alt={ind.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <h3 className="absolute bottom-3 left-5 text-lg font-heading font-bold text-white leading-tight pr-4">{ind.name}</h3>
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">{ind.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile/Tablet Layout (Grid with Central Hub) */}
            <div className="lg:hidden">
                {/* Central Hub for Mobile */}
                <div className="flex justify-center mb-10">
                    <div className="w-48 h-48 rounded-full border-[6px] border-black bg-white flex items-center justify-center ring-8 ring-black">
                        <div className="text-center p-4">
                            <span className="text-primary font-heading font-bold text-xl block tracking-tight">INDUSTRIES</span>
                            <span className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em] mt-1 block">WE SERVE</span>
                        </div>
                    </div>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {industries.map((ind) => (
                        <div key={ind.name} className={`relative rounded-2xl border-2 bg-white ${ind.borderColor} shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                            <div className="relative h-40 w-full">
                                <Image
                                    src={ind.image}
                                    alt={ind.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-3 left-4 text-lg font-heading font-bold text-white">{ind.name}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-muted-foreground leading-relaxed">{ind.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesDiagram;
