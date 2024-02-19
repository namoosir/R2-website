import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import ServiceSection from './ServiceSection'
import AboutUsSection from './AboutUsSection'
import OurWorkSection from './OurWorkSection'

export default function Home () {
  return (
        <main className="flex min-h-screen flex-col items-center justify-center px-5 pb-5 py-[88px] gap-5 w-full lg:gap-44 lg:py-44">
            <HeroSection />
            <ServiceSection />
            <OurWorkSection />
            <AboutUsSection />
            <ContactSection />
        </main>
  )
}
