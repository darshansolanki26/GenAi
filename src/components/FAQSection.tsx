import { useState } from 'react';
import type { FAQItemProps } from '../types';
import { FAQItem } from './ui/FAQItem';
import { SectionHeader } from './ui/SectionHeader';

interface FAQSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    faqs: Omit<FAQItemProps, 'isOpen' | 'onToggle'>[];
    defaultOpenId?: string | number;
}

export function FAQSection({
    badge = 'FAQ',
    title,
    subtitle,
    faqs,
    defaultOpenId,
}: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | number | null>(defaultOpenId ?? faqs[0]?.id ?? null);

    const handleToggle = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

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

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
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
        </section>
    );
}
