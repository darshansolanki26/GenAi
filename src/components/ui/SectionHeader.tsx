import type { SectionHeaderProps } from '../../types';
import BlackSparkles from '../svg/BlackSparkles';

export function SectionHeader({
    badge,
    badgeIcon,
    title,
    subtitle,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {badge && (
                <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-gray-200 bg-gray-50 text-xs text-gray-600 mb-4
            ${centered ? 'mx-auto' : ''}`}
                >
                    {badgeIcon || <BlackSparkles height={12} width={12} />}
                    <span className="font-medium">{badge}</span>
                </div>
            )}

            <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900
          ${centered ? 'max-w-3xl mx-auto' : ''}`}
            >
                {title}
            </h2>

            {subtitle && (
                <p
                    className={`mt-4 text-gray-600 text-sm md:text-base
            ${centered ? 'max-w-2xl mx-auto' : ''}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
