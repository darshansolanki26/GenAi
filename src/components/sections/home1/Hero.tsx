import { Button } from '../../ui/Button';
import { FeaturesSectionDecorativeScribble } from '../../svg';

export function Hero() {
    return (
        <section className="relative overflow-hidden px-4 pt-48 pb-16 bg-white">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full" />
                <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
            </div>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto text-center relative z-10 px-6">
                {/* Pill Label */}
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-gray-100 bg-white/80 text-xs text-gray-500 mb-10 backdrop-blur-md shadow-sm relative overflow-hidden group mx-auto">
                    <div className="w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-[10px] text-[#1B1F4A]/60">Create Faster with AI</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-[#1B1F4A] mb-6 leading-[1.1] tracking-tight max-w-5xl mx-auto">
                    Transform Your Writing 10X Speed:
                </h1>

                {/* Product Description Subheading */}
                <div className="text-4xl md:text-[64px] font-bold text-brand-blue mb-10">
                    Product Description
                </div>

                {/* Description */}
                <p className="text-gray-500 text-base md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium opacity-80">
                    Create high-quality blog posts with just a few clicks. Generate outlines, introductions, and complete articles instantly. Built for speed, clarity, and conversion.
                </p>

                {/* CTA */}
                <div className="mb-32">
                    <Button className="h-[72px] px-16 rounded-2xl bg-[#1B1F4A] text-white font-bold text-lg hover:bg-[#2a3069] shadow-[0_20px_40px_rgba(27,31,74,0.25)] transition-all hover:scale-105 active:scale-95">
                        Start Writing - It's Free
                    </Button>
                </div>

                {/* Mockup Image Container */}
                <div className="relative max-w-6xl mx-auto py-10">
                    {/* Ring Shape (Left) */}
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-40 h-40 hidden xl:block opacity-60 z-20 pointer-events-none">
                        <div className="w-full h-full rounded-full border-12 border-brand-blue/10 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border-4 border-purple-400/20 blur-sm" />
                            <div className="w-1/2 h-1/2 rounded-full bg-linear-to-br from-brand-blue/30 to-purple-500/30" />
                        </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="relative rounded-[50px] overflow-hidden border border-white shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] bg-white transform transition-transform duration-700 hover:scale-[1.01]">
                        <img
                            src="/home_page_1.png"
                            alt="AI Dashboard Mockup"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Squiggle Shape (Right) */}
                    <div className="absolute -right-20 top-1/4 hidden xl:block text-purple-400 z-20 pointer-events-none opacity-40">
                        <FeaturesSectionDecorativeScribble width={185} height={84} className="rotate-15" />
                    </div>
                </div>
            </div>
        </section>
    );
}
