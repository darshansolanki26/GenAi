// Types for reusable components - ready for backend integration

import type { ReactNode } from 'react';

// About Section
export interface AboutSectionProps {
    badge?: string;
    title: string;
    description: string;
    card?: {
        title: string;
        description: string;
    };
    features?: string[];
    buttonText?: string;
    buttonHref?: string;
    imageSrc: string;
    imageAlt?: string;
    onButtonClick?: () => void;
}

// Use Case Card
export interface UseCaseCardProps {
    id: string | number;
    icon: ReactNode;
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    variant?: 'default' | 'highlighted';
    onButtonClick?: () => void;
    onClick?: () => void;
}

// Testimonial Card
export interface TestimonialCardProps {
    id: string | number;
    rating: number;
    content: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

// Pricing Card
export interface PricingCardProps {
    id: string | number;
    planName: string;
    price: number;
    currency?: string;
    period?: string;
    features: string[];
    buttonText?: string;
    buttonHref?: string;
    isPopular?: boolean;
    onButtonClick?: () => void;
    onClick?: () => void;
}

// FAQ Item
export interface FAQItemProps {
    id: string | number;
    question: string;
    answer: string;
    isOpen?: boolean;
    onToggle?: (id: string | number) => void;
}

// CTA Banner
export interface CTABannerProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
    backgroundImage?: string;
    onButtonClick?: () => void;
}

// Footer Link
export interface FooterLink {
    label: string;
    href: string;
    onClick?: () => void;
}

// Footer Column
export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

// Footer Props
export interface FooterProps {
    logo?: string;
    description?: string;
    columns: FooterColumn[];
    socialLinks?: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        linkedin?: string;
    };
    newsletter?: {
        placeholder?: string;
        buttonText?: string;
        onSubmit?: (email: string) => void;
    };
    copyright?: string;
}

// Section Header (reusable)
export interface SectionHeaderProps {
    badge?: string;
    badgeIcon?: ReactNode;
    title: string;
    subtitle?: string;
    centered?: boolean;
}
