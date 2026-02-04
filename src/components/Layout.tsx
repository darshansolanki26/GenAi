import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
        </div>
    );
}
