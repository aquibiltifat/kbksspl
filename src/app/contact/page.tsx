"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

const contactInfo = [
    {
        icon: "/images/icon-location.png",
        title: "Our Office",
        details: ["Lucknow - 226003, UP India"],
        link: "https://www.google.com/maps/search/?api=1&query=Lucknow+226003+UP+India"
    },
    {
        icon: "/images/icon-phone.png",
        title: "Phone Number",
        details: ["+91 9305605160"],
        link: "tel:+919305605160"
    },
    {
        icon: "/images/icon-email.png",
        title: "Email Address",
        details: ["sales@kbksspl.com"],
        link: "mailto:sales@kbksspl.com"
    },
    {
        icon: "/images/icon-globe.png",
        title: "Website",
        details: ["www.kbksspl.com"],
        link: "https://www.kbksspl.com"
    },
    {
        isSocial: true,
        socialLogo: "/images/instagram-logo-colorful.png",
        title: "Instagram",
        details: ["@kbk_sourcing_services_pvt_ltd"],
        link: "https://www.instagram.com/kbk_sourcing_services_pvt_ltd?utm_source=qr&igsh=NWdoN2pmY203bnp0"
    },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    country: "",
                    subject: "",
                    message: "",
                });
            } else {
                setError(data.error || "Failed to send message. Please try again.");
            }
        } catch {
            setError("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            Get in touch with us for any inquiries about our products and services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                We&apos;re here to help. Reach out to us through any of the following channels
                                or fill out the contact form.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                                            {info.isSocial && info.socialLogo ? (
                                                <Image
                                                    src={info.socialLogo}
                                                    alt={info.title}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <Image
                                                    src={info.icon as string}
                                                    alt={info.title}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-foreground mb-1">
                                                {info.title}
                                            </h3>
                                            {info.details.map((detail) => (
                                                info.link ? (
                                                    <a
                                                        key={detail}
                                                        href={info.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline text-sm block"
                                                    >
                                                        {detail}
                                                    </a>
                                                ) : (
                                                    <p key={detail} className="text-muted-foreground text-sm">
                                                        {detail}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                                    Send us a message
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                                </p>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                        Thank you for your message! We&apos;ll get back to you soon. Check your email for confirmation.
                                    </div>
                                )}

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                                                Full Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium text-foreground">
                                                Company Name
                                            </label>
                                            <input
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="country" className="text-sm font-medium text-foreground">
                                                Country
                                            </label>
                                            {/* Wrap the select in a relative container */}
                                            <div className="relative">
                                                <select
                                                    id="country"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange as any}
                                                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none pr-10"
                                                >
                                                    <option value="">Select Country</option>
                                                    {countries.map((country) => (
                                                        <option key={country} value={country}>
                                                            {country}
                                                        </option>
                                                    ))}
                                                </select>
                                                {/* Add the absolute positioned arrow icon */}
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9305605160"
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                                Subject *
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help?"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements..."
                                            required
                                            className="w-full min-h-[150px] px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin mr-2">⏳</span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us */}
            <section className="section-padding bg-muted">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                            Why Partner With <span className="text-primary">KBK Sourcing?</span>
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6 mt-10">
                            {[
                                "Quality Products",
                                "Timely Delivery",
                                "Expert Support",
                            ].map((item) => (
                                <div key={item} className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
