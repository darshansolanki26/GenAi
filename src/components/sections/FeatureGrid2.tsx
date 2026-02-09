import type { ReactNode } from 'react';
import { QualityIcon, BoostIcon, BlubIcon, FeaturesSectionDecorativeScribble } from '../svg';

interface Feature {
    icon: ReactNode;
    title: string;
    desc: string;
    bg?: string;
}

interface FeatureSectionProps {
    features?: Feature[];
}

const defaultFeatures: Feature[] = [
    {
        icon: <QualityIcon height={56} width={56} className="text-brand-blue" />,
        title: "Generates Quality Contents",
        desc: "This tool helps you identify the best keywords for your content. Using Google Keyword Planner, you can analyze search volume and user interest.",
        bg: "bg-white"
    },
    {
        icon: <BlubIcon height={56} width={56} className="text-purple-500" />,
        title: "Provides Actionable Insights",
        desc: "GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.",
        bg: "bg-white"
    },
    {
        icon: <BoostIcon height={56} width={56} className="text-indigo-500" />,
        title: "Boosts Productive Output",
        desc: "Emotional appeal is a strong driver in advertising. Applying emotions that align with your audience helps build connection and impact.",
        bg: "bg-white"
    }
];

export function FeatureGrid2({ features = defaultFeatures }: FeatureSectionProps) {
    return (
        <section
            className="relative w-full bg-[#DEDEFF] py-16 sm:py-24 flex items-center px-4 sm:px-8 lg:px-16"
        >
            {/* Content Wrapper */}
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="
                                group relative
                                bg-white/40
                                backdrop-blur-md
                                p-8 sm:p-10
                                rounded-[32px]
                                border border-white/40
                                shadow-[0_4px_24px_rgba(0,0,0,0.05)]
                                transition-all duration-500
                                hover:-translate-y-2
                                hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                                hover:bg-white/60
                            "
                        >
                            <div
                                className={`w-20 h-20 ${feature.bg || 'bg-white'}
                                rounded-2xl flex items-center
                                justify-center mb-8 mx-auto
                                shadow-sm group-hover:scale-110 transition-transform duration-500`}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-center text-brand-blue mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-[#0B1020]/70 text-base sm:text-lg text-center leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Scribble */}
            <div className="absolute right-10 bottom-10 opacity-30 pointer-events-none hidden xl:block">
                <FeaturesSectionDecorativeScribble width={185} height={84} />
            </div>
        </section>
    );
}
