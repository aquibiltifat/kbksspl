import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kbksourcing.com"),
  title: {
    default: "KBK Sourcing Services | Industrial Maintenance & Factory Services India",
    template: "%s | KBK Sourcing Services",
  },
  description:
    "Top industrial maintenance services in India. Pan-India factory and plant maintenance, AMC contractors, preventive maintenance, and equipment solutions for manufacturing.",
  keywords: [
    "industrial maintenance services India",
    "factory maintenance company India",
    "pan-India plant maintenance",
    "industrial AMC contractors India",
    "preventive maintenance service provider India",
    "breakdown maintenance services India",
    "factory equipment maintenance solutions India",
    "plant utilities operation and maintenance India",
    "industrial maintenance outsourcing company",
    "machinery inspection and repair services India",
  ],
  authors: [{ name: "KBK Sourcing Services Pvt. Ltd." }],
  creator: "KBK Sourcing Services Pvt. Ltd.",
  publisher: "KBK Sourcing Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kbksourcing.com",
    siteName: "KBK Sourcing Services",
    title: "KBK Sourcing Services | Industrial Maintenance & Factory Services India",
    description:
      "Top industrial maintenance services in India. Pan-India factory and plant maintenance, AMC contractors, preventive maintenance, and equipment solutions for manufacturing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KBK Sourcing Services - Industrial Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KBK Sourcing Services | Industrial Maintenance India",
    description: "Top industrial maintenance services in India. Factory and plant maintenance solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
