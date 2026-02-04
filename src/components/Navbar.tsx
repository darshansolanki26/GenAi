
import { Button } from './ui/Button';
import ChevronDownIcon from './svg/ChevronDownIcon';
import GenAiIcon from './svg/GenAiIcon';

export function Navbar() {
    return (
        <nav
            className="
                relative mx-auto z-50 flex items-center justify-between
                w-[95%] max-w-[1600px] h-[80px]
                px-6 md:px-[70px] py-[14px]
                bg-white/10 backdrop-blur-xl
                border border-white/20 rounded-[20px]
                shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                transition-all duration-300
            "
        >
            {/* Gen AI Logo: width ~120px */}
            <div className="w-[120px] h-full flex items-center text-xl font-bold tracking-[0.15em] text-white whitespace-nowrap">
                <GenAiIcon />
            </div>

            {/* Links: width ~627px. Left approx 487px relative to container.
                We'll use flex-center or absolute centering for desktop to match strict layout if needed,
                but standard flex usage is better for responsiveness.
                User specified 'left: 487px', which is specific.
                Let's try to center it or place it with margin if space allows.
            */}
            <div className="hidden lg:flex items-center justify-center gap-8 w-[627px] font-medium text-white/90">
                <a href="#" className="hover:text-white text-regular flex items-center gap-1 transition-colors">Home <ChevronDownIcon height={16} width={16} /></a>
                <a href="#" className="hover:text-white text-regular flex items-center gap-1 transition-colors">Pages <ChevronDownIcon height={16} width={16} /></a>
                <a href="#" className="hover:text-white text-regular transition-colors">Use cases</a>
                <a href="#" className="hover:text-white text-regular transition-colors">Pricing</a>
                <a href="#" className="hover:text-white text-regular transition-colors">Contact</a>
                <a href="#" className="hover:text-white text-regular transition-colors">Login</a>
            </div>

            {/* Get Started Button: w-165, h-52 */}
            <Button
                variant="outline"
                className="
                    text-regular
                    hidden md:flex items-center justify-center
                    w-[165px] h-[52px]
                    rounded-[10px]
                    border border-white bg-transparent
                    text-white font-medium
                    hover:bg-white/10 transition-colors duration-0 active:scale-95
                    px-[26px] py-[16px]
                    gap-[10px]
                "
                onClick={() => {
                    // Navigate to Log In (Mock)
                    console.log("Navigate: Log In");
                }}
            >
                Get Started
            </Button>

            {/* Mobile Menu Button Placeholder */}
            <div className="md:hidden text-white cursor-pointer">
                {/* Hamburger icon could go here */}
                ☰
            </div>
        </nav>
    );
}
