import {
    Hero2,
    FeatureGrid2,
    AppIntegration2,
    AboutSection2,
    UseCasesSection2,
    TestimonialsSection2,
    PricingSection2,
    FAQSection2
} from '../components/sections';

// Static Data
import {
    useCasesData,
    testimonialsData,
    pricingData,
    faqData
} from '../constants/siteData';

export default function Home2() {
    return (
        <>
            <Hero2 />
            <FeatureGrid2 />
            <AppIntegration2 />

            <AboutSection2
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

            <UseCasesSection2
                badge="GenAI Use Cases"
                title="Write Better Content Faster, The Future Of AI Writing Tools is Here"
                useCases={useCasesData}
                readMoreText="Read More"
                onReadMoreClick={() => console.log('Read more clicked')}
            />

            <TestimonialsSection2
                badge="Reviews"
                title="Write With AI: Instant Copy in All Your Favourite Apps"
                subtitle="Even experienced journalists face moments when ideas stall and structure feels unclear. GenAI supports news creation by turning raw information into well-organized, accurate, and reader-focused articles."
                testimonials={testimonialsData}
            />

            <PricingSection2
                badge="Pricing"
                title="Write With AI : Instant Copy in All Your Favourite Apps"
                plans={pricingData}
            />

            <FAQSection2
                badge="FAQ"
                title="Write With AI : Instant Copy in All Your Favourite Apps"
                faqs={faqData}
            />

        </>
    );
}
