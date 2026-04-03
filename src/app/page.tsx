"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useGSAPScrollAnimation, useGSAPFadeIn } from "@/hooks/useGSAPScrollAnimation";

const industries = [
  { name: "Oil & Gas", image: "/images/industries/oil-gas.png" },
  { name: "Petrochemical", image: "/images/industries/petrochemical.png" },
  { name: "Mining & Metals", image: "/images/industries/mining-metals.png" },
  { name: "Pharmaceuticals", image: "/images/industries/pharmaceuticals.png" },
  { name: "Construction & EPC", image: "/images/industries/construction-epc.png" },
  { name: "Overseas Trading", image: "/images/industries/overseas-trading.png" },
];

const features = [
  {
    image: "/images/features/global-sourcing.png",
    title: "Global Sourcing",
    description: "Access to a worldwide network of trusted manufacturers and suppliers.",
  },
  {
    image: "/images/features/quality-assurance.png",
    title: "Quality Assurance",
    description: "Every product meets stringent international quality standards.",
  },
  {
    image: "/images/features/timely-delivery.png",
    title: "Timely Delivery",
    description: "Reliable logistics ensuring on-time delivery worldwide.",
  },
  {
    image: "/images/features/expert-support.png",
    title: "Expert Support",
    description: "Dedicated team with deep industry knowledge and expertise.",
  },
];

const heroSlides = [
  {
    image: "/images/hero-slide-1.png",
    title: "Your Trusted Partner in Global Sourcing",
    subtitle: "KBK Sourcing Services Pvt. Ltd. delivers high-quality materials, engineered products, and reliable supply solutions to industries worldwide.",
  },
  {
    image: "/images/hero-slide-2.png",
    title: "Premium Industrial Steel & Piping Solutions",
    subtitle: "We specialize in stocking and sourcing top-grade steel pipes, fittings, and industrial raw materials for major infrastructure projects.",
  },
  {
    image: "/images/hero-slide-3.png",
    title: "Worldwide Delivery & Supply Chain Excellence",
    subtitle: "End-to-end logistics support ensuring your goods reach any corner of the globe safely and on time.",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // GSAP scroll animation refs
  const featuresRef = useGSAPScrollAnimation<HTMLDivElement>({
    y: 80,
    stagger: 0.12,
    duration: 0.7
  });
  const industriesRef = useGSAPScrollAnimation<HTMLDivElement>({
    y: 60,
    scale: 0.95,
    stagger: 0.08,
    duration: 0.6
  });
  const aboutRef = useGSAPFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-primary">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 h-full flex items-center">
              <div
                className={`max-w-3xl transition-all duration-700 transform ${currentSlide === index ? "translate-y-0 opacity-100 delay-300" : "translate-y-10 opacity-0"
                  }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                  {slide.subtitle}
                </p>
                {/* Only show buttons on first slide */}
                {index === 0 && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white border-none text-lg h-14 px-8 rounded-md transition-all duration-300 shadow-lg hover:translate-y-[-2px]"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center text-white border border-white hover:bg-white/20 text-lg h-14 px-8 rounded-md backdrop-blur-sm transition-all duration-300"
                    >
                      Our Services
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">KBK Sourcing?</span>
            </h2>
            <p className="text-muted-foreground">
              We combine quality, reliability, and timely delivery to support your industrial projects worldwide.
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="gsap-card group p-6 bg-card rounded-xl border border-border shadow-soft card-hover"
              >
                <div className="relative w-full h-32 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-muted-foreground">
              Delivering quality products and solutions tailored to each sector.
            </p>
          </div>

          <div ref={industriesRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="gsap-card group p-4 bg-card rounded-xl border border-border text-center card-hover flex flex-col items-center"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-heading font-semibold text-foreground">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div ref={aboutRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Global Trading & <span className="text-primary">Sourcing Partner</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KBK Sourcing Services Pvt. Ltd. is a professionally managed global trading and industrial
                sourcing organization based in India, committed to delivering high-quality materials,
                engineered products, and reliable supply solutions to industries worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Quality-focused procurement",
                  "Global vendor network",
                  "Strict compliance standards",
                  "Long-term partnerships",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative animate-slide-up">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="/images/about-image.png"
                  alt="Industrial Equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl border border-border shadow-soft hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">Serving worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let us help you source high-quality industrial products with reliability and efficiency.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 rounded-md transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
