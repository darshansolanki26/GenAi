import { Check } from 'lucide-react';
import { SparklesWhite as WhiteSparkles } from '../../svg';
import { Button } from '../../ui/Button';

const plans = [
    {
        name: 'Basic Plan',
        price: 'Free',
        features: [
            'Single user access',
            '10,000 words per month',
            'Essential AI writing tools',
            'Core copywriting templates',
            'Supports multiple content types',
            '5+ language support'
        ]
    },
    {
        name: 'Standard Plan',
        price: '$299',
        isPopular: true,
        features: [
            'Up to 5 users',
            '80,000 words per month',
            'Advanced AI writing capabilities',
            '200+ copywriting templates',
            'Blog, ad, and email generators',
            'SEO-optimized content support',
            '20+ languages'
        ]
    },
    {
        name: 'Advance Plan',
        price: '$699',
        features: [
            'Unlimited users',
            '150,000+ words per month',
            'Complete AI content suite',
            '300+ premium copy templates',
            'Blog wizard and SEO tools',
            'Priority content generation',
            'Brand voice consistency tools'
        ]
    }
];

export function PricingSection() {
    return (
        <section className="relative w-full bg-[#DEDEFF] py-24 md:py-32 px-6">
            <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white text-xs text-[#1B1F4A] mb-8 shadow-sm">
                        <WhiteSparkles height={12} width={12} className="opacity-40" />
                        <span className="font-bold uppercase tracking-widest text-[10px]">Pricing</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] leading-tight max-w-3xl">
                        Write With AI : Instant Copy in All Your Favourite Apps
                    </h2>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center w-full max-w-6xl">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col p-10 transition-all duration-500 ${plan.isPopular
                                ? 'bg-brand-blue text-white shadow-2xl rounded-[30px] z-10 py-16 scale-105'
                                : 'bg-white text-[#1B1F4A] rounded-[30px] border border-white lg:border-none'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="px-6 py-2 text-xs font-bold bg-[#1B1F4A] text-white rounded-full uppercase tracking-widest">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 mb-6">
                                <div className={`w-2 h-2 rounded-full ${plan.isPopular ? 'bg-white' : 'bg-[#1B1F4A]'}`} />
                                <span className="text-sm font-bold uppercase tracking-widest">{plan.name}</span>
                                <span className="ml-auto text-2xl font-bold">{plan.price !== 'Free' ? plan.price : 'Free'}</span>
                            </div>

                            <div className={`w-full h-px mb-10 ${plan.isPopular ? 'bg-white/20' : 'bg-gray-100'}`} />

                            <ul className="space-y-6 mb-12">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-4">
                                        <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-white/20' : 'bg-[#1B1F4A]/10'
                                            }`}>
                                            <Check size={12} strokeWidth={3} className={plan.isPopular ? 'text-white' : 'text-[#1B1F4A]'} />
                                        </div>
                                        <span className="text-sm font-medium opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.isPopular ? 'outline' : 'primary'}
                                className={`w-full h-14 rounded-xl font-bold text-base transition-all ${plan.isPopular
                                    ? 'bg-white text-[#1B1F4A] border-none hover:bg-white/90'
                                    : 'bg-brand-blue text-white hover:bg-[#4a4bff]'
                                    }`}
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
