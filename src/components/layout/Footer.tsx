import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services / Products", path: "/services" },
    { name: "Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
];

const industries = [
    "Oil & Gas",
    "Petrochemical & Chemical",
    "Mining & Metals",
    "Pharmaceuticals",
    "Construction & EPC",
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2 lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block group" aria-label="KBK Sourcing Services home">
                            <Image
                                src="/images/kbk-footer-logo.png"
                                alt="KBK Sourcing Services logo"
                                width={160}
                                height={160}
                                className="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                            />
                        </Link>
                        <div className="space-y-6 pr-4 pt-0">
                            <p className="text-base leading-relaxed text-white/80 text-justify">
                                KBK Sourcing Services Pvt. Ltd. is a premier global trading house and industrial sourcing partner. We specialize in end-to-end supply chain solutions for critical industries, ensuring unmatched quality and reliability.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-1 lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-white pl-3">Resources</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-sm font-medium text-white/70 transition-colors hover:text-white hover:translate-x-1 inline-block duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-white pl-3">Industries</h4>
                        <ul className="space-y-4">
                            {industries.map((industry) => (
                                <li key={industry} className="text-sm font-medium text-white/70">
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-4 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-white pl-3">Stay Connected</h4>
                        <div className="flex flex-col gap-6">
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Lucknow+226003+UP+India" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-start gap-4 group"
                            >
                                <div className="pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <Image 
                                        src="/images/google-maps-icon.png" 
                                        alt="Google Maps" 
                                        width={28} 
                                        height={28} 
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">Visit Us</p>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 leading-snug block">
                                        Lucknow - 226003,<br />Uttar Pradesh, India
                                    </span>
                                </div>
                            </a>
                            <a 
                                href="tel:+919305605160" 
                                className="flex items-start gap-4 group"
                            >
                                <div className="pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <Phone className="w-7 h-7 text-[#22C55E] stroke-[2.5px]" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">Call Support</p>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 block">
                                        +91 9305605160
                                    </span>
                                </div>
                            </a>
                            <a 
                                href="mailto:sales@kbksspl.com" 
                                className="flex items-start gap-4 group"
                            >
                                <div className="pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <Image 
                                        src="/images/gmail-icon.png" 
                                        alt="Gmail" 
                                        width={28} 
                                        height={28} 
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">Gmail</p>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 block">
                                        sales@kbksspl.com
                                    </span>
                                </div>
                            </a>
                            <a 
                                href="https://www.kbksspl.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-start gap-4 group"
                            >
                                <div className="pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <Globe className="w-7 h-7 text-[#3B82F6] stroke-[2.5px]" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">Website</p>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 block">
                                        www.kbksspl.com
                                    </span>
                                </div>
                            </a>
                            <a 
                                href="https://www.instagram.com/kbk_sourcing_services_pvt_ltd" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-start gap-4 group"
                            >
                                <div className="pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <Image 
                                        src="/images/instagram-icon.png" 
                                        alt="Instagram" 
                                        width={28} 
                                        height={28} 
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">Instagram</p>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 block">
                                        @kbk_sourcing_services
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-8 bg-black/10">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-xs text-white/60 tracking-wide order-2 md:order-1">
                        © {currentYear} KBK Sourcing Services Pvt. Ltd. | All Corporate Rights Reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 order-1 md:order-2">
                        <Link href="/privacy" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors tracking-widest uppercase">Privacy Policy</Link>
                        <Link href="/terms" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors tracking-widest uppercase">Terms of Use</Link>
                        <Link href="/cookies" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors tracking-widest uppercase">Cookie Policy</Link>
                        <Link href="/sitemap" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors tracking-widest uppercase">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
