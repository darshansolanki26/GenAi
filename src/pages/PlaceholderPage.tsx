import { Link, useLocation } from 'react-router-dom';

export function PlaceholderPage({ title }: { title: string }) {
    const location = useLocation();

    return (
        <div className="min-h-screen pt-48 pb-32 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1B1F4A] mb-8">{title}</h1>
            <p className="text-gray-500 max-w-2xl mb-12">
                This is a placeholder for the {title} page.
                Current path: <code className="bg-gray-100 px-2 py-1 rounded text-brand-blue">{location.pathname}</code>
            </p>
            <Link
                to="/home-1"
                className="px-8 py-3 bg-[#1B1F4A] text-white rounded-xl font-bold hover:bg-[#2a3069] transition-all"
            >
                Back to Home
            </Link>
        </div>
    );
}
