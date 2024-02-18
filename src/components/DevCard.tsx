import { Card } from './ui/card'
import profilePlaceholder from '/PortraitPlaceholder.png'
import { AspectRatio } from './ui/aspect-ratio'

import { MouseContext } from '@/contexts/MouseContext'
import { useContext } from 'react'

import CallMade from './icons/CallMade'

export interface DevCardProps {
  image: string
  name: string
  title: string
  github: string
  profile: string
}

export function DevCard (props: DevCardProps) {
  const { setMouseVariant, mouseVariant, setMouseChildren } = useContext(MouseContext)

  function onDevOver () {
    const child = (
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-primary-foreground font-bold">PORTFOLIO</p>
                <CallMade className="fill-primary-foreground w-4 h-4"/>
            </div>
    )

    setMouseVariant([...mouseVariant, 'enlarged'])
    setMouseChildren(child)
  }

  const onDevLeave = () => {
    setMouseVariant(['default'])
    setMouseChildren(undefined)
  }

  const onClick = () => {
    window.open(props.profile)
  }

  return (
        <Card className="flex flex-row justify-around items-center min-w-[320px] w-full p-5 gap-4 lg:flex-col lg:p-12 lg:w-[360px] lg:gap-8" onClick={onClick} onMouseEnter={onDevOver} onMouseLeave={onDevLeave}>
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
                <CallMade className="fill-muted-foreground"/>
            </a>
        </Card>
  )
}
