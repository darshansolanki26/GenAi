import { Button } from '../ui/Button';
import { Home2CircleIcon, WriteBlogsFasterIcon, MessageIcon, SparklesWhite, MailIcon } from '../svg';

export function Hero() {
    return (
        <section className="relative overflow-hidden px-4 pt-48 pb-32
            bg-[linear-gradient(180deg,#0B1020_0%,#5B5CFF_100%)]">

            {/* Floating Background Element */}
            <Home2CircleIcon
                className="absolute -left-32 top-1/4 hidden xl:block animate-bounce [animation-duration:3s] w-[500px] h-[500px]"
            />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center relative z-10 pt-20">

                {/* Pill Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-white/20 bg-white/10 text-xs text-white mb-8
                    backdrop-blur-md relative overflow-hidden group">

                    <div className="absolute inset-0 bg-linear-to-r
                        from-transparent via-white/10 to-transparent
                        -translate-x-full group-hover:translate-x-full
                        transition-transform duration-1000" />

                    <SparklesWhite height={12} width={12} />
                    <span className="text-small-regular">Create Faster with AI</span>
                </div>

                {/* Heading */}
                <h1 className="text-extra-large md:text-[80px] font-bold text-white mb-4
                    leading-[1.1] tracking-tight">
                    Transform Your Writing <br />
                    <span className="text-white">10X Speed:</span>
                </h1>

                {/* Script Subheading */}
                <div className="font-script text-5xl md:text-[64px]
                    text-white/95 mb-10 -mt-2">
                    Product Description
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-lg max-w-2xl
                    mx-auto mb-12 leading-relaxed opacity-80">
                    Create high-quality blog posts with just a few clicks. Generate outlines,
                    introductions, and complete articles instantly. Built for speed, clarity,
                    and conversion.
                </p>

                {/* CTA */}
                <Button
                    size="lg"
                    className="text-primary rounded-full px-10 py-7 bg-white
                        hover:bg-white/90 font-bold text-lg
                        shadow-[0_10px_30px_rgba(255,255,255,0.2)]
                        transition-all hover:scale-105 active:scale-95"
                >
                    Start Writing - It's Free
                </Button>
            </div>

            {/* Feature Strip */}
            <div className="mt-32 max-w-6xl mx-auto grid grid-cols-1
                md:grid-cols-3 gap-6 text-sm relative z-10">

                <div className="flex items-center gap-4 p-5 rounded-2xl
                    bg-[#EEF2FF]/95 border border-white/20 shadow-xl
                    group hover:scale-105 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10
                        flex items-center justify-center text-blue-600">
                        <WriteBlogsFasterIcon height={24} width={24} fill="currentColor" />
                    </div>
                    <span className="text-primary font-semibold text-base">
                        Write Blogs 10X Faster
                    </span>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl
                    bg-[#F5F3FF]/95 border border-white/20 shadow-xl
                    group hover:scale-105 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10
                        flex items-center justify-center text-purple-600">
                        <MessageIcon height={24} width={24} fill="currentColor" />
                    </div>
                    <span className="text-primary font-semibold text-base">
                        Write Higher Converting Posts
                    </span>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl
                    bg-[#EEF2FF]/95 border border-white/20 shadow-xl
                    group hover:scale-105 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10
                        flex items-center justify-center text-indigo-600">
                        <MailIcon height={24} width={24} fill="currentColor" />
                    </div>
                    <span className="text-primary font-semibold text-base">
                        Write More Engaging Emails
                    </span>
                </div>
            </div>
        </section>
    );
}
