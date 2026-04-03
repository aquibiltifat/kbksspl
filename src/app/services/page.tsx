import type { Metadata } from "next";
import Image from "next/image";
import {
    Factory, Wrench, Zap, Gauge, Shield, Settings,
    Building, HandMetal, Package, Link2, Wind, FlaskConical,
    Layers, Flame, Gem
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatWeDoSection from "@/components/services/WhatWeDoSection";
import IndustriesDiagram from "@/components/services/IndustriesDiagram";

export const metadata: Metadata = {
    title: "Industrial Services & AMC | Plant Maintenance India",
    description:
        "Annual maintenance contracts, preventive maintenance, breakdown services, and factory equipment solutions. Best industrial AMC contractors in India.",
    keywords: [
        "industrial AMC contractors India",
        "preventive maintenance service provider India",
        "plant maintenance services for industries",
        "annual maintenance contract for factories",
        "breakdown maintenance services India",
        "factory equipment maintenance solutions India",
        "industrial maintenance services India"
    ],
    openGraph: {
        title: "Services & Products | KBK Sourcing",
        description: "Industrial equipment, AMC services, and plant maintenance solutions in India.",
    },
};


const products = [
    { name: "Industrial Equipment", description: "Air compressor, boiler, generator, transformer, diesel engine, chillers, forklift", icon: Factory },
    { name: "Mechanical Spares", description: "Bearings, gears, shafts, and couplings", icon: Settings },
    { name: "Electrical & Electronics", description: "Motors, circuit breakers, switches, sensors, and automation components", icon: Zap },
    { name: "Instrumentation Spares", description: "Pressure gauges, flow meters, control panels, and calibration tools", icon: Gauge },
    { name: "Safety & Sanitary Supplies", description: "PPE, helmets, gloves, fire safety equipment, and hygiene products", icon: Shield },
    { name: "Fabricated Spare Parts", description: "Custom parts and assemblies for specialized machinery", icon: Wrench },
    { name: "Heavy Steel Structures", description: "Beams, columns, frameworks, and industrial supports", icon: Building },
    { name: "Hand & Measurement Tools", description: "Wrenches, torque tools, calipers, micrometers, and precision instruments", icon: HandMetal },
    { name: "Industrial Raw Materials & Packing", description: "Chemicals, metals, alloys, polymers, and packaging solutions", icon: Package },
    { name: "Lashing & Rigging Tools", description: "Chains, hooks, clamps, and tie-down equipment", icon: Link2 },
    { name: "Pneumatic Tools", description: "Air compressors, drills, grinders, and impact tools", icon: Wind },
    { name: "Chemicals", description: "Industrial chemicals, solvents, acids, and specialty chemicals", icon: FlaskConical },
    { name: "Metals & Alloys", description: "Steel, aluminum, copper, nickel, and other alloys", icon: Layers },
    { name: "Refractories & Insulation", description: "Fire bricks, ceramic fibers, boards, and high-temp resistant materials", icon: Flame },
    { name: "Ceramic-Based Products", description: "Industrial ceramics, coatings, and specialty components", icon: Gem },
];

export default function ServicesPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Services & Products
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            We provide genuine branded industrial products and equipment to keep your operations running smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <WhatWeDoSection />

            {/* Target Industries */}
            <IndustriesDiagram />

            {/* Why Choose Us */}
            <section className="section-padding bg-primary">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed">
                            We combine quality, reliability, and timely delivery to support your industrial projects
                            and operations, making us a trusted partner across multiple sectors worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Specialty Heading */}
            <section className="pt-16 pb-4 bg-background border-t border-border/50 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                        We Also <span className="text-primary">Specialize In</span>
                    </h2>
                </div>
            </section>

            {/* 1. Garments */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-5/12 text-center md:text-left animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Garments <span className="text-primary">(Manufacturing)</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We specialize in manufacturing high-quality girl's apparel and beautifully crafted traditional Indian suits. Our dedicated facilities ensure premium fabric selection, elegant designs, and export-ready custom garment manufacturing tailored to global standards.
                            </p>
                        </div>
                        <div className="md:w-7/12 grid grid-cols-2 gap-4 w-full">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/garments_apparel.png" alt="Garment 1" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/girls_dress_1.png" alt="Little Girls Apparel" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/girls_dress_2.png" alt="Denim Dress" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/girls_dress_3.png" alt="Floral Ruffles Outfit" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Attar Exports */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-5/12 text-center md:text-left animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Attar <span className="text-primary">Exports</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                As prominent exporters, we bring you premium, authentic fragrances and concentrated perfume oils. Sourced and crafted with the utmost care, our attars perfectly capture rich botanical essences and are beautifully presented in elegant crystal bottles.
                            </p>
                        </div>
                        <div className="md:w-7/12 grid grid-cols-2 gap-4 w-full">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/attar_perfume.png" alt="Attar 1" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/attar_perfume_2.png" alt="Attar 2" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/attar_perfume_3.png" alt="Attar 3" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/attar_perfume_4.png" alt="Attar 4" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Ramzan/Eid Festival Decorations */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-5/12 text-center md:text-left animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ramzan & Eid <span className="text-primary">Decorations</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Celebrate the season with highly sought-after, beautifully crafted decoration items. Our export-quality festival supplies ranging from ornate lanterns to elegant tablescapes will add a premium, festive glow to Ramzan and Eid celebrations everywhere.
                            </p>
                        </div>
                        <div className="md:w-7/12 grid grid-cols-2 gap-4 w-full">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/eid_decorations.png" alt="Eid Decor 1" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/eid_decorations_crescent.png" alt="Eid Crescent Moon Decoration" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/eid_decorations_tableware.png" alt="Eid Tableware Display" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/eid_decorations_4.png" alt="Eid Decor 4" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Wooden Antique Attar Boxes */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-5/12 text-center md:text-left animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Wooden Antique <span className="text-primary">Attar Boxes</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Complete the premium attar experience with our unique, handcrafted wooden antique boxes. These elegant containers are exclusively designed to protect and present luxury fragrances with timeless, traditional sophistication.
                            </p>
                        </div>
                        <div className="md:w-7/12 grid grid-cols-2 gap-4 w-full">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/wooden_box_1.png" alt="Wooden Antique Attar Box" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/wooden_box_2_tall.png" alt="Tall Wooden Antique Attar Box" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/wooden_box_3.png" alt="Wooden Antique Attar Box 3" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/wooden_box_4.png" alt="Wooden Antique Attar Box 4" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Packaging Material */}
            <section className="section-padding bg-background border-b border-border/50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-5/12 text-center md:text-left animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Packaging <span className="text-primary">Material</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We supply high-grade retail and industrial packaging materials designed to ensure absolute safety and a premium presentation for your products. From protective foams to elegantly designed export boxes, we've got you covered.
                            </p>
                        </div>
                        <div className="md:w-7/12 grid grid-cols-2 gap-4 w-full">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/packaging_material_1.png" alt="Sustainable Packaging" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/packaging_material_crinkle.png" alt="Crinkle Paper Void Fill" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/packaging_material_kraft.png" alt="Kraft Paper Retail Packaging" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md"><Image src="/images/packaging_material_gift.png" alt="Premium Gift Wrapping" fill className="object-cover hover:scale-105 transition-transform duration-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Our <span className="text-primary">Commitment</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                After-Sales Service
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Reliable support and assistance to ensure smooth operation and long-term performance after delivery.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                Quality Products
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Genuine, high-quality products sourced from trusted brands and manufacturers.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                Anticipating Client Demands
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Proactively understanding client needs to deliver timely and effective solutions.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                High Level of Proficiency
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Experienced professionals with strong technical knowledge and industry expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
