import type { TestimonialCardProps } from '../../types';

export function TestimonialCard({
    rating,
    content,
    author,
    variant = 'primary',
    onClick,
}: TestimonialCardProps) {
    const isPrimary = variant === 'primary';

    // Generate star rating
    const stars = Array.from({ length: 5 }, (_, i) => (
        <span
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        >
            ★
        </span>
    ));

    return (
        <div
            onClick={onClick}
            className={`
        relative p-6 rounded-2xl cursor-pointer
        transition-all duration-300 hover:shadow-lg
        min-w-[280px] md:min-w-[320px]
        ${isPrimary
                    ? 'bg-[#5B5CFF] text-white'
                    : 'bg-white border border-gray-100 text-gray-900'
                }
      `}
        >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4 text-sm">{stars}</div>

            {/* Content */}
            <p
                className={`
          text-sm leading-relaxed mb-6
          ${isPrimary ? 'text-white/90' : 'text-gray-600'}
        `}
            >
                {content}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                {author.avatar ? (
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <div
                        className={`
              w-10 h-10 rounded-full flex items-center justify-center
              text-sm font-semibold
              ${isPrimary ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}
            `}
                    >
                        {author.name.charAt(0)}
                    </div>
                )}
                <div>
                    <p className={`font-semibold text-sm ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
                        {author.name}
                    </p>
                    <p className={`text-xs ${isPrimary ? 'text-white/70' : 'text-gray-500'}`}>
                        {author.role}
                    </p>
                </div>
            </div>
        </div>
    );
}
