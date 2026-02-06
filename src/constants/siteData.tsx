import BlubIcon from '../components/svg/BlubIcon';
import MailIcon from '../components/svg/MailIcon';
import CartIcon from '../components/svg/CartIcon';
import PageMessagIcon from '../components/svg/PageMessagIcon';
import LoudSpeakerIcon from '../components/svg/LoudSpeakerIcon';
import NewsIcon from '../components/svg/NewsIcon';

export const useCasesData = [
    {
        id: 1,
        icon: <BlubIcon height={56} width={42} />,
        title: 'Provides Actionable Insights',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
        variant: 'highlighted' as const,
    },
    {
        id: 2,
        icon: <CartIcon height={56} width={42} />,
        title: 'High-Converting eCommerce Copy',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
    },
    {
        id: 3,
        icon: <MailIcon height={56} width={42} />,
        title: 'Conversion-Focused Email Campaigns',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
    },
    {
        id: 4,
        icon: <PageMessagIcon height={56} width={42} />,
        title: 'Results Landing Page Messaging',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
    },
    {
        id: 5,
        icon: <LoudSpeakerIcon height={56} width={42} />,
        title: 'Impact-Driven Marketing Copy',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
    },
    {
        id: 6,
        icon: <NewsIcon height={56} width={42} />,
        title: 'Clear and Credible News Writing',
        description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
        buttonText: 'View Details',
    },
];

export const testimonialsData = [
    {
        id: 1,
        rating: 5,
        content: 'Supporting users through technology is rewarding. Small improvements powered by smart systems can create significant value in daily activities and decision-making.',
        author: {
            name: 'Kunal Desai',
            role: 'Product Marketing Lead',
        },
        variant: 'primary' as const,
    },
    {
        id: 2,
        rating: 4,
        content: 'Supporting users through technology is rewarding. Small improvements powered by smart systems can create significant value in daily activities and decision-making.',
        author: {
            name: 'Kunal Desai',
            role: 'Product Marketing Lead',
        },
        variant: 'secondary' as const,
    },
];

export const pricingData = [
    {
        id: 1,
        planName: 'Premium Plan',
        price: 699,
        features: [
            'Up to 5 users',
            '80,000 words per month',
            'Advanced AI writing capabilities',
            '200+ copywriting templates',
            'Blog, ad, and email generators',
            'SEO-optimized content support',
            '20+ languages',
        ],
    },
    {
        id: 2,
        planName: 'Premium Plan',
        price: 699,
        isPopular: true,
        features: [
            'Up to 5 users',
            '80,000 words per month',
            'Advanced AI writing capabilities',
            '200+ copywriting templates',
            'Blog, ad, and email generators',
            'SEO-optimized content support',
            '20+ languages',
        ],
    },
    {
        id: 3,
        planName: 'Premium Plan',
        price: 699,
        features: [
            'Up to 5 users',
            '80,000 words per month',
            'Advanced AI writing capabilities',
            '200+ copywriting templates',
            'Blog, ad, and email generators',
            'SEO-optimized content support',
            '20+ languages',
        ],
    },
];

export const faqData = [
    {
        id: 1,
        question: 'Is there a limit on how much content I can generate?',
        answer: 'Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience.',
    },
    {
        id: 2,
        question: 'Is there a limit on how much content I can generate?',
        answer: 'Our plans come with monthly word limits. The Premium plan includes 80,000 words per month which is suitable for most content creators.',
    },
    {
        id: 3,
        question: 'Is there a limit on how much content I can generate?',
        answer: 'You can upgrade your plan at any time to get more words and features.',
    },
    {
        id: 4,
        question: 'Is there a limit on how much content I can generate?',
        answer: 'We offer discounts for annual subscriptions and enterprise customers.',
    },
    {
        id: 5,
        question: 'Is there a limit on how much content I can generate?',
        answer: 'Yes, we offer a 14-day free trial for all new users.',
    },
];

export const ctaData = {
    title: "Is there a limit on how much content I can generate?",
    description: "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry. Once you know your audience.",
    buttonText: "Get Started",
    backgroundImage: "/CtaBanner.png",
};

export const footerData = {
    logo: 'GEN AI',
    description: 'Create high-quality blog posts with just a few clicks. Genera outlines, introduction, and complete articles instantly. Built for speed, clarity, and conversion.',
    columns: [
        {
            title: 'Gen AI',
            links: [
                { label: 'About Gen AI', href: '#' },
                { label: 'Our Blog', href: '#' },
                { label: 'Sign In', href: '#' },
                { label: 'Register', href: '#' },
                { label: 'Contact Us', href: '#' },
            ],
        },
        {
            title: 'Use Cases',
            links: [
                { label: 'Digital Ad Copy', href: '#' },
                { label: 'eCommerce Copy', href: '#' },
                { label: 'Landing Page Copy', href: '#' },
                { label: 'Writing Blog Content', href: '#' },
                { label: 'Product Description', href: '#' },
            ],
        },
    ],
    socialLinks: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    newsletter: {
        placeholder: 'Email',
        buttonText: 'Subscribe',
        onSubmit: (email: string) => console.log('Newsletter signup:', email),
    },
    copyright: 'Copyright © 2026 Gen AI by WebDesignLab. All Rights Reserved',
};
