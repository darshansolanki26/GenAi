import { ArrowUpRight } from 'lucide-react';
import BlackSparkles from './svg/BlackSparkles';
import AiSparkleWhite from './svg/AiSparkleWhite';
import AiSparkleBlack from './svg/AiSparkleBlack';

export function AppIntegration() {
    return (
        <section
            className="
                relative
                w-full
                bg-white
                min-h-[851px]
                flex items-center
            "
        >
            {/* Content Wrapper */}
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1
                        rounded-full border border-gray-200 bg-gray-50
                        text-xs text-gray-500 mb-4">
                        <BlackSparkles height={12} width={12} />
                        <span>Features of AI</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
                        Write With AI : Instant Copy in All Your Favourite Apps
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 – Image */}
                    <div className="group relative rounded-3xl overflow-hidden h-[400px] bg-gray-900 text-white">
                        <img
                            src="/CartAppIntegration.png"
                            alt="Laptop"
                            className="absolute inset-0 w-full h-full object-cover opacity-60
                                group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t
                            from-black/80 via-black/30 to-transparent" />

                        <div className="absolute top-6 right-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-full
                                flex items-center justify-center">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-2">
                                <AiSparkleWhite height={32} width={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Create AI-Driven Content.
                            </h3>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Effective content starts with a clear audience. Define who
                                you are targeting and understand their needs.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group rounded-3xl border border-gray-100
                        bg-white p-8 h-[400px] flex flex-col justify-between
                        shadow-lg shadow-gray-100 hover:border-gray-200
                        transition-all">
                        <div className="flex justify-end">
                            <div className="w-8 h-8 border border-gray-200
                                rounded-full flex items-center justify-center
                                text-gray-400 group-hover:bg-black
                                group-hover:text-white transition">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        <div>
                            <AiSparkleBlack height={32} width={32} className="text-black mb-6" />
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Create AI-Driven Content.
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Define your audience, clarify intent, and build
                                high-impact content that converts faster.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group rounded-3xl border border-gray-100
                        bg-white p-8 h-[400px] flex flex-col justify-between
                        shadow-lg shadow-gray-100 hover:border-gray-200
                        transition-all">
                        <div className="flex justify-end">
                            <div className="w-8 h-8 border border-gray-200
                                rounded-full flex items-center justify-center
                                text-gray-400 group-hover:bg-black
                                group-hover:text-white transition">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        <div>
                            <AiSparkleBlack height={32} width={32} className="text-black mb-6" />
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Create AI-Driven Content.
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Generate consistent messaging across platforms
                                using AI-powered writing workflows.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
