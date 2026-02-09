import type { UseCaseCardProps } from '../../types';
import { UseCaseCard } from '../ui/UseCaseCard';
import { SparklesBlack as BlackSparkles } from '../svg';
import { Button } from '../ui/Button';

interface UseCasesSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    useCases: UseCaseCardProps[];
    showReadMore?: boolean;
    readMoreText?: string;
    onReadMoreClick?: () => void;
}

export function UseCasesSection2({
    badge = 'GenAI Use Cases',
    title,
    useCases,
    showReadMore = true,
    readMoreText = 'Read More',
    onReadMoreClick,
}: UseCasesSectionProps) {
    return (
        <section className="relative w-full bg-[#DEDEFF] py-24 md:py-32 overflow-hidden">
            {/* Background Decorative Line Art (Mimicked with SVG) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <svg className="absolute bottom-10 right-10 w-[400px] h-[400px] text-brand-blue" viewBox="0 0 200 200" fill="none">
                    <path d="M10,180 Q50,140 100,160 T190,120" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M20,190 Q60,150 110,170 T200,130" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 px-4">
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm shadow-sm text-xs text-[#1B1F4A] mb-6 mx-auto">
                            <BlackSparkles height={12} width={12} />
                            <span className="font-bold uppercase tracking-widest">{badge}</span>
                        </div>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1F4A] max-w-4xl mx-auto leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {useCases.map((useCase) => (
                        <UseCaseCard key={useCase.id} {...useCase} />
                    ))}
                </div>

                {/* Read More Button */}
                {showReadMore && (
                    <div className="text-center mt-16 md:mt-24">
                        <Button
                            variant="outline"
                            onClick={onReadMoreClick}
                            className="h-[52px] px-10 rounded-xl border-[#1B1F4A]/20 bg-white/50 backdrop-blur-sm text-[#1B1F4A] font-bold hover:bg-[#1B1F4A] hover:text-white transition-all duration-300"
                        >
                            {readMoreText}
                        </Button>
                    </div>
                )}

            </div>

            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[40%] left-[45%] w-[120px] h-[120px] bg-brand-blue/30 blur-[60px] rounded-full" />
            </div>
        </section>
    );
}
