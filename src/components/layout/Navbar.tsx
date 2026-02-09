import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ChevronDownIcon, GenAiIcon, Dot } from '../svg';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
    const location = useLocation();

    const pagesLinks = [
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Contact', href: '/contact' },
        { label: 'Login', href: '/login' },
        { label: 'Blog', href: '/blog' },
        { label: 'Sign Up', href: '/sign-up' },
        { label: 'Article', href: '/article' },
        { label: 'Forgot password', href: '/forgot-password' },
        { label: 'Use cases', href: '/use-cases' },
        { label: 'Error 404', href: '/404' },
        { label: 'Case details', href: '/case-details' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className="
                relative mx-auto z-50 flex items-center justify-between
                w-[95%] max-w-[1600px] max-h-[80px]
                px-6 md:px-[70px] py-[14px]
                bg-white/20 backdrop-blur-xl
                border border-white/20 rounded-[20px]
                shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                transition-all duration-300
            "
        >
            {/* Gen AI Logo */}
            <Link to="/" className="w-[120px] h-full flex items-center text-xl font-bold tracking-[0.15em] text-white whitespace-nowrap">
                <GenAiIcon />
            </Link>

            {/* Desktop Links container */}
            <div className="hidden lg:flex items-center justify-center gap-8 w-auto flex-nowrap">
                {/* Home Link with Dropdown */}
                <div className="relative group/home">
                    <div className="group flex items-center cursor-pointer py-4 transition-all duration-300">
                        <Dot className="absolute opacity-0 translate-x-4 group-hover/home:opacity-100 group-hover/home:translate-x-0 transition-all duration-300 shrink-0" />
                        <span className="text-regular flex items-center gap-1 translate-x-0 group-hover/home:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                            Home <ChevronDownIcon height={16} width={16} />
                        </span>
                    </div>
                    {/* Home Dropdown Menu */}
                    <div className="absolute pt-5 top-full mt-[20px] max-w-[690px] h-[546px] opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible transition-all duration-300 ease-out z-100 ">
                        <div className="w-full bg-[#1b1f4a]/90 h-[546px] backdrop-blur-2xl border border-white/20 rounded-[30px] p-6 shadow-2xl flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-6 h-[474px]">
                                <Link to="/home-1" className="group/item flex flex-col gap-5" onClick={() => setIsHomeDropdownOpen(false)}>
                                    <div className={`relative w-full aspect-video h-[440px] rounded-[20px] overflow-hidden border ${isActive('/home-1') ? 'border-brand-blue border-2' : 'border-white/10'} shadow-inner bg-black/40`}>
                                        <img
                                            src="/home_page_1.png"
                                            alt="Home Page 1"
                                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    </div>
                                    <p className={`text-[16px] font-medium text-center ${isActive('/home-1') ? 'text-white' : 'text-white/70 group-hover/item:text-white'} transition-colors`}>Home Page 1</p>
                                </Link>
                                <Link to="/home-2" className="group/item flex flex-col gap-5" onClick={() => setIsHomeDropdownOpen(false)}>
                                    <div className={`relative w-full aspect-video rounded-[20px] overflow-hidden border ${isActive('/home-2') ? 'border-brand-blue border-2' : 'border-white/10'} shadow-inner bg-black/40`}>
                                        <img
                                            src="/home_page_2.png"
                                            alt="Home Page 2"
                                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    </div>
                                    <p className={`text-[16px] font-medium text-center ${isActive('/home-2') ? 'text-white' : 'text-white/70 group-hover/item:text-white'} transition-colors`}>Home Page 2</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pages Link with Dropdown */}
                <div className="relative group/pages">
                    <div className="group flex items-center text-regular cursor-pointer py-4 transition-all duration-300">
                        <Dot className="absolute opacity-0 translate-x-4 group-hover/pages:opacity-100 group-hover/pages:translate-x-0 transition-all duration-300 shrink-0" />
                        <span className="flex items-center gap-1 translate-x-0 group-hover/pages:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                            Pages <ChevronDownIcon height={16} width={16} />
                        </span>
                    </div>
                    {/* Pages Dropdown Menu */}
                    <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 lg:-translate-x-[15%] w-[90vw] max-w-[452px] opacity-0 invisible group-hover/pages:opacity-100 group-hover/pages:visible transition-all duration-300 ease-out z-100 pt-6">
                        <div className="w-full bg-[#000000]/25 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 shadow-2xl">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                {pagesLinks.map((link, idx) => (
                                    <Link key={idx} to={link.href} className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-nowrap flex items-center gap-2 group/link">
                                        <div className="w-1 h-1 bg-white rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/use-cases" className="group relative flex items-center text-regular transition-all duration-300">
                    <Dot className="absolute opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="translate-x-0 group-hover:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                        Use cases
                    </span>
                </Link>

                <Link to="/pricing" className="group relative flex items-center text-regular transition-all duration-300">
                    <Dot className="absolute opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="translate-x-0 group-hover:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                        Pricing
                    </span>
                </Link>

                <Link to="/contact" className="group relative flex items-center text-regular transition-all duration-300">
                    <Dot className="absolute opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="translate-x-0 group-hover:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                        Contact
                    </span>
                </Link>

                <Link to="/login" className="group relative flex items-center text-regular transition-all duration-300">
                    <Dot className="absolute opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="translate-x-0 group-hover:translate-x-4 transition-transform duration-300 whitespace-nowrap">
                        Login
                    </span>
                </Link>
            </div>

            {/* Get Started Button */}
            <div className="hidden lg:block">
                <Button
                    variant="outline"
                    className="
                        text-regular
                        flex items-center justify-center
                        w-[165px] h-[52px]
                        rounded-[10px]
                        border border-default-2 bg-transparent
                        text-default-2
                        hover:bg-default-2 hover:text-primary-1 transition-all active:scale-95
                        px-[26px] py-[13px]
                        gap-[10px]
                    "
                >
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <div
                className="lg:hidden text-white cursor-pointer z-50 text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <span className="block w-6 h-6 relative">
                        <span className="absolute block w-full h-0.5 bg-white rotate-45 top-3"></span>
                        <span className="absolute block w-full h-0.5 bg-white -rotate-45 top-3"></span>
                    </span>
                ) : (
                    <span className="w-6 h-6 flex flex-col justify-between py-1">
                        <span className="block w-full h-0.5 bg-white"></span>
                        <span className="block w-full h-0.5 bg-white"></span>
                        <span className="block w-full h-0.5 bg-white"></span>
                    </span>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-brand-dark/98 backdrop-blur-2xl z-40 flex flex-col p-8 pt-24 gap-6 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        <div
                            className="flex justify-between items-center text-xl font-semibold text-white cursor-pointer"
                            onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                        >
                            Home
                            <ChevronDownIcon className={`transition-transform duration-300 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isHomeDropdownOpen && (
                            <div className="flex flex-col gap-4 pl-4 mt-2 border-l border-white/10">
                                <Link
                                    to="/home-1"
                                    className={`text-lg transition-colors ${isActive('/home-1') ? 'text-brand-blue font-bold' : 'text-white/60 hover:text-white'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home Page 1
                                </Link>
                                <Link
                                    to="/home-2"
                                    className={`text-lg transition-colors ${isActive('/home-2') ? 'text-brand-blue font-bold' : 'text-white/60 hover:text-white'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home Page 2
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold text-white">Pages</div>
                        <div className="grid grid-cols-2 gap-4 pl-4 border-l border-white/10">
                            {pagesLinks.map((link, idx) => (
                                <Link key={idx} to={link.href} className="text-base text-white/60 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/use-cases" className="text-xl font-semibold text-white hover:text-primary-1 transition-colors" onClick={() => setIsMenuOpen(false)}>Use cases</Link>
                    <Link to="/pricing" className="text-xl font-semibold text-white hover:text-primary-1 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link to="/contact" className="text-xl font-semibold text-white hover:text-primary-1 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link to="/login" className="text-xl font-semibold text-white hover:text-primary-1 transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>

                    <Button variant="outline" className="w-full h-14 mt-auto text-lg">Get Started</Button>
                </div>
            )}
        </nav>
    );
}
