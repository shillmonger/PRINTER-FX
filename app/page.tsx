"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landing-page/Header";
import Nav from "@/components/landing-page/Nav";
import Footer from "@/components/landing-page/Footer";
import { Button } from "@/components/ui/button";

import {
  FaBolt,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
} from "react-icons/fa";
import {
  ShieldCheck,
  BarChart3,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Monitor,
  Bell,
  Gift,
} from "lucide-react";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeatureCard } from "@/components/landing-page/FeatureCard";

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.17 2.67-2.32 5.04-5 5.31-2.85.35-5.74-1.42-6.52-4.14-.76-2.58.45-5.61 2.91-6.7 1.05-.48 2.22-.61 3.35-.43V17.5c-1.12-.2-2.37.1-3.09 1.02-.63.78-.62 1.99.12 2.7.79.76 2.08.73 2.82-.07.45-.48.67-1.14.65-1.8-.01-4.88-.01-9.76-.01-14.64-.13-.01-.26-.01-.4-.01Z" />
  </svg>
);

export default function HomePage() {
  // Handle scroll to section when page loads with a hash
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Small timeout to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Initial check
    const timer = setTimeout(() => {
      handleHashChange();
    }, 0);

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Hero Section*/}
      <section className="relative w-full pt-32 md:pt-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Your Forex Trading Mentor
            </span>

            <h1 className="flex flex-col gap-2">
              <span className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Forex Trading <br /> With PRINTER
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              PRINTER is your go-to Forex mentor, guiding aspiring traders
              through every step of profitable trading. Learn smart strategies,
              manage risks, and grow your capital with actionable insights from
              an expert mentor.
            </p>

            <div className="mt-4 flex justify-center sm:justify-start">
              <Button
                asChild
                size="lg"
                className="font-bold py-7 px-5 rounded-xl text-[15px] shadow-lg active:scale-95"
              >
                <Link
                  href="https://t.me/istancapitalfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Start Trading Smart
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center cursor-pointer">
            <div className="relative w-full aspect-square max-w-[500px] hidden md:block">
              <Image
                src="https://i.postimg.cc/MGm4VBbQ/hero-2-removebg-preview.png"
                alt="Forex Trading Mentor Illustration"
                fill
                className="object-contain drop-shadow-2xl  transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-5 italic tracking-tighter">
            Trading Classes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beginner Mastery",
                desc: "Foundation-level training covering terminology, platform setup, and your first trade execution.",
                icon: <FaGraduationCap size={24} />,
              },
              {
                title: "Advanced Strategy",
                desc: "Deep dive into technical analysis, price action, and proprietary PRINTER trading setups.",
                icon: <FaBolt size={24} />,
              },
              {
                title: "Risk Management",
                desc: "Learn how to protect your capital and maintain consistency through strict math-based rules.",
                icon: <FaChartLine size={24} />,
              },
              {
                title: "1-on-1 Mentorship",
                desc: "Direct access to personalized coaching sessions to refine your specific trading style.",
                icon: <FaHandshake size={24} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl flex flex-col gap-4 cursor-pointer bg-card border-border hover:border-primary/50"
              >
                {/* Icon Box */}
                <div className="mt-1 flex-shrink-0 w-13 h-13 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href="/enroll"
                  className="mt-auto  flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline"
                >
                  Enroll Now
                  <ArrowRight className=" w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System That Works section */}
      <section className="py-10 px-4 md:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-5 italic tracking-tighter">
            System That Works
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left: Video / Media Placeholder */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-card border border-border shadow-2xl group">
              {/* YouTube Thumbnail */}
              <img
                src="https://img.youtube.com/vi/P5dd-ulpvIg/hqdefault.jpg"
                alt="Watch on YouTube"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />

              {/* Play Button Overlay */}
              <a
                href="https://youtu.be/P5dd-ulpvIg?si=jwhFouezlPNgaZir"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  {/* Triangle play icon */}
                  <div className="ml-1 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-current" />
                </div>
              </a>

              {/* Optional Progress Bar at Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-primary" />
              </div>
            </div>

            {/* Right: Content & Features */}
            <div className="flex flex-col gap-8 justify-center sm:justify-start">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg max-w-md">
                  Discover the trading methodology that has transformed
                  thousands of traders worldwide.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Proven Strategy",
                    desc: "Time-tested approach with consistent results",
                    icon: <BarChart3 className="w-6 h-6" />,
                  },
                  {
                    title: "Risk Management",
                    desc: "Protect your capital with smart position sizing",
                    icon: <ShieldCheck className="w-6 h-6" />,
                  },
                  {
                    title: "Profit Maximization",
                    desc: "Optimize your trades for maximum returns",
                    icon: <TrendingUp className="w-6 h-6" />,
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-center sm:justify-start">
                <Link
                  href="https://www.youtube.com/@Istancapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    size="lg"
                    className="rounded-xl font-bold px-8 py-7 text-[15px] group cursor-pointer"
                  >
                    Subscribe Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading tools */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
          <div className="w-full py-10 overflow-hidden">
            <motion.div
              className="flex items-center gap-10 lg:gap-10 px-4 w-max"
              initial={{ x: 0 }}
              animate={{ x: "-30%" }}
              transition={{
                x: {
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                },
              }}
            >
              {[
                "MetaTrader 5",
                "TradingView",
                "Exness",
                "IC Markets",
                "MetaTrader 4",
                "Forex Factory",
                "Myfxbook",
                "Investing.com",
              ].map((tool, index) => (
                <div
                  key={index}
                  className="text-black/60 hover:text-black/90 dark:text-white/30 dark:hover:text-white/70 transition-all select-none cursor-pointer"
                >
                  <span className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
                    {tool}
                  </span>
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {[
                "MetaTrader 5",
                "TradingView",
                "Exness",
                "IC Markets",
                "MetaTrader 4",
                "Forex Factory",
                "Myfxbook",
                "Investing.com",
              ].map((tool, index) => (
                <div
                  key={`dup-${index}`}
                  className="text-black/60 hover:text-black/90 dark:text-white/30 dark:hover:text-white/70 transition-all select-none cursor-pointer"
                >
                  <span className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
                    {tool}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section
        id="why-join-us"
        className="max-w-7xl mx-auto px-4 lg:px-0 py-20 w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
            Why Join <span className="text-primary">Printer?</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
            Join Printer to learn Forex trading from a mentor who cares. Enjoy
            free live trading sessions, real-time signals, and exclusive
            giveaways to grow your skills and profits.
          </p>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden md:flex gap-10 cursor-pointer">
          <FeatureCard
            title="Free Live Trading"
            description="Watch Printer trade in real-time and learn strategies that work in the live market."
            icon={<Monitor className="w-6 h-6 text-primary" />}
          />

          <FeatureCard
            title="Free Signals"
            description="Get access to reliable trading signals via our exclusive group to make informed decisions."
            icon={<Bell className="w-6 h-6 text-primary" />}
          />

          <FeatureCard
            title="Exclusive Giveaways"
            description="Enjoy periodic giveaways and bonuses that reward our community and support your trading journey."
            icon={<Gift className="w-6 h-6 text-primary" />}
          />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel>
            <CarouselContent>
              {[
                {
                  title: "Free Live Trading",
                  desc: "Watch Printer trade in real-time and learn strategies that work in the live market.",
                  icon: <Monitor className="w-6 h-6 text-primary" />,
                },
                {
                  title: "Free Signals",
                  desc: "Get access to reliable trading signals via our exclusive group to make informed decisions.",
                  icon: <Bell className="w-6 h-6 text-primary" />,
                },
                {
                  title: "Exclusive Giveaways",
                  desc: "Enjoy periodic giveaways and bonuses that reward our community and support your trading journey.",
                  icon: <Gift className="w-6 h-6 text-primary" />,
                },
              ].map((item, i) => (
                <CarouselItem key={i}>
                  <FeatureCard
                    title={item.title}
                    description={item.desc}
                    icon={item.icon}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls BELOW cards */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <CarouselPrevious className="static w-10 h-10 font-lg p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition" />
              <CarouselNext className="static w-10 h-10 p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section
        id="youtube-channel"
        className="max-w-7xl mx-auto px-4 py-10 w-full bg-background"
      >
        <div className="text-center mb-10">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-3 block">
            Free Education • Live Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-foreground mb-3 leading-tight">
            Learn From Our YouTube Channel
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Free trading education, live sessions, proven strategies, and real
            market breakdowns all designed to turn you into a consistent
            printer.
          </p>
        </div>

        {/* Video Cards - Updated to match the reference image structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> */}
          {[
            {
              id: "XyPst8Ie1kM",
              title: "HOW TO GET FREE TRADINGVIEW PREMIUM ($0 COST)",
              views: "210K views",
              duration: "13:00",
            },
            {
              id: "MEpiF2Av4wY",
              title: "This forex trading pattern is all I need || 50pips a day",
              views: "151K views",
              duration: "12:00",
            },
            {
              id: "d-kzTN-2UZk",
              title: "IF YOU EVER FEEL LOST TRADING ....",
              views: "125K views",
              duration: "12:00",
            },
            {
              id: "mBz5R4cdeAI",
              title: "TRADE FOREX LIQUIDITY CONCEPTS THE RIGHT WAY!",
              views: "120K views",
              duration: "6:00",
            },
            {
              id: "tB6Flbcg3cw",
              title: "THE LINE CHART WILL MAKE YOU PROFITABLE",
              views: "253K views",
              duration: "13:00",
            },
            {
              id: "9_63FGGzLgo",
              title: "STOP TRADING THE WRONG FOREX KEY LEVELS!!!!!",
              views: "211K views",
              duration: "17:00",
            },
          ].map((video, i) => (
            <div
              key={i}
              className="group relative bg-muted/40 border border-border/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden cursor-pointer">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />

                {/* Play Button - Exact YouTube style */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-15 h-15 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl">
                    <div className="ml-2 w-0 h-0 border-y-[15px] border-y-transparent border-l-[22px] border-l-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 bg-card cursor-pointer">
                <h3 className="text-foreground font-semibold text-sm leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {video.views}
                  </span>
                  <Link
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Button - YouTube style */}
        <div className="text-center mt-10">
          <Link
            href="https://www.youtube.com/@Istancapital"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button
              size="lg"
              className="rounded-xl font-bold px-8 py-7 text-[17px] group cursor-pointer"
            >
              Subscribe on YouTube
            </Button>
          </Link>
        </div>
      </section>

      {/* Telegram group section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-0 py-24">
        <div className="relative overflow-hidden bg-primary/10 border border-primary/20 rounded-[40px] py-7 px-5 flex flex-col items-center justify-center text-center">
          {/* Left Background Logo - Increased size to w-64 */}
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block rotate-[15deg]">
            <div className="w-64 h-64 relative">
              <Image
                src="https://i.postimg.cc/L4zMnrgP/tg-dark.png"
                alt="Telegram Background"
                fill
                className="object-contain dark:hidden"
                unoptimized
              />
              <Image
                src="https://i.postimg.cc/5t9g1Fdv/tg-lyt.png"
                alt="Telegram Background"
                fill
                className="object-contain hidden dark:block"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Direct Updates
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-foreground mb-8">
              Join Our <span className="text-primary">Telegram</span> Group
            </h2>
            <a
              href="https://t.me/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-black uppercase text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] active:scale-95"
            >
              Join Telegram Now
            </a>
          </div>

          {/* Right Background Logo - Increased size to w-64 */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block rotate-[15deg]">
            <div className="w-64 h-64 relative">
              <Image
                src="https://i.postimg.cc/L4zMnrgP/tg-dark.png"
                alt="Telegram Background"
                fill
                className="object-contain dark:hidden"
                unoptimized
              />
              <Image
                src="https://i.postimg.cc/5t9g1Fdv/tg-lyt.png"
                alt="Telegram Background"
                fill
                className="object-contain hidden dark:block"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nav */}
      <Nav />

      {/* Footer scection */}
      <Footer />
    </main>
  );
}
