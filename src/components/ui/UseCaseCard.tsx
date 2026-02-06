import type { UseCaseCardProps } from '../../types';
import { cn } from '../../lib/utils';

export function UseCaseCard({
    icon,
    title,
    description,
    buttonText = 'View Details',
    buttonHref = '#',
    variant = 'default',
    onButtonClick,
    onClick,
}: UseCaseCardProps) {
    const isHighlighted = variant === 'highlighted';

    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative p-10 md:p-12 rounded-[30px] transition-all duration-500 cursor-pointer flex flex-col items-center text-center",
                "hover:-translate-y-2 hover:shadow-2xl",
                isHighlighted
                    ? "bg-[#1B1F4A] text-white shadow-xl"
                    : "bg-[#F3F4FF] border border-white/50 text-[#1B1F4A] shadow-[0_4_20px_rgba(0,0,0,0.03)]"
            )}
        >
            {/* Icon Container */}
            <div
                className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 shadow-lg",
                    isHighlighted ? "bg-white text-[#1B1F4A]" : "bg-brand-blue text-white"
                )}
            >
                {icon}
            </div>

            {/* Title */}
            <h3
                className={cn(
                    "text-xl md:text-2xl font-bold mb-6 min-h-[56px] flex items-center justify-center leading-tight",
                    isHighlighted ? "text-white" : "text-brand-blue"
                )}
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className={cn(
                    "text-base leading-relaxed mb-10",
                    isHighlighted ? "text-white/80" : "text-[#1B1F4A]/70"
                )}
            >
                {description}
            </p>

            {/* View Details Link */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onButtonClick) onButtonClick();
                    else if (buttonHref) window.location.href = buttonHref;
                }}
                className={cn(
                    "text-base font-bold underline underline-offset-[6px] transition-all duration-300",
                    isHighlighted
                        ? "text-white hover:text-white/80"
                        : "text-[#1B1F4A] hover:text-brand-blue"
                )}
            >
                {buttonText}
            </button>

            {/* Decorative Glow for Hover State (Optional but premium) */}
            <div className={cn(
                "absolute inset-0 rounded-[30px] opacity-0 transition-opacity duration-500 pointer-events-none",
                "group-hover:opacity-10 shadow-[inner_0_0_40px_rgba(255,255,255,0.1)]",
                isHighlighted ? "bg-white/5" : "bg-brand-blue/5"
            )} />
        </div>
    );
}
