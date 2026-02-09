import { Check, Star, Users } from 'lucide-react';
import { SparklesBlack as BlackSparkles } from '../../svg';
import { Button } from '../../ui/Button';

export function AboutSection() {
    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Image with Stats Overlay */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src="/AboutBg.png"
                                alt="GenAI Team Working"
                                className="w-full h-auto object-cover min-h-[500px]"
                            />
                        </div>

                        {/* 20,000+ Stats Overlay */}
                        <div className="absolute bottom-10 right-10 bg-black/30 backdrop-blur-xl border border-white/20 p-6 rounded-[30px] text-white">
                            <p className="text-4xl font-bold mb-1">20,000+</p>
                            <p className="text-sm font-medium text-white/70">Successful Projects</p>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-gray-50 text-xs text-[#1B1F4A] mb-8">
                            <BlackSparkles height={12} width={12} />
                            <span className="font-bold uppercase tracking-widest text-[10px]">About Us</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight mb-6">
                            Write With AI : Instant Copy in All Your Favourite Apps
                        </h2>

                        <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                            GenAI is a powerful content creation platform built to help writers, marketers, and businesses produce high-quality content faster. With intelligent automation, it transforms simple inputs into structured outlines, compelling introductions.
                        </p>

                        {/* Features Checklist */}
                        <ul className="space-y-4 mb-10 w-full">
                            {[
                                'Create long-form & high-quality content instantly.',
                                'Designed for writers, marketers, automation, transforms.',
                                'Reduces manual effort and boosts, compelling introductions.'
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-brand-blue font-medium">
                                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                        <Check size={12} className="text-brand-blue" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#1B1F4A] flex items-center justify-center text-white">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#1B1F4A]">4.6+</p>
                                    <p className="text-xs text-gray-500">Positive Reviews</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[#1B1F4A]">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#1B1F4A]">10,000+</p>
                                    <p className="text-xs text-gray-500">Active Users</p>
                                </div>
                            </div>
                        </div>

                        <Button className="h-[52px] px-10 rounded-xl bg-[#1B1F4A] text-white font-bold hover:bg-[#2a3069] transition-all">
                            Start Writing
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
