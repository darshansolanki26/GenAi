import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "text-regular inline-flex items-center justify-center rounded-lg font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20": variant === "outline",
                        "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg": variant === "primary",
                        "bg-transparent hover:bg-white/10 text-white": variant === "ghost",
                        "bg-white text-indigo-900 hover:bg-gray-100": variant === "white",
                        "h-8 px-4 py-1": size === "sm",
                        "h-10 px-6 py-2": size === "md",
                        "h-12 px-8 py-3": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
