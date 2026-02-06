import type { PricingCardProps } from '../../types';
import { PricingCard } from '../ui/PricingCard';
import { SparklesWhite as WhiteSparkles } from '../svg';

interface PricingSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    plans: PricingCardProps[];
}

export function PricingSection({
    badge = 'Pricing',
    title,
    plans,
}: PricingSectionProps) {
    return (
        <section
            className="relative w-full overflow-hidden pt-24 pb-48 md:pt-32 md:pb-64 lg:pb-80 flex flex-col items-center"
            style={{
                background: 'linear-gradient(180deg, #0B1020 0%, #5B5CFF 100%)'
            }}
        >
            {/* Rectangle 5947 Overlay/Glow effect if needed, but styling section directly is cleaner */}

            <div className="w-full max-w-[1920px] mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-white mb-6 mx-auto">
                            <WhiteSparkles height={12} width={12} className="brightness-200" />
                            <span className="font-bold uppercase tracking-widest">{badge}</span>
                        </div>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Pricing Cards Grid (1400px wide based on specs) */}
                <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-0">
                    {plans.slice(0, 3).map((plan, index) => {
                        let position: 'left' | 'center' | 'right' = 'center';
                        if (index === 0) position = 'left';
                        if (index === 1) position = 'center';
                        if (index === 2) position = 'right';

                        return (
                            <PricingCard
                                key={plan.id}
                                {...plan}
                                position={position}
                                isPopular={index === 1} // Second card is popular
                            />
                        );
                    })}
                </div>

            </div>

            {/* Decorative background glow to match premium look */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-brand-blue/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-brand-blue/10 blur-[180px] rounded-full" />
            </div>
        </section>
    );
}
