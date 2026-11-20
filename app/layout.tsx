import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// ಇಂಗ್ಲಿಷ್ ಫಾಂಟ್
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

// ನಿಮ್ಮ ಕನ್ನಡ ಫಾಂಟ್ (Anek Kannada)
const kannadaFont = localFont({
  src: [
    {
      path: "../public/fonts/anek-kannada.light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/anek-kannada.bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kodachadri Academy | Hightech Tuition Classes",
  description: "State | CBSE | ICSE Coaching. Expert faculty for SSLC, JEE, NEET, and CET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${kannadaFont.variable} font-sans antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <Navbar />
        
        {/* Updated Announcement Bar - No Specific Date */}
        <div className="bg-[var(--primary-red)] text-white text-sm py-2 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block font-medium">
            🎉 Admissions Open for the Next Batch! For more details, contact us at: 7411406791 🎉
          </div>
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}