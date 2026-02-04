import type { PricingCardProps } from '../types';
import { PricingCard } from './ui/PricingCard';
import { SectionHeader } from './ui/SectionHeader';

interface PricingSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    plans: PricingCardProps[];
}

export function PricingSection({
    badge = 'Pricing',
    title,
    subtitle,
    plans,
}: PricingSectionProps) {
    return (
        <section className="relative w-full bg-[#1a1a3e] py-16 md:py-24">
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">

                {/* Header - white text for dark background */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs text-white mb-4">
                        <span className="font-medium">{badge}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>

            </div>
        </section>
    );
}
