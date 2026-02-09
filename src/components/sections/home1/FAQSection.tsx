import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SparklesBlack as BlackSparkles } from '../../svg';
import { Button } from '../../ui/Button';

const faqs = [
    {
        id: 1,
        question: 'What is a GenAI Content Writing Tool?',
        answer: 'A GenAI content writing tool is an intelligent platform that helps individuals and businesses create high-quality content faster and more efficiently. It uses advanced language models to understand context, audience intent, and goals, then generates structured, relevant, and engaging content across multiple formats.'
    },
    {
        id: 2,
        question: 'How Does GenAI Improve Content Quality?',
        answer: 'By leveraging large-scale language models, GenAI ensures grammatical accuracy, stylistic consistency, and relevant information flow.'
    },
    {
        id: 3,
        question: 'What Types of Content Can GenAI Create?',
        answer: 'From blog posts and social media copy to technical documentation and creative stories.'
    },
    {
        id: 4,
        question: 'Why Choose GenAI Over Traditional Writing?',
        answer: 'Speed, efficiency, and the ability to scale content production without sacrificing quality.'
    },
    {
        id: 5,
        question: 'How Does GenAI Understand My Target Audience?',
        answer: 'It analyzes provided keywords, tone preferences, and context to tailor the output specifically for your intended readers.'
    }
];

export function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(1);

    return (
        <section className="relative w-full bg-[#F9F9FF] py-24 md:py-32 px-6">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Accordion */}
                    <div className="w-full lg:w-3/5 space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`rounded-[20px] border border-gray-100 overflow-hidden transition-all duration-300 ${openId === faq.id ? 'bg-white shadow-xl' : 'bg-transparent'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openId === faq.id ? 'text-[#1B1F4A]' : 'text-[#1B1F4A]/70'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 transition-transform duration-300`}>
                                        {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-[500px] pb-8' : 'max-h-0'
                                    }`}>
                                    <p className="text-gray-500 leading-relaxed text-base italic">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Header & Support Card */}
                    <div className="w-full lg:w-2/5 flex flex-col items-start pt-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white text-xs text-[#1B1F4A] mb-8 shadow-sm">
                            <BlackSparkles height={12} width={12} />
                            <span className="font-bold uppercase tracking-widest text-[10px]">FAQ</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight mb-12">
                            Write With AI : Instant Copy in All Your Latest Favourite App
                        </h2>

                        {/* Support Card */}
                        <div className="w-full bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full" />

                            <h3 className="text-xl font-bold text-[#1B1F4A] mb-4">Still have a questions?</h3>
                            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry.
                            </p>

                            <Button className="bg-brand-blue text-white rounded-xl px-8 h-12 font-bold hover:bg-[#4a4bff] hover:shadow-lg transition-all group-hover:scale-105">
                                Send Email
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
