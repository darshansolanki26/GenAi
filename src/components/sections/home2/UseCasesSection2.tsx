import { UseCaseCard } from '../../ui/UseCaseCard';
import { SparklesBlack as BlackSparkles } from '../../svg';
import { Button } from '../../ui/Button';
import { useCasesData } from '../../../constants/siteData';
import type { UseCaseCardProps } from '../../../types';

export function UseCasesSection2() {
    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/3 flex flex-col items-start pt-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-gray-50 text-xs text-[#1B1F4A] mb-6">
                            <BlackSparkles height={12} width={12} />
                            <span className="font-bold uppercase tracking-widest">GenAI Use Cases</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight mb-8">
                            Write Better Content Faster, The Future Of AI Writing Tools is Here
                        </h2>

                        <Button
                            variant="outline"
                            className="h-[52px] px-8 rounded-xl border-[#1B1F4A]/20 bg-white text-[#1B1F4A] font-semibold hover:bg-[#1B1F4A] hover:text-white transition-all duration-300"
                        >
                            Read More
                        </Button>
                    </div>

                    {/* Right Side: Cards Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCasesData.map((useCase: UseCaseCardProps) => (
                            <UseCaseCard
                                key={useCase.id}
                                {...useCase}
                            // Override layout for these side cards if needed, but the UseCaseCard is already centered
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute left-0 bottom-20 opacity-10 pointer-events-none -translate-x-1/2">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="150" stroke="#5B5CFF" strokeWidth="1" />
                    <circle cx="200" cy="200" r="100" stroke="#5B5CFF" strokeWidth="1" />
                    <circle cx="200" cy="200" r="50" stroke="#5B5CFF" strokeWidth="1" />
                </svg>
            </div>
        </section>
    );
}
