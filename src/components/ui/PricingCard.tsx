import { Check } from 'lucide-react';
import type { PricingCardProps } from '../../types';
import { cn } from '../../lib/utils';

export function PricingCard({
    planName,
    price,
    currency = '$',
    period = '/Month',
    features,
    buttonText = 'View Details',
    buttonHref = '#',
    isPopular = false,
    position = 'center',
    onButtonClick,
    onClick,
}: PricingCardProps) {
    const isCenter = position === 'center' || isPopular;

    return (
        <div
            onClick={onClick}
            className={cn(
                "relative flex flex-col p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden",
                // Base dimensions for desktop (xl+) - will scale for lower resolutions with grid
                "xl:min-h-[661px] xl:w-[467px]",
                // Specific styling based on position
                {
                    // Center Card: Solid Blue, taller
                    "bg-brand-blue text-white shadow-2xl xl:min-h-[721px] xl:w-[466px] rounded-[20px] z-10": isCenter,

                    // Left Card: Glassmorphism, specific border radius and width
                    "bg-white/20 text-white backdrop-blur-md rounded-l-[20px] border-l border-t border-b border-white border-r-0": position === 'left',

                    // Right Card: Glassmorphism, specific border radius and width
                    "bg-white/20 text-white backdrop-blur-md rounded-r-[20px] border-r border-t border-b border-white border-l-0": position === 'right',
                }
            )}
        >
            {/* Popular Badge */}
            {isCenter && (
                <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 text-xs font-bold bg-[#1b1f4a] text-white rounded-full uppercase tracking-wider">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Plan Info */}
            <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", isCenter ? "bg-white" : "bg-white/60")} />
                    <span className={cn("text-sm font-semibold uppercase tracking-widest", isCenter ? "text-white" : "text-white/80")}>
                        {planName}
                    </span>
                </div>

                <div className="flex items-baseline gap-1 mt-6 mb-10">
                    <span className="text-5xl md:text-6xl font-bold leading-tight">
                        {currency}{price}
                    </span>
                    <span className={cn("text-lg", isCenter ? "text-white/70" : "text-white/60")}>
                        {period}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className={cn("w-full h-px mb-10", isCenter ? "bg-white/20" : "bg-white/10")} />

            {/* Features List */}
            <ul className="space-y-5 mb-auto">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                        <div className={cn(
                            "mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                            isCenter ? "bg-white text-brand-blue" : "bg-white/20 text-white"
                        )}>
                            <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={cn("text-base", isCenter ? "text-white" : "text-white/90")}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-12">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onButtonClick) onButtonClick();
                        else if (buttonHref) window.location.href = buttonHref;
                    }}
                    className={cn(
                        "w-full py-4 rounded-xl text-base font-bold transition-all duration-300 active:scale-95 shadow-lg",
                        isCenter
                            ? "bg-white text-[#1b1f4a] hover:bg-gray-100"
                            : "bg-transparent text-white border border-white/40 hover:bg-white/10"
                    )}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
