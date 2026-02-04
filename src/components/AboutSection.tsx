import { Check } from 'lucide-react';
import type { AboutSectionProps } from '../types';
import BlackSparkles from './svg/BlackSparkles';

export function AboutSection({
    badge = 'About Us',
    title,
    description,
    card,
    features = [],
    buttonText = 'View Details',
    buttonHref = '#',
    imageSrc,
    imageAlt = 'About image',
    onButtonClick,
}: AboutSectionProps) {
    return (
        <section className="relative w-full bg-[#e6e6ff] py-16 md:py-24">
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative circle */}
                        <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-200/50 rounded-full" />
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-600 mb-6">
                            <BlackSparkles height={12} width={12} />
                            <span className="font-medium">{badge}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Card + Features Row */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Info Card */}
                            {card && (
                                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#5B5CFF] flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                                </div>
                            )}

                            {/* Features List */}
                            {features.length > 0 && (
                                <ul className="space-y-3 flex-1">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check size={16} className="text-[#5B5CFF] flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={onButtonClick || (() => { window.location.href = buttonHref; })}
                            className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg
                bg-[#1a1a3e] text-white font-medium text-sm
                transition-all duration-200
                hover:bg-[#2a2a5e] hover:scale-105 active:scale-95
              "
                        >
                            {buttonText}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
