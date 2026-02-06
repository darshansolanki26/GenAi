import { useState } from 'react';
import type { FooterProps } from '../../types';
import { GenAiIcon, Instagram, Facebook, Twitter, Linkedin } from '../svg';

export function Footer({
    logo = <GenAiIcon />,
    description,
    columns,
    socialLinks,
    newsletter,
    copyright = `Copyright © ${new Date().getFullYear()} Gen AI by WebDesignLab. All Rights Reserved`,
}: FooterProps) {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletter?.onSubmit) {
            newsletter.onSubmit(email);
            setEmail('');
        }
    };

    return (
        <footer className="w-full bg-[rgba(27,31,74,1)] text-white">
            {/* Main Footer Content */}
            <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row items-start">

                    {/* Left Section: Logo & Newsletter Column (930px) */}
                    <div className="w-full lg:w-[930px] lg:pr-20 mb-12 lg:mb-0">
                        <div className="max-w-[465px]">
                            <h3 className="text-2xl font-bold mb-4">{logo}</h3>
                            {description && (
                                <p className="text-regular-normal text-white text-sm leading-relaxed mb-6 opacity-80">
                                    {description}
                                </p>
                            )}

                            {/* Newsletter Form */}
                            {newsletter && (
                                <form onSubmit={handleNewsletterSubmit} className="mb-8">
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={newsletter.placeholder || 'Email'}
                                            className="
                      flex-1 px-4 py-2.5 rounded-lg
                      bg-transparent border border-gray-600
                      text-white text-sm
                      placeholder:text-gray-500
                      focus:outline-none focus:border-white
                      transition-colors
                    "
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="
                      px-8 py-2.5 rounded-lg
                      bg-white text-brand-dark font-semibold text-sm
                      hover:bg-gray-200 transition-colors
                      active:scale-95
                    "
                                        >
                                            {newsletter.buttonText || 'Subscribe'}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Social Links */}
                            {socialLinks && (
                                <div className="flex items-center gap-4">
                                    {socialLinks.instagram && (
                                        <a
                                            href={socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram height={20} width={20} />
                                        </a>
                                    )}
                                    {socialLinks.facebook && (
                                        <a
                                            href={socialLinks.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook height={22} width={22} />
                                        </a>
                                    )}
                                    {socialLinks.twitter && (
                                        <a
                                            href={socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                            aria-label="Twitter/X"
                                        >
                                            <Twitter height={18} width={20} />
                                        </a>
                                    )}
                                    {socialLinks.linkedin && (
                                        <a
                                            href={socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin height={20} width={20} />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="hidden lg:block w-px h-[367px] bg-[#D0D0D0] mt-[100px]" />

                    {/* Right Section: Link Columns (990px) */}
                    <div className="w-full lg:w-[990px] lg:pl-[120px] grid grid-cols-2 gap-8 lg:gap-12">
                        {columns.map((column, index) => (
                            <div key={index}>
                                <h4 className="text-xl font-bold mb-6">{column.title}</h4>
                                <ul className="space-y-4">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                onClick={link.onClick}
                                                className="relative inline-block text-gray-300 hover:text-white transition-colors after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    after:duration-300

    hover:after:w-full "
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-[rgba(161,161,161,1)]">
                <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-20 py-4">
                    <p className="text-center text-[rgba(161,161,161,1)]
 text-regular-normal leading-[26px] w-full
    max-w-[542px] mx-auto ">
                        {copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
