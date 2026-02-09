import { Button } from '../../ui/Button';

export function CTABanner() {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="relative w-full bg-linear-to-r from-[#DEDEFF] to-[#E8E8FF] rounded-[50px] overflow-hidden p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group">

                    {/* Background Decorative Element (Abstract shape as seen in image) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                                <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#5B5CFF" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#B16CEA" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M300,100 C350,150 350,250 300,300 C250,350 150,350 100,300 C50,250 50,150 100,100 C150,50 250,50 300,100"
                                fill="url(#fluidGrad)"
                                className="animate-pulse"
                            />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full md:w-3/5">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1B1F4A] mb-8 leading-tight">
                            Is there a limit on how much <br /> content I can generate?
                        </h2>
                        <p className="text-[#1B1F4A]/70 text-base md:text-xl mb-12 max-w-xl leading-relaxed">
                            Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry. Once you know your audience.
                        </p>
                        <Button className="h-16 px-12 rounded-2xl bg-white text-[#1B1F4A] font-bold text-lg hover:bg-[#1B1F4A] hover:text-white transition-all shadow-xl hover:shadow-2xl">
                            Get Started
                        </Button>
                    </div>

                    {/* Fluid Element Overlay (Mimicking the 3D element in image) */}
                    <div className="relative z-10 w-full md:w-2/5 flex justify-center lg:justify-end">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-brand-blue/20 blur-[80px] rounded-full animate-pulse" />
                            <div className="w-full h-full bg-brand-blue/10 backdrop-blur-3xl border border-white/20 rounded-full flex items-center justify-center shadow-inner">
                                <div className="w-3/4 h-3/4 bg-brand-blue/20 rounded-full animate-ping [animation-duration:3s]" />
                                <div className="absolute w-1/2 h-1/2 bg-white/40 blur-xl rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
