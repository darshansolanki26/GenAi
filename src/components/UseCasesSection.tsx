import type { ReactNode } from 'react';
import type { UseCaseCardProps } from '../types';
import { UseCaseCard } from './ui/UseCaseCard';
import { SectionHeader } from './ui/SectionHeader';

interface UseCasesSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    useCases: UseCaseCardProps[];
    showReadMore?: boolean;
    readMoreText?: string;
    onReadMoreClick?: () => void;
}

export function UseCasesSection({
    badge = 'GenAI Use Cases',
    title,
    subtitle,
    useCases,
    showReadMore = true,
    readMoreText = 'Read More',
    onReadMoreClick,
}: UseCasesSectionProps) {
    return (
        <section className="relative w-full bg-[#e6e6ff] py-16 md:py-24">
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">

                {/* Header */}
                <SectionHeader
                    badge={badge}
                    title={title}
                    subtitle={subtitle}
                    centered
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {useCases.map((useCase) => (
                        <UseCaseCard key={useCase.id} {...useCase} />
                    ))}
                </div>

                {/* Read More Button */}
                {showReadMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={onReadMoreClick}
                            className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg
                bg-white text-gray-900 font-medium text-sm
                border border-gray-200
                transition-all duration-200
                hover:bg-gray-50 hover:border-gray-300 active:scale-95
              "
                        >
                            {readMoreText}
                        </button>
                    </div>
                )}

            </div>

            {/* Decorative element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-indigo-300/30 rounded-full hidden lg:block" />
        </section>
    );
}
