import { useContext } from 'react'

import { Card } from './ui/card'
import { AspectRatio } from './ui/aspect-ratio'
import profilePlaceholder from '/PortraitPlaceholder.png'
import { MouseContext } from '@/contexts/MouseContext'
import CallMade from './icons/CallMade'
import AnimateMouse from './AnimateMouse'

export interface DevCardProps {
  image: string
  name: string
  title: string
  github: string
  profile: string
}

export function DevCard(props: DevCardProps) {
  const { setMouseVariant, mouseVariant, setMouseChildren, resetToDefault } = useContext(MouseContext)

  function onDevOver() {
    const child = (
      <AnimateMouse
        textChild={<p className="text-sm text-primary-foreground font-bold">Portfolio</p>}
        iconChild={<CallMade className="fill-primary-foreground" />}
      />
    )

    setMouseVariant([...mouseVariant, 'enlarged'])
    setMouseChildren(child)
  }

  const onClick = () => {
    window.open(props.profile)
  }

  return (
    <Card className="flex flex-row justify-around items-center min-w-[320px] w-full p-5 gap-4 lg:flex-col lg:p-12 lg:w-[360px] lg:gap-8" onClick={onClick} onMouseEnter={onDevOver} onMouseLeave={resetToDefault}>
      <div className="w-20 filter lg:w-48">
        {props.image
          // TODO: FILTER
          ? <AspectRatio>
            <img src={props.image} className="rounded-full" />
          </AspectRatio>
          : <AspectRatio>
            <img src={profilePlaceholder} className="rounded-full" />
          </AspectRatio>
        }
      </div>

      <div className="flex flex-col justify-center items-center gap-1 lg:gap-3">
        <h4 className="text-xl font-semibold text-card-foreground lg:text-2xl">
          {props.name}
        </h4>
        <p className="text-muted-foreground">{props.title}</p>
      </div>
      <a className="lg:hidden" href={props.profile} target="_blank" rel="noreferrer">
        <CallMade className="fill-muted-foreground" />
      </a>
    </Card>
  )
}
