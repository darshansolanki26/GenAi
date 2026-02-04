import { Check } from 'lucide-react';
import type { PricingCardProps } from '../../types';

export function PricingCard({
    planName,
    price,
    currency = '$',
    period = '/Month',
    features,
    buttonText = 'View Details',
    buttonHref = '#',
    isPopular = false,
    onButtonClick,
    onClick,
}: PricingCardProps) {
    return (
        <div
            onClick={onClick}
            className={`
        relative p-6 md:p-8 rounded-2xl cursor-pointer
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        ${isPopular
                    ? 'bg-[#1a1a3e] text-white shadow-2xl scale-105 z-10'
                    : 'bg-white text-gray-900 border border-gray-100 shadow-lg'
                }
      `}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white text-[#1a1a3e] rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Plan Name */}
            <div className="flex items-center gap-2 mb-4">
                <span
                    className={`w-2 h-2 rounded-full ${isPopular ? 'bg-white' : 'bg-[#5B5CFF]'}`}
                />
                <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                    {planName}
                </span>
            </div>

            {/* Price */}
            <div className="mb-6">
                <span className={`text-4xl md:text-5xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {currency}{price}
                </span>
                <span className={`text-sm ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                    {period}
                </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check
                            size={16}
                            className={`mt-0.5 flex-shrink-0 ${isPopular ? 'text-white' : 'text-[#5B5CFF]'}`}
                        />
                        <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onButtonClick) onButtonClick();
                    else if (buttonHref) window.location.href = buttonHref;
                }}
                className={`
          w-full py-3 rounded-lg text-sm font-medium
          transition-all duration-200 active:scale-95
          ${isPopular
                        ? 'bg-white text-[#1a1a3e] hover:bg-gray-100'
                        : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }
        `}
            >
                {buttonText}
            </button>
        </div>
    );
}
