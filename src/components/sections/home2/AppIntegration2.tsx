import { SparklesBlack as BlackSparkles } from '../../svg';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const featureCards = [
    {
        image: '/CartAppIntegration.png',
        title: 'Create AI-Driven Content.',
        desc: 'Effective content starts with a clear audience. Define who you are targeting and understand their need and challenge. Build high-impact content for you.',
        buttonText: 'Read More',
        theme: 'dark'
    },
    {
        image: '/home_page_1.png', // Assuming these are relevant
        title: 'Smart Content Ranking Tool',
        desc: 'Leverage our advanced algorithms to optimize your content for search engines and social media visibility.',
        buttonText: 'Read More',
        theme: 'light'
    },
    {
        image: '/home_page_2.png',
        title: 'Write Blogs, Stories, and Books',
        desc: 'Generate creative narratives and structured long-form content with our intuitive AI writing assistant.',
        buttonText: 'Read More',
        theme: 'light'
    }
];

export function AppIntegration2() {
    return (
        <section className="relative w-full bg-[#DEDEFF] py-24 md:py-32 overflow-hidden px-6">
            <div className="max-w-[1400px] w-full mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white text-xs text-[#1B1F4A] mb-8">
                        <BlackSparkles height={12} width={12} />
                        <span className="font-bold uppercase tracking-widest text-[10px]">Features of AI</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight max-w-4xl">
                        Write With AI : Instant Copy in All Your Favourite Apps
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureCards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`group relative h-[500px] rounded-[40px] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 ${card.theme === 'dark' ? 'bg-[#1B1F4A] text-white' : 'bg-white text-[#1B1F4A]'
                                }`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-linear-to-t ${card.theme === 'dark' ? 'from-[#1B1F4A] via-[#1B1F4A]/40' : 'from-white via-white/20'
                                } to-transparent`} />

                            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start">
                                <h3 className="text-2xl font-bold mb-4 leading-tight">{card.title}</h3>
                                <p className={`text-sm mb-8 leading-relaxed ${card.theme === 'dark' ? 'text-white/70' : 'text-gray-500'
                                    }`}>
                                    {card.desc}
                                </p>

                                <button className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${card.theme === 'dark'
                                    ? 'bg-brand-blue text-white hover:bg-white hover:text-brand-blue'
                                    : 'bg-[#1B1F4A] text-white hover:bg-brand-blue'
                                    }`}>
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (as seen in image) */}
                <div className="flex items-center gap-4 mt-12 justify-start md:justify-start">
                    <button className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[#1B1F4A] hover:bg-[#1B1F4A] hover:text-white transition-all">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[#1B1F4A] hover:bg-[#1B1F4A] hover:text-white transition-all">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
