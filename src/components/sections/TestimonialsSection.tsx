import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { TestimonialCardProps } from '../../types';
import { TestimonialCard } from '../ui/TestimonialCard';
import { SparklesBlack as BlackSparkles } from '../svg';

interface TestimonialsSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    testimonials: TestimonialCardProps[];
}

export function TestimonialsSection({
    badge = 'Reviews',
    title,
    subtitle,
    testimonials,
}: TestimonialsSectionProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side - Header & Navigation (Fixed Width on Desktop) */}
                    <div className="w-full lg:max-w-md xl:max-w-lg shrink-0">
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm text-xs text-gray-900 mb-8">
                                <BlackSparkles height={12} width={12} />
                                <span className="font-bold uppercase tracking-widest">{badge}</span>
                            </div>
                        )}

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1F4A] mb-6 leading-tight text-regular">
                            {title}
                        </h2>

                        {subtitle && (
                            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed max-w-lg text-regular">
                                {subtitle}
                            </p>
                        )}

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => scroll('left')}
                                className="group flex items-center justify-center transition-all duration-300 transform active:scale-95 text-[#1B1F4A]"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="group flex items-center justify-center transition-all duration-300 transform active:scale-95 text-[#1B1F4A]"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Testimonial Cards Carousel */}
                    <div className="w-full min-w-0">
                        <div
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="snap-center">
                                    <TestimonialCard
                                        {...testimonial}
                                        variant={index % 2 === 0 ? 'primary' : 'secondary'}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Pagination / Progress Indicator */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-[#1B1F4A]/10" />
                <div className="w-3 h-3 rounded-full bg-[#1B1F4A]/20" />
                <div className="w-3 h-3 rounded-full bg-[#1B1F4A]/40" />
                <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-xl" />
            </div>
        </section>
    );
}
