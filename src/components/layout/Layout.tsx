import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CTABanner } from '../ui/CTABanner';
import { footerData, ctaData } from '../../constants/siteData';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const pathname = location.pathname;

    // Define page groups for conditional rendering
    const authPages = ['/login', '/sign-up', '/reset-password', '/forgot-password'];
    const errorPage = ['/404'];

    const hideAll = authPages.includes(pathname);
    const hideCTA = errorPage.includes(pathname) || hideAll;

    return (
        <div className="min-h-screen relative w-full overflow-x-hidden">
            {/* Navbar is fixed/absolute at top or part of flow? 
                User said "top: 81px". 
                If we want it to "render in all page", sticking it here is correct.
            */}
            <div className="absolute top-0 left-0 w-full z-50 flex justify-center pt-[81px]">
                <Navbar />
            </div>

            <main className="w-full">
                {children}
            </main>

            {!hideCTA && (
                <CTABanner {...ctaData} />
            )}

            {!hideAll && (
                <Footer {...footerData} />
            )}
        </div>
    );
}
