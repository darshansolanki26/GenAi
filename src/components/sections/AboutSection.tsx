import type { AboutSectionProps } from '../../types';
import { SparklesBlack as BlackSparkles, Check } from '../svg';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function AboutSection({
    badge = 'About Us',
    title,
    description,
    card,
    features = [],
    buttonText = 'View Details',
    buttonHref = '#',
    imageSrc,
    imageAlt = 'About image',
    onButtonClick,
}: AboutSectionProps) {
    return (
        <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20 relative">

                {/* Main Content Wrapper: Flex to handle image and overlapping card */}
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Side: Large Image Container */}
                    <div className="w-full lg:w-[65%] shrink-0">
                        <div className="rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl relative">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto aspect-[4/3] lg:aspect-auto lg:min-h-[800px] object-cover"
                            />
                            {/* Inner gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Side: Overlapping Glass Card */}
                    {/* -ml-[15%] creates the overlap, translates to responsive design */}
                    <div
                        className={cn(
                            "w-full lg:w-[50%] z-10 -mt-20 lg:mt-0 lg:-ml-[15%]",
                            "bg-[#1B1F4A]/70 backdrop-blur-[40px] border border-white/20 shadow-2xl rounded-[30px] lg:rounded-[40px]",
                            "p-8 md:p-12 lg:p-16 flex flex-col text-white"
                        )}
                    >
                        {/* Header Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start mb-8 md:mb-10 text-xs text-white">
                            <BlackSparkles height={14} width={14} className="brightness-200" />
                            <span className="font-bold uppercase tracking-widest">{badge}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.2] mb-8 text-regular">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-2xl text-regular">
                            {description}
                        </p>

                        {/* Feature Section Grid */}
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-12 items-start">
                            {/* Inner Info Card */}
                            {card && (
                                <div className="bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-white/10 flex-1 w-full">
                                    <h4 className="text-xl font-bold mb-4 text-regular">{card.title}</h4>
                                    <p className="text-base text-white/50 leading-relaxed text-regular">{card.description}</p>
                                </div>
                            )}

                            {/* Features Checklist */}
                            {features.length > 0 && (
                                <ul className="space-y-5 flex-1 w-full">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                                <Check height={15} width={20} className="text-white" />
                                            </div>
                                            <span className="text-base md:text-lg text-white/90 font-medium text-regular">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* View Details Button */}
                        <div className="mt-4">
                            <Button
                                variant="outline"
                                onClick={onButtonClick || (() => { if (buttonHref) window.location.href = buttonHref; })}
                                className="h-14 px-10 rounded-xl border-white/20 bg-white/5 text-white font-bold hover:bg-white hover:text-[#1B1F4A] transition-all duration-300"
                            >
                                {buttonText}
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Decorative Accent Blur (bottom right) */}
                <div className="absolute right-10 bottom-10 w-48 h-48 bg-brand-blue/30 blur-[100px] rounded-full -z-10" />
            </div>
        </section>
    );
}
