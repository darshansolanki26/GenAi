import { QualityIcon, BoostIcon, BlubIcon, FeaturesSectionDecorativeScribble } from '../../svg';

const features = [
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

export function FeatureSection() {
    return (
        <section className="relative w-full bg-[#DEDEFF] py-24 px-6">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/40 backdrop-blur-md p-10 rounded-[40px] border border-white/20 shadow-xl hover:-translate-y-2 transition-all duration-500 group text-center"
                        >
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-[#1b1f4a]/70 text-base leading-relaxed">
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
