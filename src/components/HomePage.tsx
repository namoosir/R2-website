import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
import ServiceSection from "./ServiceSection";
import AboutUsSection from "./AboutUsSection";
import OurWorkSection from "./OurWorkSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start px-5 pb-5 pt-[72px] gap-5">
            <HeroSection />
            <OurWorkSection />
            <ServiceSection />
            <AboutUsSection />
            <ContactSection />
        </main>
    );
}