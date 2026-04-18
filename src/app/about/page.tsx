import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Shield, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ValuesDiagram from "@/components/about/ValuesDiagram";

export const metadata: Metadata = {
    title: "About Us | Best Factory Service Company in India",
    description:
        "Leading industrial maintenance company in India. Quality-focused procurement, global vendor network, and decades of expertise in factory maintenance.",
    keywords: [
        "best factory service company in India",
        "industrial maintenance company India",
        "factory maintenance company India",
        "industrial services India"
    ],
    openGraph: {
        title: "About KBK Sourcing Services",
        description: "Leading industrial maintenance company in India with global expertise.",
        images: ["/images/about-image.png"],
    },
};

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/mission-team-collaboration.png"
                        alt="Team Collaboration"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Green Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-olive-dark/95" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            A professionally managed global trading and industrial sourcing organization based in India & abroad.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-foreground leading-relaxed mb-6">
                            KBK Sourcing Services Pvt. Ltd. is a professionally managed global trading and industrial
                            sourcing organization based in India, committed to delivering high-quality materials,
                            engineered products, and reliable supply solutions to industries worldwide. As a dynamic
                            and forward-thinking trading house, KBK operates with a clear focus on quality, speed,
                            integrity, and long-term partnerships.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            With a strong foundation in international trade and sourcing, we specialize in supplying
                            a diverse range of industrial materials and services that support critical operations across
                            Oil & Gas, EPC, Petrochemical, Chemical, Pharmaceutical, Mining, Construction, and
                            Manufacturing sectors. Our ability to understand complex technical requirements and convert
                            them into dependable supply solutions has enabled us to serve clients across multiple
                            geographies with consistency and confidence.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At KBK, we believe that customer satisfaction is the ultimate measure of success. Every
                            engagement is driven by a deep understanding of client needs, strict adherence to quality
                            standards, and a commitment to delivering value beyond expectations. Through our global vendor
                            network, trusted channel partners, and structured procurement processes, we ensure that every
                            product supplied meets stringent performance, safety, and compliance requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-muted overflow-hidden">
                <div className="container-custom space-y-24">
                    {/* Vision Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Vision</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our vision is to emerge as a leading global force in the trading and industrial sourcing
                                industry, recognized for excellence in quality, reliability, and customer-centric solutions.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We aspire to consistently deliver high-quality products and value-driven services that not
                                only meet but exceed the evolving expectations of our customers across international markets.
                                Through innovation, integrity, and strategic growth, KBK aims to set new benchmarks in global
                                trade while building long-lasting partnerships founded on trust and performance.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border group">
                            <Image
                                src="/images/vision-kbk-global-partners.png"
                                alt="Our Vision - KBK Global Partners"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                At KBK Sourcing Services Pvt. Ltd., we foster a caring and considerate work environment
                                that values the well-being and growth of our employees. Our culture is built on the
                                principles of empowerment, flexibility, collaboration, recognition, and respect.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our mission is to create sustainable value by delivering efficient, and ethical trading
                                solutions while nurturing a supportive and people-centric work culture & recognizing
                                them as the foundation of our success.
                            </p>
                            <div className="mb-6">
                                <p className="text-base font-semibold text-foreground mb-3">Our organizational culture is deeply rooted in:</p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span><strong className="text-foreground">Empowerment</strong> – encouraging ownership, accountability, and innovation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span><strong className="text-foreground">Flexibility</strong> – adapting swiftly to market dynamics and client needs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span><strong className="text-foreground">Collaboration</strong> – working as one team with clients, partners, and stakeholders</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span><strong className="text-foreground">Recognition</strong> – valuing performance, dedication, and excellence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span><strong className="text-foreground">Respect</strong> – upholding dignity, diversity, and ethical conduct</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Through these principles, we strive to deliver superior customer experiences, strengthen
                                global partnerships, and contribute meaningfully to the long-term success and growth of
                                the industries we serve.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border group">
                            <Image
                                src="/images/mission-team-collaboration.png"
                                alt="Our Mission - Team Collaboration"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-background overflow-hidden relative">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Our <span className="text-primary">Core Values</span>
                        </h2>
                        <p className="text-muted-foreground">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    <ValuesDiagram />
                </div>
            </section>

            {/* Spare Parts Showcase */}
            <section className="section-padding bg-muted/50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Premium <span className="text-primary">Industrial Spares</span>
                        </h2>
                        <p className="text-muted-foreground">
                            We stock and source a wide range of high-quality spare parts and components
                            to ensure your operations run smoothly without interruption.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 text-center">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-8">
                                <div className="relative h-48 md:h-56 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                                    <Image
                                        src="/images/card_electrical.png"
                                        alt="Electrical Components"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-48 md:h-56 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                                    <Image
                                        src="/images/card_mechanical.png"
                                        alt="Mechanical Components"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-48 md:h-56 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                                    <Image
                                        src="/images/card_instrumentation.png"
                                        alt="Instrumentation Components"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-48 md:h-56 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                                    <Image
                                        src="/images/card_valves.png"
                                        alt="Industrial Valves"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl font-heading font-semibold text-foreground mb-4">MECHANICAL &nbsp;&nbsp;&nbsp;&nbsp; ELECTRICAL &nbsp;&nbsp;&nbsp;&nbsp; INSTRUMENTATIONS</h3>
                                <p className="text-lg text-muted-foreground">
                                    A comprehensive integration of high-quality electrical systems, precision mechanical components, and advanced monitoring instrumentations for seamless industrial operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="relative section-padding overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/quality-assurance-bg.png"
                        alt="Quality Assurance Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Shield className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                            Quality Assurance
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
                            At KBK Sourcing Services Pvt. Ltd., KBK is dedicated to provide high-quality products to
                            our customers. We deliver genuine, reliable, and high-performance industrial products that
                            meet international standards.
                        </p>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-12">
                            Specializing in import-export of steel, ceramics, and a wide range of industrial materials,
                            we ensure every product is carefully sourced, verified, and compliant. Our commitment to
                            ethical business practices, transparency, and consistent quality makes KBK a trusted partner
                            for industries worldwide.
                        </p>

                        {/* Our Target Industries */}
                        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
                            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4 text-center">
                                Our Target Industries
                            </h3>
                            <p className="text-primary-foreground/80 mb-6 text-center">
                                We serve a wide range of industries, delivering quality products and solutions tailored to each sector:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 text-primary-foreground/90">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Oil & Gas</strong>
                                        <span className="text-primary-foreground/70"> – Exploration, production, and distribution support</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Mining & Metals</strong>
                                        <span className="text-primary-foreground/70"> – Materials and equipment for mining and processing</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Petrochemical & Chemical Plants</strong>
                                        <span className="text-primary-foreground/70"> – Raw materials and process solutions</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Pharmaceuticals</strong>
                                        <span className="text-primary-foreground/70"> – Products meeting strict quality standards</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Construction & EPC Projects</strong>
                                        <span className="text-primary-foreground/70"> – Materials and services for large-scale projects</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Cement Industry</strong>
                                        <span className="text-primary-foreground/70"> – Industrial supplies for cement manufacturing</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 md:col-span-2">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-primary-foreground" />
                                    <div>
                                        <strong className="text-primary-foreground">Overseas Trading</strong>
                                        <span className="text-primary-foreground/70"> – Seamless solutions for international trade</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proficiency */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                            High Level of <span className="text-primary">Proficiency</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At our organization, we recognize and nurture individual expertise to drive overall growth.
                            By embracing a culture of excellence and precision, we consistently deliver superior results,
                            enabling us to expand our global client base and build long-term partnerships worldwide.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
