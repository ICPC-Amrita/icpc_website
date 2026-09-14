'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Target, Zap, Award, Gift, ChevronRight, ChevronDown, Quote, Clock } from 'lucide-react';
import ContactUs2 from "@/components/footer/contact_us_2";

const easeInOut = [0.4, 0, 0.2, 1];

const StyledButton = ({ children, href, className = '' }) => (
    <Link
        href={href}
        className={`inline-flex h-12 items-center justify-center bg-primary px-8 text-sm tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-primary/90 rounded-md ${className}`}
    >
        {children}
    </Link>
);

const StyledCard = ({ children, className = '' }) => (
    <div className={`bg-card border border-border shadow-sm transition-shadow duration-300 hover:shadow-md rounded-md ${className}`}>
        {children}
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-5 flex justify-between items-center focus:outline-none transition-colors duration-300 hover:text-primary"
            >
                <span className="text-sm text-foreground pr-8 tracking-wide">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-muted-foreground">
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }} className="overflow-hidden"
                    >
                        <div className="pb-5 pr-12 text-sm text-muted-foreground leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ScoringInfographic = () => {
    const speedRows = [
        { time: "Within 2 Hours", pts: "10" },
        { time: "2–4 Hours", pts: "8" },
        { time: "4–8 Hours", pts: "6" },
        { time: "8–24 Hours", pts: "4" },
        { time: "After 24 Hours", pts: "3" },
    ];

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StyledCard className="p-8">
                    <h4 className="text-xl text-foreground mb-2 tracking-wide">Correct Answer</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Solve the challenge correctly and earn full accuracy points.</p>
                    <div className="text-2xl text-green-600 tracking-wide">+15 pts</div>
                </StyledCard>
                <StyledCard className="p-8">
                    <h4 className="text-xl text-foreground mb-2 tracking-wide">Incorrect Answer</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Incorrect or unanswered challenges yield no accuracy points.</p>
                    <div className="text-xl text-muted-foreground tracking-wide">0 pts</div>
                </StyledCard>
                <StyledCard className="p-8">
                    <h4 className="text-xl text-foreground mb-2 tracking-wide">Speed Bonus</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">The faster you solve, the more bonus points you earn.</p>
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs text-muted-foreground uppercase tracking-wider pb-1 border-b border-border">
                            <span>Submission Time</span>
                            <span>Speed Bonus</span>
                        </div>
                        {speedRows.map((row, i) => (
                            <div key={i} className="flex justify-between items-center text-sm border-b border-border pb-2 last:border-0">
                                <span className="text-muted-foreground tracking-wide">{row.time}</span>
                                <span className="text-primary">{row.pts} pts</span>
                            </div>
                        ))}
                    </div>
                </StyledCard>
                <StyledCard className="p-8">
                    <h4 className="text-xl text-foreground mb-2 tracking-wide">Maximum Points</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Achieve the highest possible score per challenge.</p>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground tracking-wide">15 Accuracy + 10 Speed</span>
                        <span className="text-2xl text-primary tracking-wide">= 25 pts</span>
                    </div>
                </StyledCard>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
                Make sure you are confident in your answer before submitting. Once submitted, your answer cannot be changed.
            </p>
        </div>
    );
};

export default function JoinQuestPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } }
    };
    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-8 font-sans">

                {/* Hero Section */}
                <section className="relative w-full pb-16 md:pb-24 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeInUp} className="mb-4 inline-block px-3 py-1 bg-primary/10 text-primary text-xs tracking-widest border border-primary/20 rounded-md">
                                ICPC Quest
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
                                The competition starts before the competition
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                                An exclusive challenge series for registered ICPC Amritapuri 2026 participants. Solve challenges, earn points, crack the chain, climb the leaderboard, and compete for rewards.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <StyledButton href="/joinquest-leaderboard">
                                    View Quest Leaderboard
                                </StyledButton>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: easeInOut }}
                            src="/quest/study_enhanced.png"
                            alt="ICPC Quest"
                            className="w-full max-w-md object-contain drop-shadow-xl"
                        />
                    </div>
                </section>

                {/* Why Participate Section */}
                <section className="relative w-full py-16 md:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl leading-tight text-foreground mb-4">Why Participate?</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-muted-foreground">Your journey to the World Finals begins here.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Target className="w-6 h-6 text-primary" />, title: "Earn Points", desc: "Gain accuracy and speed points with every challenge." },
                            { icon: <Zap className="w-6 h-6 text-primary" />, title: "Weekly Challenges", desc: "Put your problem-solving skills to the test with four challenges every week." },
                            { icon: <Award className="w-6 h-6 text-primary" />, title: "Leaderboards", desc: "Compete with ICPC participants and climb the rankings every week." },
                            { icon: <Gift className="w-6 h-6 text-primary" />, title: "Exclusive Rewards", desc: "Win ICPC merchandise, certificates, and special recognition." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <StyledCard className="p-8 h-full flex flex-col items-start border-t-4 border-t-primary">
                                    <div className="mb-4 p-3">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </StyledCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="relative w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl leading-tight text-foreground mb-12">How it works</h2>
                            <div className="relative">
                                {[
                                    { title: "Register", desc: "Register for ICPC Amritapuri 2026 and receive your unique Quest ID." },
                                    { title: "Solve", desc: "Follow our official channels and solve the weekly interconnected challenges." },
                                    { title: "Submit", desc: "Use your Quest ID to submit your answers and climb the Quest leaderboard." },
                                ].map((step, i) => (
                                    <div key={i} className="relative flex gap-6 pb-12 last:pb-0 group">
                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: i * 0.3 }}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${i === 2
                                                    ? 'bg-transparent border-[3px] border-primary shadow-sm'
                                                    : 'bg-primary'
                                                    }`}
                                            >
                                                {i === 2 ? (
                                                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                                ) : (
                                                    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </motion.div>

                                            {i !== 2 && (
                                                <div className="absolute top-8 bottom-0 left-[15px] w-[2px] bg-border">
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: '100%' }}
                                                        viewport={{ margin: "-50px" }}
                                                        transition={{ duration: 0.5, delay: i * 0.3 + 0.2 }}
                                                        className="w-full bg-primary/60"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ margin: "-50px" }}
                                            transition={{ duration: 0.4, delay: i * 0.3 + 0.1 }}
                                            className="pt-1"
                                        >
                                            <h4 className="text-xl text-foreground mb-1">{step.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{step.desc}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <StyledCard className="p-8">
                                <h3 className="text-xl text-foreground mb-3 tracking-wide">The Golden Rule</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    Unlike standalone challenges, many ICPC Quest challenges are interconnected. The answer to one challenge may become a key, clue, or input for a future challenge. Keep track of every answer.
                                </p>
                                <div className="p-3 flex items-start gap-2">
                                    <Quote className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                                    <p className="text-xs text-destructive tracking-wide">
                                        Missing a challenge could mean missing an important clue for the next one.
                                    </p>
                                </div>
                            </StyledCard>

                            <StyledCard className="p-8">
                                <h3 className="text-xl text-foreground mb-3 tracking-wide">Your Quest ID</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    Every registered participant receives a unique Quest ID. Keep it safe, it&apos;s required for:
                                </p>
                                <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Submissions</li>
                                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Point Calculation</li>
                                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Rankings</li>
                                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Winner Selection</li>
                                </ul>
                            </StyledCard>
                        </div>
                    </div>
                </section>

                {/* Scoring System Section */}
                <section className="relative w-full py-16 md:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl leading-tight text-foreground mb-4">Scoring System</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <ScoringInfographic />
                </section>

                {/* Tie-Breaker */}
                <section className="relative w-full py-16 md:py-24">
                    <StyledCard className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl leading-tight text-foreground mb-2">Tie-Breaker</h2>
                            <p className="text-lg text-muted-foreground">Every Second Counts.</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4 text-sm text-muted-foreground leading-relaxed">
                            <p>
                                If two or more participants have the same total score, their ranking will be determined by the total time taken to solve the challenges.
                            </p>
                            <p>
                                For each challenge, the time difference between the challenge release time and the participant&apos;s submission time will be calculated.
                            </p>
                            <div className="p-4 bg-muted/40 rounded-md">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">For example</p>
                                <p>
                                    If Challenge 1 is released at 6:00 PM and you submit the correct answer at 6:00 AM the next day, your solve time for that challenge is 12 hours.
                                </p>
                            </div>
                            <p>
                                The solve time will be calculated separately for each challenge and then totalled across all challenges. The participant with the lower total solve time will rank higher in the event of a tie.
                            </p>
                            <div className="p-4 flex items-start gap-2">
                                <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <p className="text-foreground tracking-wide">
                                    In short: Same Score → Lower Total Solve Time → Higher Rank
                                </p>
                            </div>
                        </div>
                    </StyledCard>
                </section>

                {/* Schedule & FAQ */}
                <section className="relative w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-1 space-y-8">
                            <StyledCard className="p-8">
                                <Clock className="w-6 h-6 text-primary mb-4" />
                                <h3 className="text-lg text-foreground mb-6 tracking-wide">Schedule</h3>
                                <ul className="space-y-4 text-sm text-muted-foreground">
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Challenges are released 4 times per week.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> A new challenge drops at 6:00 PM IST on scheduled challenge days.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Submit your answer before the weekly deadline.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Weekly leaderboard results will be published after the challenge cycle.</li>
                                </ul>
                            </StyledCard>

                            <StyledCard className="p-8 bg-muted/40">
                                <h3 className="text-lg text-foreground mb-4 tracking-wide">Guidelines</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Only registered ICPC Amritapuri 2026 participants may participate.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> A valid Quest ID is required for all submissions.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Multiple submissions may result in disqualification.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Leaderboard rankings are based on cumulative Quest scores.</li>
                                    <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Organizers reserve the right to verify submissions and rankings.</li>
                                </ul>
                            </StyledCard>
                        </div>

                        <div className="lg:col-span-2">
                            <StyledCard className="p-8 md:p-12 h-full">
                                <h2 className="text-2xl md:text-3xl leading-tight text-foreground mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-0">
                                    {[
                                        { q: "Do I need to register separately for ICPC Quest?", a: "No. All registered ICPC Amritapuri 2026 participants are automatically eligible to participate in ICPC Quest." },
                                        { q: "Where will challenges be announced?", a: "Challenges will be announced through the official ICPC Amritapuri social media channels." },
                                        { q: "How many challenges are there each week?", a: "There are 4 challenges every week." },
                                        { q: "Are the challenges connected?", a: "Yes. Many challenges are interconnected. The answer to one challenge may become a key, clue, or input for a future challenge." },
                                        { q: "What happens if I miss a challenge?", a: "You can still participate in future challenges, but you may lose points and potentially miss an important clue needed for a later challenge." },
                                        { q: "How do I check my rank?", a: "Your ranking will be displayed on the ICPC Quest Leaderboard." },
                                        { q: "Is participation free?", a: "Yes. Participation in ICPC Quest is completely free for registered ICPC Amritapuri 2026 participants." },
                                        { q: "How are points calculated?", a: "A correct answer earns 15 accuracy points. You can earn up to 10 additional speed bonus points depending on how quickly you submit. The maximum score is therefore 25 points per challenge." }
                                    ].map((faq, i) => (
                                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                                    ))}
                                </div>
                            </StyledCard>
                        </div>

                    </div>
                </section>
            </div>

            {/* Closing banner */}
            <div className="w-full bg-primary/5 border-y border-border py-16 text-center px-4">
                <h2 className="text-2xl md:text-3xl text-foreground mb-2 tracking-wide">ICPC Quest</h2>
                <p className="text-primary text-lg mb-1">Solve. Connect. Climb.</p>
                <p className="text-muted-foreground">The competition starts before the competition.</p>
            </div>

            {/* Footer */}
            <div className="bg-blue-950">
                <ContactUs2 />
            </div>
        </div>
    );
}
