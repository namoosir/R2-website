import React from 'react'
import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import ServiceSection from './ServiceSection'
import AboutUsSection from './AboutUsSection'
import OurWorkSection from './OurWorkSection'
import AnimateInView from './AnimateInView'

export default function Home (): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 pb-5 gap-5 w-full h-full">
      <AnimateInView>
        <HeroSection />
      </AnimateInView>

      <div className='flex flex-col gap-10 pt-10 lg:gap-40'>
        <AnimateInView reverse>
          <ServiceSection />
        </AnimateInView>

        <AnimateInView>
          <OurWorkSection />
        </AnimateInView>

        <AnimateInView reverse>
          <AboutUsSection />
        </AnimateInView>

        <AnimateInView>
          <ContactSection />
        </AnimateInView>
      </div>
    </main >
  )
}
