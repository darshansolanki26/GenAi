import type { TestimonialCardProps } from '../../types';
import { cn } from '../../lib/utils';

export function TestimonialCard({
    rating,
    content,
    author,
    variant = 'primary',
    onClick,
}: TestimonialCardProps) {
    const isPrimary = variant === 'primary';

    // Generate star rating
    const stars = Array.from({ length: 5 }, (_, i) => (
        <span
            key={i}
            className={cn(
                "text-lg",
                i < rating
                    ? (isPrimary ? 'text-brand-blue' : 'text-[#1B1F4A]')
                    : (isPrimary ? 'text-white/20' : 'text-gray-300')
            )}
        >
            ★
        </span>
    ));

    return (
        <div
            onClick={onClick}
            className={cn(
                "relative p-8 md:p-10 rounded-[30px] cursor-pointer transition-all duration-300 w-[350px] md:w-[420px] shrink-0 flex flex-col gap-6",
                isPrimary
                    ? "bg-[#1B1F4A] text-white shadow-2xl"
                    : "bg-white border border-gray-100 text-[#1B1F4A] shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            )}
        >
            {/* Rating Stars */}
            <div className="flex gap-1">{stars}</div>

            {/* Content */}
            <p
                className={cn(
                    "text-base md:text-lg leading-relaxed grow",
                    isPrimary ? "text-white/90" : "text-[#1B1F4A]/80 font-medium"
                )}
            >
                {content}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4">
                {author.avatar ? (
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                    />
                ) : (
                    <div
                        className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold",
                            isPrimary ? "bg-white/10 text-white" : "bg-gray-100 text-[#1B1F4A]"
                        )}
                    >
                        {author.name.charAt(0)}
                    </div>
                )}
                <div className="flex flex-col">
                    <p className={cn("font-bold text-base md:text-lg", isPrimary ? "text-white" : "text-[#1B1F4A]")}>
                        {author.name}
                    </p>
                    <p className={cn("text-sm", isPrimary ? "text-white/60" : "text-gray-400 font-medium")}>
                        {author.role}
                    </p>
                </div>
            </div>
        </div>
    );
}
