import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItemProps } from '../../types';

export function FAQItem({
    id,
    question,
    answer,
    isOpen: controlledIsOpen,
    onToggle,
}: FAQItemProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    // Support both controlled and uncontrolled modes
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    const handleToggle = () => {
        if (onToggle) {
            onToggle(id);
        } else {
            setInternalIsOpen(!internalIsOpen);
        }
    };

    return (
        <div
            className={`
        rounded-xl overflow-hidden transition-all duration-300
        ${isOpen
                    ? 'bg-[#5B5CFF] text-white shadow-lg'
                    : 'bg-white border border-gray-100 text-gray-900'
                }
      `}
        >
            {/* Question Header */}
            <button
                onClick={handleToggle}
                className={`
          w-full flex items-center justify-between p-5 md:p-6
          text-left cursor-pointer transition-colors
          ${isOpen ? 'hover:bg-indigo-600' : 'hover:bg-gray-50'}
        `}
                aria-expanded={isOpen}
            >
                <span className={`font-medium text-sm md:text-base pr-4 ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                    {question}
                </span>
                <ChevronDown
                    size={20}
                    className={`
            flex-shrink-0 transition-transform duration-300
            ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}
          `}
                />
            </button>

            {/* Answer Content */}
            <div
                className={`
          overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
            >
                <div className={`px-5 md:px-6 pb-5 md:pb-6 ${isOpen ? 'text-white/90' : 'text-gray-600'}`}>
                    <p className="text-sm leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}
