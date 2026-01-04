"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Youtube, 
  Twitter, 
  Send, 
  MessageCircle, 
  Instagram, 
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { name: "YouTube", icon: <Youtube size={24} />, href: "https://www.youtube.com/@Istancapital" },
    { name: "X (Twitter)", icon: <Twitter size={24} />, href: "https://x.com/IstanCapital_" },
    { name: "Telegram", icon: <Send size={24} />, href: "https://t.me/istancapital" },
    { name: "WhatsApp", icon: <MessageCircle size={24} />, href: "https://wa.me/+2347087050015" },
    { name: "Instagram", icon: <Instagram size={24} />, href: "https://instagram.com/IstanCapital" },
  ];

  return (
    <footer className="bg-background border-t border-border text-foreground py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-24">
        
        {/* Logo + Description */}
        <div className="flex flex-col space-y-6 md:col-span-4 lg:col-span-2">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={
                  mounted
                    ? theme === "dark"
                      ? "https://i.postimg.cc/sxJDwVCf/printer-logo-lyt.png"
                      : "https://i.postimg.cc/zfMLgX89/printer-logo-dark.png"
                    : "https://i.postimg.cc/zfMLgX89/printer-logo-dark.png"
                }
                alt="Printer Logo"
                width={32}
                height={32}
                className="object-contain rounded-[10px] md:w-10 md:h-10"
              />
              <span className="text-2xl sm:text-3xl font-black uppercase italic tracking-wider hover:text-primary transition-colors">
                PRINTER
              </span>
            </Link>
            <p className="mt-5 leading-relaxed text-muted-foreground max-w-sm">
              Empowering the next generation of Forex traders with institutional-grade 
              strategies and psychological discipline. Stop gambling, start printing.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Join the Community</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-3 bg-secondary/50 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm border border-border"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-tight">Training</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#mentorship" className="hover:text-primary transition-colors">1-on-1 Coaching</Link></li>
            <li><Link href="#beginner" className="hover:text-primary transition-colors">Beginner Mastery</Link></li>
            <li><Link href="#advanced" className="hover:text-primary transition-colors">Advanced Strategy</Link></li>
            <li><Link href="#psychology" className="hover:text-primary transition-colors">Trading Psychology</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-tight">Resources</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#signals" className="hover:text-primary transition-colors">Free Signals</Link></li>
            <li><Link href="#blog" className="hover:text-primary transition-colors">Market Analysis</Link></li>
            <li><Link href="#faq" className="hover:text-primary transition-colors">Trading Prop Firms</Link></li>
            <li><Link href="#brokers" className="hover:text-primary transition-colors">Recommended Brokers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-tight">Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#contact" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link href="#terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* New Legal & Disclaimer Section Added Here */}
      <div className="max-w-7xl mx-auto mt-16 space-y-8 text-[12px] leading-relaxed text-muted-foreground/70 border-t border-border pt-12">
        <div className="space-y-4">
          <p className="text-sm">
            <span className="font-bold text-foreground">RISK WARNING:</span> Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment.
          </p>
          
          <p className="text-sm">
            PRINTER is an educational hub dedicated to teaching market mechanics and technical analysis. We are not financial advisors, nor do we provide personalized investment advice. All trade ideas, signals, or strategy breakdowns shared on this platform are for educational and illustrative purposes only. Success in demo environments does not guarantee similar results in live market conditions.
          </p>

          <p className="text-sm"> 
            Any interaction with third-party brokerage firms or trading platforms is done at the user&apos;s own risk. PRINTER does not accept liability for any financial loss or damage resulting from the use of the information contained within this website. By accessing our content, you acknowledge that you are fully responsible for your own trading decisions.
          </p>
        </div>

        <div className="space-y-2 border-t border-border/20 pt-8">
          <p className="font-bold text-foreground uppercase tracking-widest text-[10px]">
            Corporate Compliance
          </p>
          <p className="text-sm">
            PRINTER GLOBAL TRADING is a registered educational entity. Our curriculum is designed to meet international standards of financial literacy and technical education. We operate with full transparency and maintain strict adherence to digital service regulations across all active jurisdictions.
          </p>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="max-w-7xl mx-auto border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p>© {new Date().getFullYear()} PRINTER — All rights reserved.</p>
          <div className="flex gap-4 text-[12px]">
            <Link href="#privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
        <p className="italic text-sm md:text-xs text-center md:text-right max-w-md opacity-60">
          The information on this site is not directed at residents of any country where such distribution or use would be contrary to local law or regulation.
        </p>
      </div>
    </footer>
  );
}