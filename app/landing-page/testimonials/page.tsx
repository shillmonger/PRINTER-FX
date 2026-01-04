"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/landing-page/Header";
import Nav from "@/components/landing-page/Nav";
import Footer from "@/components/landing-page/Footer";
import { Star } from "lucide-react";

const testimonialsColumn1 = [
  {
    name: "Nwaigwe Winz",
    role: "Telegram Member",
    rating: 5.0,
    text: "Ever since I joined Printer’s Telegram group, my trading has become way more structured. The way he breaks down market structure, liquidity, and entries helped me stop overtrading. My win rate has improved a lot and I now understand why I’m entering a trade, not just following signals blindly.",
  },
  {
    name: "Fuhad Olaosebikan",
    role: "Telegram Member",
    rating: 4.8,
    text: "This mentorship actually teaches you how the market moves. Printer explains price action in a simple way that makes sense, especially during London and New York sessions. I went from guessing entries to patiently waiting for confirmations.",
  },
  {
    name: "Lock in",
    role: "Telegram Member",
    rating: 3.0,
    text: "The content is solid and very detailed, especially the live market breakdowns. It took me some time to adjust because it’s not a get-rich-quick system, but once I slowed down and followed the rules, I started seeing gradual improvement.",
  },
  {
    name: "Elvis tmz",
    role: "Telegram Member",
    rating: 4.9,
    text: "The weekly market outlooks are extremely helpful. Knowing key levels and session bias before the week starts gives me confidence. I no longer feel lost when price starts moving aggressively.",
  },
  {
    name: "Ceasar",
    role: "Telegram Member",
    rating: 2.9,
    text: "The mentorship is good, but it requires discipline and patience. At first I struggled because I expected fast results. Once I started journaling and applying proper risk management, things slowly began to make sense.",
  },
];

const testimonialsColumn2 = [
  {
    name: "Benjamin Evans",
    role: "Telegram Member",
    rating: 4.9,
    text: "Joining the yearly plan was a smart decision for me. The value in the lessons, trade reviews, and live explanations is far more than what I paid. I’m now much more confident managing risk and holding trades properly.",
  },
  {
    name: "Shillmonger",
    role: "Telegram Member",
    rating: 4.8,
    text: "The video library alone is worth it. From liquidity concepts to execution models, everything is explained clearly. I finally understand why trades fail instead of blaming the market.",
  },
  {
    name: "Rebel",
    role: "Telegram Member",
    rating: 5.0,
    text: "The one-on-one sessions helped me refine my strategy and fix bad habits. Printer doesn’t just give answers, he makes you think like a trader. My psychology and patience improved massively.",
  },
  {
    name: "Spencer dc",
    role: "Telegram Member",
    rating: 4.7,
    text: "I initially joined for the signals, but the education is what kept me here. The community discussions and trade breakdowns help you see different perspectives on the same setup.",
  },
  {
    name: "Mr Presh",
    role: "Telegram Member",
    rating: 5.0,
    text: "Printer’s approach to risk management changed everything for me. I now focus on consistency instead of chasing profits. My account curve is smoother and drawdowns are smaller.",
  },
];


export default function TestimonialPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Header />

      <section className="flex-grow max-w-7xl mx-auto px-6 lg:px-10 py-35">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT - Text Content */}
          <div className="space-y-6 order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Testimonials
            </span>

            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight">
              We go above and <span className="text-primary">beyond</span> to
              deliver.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Our dedication to excellence drives us to truly understand and
              meet the unique needs of every trader in our lounge.
            </p>

            <Link
              href="https://t.me/istancapitalfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <button className="bg-primary text-primary-foreground cursor-pointer font-black uppercase px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-primary/90 transition mt-6 shadow-xl">
                View all testimonials
              </button>
            </Link>
          </div>

          {/* RIGHT – Scrolling Columns (Hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 h-[620px] relative overflow-hidden order-2">
            {/* COLUMN 1 – SCROLLING UP */}
            <div className="flex flex-col cursor-pointer gap-6 animate-scroll-up hover:animate-paused">
              {[...testimonialsColumn1, ...testimonialsColumn1].map((t, i) => (
                <TestimonialCard key={`up-${i}`} {...t} />
              ))}
            </div>

            {/* COLUMN 2 – SCROLLING DOWN */}
            <div className="flex flex-col cursor-pointer gap-6 animate-scroll-down hover:animate-paused">
              {[...testimonialsColumn2, ...testimonialsColumn2].map((t, i) => (
                <TestimonialCard key={`down-${i}`} {...t} />
              ))}
            </div>

            {/* Fade Edges */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* MOBILE - Static Column Layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 order-2">
            {[...testimonialsColumn1, ...testimonialsColumn2].map((t, i) => (
              <TestimonialCard key={`mobile-${i}`} {...t} />
            ))}
          </div>
        </div>
      </section>

      <Nav />
      <Footer />
    </main>
  );
}

function TestimonialCard({
  name,
  role,
  rating,
  text,
}: {
  name: string;
  role: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-3xl space-y-4 shadow-xl hover:shadow-2xl transition">
      <div className="flex items-center gap-2 text-primary">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? "fill-primary" : "fill-none"
            } stroke-primary`}
          />
        ))}
        <span className="font-black text-sm ml-1">{rating.toFixed(1)}</span>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed italic">
        “{text}”
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-orange-500" />
        <div>
          <h4 className="font-bold text-sm uppercase">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
