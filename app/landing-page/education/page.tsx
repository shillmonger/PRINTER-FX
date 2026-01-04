"use client";

import React from "react";
import Header from "@/components/landing-page/Header";
import Nav from "@/components/landing-page/Nav";
import Footer from "@/components/landing-page/Footer";
import {
  BookOpen,
  Target,
  ShieldCheck,
  Users,
  ArrowRight,
  Zap,
  Brain,
} from "lucide-react";

export default function EducationPage() {
  const tradingModel = [
    {
      title: "Market Structure",
      desc: "Identify true trend direction and break-of-structure (BOS) points with surgical precision.",
    },
    {
      title: "Liquidity & Entries",
      desc: "Stop being the liquidity. Learn to spot institutional pools and follow the big money.",
    },
    {
      title: "Risk Management",
      desc: "The 'Printer's' math. How to scale accounts while keeping drawdown under strict control.",
    },
  ];

  const mentorshipSteps = [
    {
      title: "Live Sessions",
      desc: "Watch me analyze the charts in real-time during New York & London sessions.",
    },
    {
      title: "Trade Reviews",
      desc: "Every weekend we break down the wins and losses to refine our psychological edge.",
    },
    {
      title: "Community Access",
      desc: "24/7 access to the Printers Lounge where elite students share high-confluence setups.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-25 text-center mt-12">
        <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
          Education First
        </span>
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
          Learn how the <span className="text-primary">market</span> actually
          moves
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          We don't just provide signals. We build traders. Understand the
          mechanics behind every candle and turn interest into mastery.
        </p>
      </section>

      {/* Our Trading Model */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-30 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Our Trading Model
            </h2>
            <p className="text-muted-foreground">
              The Printers Lounge philosophy is built on three core pillars:
              structure, liquidity, and discipline.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradingModel.map((item, i) => (
              <div
                key={i}
                className="bg-card/50 border border-border p-8 rounded-3xl hover:border-primary/50 transition duration-300"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Mentorship Flow */}
      <section className="bg-secondary/20 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">
              How The Mentorship Works
            </h2>
            <p className="text-muted-foreground mt-2 text-sm uppercase tracking-widest">
              A Structured Path to Profitability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mentorshipSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-4 top-0 text-7xl font-black text-primary/5 group-hover:text-primary/10 transition duration-300">
                  0{i + 1}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold uppercase mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section: Who It's For */}
      <section className="max-w-7xl mx-auto px-6 lg:px-0 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* WHO IT'S FOR */}
          <div className="bg-primary/5 border border-primary/20 p-10 rounded-[40px] space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-8 h-8" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                Who This Is For
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-primary rounded-full mt-1" />
                <span className="font-medium text-foreground">
                  Beginners with high discipline and patience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-primary rounded-full mt-1" />
                <span className="font-medium text-foreground">
                  Intermediate traders stuck in the "break-even" loop.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-primary rounded-full mt-1" />
                <span className="font-medium text-foreground">
                  Those who want to trade for institutions or prop firms.
                </span>
              </li>
            </ul>
          </div>

          {/* NOT FOR GAMBLERS */}
          <div className="bg-card/30 border border-border p-10 rounded-[40px] space-y-6 opacity-80">
            <div className="flex items-center gap-4 text-muted-foreground">
              <ShieldCheck className="w-8 h-8" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                NOT For
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-muted-foreground rounded-full mt-1" />
                <span className="text-muted-foreground">
                  Gamblers looking for a "get rich quick" button.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-muted-foreground rounded-full mt-1" />
                <span className="text-muted-foreground">
                  Those unwilling to backtest or study the video library.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-muted-foreground rounded-full mt-1" />
                <span className="text-muted-foreground">
                  Traders who refuse to follow a strict risk plan.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section – "Printer's Way" */}
      <section className="mx-auto max-w-7xl lg:w-7xl px-4 lg:px-0 pb-20 text-center">
        <div className="relative flex min-h-[320px] flex-col items-center overflow-visible rounded-[40px] bg-[#dcdcdc] lg:flex-row">
          {/* Left Content */}
          <div className="z-10 w-full p-8 text-center lg:w-3/5 lg:p-10 lg:text-left">
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tighter text-black lg:text-5xl">
              Ready to learn <br className="hidden lg:block" />
              the <span className="italic">Printer&apos;s</span> way?
            </h2>

            <p className="mb-8 max-w-lg text-sm font-medium text-black/70 lg:text-base">
              Turn your market analysis into surgical execution. Join the elite
              community mastering liquidity and structure to print consistent
              results daily.
            </p>

            <button
              onClick={() =>
                window.open("https://t.me/istancapitalfx", "_blank")
              }
              className="mx-auto flex cursor-pointer items-center gap-4 rounded-2xl bg-black px-10 py-4 font-black uppercase text-white shadow-xl transition-all duration-300 hover:bg-primary hover:text-black lg:mx-0"
            >
              Join the Lounge
            </button>
          </div>

          {/* Right Image (Desktop Only) */}
          <div className="relative hidden w-2/5 lg:flex justify-end cursor-pointer">
            <img
              // src="https://i.postimg.cc/qRNrjg5q/printer-mobile.png"
              src="https://i.postimg.cc/k4f3Ywg5/printer-hero-img.png"
              alt="The Printer"
              className="absolute -bottom-40  w-[400px] max-w-none object-contain 
              grayscale drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Nav />
      <Footer />
    </main>
  );
}
