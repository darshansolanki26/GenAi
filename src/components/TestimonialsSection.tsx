import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TestimonialCardProps } from '../types';
import { TestimonialCard } from './ui/TestimonialCard';
import { SectionHeader } from './ui/SectionHeader';

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Header & Navigation */}
                    <div>
                        <SectionHeader
                            badge={badge}
                            title={title}
                            subtitle={subtitle}
                            centered={false}
                        />

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={handlePrev}
                                className="
                  w-10 h-10 rounded-full border border-gray-200
                  flex items-center justify-center
                  text-gray-600 hover:bg-gray-100 hover:border-gray-300
                  transition-all duration-200
                "
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="
                  w-10 h-10 rounded-full border border-gray-200
                  flex items-center justify-center
                  text-gray-600 hover:bg-gray-100 hover:border-gray-300
                  transition-all duration-200
                "
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Testimonial Cards */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`
                    transition-all duration-300 flex-shrink-0
                    ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}
                  `}
                                >
                                    <TestimonialCard
                                        {...testimonial}
                                        variant={index === 0 ? 'primary' : 'secondary'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pagination dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`
                    w-2 h-2 rounded-full transition-all duration-200
                    ${index === currentIndex ? 'bg-[#5B5CFF] w-6' : 'bg-gray-300'}
                  `}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Decorative circle */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-100 rounded-full hidden lg:block" />
        </section>
    );
}
