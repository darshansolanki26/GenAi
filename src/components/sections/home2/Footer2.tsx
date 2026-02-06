import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { GenAiIcon } from '../../svg';
import { Button } from '../../ui/Button';

export function Footer2() {
    return (
        <footer className="w-full bg-brand-dark pt-24 pb-12 px-6 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-24">
                        <div className="text-white mb-8">
                            <GenAiIcon />
                        </div>
                        <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed max-w-lg">
                            Create high-quality blog posts with just a few clicks. GenAI outlines, introduction, and complete articles instantly. Built for speed, clarity, and conversion. Create high-quality blog posts with just a few clicks. GenAI outlines, introduction.
                        </p>

                        {/* Newsletter */}
                        <div className="w-full max-w-md flex items-center p-1.5 rounded-xl border border-white/10 bg-white/5 focus-within:border-brand-blue/50 transition-all">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent text-white px-4 py-2 outline-none placeholder:text-white/30 text-sm"
                            />
                            <Button className="bg-white text-[#1B1F4A] rounded-lg px-6 h-10 font-bold hover:bg-gray-200 transition-all">
                                Subscribe
                            </Button>
                        </div>

                        {/* Social Icons (as shown in image) */}
                        <div className="flex gap-4 mt-8">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="flex flex-col items-start">
                        <h4 className="text-xl font-bold text-white mb-8">Gen AI</h4>
                        <ul className="space-y-4">
                            {['About Gen AI', 'Our Blog', 'Sign In', 'Register', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="flex flex-col items-start">
                        <h4 className="text-xl font-bold text-white mb-8">Use Cases</h4>
                        <ul className="space-y-4">
                            {['Digital Ad Copy', 'eCommerce Copy', 'Landing Page Copy', 'Writing Blog Content', 'Product Description'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/30 text-[10px] md:text-sm text-center">
                        Copyright © 2026 Gen AI by WebDesignLab. All Rights Reserved
                    </p>

                    {/* Decorative grid lines overlay could be added via CSS if needed */}
                </div>
            </div>
        </footer>
    );
}
