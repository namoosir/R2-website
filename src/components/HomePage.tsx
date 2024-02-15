import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start px-5 pb-5 pt-[72px] gap-5">
            <HeroSection />
            <ContactSection />
        </main>
    );
}