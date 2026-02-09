import { useState } from 'react';
import type { FAQItemProps } from '../../types';
import { FAQItem } from '../ui/FAQItem';
import { SparklesBlack as BlackSparkles } from '../svg';

interface FAQSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    faqs: Omit<FAQItemProps, 'isOpen' | 'onToggle'>[];
    defaultOpenId?: string | number;
}

export function FAQSection2({
    badge = 'FAQ',
    title,
    faqs,
    defaultOpenId,
}: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | number | null>(defaultOpenId ?? faqs[0]?.id ?? null);

    const handleToggle = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full bg-brand-blue -mt-20 md:-mt-32 lg:-mt-40 z-20 overflow-visible">
            {/* The background color here matches the end of the pricing section gradient */}

            {/* White Container with Rounded Corners */}
            <div className="relative bg-white rounded-t-[50px] md:rounded-t-[100px] lg:rounded-t-[150px] px-6 lg:px-20 pt-24 pb-24 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
                <div className="max-w-[1920px] w-full mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-xl text-xs text-gray-900 mb-6 mx-auto">
                                <BlackSparkles height={12} width={12} />
                                <span className="font-bold uppercase tracking-widest">{badge}</span>
                            </div>
                        )}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b1f4a] max-w-4xl mx-auto leading-tight">
                            {title}
                        </h2>
                    </div>

                    {/* FAQ Items List */}
                    <div className="max-w-4xl mx-auto space-y-6 text-regular">
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                {...faq}
                                isOpen={openId === faq.id}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
