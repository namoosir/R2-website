import LogoScene from './3D/logoScene'
import { Button } from './ui/button'
import { useLenis } from '@studio-freight/react-lenis'

export default function HeroSection() {
  const lenis = useLenis(() => { })
  const options = {
    offset: -92
  }

  const onContactClick = () => {
    lenis?.scrollTo('#contactSection', options)
  }

  const onWorkClick = () => {
    lenis?.scrollTo('#ourWorkSection', options)
  }

  return (
    <div id="heroSection" className="flex flex-col justify-center items-center gap-5 flex-1 lg:flex-row w-full max-w-[1120px] min-h-screen pt-[88px] lg:pt-0">
      <LogoScene />
      <div className="flex gap-5 flex-col w-full justify-center lg:order-1 lg:gap-9">
        <h1 className="text-5xl font-black lg:text-7xl">Product Design and Development</h1>
        <p className="text-lg font-semibold text-muted-foreground lg:text-xl">We are a software development agency that delivers cutting-edge solutions, tailored to your needs, with speed and excellence.</p>
        <div className="flex flex-row gap-5">
          <Button className="min-w-[150px] lg:px-10 lg:py-5 lg:h-auto" onClick={onContactClick}>
            <p className="lg:text-xl">Work With Us</p>
          </Button>
          <Button className="min-w-[150px] lg:px-10 lg:py-5 lg:h-auto" onClick={onWorkClick} variant={'secondary'}>
            <p className="lg:text-xl">View Our Work</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
