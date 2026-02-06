import { ChevronDown } from 'lucide-react';
import type { FAQItemProps } from '../../types';

export function FAQItem({
    id,
    question,
    answer,
    isOpen,
    onToggle,
}: FAQItemProps) {
    const handleToggle = () => {
        if (onToggle) {
            onToggle(id);
        }
    };

    return (
        <div
            className={`
        rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen
                    ? 'bg-[#1b1f4a] text-white shadow-2xl scale-[1.02]'
                    : 'bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-gray-900 border border-gray-100/50'
                }
      `}
        >
            {/* Question Header */}
            <button
                onClick={handleToggle}
                className={`
          w-full flex items-center justify-between p-6 md:p-8
          text-left cursor-pointer transition-colors
          ${isOpen ? 'bg-transparent' : 'hover:bg-gray-50/50'}
        `}
                aria-expanded={isOpen}
            >
                <span className={`text-base md:text-lg font-semibold pr-8 leading-tight ${isOpen ? 'text-white' : 'text-[#1b1f4a]'}`}>
                    {question}
                </span>
                <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen ? 'bg-white/10 rotate-180' : 'bg-gray-100'}
                `}>
                    <ChevronDown
                        size={18}
                        className={`${isOpen ? 'text-white' : 'text-gray-500'}`}
                    />
                </div>
            </button>

            {/* Answer Content */}
            <div
                className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className={`text-sm md:text-base leading-relaxed ${isOpen ? 'text-white/80' : 'text-gray-600'}`}>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
