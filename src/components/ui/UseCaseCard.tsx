import type { UseCaseCardProps } from '../../types';

export function UseCaseCard({
    icon,
    title,
    description,
    buttonText = 'View Details',
    buttonHref = '#',
    variant = 'default',
    onButtonClick,
    onClick,
}: UseCaseCardProps) {
    const isHighlighted = variant === 'highlighted';

    return (
        <div
            onClick={onClick}
            className={`
        group relative p-6 md:p-8 rounded-2xl
        transition-all duration-300 cursor-pointer
        hover:-translate-y-1 hover:shadow-xl
        ${isHighlighted
                    ? 'bg-[#5B5CFF] text-white shadow-lg shadow-indigo-200'
                    : 'bg-white border border-gray-100 shadow-md'
                }
      `}
        >
            {/* Icon */}
            <div
                className={`
          w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center
          mb-5 mx-auto
          ${isHighlighted ? 'bg-white/20' : 'bg-indigo-50'}
        `}
            >
                {icon}
            </div>

            {/* Title */}
            <h3
                className={`
          text-base md:text-lg font-semibold text-center mb-3
          ${isHighlighted ? 'text-white' : 'text-gray-900'}
        `}
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className={`
          text-xs md:text-sm text-center leading-relaxed mb-5
          ${isHighlighted ? 'text-white/80' : 'text-gray-500'}
        `}
            >
                {description}
            </p>

            {/* Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onButtonClick) onButtonClick();
                    else if (buttonHref) window.location.href = buttonHref;
                }}
                className={`
          block mx-auto text-sm font-medium
          transition-colors duration-200
          ${isHighlighted
                        ? 'text-white underline underline-offset-4 hover:text-white/80'
                        : 'text-[#5B5CFF] hover:text-indigo-700'
                    }
        `}
            >
                {buttonText}
            </button>
        </div>
    );
}
