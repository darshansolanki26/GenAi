import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureGrid';
import { AppIntegration } from './components/AppIntegration';
import { AboutSection } from './components/AboutSection';
import { UseCasesSection } from './components/UseCasesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CTABanner } from './components/ui/CTABanner';
import { Footer } from './components/Footer';

// Icons for use cases (you can replace with your SVG icons)
import BlubIcon from './components/svg/BlubIcon';
import QualityIcon from './components/svg/QualityIcon';
import MailIcon from './components/svg/MailIcon';
import CartIcon from './components/svg/CartIcon';
import PageMessag from './components/svg/PageMessagIcon';
import PageMessagIcon from './components/svg/PageMessagIcon';
import { SpeakerIcon } from 'lucide-react';
import LoudSpeakerIcon from './components/svg/LoudSpeakerIcon';
import NewsIcon from './components/svg/NewsIcon';

// Sample data - can be replaced with backend data later
const useCasesData = [
  {
    id: 1,
    icon: <BlubIcon className="w-8 h-8" />,
    title: 'Provides Actionable Insights',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
    variant: 'highlighted' as const,
  },
  {
    id: 2,
    icon: <CartIcon className="w-8 h-8" />,
    title: 'High-Converting eCommerce Copy',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
  },
  {
    id: 3,
    icon: <MailIcon className="w-8 h-8" />,
    title: 'Conversion-Focused Email Campaigns',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
  },
  {
    id: 4,
    icon: <PageMessagIcon className="w-8 h-8" />,
    title: 'Results Landing Page Messaging',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
  },
  {
    id: 5,
    icon: <LoudSpeakerIcon className="w-8 h-8" />,
    title: 'Impact-Driven Marketing Copy',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
  },
  {
    id: 6,
    icon: <NewsIcon className="w-8 h-8" />,
    title: 'Clear and Credible News Writing',
    description: 'GenAI writing tools examine data and produce clear recommendations, helping writers craft more engaging and informative content.',
    buttonText: 'View Details',
  },
];

const testimonialsData = [
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

const pricingData = [
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

const faqData = [
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

const footerData = {
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

function App() {
  return (
    <div className="min-h-screen relative bg-[#0d0b21]">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `url('/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <Layout>
          <Hero />
          <FeatureSection />
          <AppIntegration />

          {/* About Section */}
          <AboutSection
            badge="About Us"
            title="Create Smarter Content With GenAI"
            description="GenAI is a powerful content creation platform built to help writers, marketers, and businesses produce high-quality content faster. With intelligent automation, it transforms simple inputs into structured outlines, compelling introductions, and complete content. All in minutes, not hours."
            card={{
              title: 'Smart Content With GenAI',
              description: 'GenAI is a powerful content creation platform built to help writers, marketers, and businesses produce high-quality content faster.',
            }}
            features={[
              'Create long-form content instantly.',
              'Designed for writers, marketers.',
              'Reduces manual effort and boosts.',
            ]}
            buttonText="View Details"
            imageSrc="/AboutBg.png"
            onButtonClick={() => console.log('About button clicked')}
          />

          {/* Use Cases Section */}
          <UseCasesSection
            badge="GenAI Use Cases"
            title="Write Better Content Faster, The Future Of AI Writing Tools is Here"
            useCases={useCasesData}
            readMoreText="Read More"
            onReadMoreClick={() => console.log('Read more clicked')}
          />

          {/* Testimonials Section */}
          <TestimonialsSection
            badge="Reviews"
            title="Write With AI: Instant Copy in All Your Favourite Apps"
            subtitle="Even experienced journalists face moments when ideas stall and structure feels unclear. GenAI supports news creation by turning raw information into well-organized, accurate, and reader-focused articles."
            testimonials={testimonialsData}
          />

          {/* Pricing Section */}
          <PricingSection
            badge="Pricing"
            title="Write With AI : Instant Copy in All Your Favourite Apps"
            plans={pricingData}
          />

          {/* FAQ Section */}
          <FAQSection
            badge="FAQ"
            title="Write With AI : Instant Copy in All Your Favourite Apps"
            faqs={faqData}
          />

          {/* CTA Banner */}
          <CTABanner
            title="Is there a limit on how much content I can generate?"
            description="Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry. Once you know your audience."
            buttonText="Get Started"
            backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
            onButtonClick={() => console.log('CTA clicked')}
          />

          {/* Footer */}
          <Footer {...footerData} />
        </Layout>
      </div>
    </div>
  );
}

export default App;
