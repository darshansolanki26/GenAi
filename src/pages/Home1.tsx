import {
    Hero,
    FeatureSection,
    AppIntegration,
    AboutSection,
    UseCasesSection,
    TestimonialsSection,
    PricingSection,
    FAQSection,
} from '../components/sections/home1';

export default function Home1() {
    return (
        <div className="bg-[#F9F9FF]">
            <Hero />
            <FeatureSection />
            <AppIntegration />
            <AboutSection />
            <UseCasesSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
        </div>
    );
}
