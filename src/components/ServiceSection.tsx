import PencilSketch from './icons/PencilSketch'
import Database from './icons/Database'
import Phone from './icons/Phone'
import Shop from './icons/Shop'
import WebDev from './icons/WebDev'

import { ServiceCard, type ServiceCardProps } from './ServiceCard'

export default function ServiceSection () {
  const cardProps: ServiceCardProps[] = [
    {
      title: 'UI/UX Design',
      icon: <PencilSketch />
    },
    {
      title: 'Web Development',
      icon: <WebDev />
    },
    {
      title: 'Hosting & Deployment',
      icon: <Database />
    },
    {
      title: 'SEO',
      icon: <Shop />
    },
    {
      title: 'IOS/Android Apps',
      icon: <Phone />
    }
  ]

  return (
        <div id='serviceSection' className="flex flex-col gap-4 w-full max-w-[1120px] lg:gap-8">
            <h1 className="text-5xl font-black ">
                Services
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground lg:text-xl">
                We are experts in:
            </h1>
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
                {
                    cardProps.map((props, index) => {
                      return <ServiceCard {...props} key={index}/>
                    })
                }
            </div>
        </div>
  )
}
