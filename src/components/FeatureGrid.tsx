import QualityIcon from './svg/QualityIcon';
import BoostIcon from './svg/BoostIcon';
import BlubIcon from './svg/BlubIcon';

const features = [
    {
        icon: <QualityIcon className="w-8 h-8 text-blue-500" />,
        title: "Generates Quality Contents",
        desc: "This tool helps you identify the best keywords for your content. Using Google Keyword Planner, you can analyze search volume and user interest.",
        bg: "bg-blue-100"
    },
    {
        icon: <BlubIcon className="w-8 h-8 text-purple-500" />,
        title: "Provides Actionable Insights",
        desc: "GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.",
        bg: "bg-purple-100"
    },
    {
        icon: <BoostIcon className="w-8 h-8 text-indigo-500" />,
        title: "Boosts Productive Output",
        desc: "Emotional appeal is a strong driver in advertising. Applying emotions that align with your audience helps build connection and impact.",
        bg: "bg-indigo-100"
    }
];

export function FeatureSection() {
    return (
        <section
            className="
                relative
                w-full
                bg-[#e6e6ff]
                min-h-[494px]
                flex items-center
            "
        >
            {/* Content Wrapper (1920px max) */}
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="
                                bg-white/70 backdrop-blur-md
                                p-8 rounded-3xl
                                border border-white
                                shadow-xl shadow-indigo-200/40
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-2xl
                            "
                        >
                            <div
                                className={`w-16 h-16 ${feature.bg}
                                rounded-2xl flex items-center
                                justify-center mb-6 mx-auto`}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Scribble */}
            <div className="absolute right-10 bottom-6 opacity-20 pointer-events-none hidden lg:block">
                <svg
                    width="220"
                    height="110"
                    viewBox="0 0 200 100"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-600"
                >
                    <path
                        d="M10 50 Q 50 10 90 50 T 170 50"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </section>
    );
}
