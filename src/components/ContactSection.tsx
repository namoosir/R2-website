import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ContactSection () {
  const onEmailClick = () => {
    window.location.href = 'mailto:r2studiodev@gmail.com'
  }

  const onPhoneClick = () => {
    window.location.href = 'tel:+16475421246'
  }

  return (
        <div id='contactSection' className="flex flex-col gap-4 w-full max-w-[1120px] lg:gap-8 lg:pb-[88px] pb-10">
            <h1 className="text-5xl font-black">
                Contact Us
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground lg:text-xl">
                Ready to take your business to new heights? Get in touch with us for a free consulation!
            </h1>
            <Card className="flex flex-col justify-center items-center min-w-[320px] p-5 lg:py-20 lg:px-12">
                <div className="flex flex-row items-center">
                    <p className="text-lg lg:text-xl">Email:</p>
                    <Button className="lg:px-5 lg:py-3 lg:h-auto" variant={'link'} onClick={onEmailClick}>
                            <p className="text-lg lg:text-xl">r2studiodev@gmail.com</p>
                        </Button>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-lg lg:text-xl">Call:</p>
                    <Button className="lg:px-5 lg:py-3 lg:h-auto" variant={'link'} onClick={onPhoneClick}>
                            <p className="text-lg lg:text-xl">+1 (647) 542 1246</p>
                        </Button>
                </div>
            </Card>
        </div>
  )
}
