"use client";

import Header from "@/components/landing-page/Header";
import Nav from "@/components/landing-page/Nav";
import Footer from "@/components/landing-page/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 
import { Check, ArrowRight, Lock } from "lucide-react"; 

export default function SubscriptionPage() { 
    const fundingPlans = [ 
        { 
            amount: 30, 
            type: "VIP Monthly", 
            fee: "$30/mo", 
            profitSplit: "Signals Only",
            benefits: ["Pairs: XAUUSD, BTCUSD, GBPUSD", "EURUSD, GBPJPY, USDJPY", "Access to my trades", "Weekly reviews & outlooks", "Standard Support"]
        }, 
        { 
            amount: 200, 
            type: "VIP Yearly", 
            fee: "$200/yr", 
            profitSplit: "Best Value",
            popular: true,
            benefits: ["All Monthly Signals included", "Save over $160 annually", "Priority Trade Alerts", "Access to my trades", "Lifetime Lounge Entry"]
        }, 
        { 
            amount: 90, 
            type: "Group Mentorship", 
            fee: "$90", 
            profitSplit: "Lifetime Access",
            benefits: ["2026 Online Group Mentorship", "Private Printers Lounge", "Library: 70+ Handpicked Videos", "Access to my trades", "Every student gets a prop account"]
        }, 
        { 
            amount: 300, 
            type: "Private 1-on-1s", 
            fee: "$300", 
            profitSplit: "Personalized",
            benefits: ["Direct Mentor Access", "Lifetime Printers Lounge", "Custom Strategy Development", "Access to my trades", "Every student gets a prop account"]
        },
        { 
            amount: 0, 
            type: "Institutional Tier", 
            fee: "LOCKED", 
            profitSplit: "Coming Soon",
            locked: true,
            benefits: ["Exclusive Fund Management", "On-site Workshop Access", "High-Stakes Capital", "Advanced Algorithm Access", "Direct Line to Printer"]
        },
        { 
            amount: 0, 
            type: "Printer Elite", 
            fee: "LOCKED", 
            profitSplit: "Coming Soon",
            locked: true,
            benefits: ["Mastermind Retreats", "Revenue Share Program", "Partner Desk Access", "Private Alpha Signals", "Full Studio Access"]
        },
    ];

    const handleSelectPlan = (plan: string, amount: number, isLocked: boolean) => {
        if (isLocked) return;
        window.open('https://t.me/istancapital', '_blank');
    };

    return ( 
        <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300"> 
            {/* Header */}
            <Header />


            {/* Hero Header */} 
            <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center mt-12"> 
                <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
                    Scale Your Capital
                </span>
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight"> 
                    Discover Our <span className="text-primary">Printers Lounge</span>
                </h1> 
                <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"> 
                    Join the elite 2026 mentorship. From handpicked video libraries to 
                    private signal access—everything you need to trade like a printer.
                </p> 
            </section> 

            {/* Plans Grid */} 
            <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-32 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fundingPlans.map((plan, i) => ( 
                        <Card 
                            key={i} 
                            className={`flex flex-col justify-between bg-card/50 backdrop-blur-sm rounded-3xl transition-all duration-500 overflow-hidden relative
                                ${plan.popular ? 'ring-4 ring-primary ring-offset-4 ring-offset-background shadow-2xl scale-105' : 'border border-border'}
                                ${plan.locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/50 hover:shadow-xl group cursor-pointer'}
                            `}
                            onClick={() => handleSelectPlan(plan.type, plan.amount, !!plan.locked)}> 
                            
                            {/* Decorative Background Glow - Enhanced for popular */}
                            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500 
                                ${plan.popular ? 'bg-primary/30 group-hover:bg-primary/40' : ''}
                                ${plan.locked ? 'bg-muted/20' : 'bg-primary/10 group-hover:bg-primary/20'}
                            `} />

                            {/* Extra glow layer for popular card */}
                            {plan.popular && (
                                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                            )}
                            
                            {/* Most Popular Badge - Made Perfect */}
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest px-8 py-2 pt-8 rounded-full shadow-2xl border-2 border-background">
                                        Most Popular
                                    </div>
                                    <div className="absolute inset-0 bg-primary/50 blur-xl -z-10" />
                                </div>
                            )}

                            <CardHeader className="p-8 pb-4"> 
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{plan.type}</span>
                                    <span className="text-2xl font-black">{plan.fee}</span>
                                </div>
                                <CardTitle className="text-5xl font-black tracking-tight italic uppercase"> 
                                    {plan.locked ? <Lock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" /> : `$${plan.amount}`}
                                </CardTitle> 
                                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-tight text-center">Access Level</p>
                            </CardHeader> 
                            
                            <CardContent className="space-y-6 p-8 flex-grow"> 
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-secondary/30 p-4 rounded-2xl border border-border"> 
                                        <span className="text-sm font-medium text-muted-foreground">Status</span> 
                                        <span className={`text-lg font-black ${plan.popular ? 'text-primary' : 'text-primary'}`}>{plan.profitSplit}</span> 
                                    </div> 
                                </div>

                                <div className="space-y-4"> 
                                    <p className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2"> 
                                        Tier Benefits
                                    </p> 
                                    <ul className="space-y-3 text-sm"> 
                                        {plan.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-3"> 
                                                <div className={`p-1 rounded-full ${plan.locked ? 'bg-muted/50' : 'bg-primary/10'}`}>
                                                    <Check className={`w-3 h-3 ${plan.locked ? 'text-muted-foreground' : 'text-primary'}`} /> 
                                                </div>
                                                <span className="text-muted-foreground">{benefit}</span>
                                            </li> 
                                        ))}
                                    </ul> 
                                </div> 
                            </CardContent> 

                            <div className="p-8 pt-0"> 
                                <button 
                                    disabled={plan.locked}
                                    className={`w-full font-black uppercase py-5 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group/btn shadow-lg cursor-pointer
                                        ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20' : ''}
                                        ${plan.locked 
                                            ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                                            : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/30'
                                        }
                                    `} 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelectPlan(plan.type, plan.amount, !!plan.locked);
                                    }}
                                > 
                                    {plan.locked ? "Coming Soon" : "Get Access Now"}
                                    {!plan.locked && <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />}
                                </button> 
                            </div> 
                        </Card> 
                    ))} 
                </div>
            </section>
            
            {/* Nav */}
            <Nav />
            
            {/* Footer section */}
            <Footer />
        </main> 
    ); 
}