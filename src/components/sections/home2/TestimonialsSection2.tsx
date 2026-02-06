import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { SparklesBlack as BlackSparkles } from '../../svg';

const testimonials = [
    {
        id: 1,
        author: 'Merry Johnson',
        role: 'Client of Company',
        image: 'https://i.pravatar.cc/150?u=merry',
        rating: 5,
        text: 'I take pride in contributing to modern technology that supports people in their everyday work. Seeing how digital tools simplify tasks and improve productivity shows the real impact of innovation in daily life.'
    },
    {
        id: 2,
        author: 'Aarav Mehta',
        role: 'Content Marketing Manager',
        image: 'https://i.pravatar.cc/150?u=aarav',
        rating: 4,
        text: 'Being part of this technological progress feels meaningful. Technology now bridges gaps, saves time, and helps individuals focus on what truly matters, both professionally and personally.'
    },
    {
        id: 3,
        author: 'Neha Sharma',
        role: 'Digital Growth Strategist',
        image: 'https://i.pravatar.cc/150?u=neha',
        rating: 5,
        text: 'It is impressive to see how advanced tools can assist people in solving routine challenges. This kind of innovation improves how technology can quietly enhance efficiency and connection.'
    },
    {
        id: 4,
        author: 'Kunal Desai',
        role: 'Product Marketing Lead',
        image: 'https://i.pravatar.cc/150?u=kunal',
        rating: 5,
        text: 'Supporting users through technology is rewarding. Small improvements powered by smart systems can create significant value in daily activities and decision-making.'
    }
];

export function TestimonialsSection2() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden px-6">
            <div className="max-w-[1400px] w-full mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-gray-50 text-xs text-[#1B1F4A] mb-8 shadow-sm">
                        <BlackSparkles height={12} width={12} />
                        <span className="font-bold uppercase tracking-widest text-[10px]">Reviews</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight max-w-4xl mb-8">
                        Write With AI: Instant Copy in All Your Favourite Apps
                    </h2>

                    <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
                        Even experienced journalists face moments when ideas stall and structure feels unclear. GenAI supports news creation by turning raw information into well-organized, accurate, and reader-focused articles.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full md:min-w-[400px] snap-center bg-white p-10 rounded-[30px] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-blue/20">
                                        <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#1B1F4A]">{item.author}</h4>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-auto italic">"{item.text}"</p>

                                <div className="flex gap-1 mt-8 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < item.rating ? 'currentColor' : 'none'} className={i < item.rating ? '' : 'text-gray-200'} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4 mt-8 justify-center">
                        <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-[#1B1F4A]/10 flex items-center justify-center text-[#1B1F4A] hover:bg-[#1B1F4A] hover:text-white transition-all shadow-md">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-[#1B1F4A]/10 flex items-center justify-center text-[#1B1F4A] hover:bg-[#1B1F4A] hover:text-white transition-all shadow-md">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
