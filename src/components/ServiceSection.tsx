import PencilSketch from './icons/PencilSketch'
import Database from './icons/Database'
import Phone from './icons/Phone'
import Shop from './icons/Shop'
import WebDev from './icons/WebDev'
import Smiley from './icons/Smiley'

import { ServiceCard, type ServiceCardProps } from './ServiceCard'

export default function ServiceSection() {
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
      title: 'iOS/Android Apps',
      icon: <Phone />
    },
    {
      title: 'A.I. Solutions',
      icon: <Smiley />
    }
  ]

  return (
    <div id='serviceSection' className="flex flex-col gap-4 w-full max-w-[1120px] lg:gap-8">
      <h1 className="text-5xl font-black ">
        Services
      </h1>
      <h1 className="text-lg font-semibold text-muted-foreground lg:text-xl">
        No two businesses are alike, and neither are our solutions. We take the time to understand your unique goals, challenges, and vision, crafting customized strategies that align perfectly with your objectives.
      </h1>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
        {
          cardProps.map((props, index) => {
            return <ServiceCard {...props} key={index} />
          })
        }
      </div>
    </div>
  )
}
