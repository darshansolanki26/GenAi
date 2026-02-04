import type { CTABannerProps } from '../../types';

export function CTABanner({
    title,
    description,
    buttonText,
    buttonHref = '#',
    backgroundImage,
    onButtonClick,
}: CTABannerProps) {
    return (
        <div
            className="
        relative overflow-hidden rounded-2xl md:rounded-3xl
        mx-4 md:mx-8 lg:mx-16 my-12 md:my-20
      "
        >
            {/* Background */}
            <div
                className="
          absolute inset-0 bg-cover bg-center
          before:absolute before:inset-0 before:bg-[#5B5CFF]/80
        "
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundColor: backgroundImage ? undefined : '#5B5CFF',
                }}
            />

            {/* Content */}
            <div className="relative z-10 py-12 md:py-16 lg:py-20 px-6 md:px-12 text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 max-w-2xl mx-auto">
                    {title}
                </h3>

                <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                    {description}
                </p>

                <button
                    onClick={onButtonClick || (() => { window.location.href = buttonHref; })}
                    className="
            inline-flex items-center justify-center
            px-8 py-3 rounded-lg
            bg-white text-[#5B5CFF] font-medium
            transition-all duration-200
            hover:bg-gray-100 hover:scale-105 active:scale-95
            shadow-lg shadow-black/20
          "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
