"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useGSAPScrollAnimation } from "@/hooks/useGSAPScrollAnimation";

export default function WhatWeDoSection() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const cardsRef = useGSAPScrollAnimation<HTMLDivElement>({
        y: 70,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out"
    });

    return (
        <section className="section-padding bg-background overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        What We <span className="text-primary">Do</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We provide genuine branded industrial products and equipment to keep your operations running
                        smoothly. Our offerings cover a wide range of industries, from Oil & Gas to Construction and
                        Pharmaceuticals.
                    </p>
                </div>

                {/* Top Images Row */}
                <div ref={ref} className="flex justify-between items-center mb-8 px-4">
                    <div
                        className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Image
                            src="/images/product-gauge.png"
                            alt="Industrial Pressure Gauge"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                    <div
                        className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Image
                            src="/images/product-bearing.png"
                            alt="Industrial Ball Bearing"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Products Grid - Card Layout with Tool Images */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
                        Our Products & Equipment
                    </h3>
                    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/air-compressor.png"
                                    alt="Industrial Equipment"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Industrial Equipment</h4>
                            <p className="text-sm text-muted-foreground">Air compressor, boiler, generator, transformer, diesel engine, chillers, forklift</p>
                        </div>

                        {/* Card 2 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/mechanical-spares-ultimate.png"
                                    alt="Mechanical Spares"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Mechanical Spares</h4>
                            <p className="text-sm text-muted-foreground">Bearings, gears, shafts, and couplings</p>
                        </div>

                        {/* Card 3 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/electrical-spares.png"
                                    alt="Electrical & Electronics"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Electrical & Electronics</h4>
                            <p className="text-sm text-muted-foreground">Motors, circuit breakers, switches, sensors</p>
                        </div>

                        {/* Card 4 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/product-gauge.png"
                                    alt="Instrumentation Spares"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Instrumentation Spares</h4>
                            <p className="text-sm text-muted-foreground">Pressure gauges, flow meters, control panels</p>
                        </div>

                        {/* Card 5 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/product-safety.png"
                                    alt="Safety Supplies"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Safety & Sanitary Supplies</h4>
                            <p className="text-sm text-muted-foreground">PPE, helmets, gloves, fire safety equipment</p>
                        </div>

                        {/* Card 6 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50 text-center">
                            <div className="w-28 h-28 mb-4 mx-auto">
                                <Image
                                    src="/images/product-fabricated.png"
                                    alt="Fabricated Parts"
                                    width={112}
                                    height={112}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Fabricated Spare Parts</h4>
                            <p className="text-sm text-muted-foreground">Custom parts and assemblies for machinery</p>
                        </div>

                        {/* Card 7 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/product-steel.png"
                                    alt="Steel Structures"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Heavy Steel Structures</h4>
                            <p className="text-sm text-muted-foreground">Beams, columns, frameworks, supports</p>
                        </div>

                        {/* Card 8 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/tool-caliper.png"
                                    alt="Measurement Tools"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Hand & Measurement Tools</h4>
                            <p className="text-sm text-muted-foreground">Wrenches, torque tools, calipers, micrometers</p>
                        </div>

                        {/* Card 9 */}
                        <div className="gsap-card bg-muted/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-muted/50">
                            <div className="w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src="/images/product-raw-materials.png"
                                    alt="Raw Materials"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Industrial Raw Materials</h4>
                            <p className="text-sm text-muted-foreground">Chemicals, metals, alloys, polymers</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Images Row */}
                <div className="flex justify-between items-center px-4">
                    <div
                        className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                        style={{ animationDelay: '0.4s' }}
                    >
                        <Image
                            src="/images/product-piston.png"
                            alt="Industrial Hydraulic Piston"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                    <div
                        className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                        style={{ animationDelay: '0.4s' }}
                    >
                        <Image
                            src="/images/product-gear.png"
                            alt="Industrial Gear"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
