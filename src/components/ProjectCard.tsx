import React, { useContext } from 'react'

import { Card } from './ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { MouseContext } from '@/contexts/MouseContext'
import AnimateMouse from './AnimateMouse'
import CallMade from './icons/CallMade'

export interface ProjectCardProps {
  image: string
  title: string
  description: string
  onClick: () => void
  reverse?: boolean
}

export function ProjectCard (props: ProjectCardProps): JSX.Element {
  const { setMouseVariant, mouseVariant, setMouseChildren, resetToDefault } = useContext(MouseContext)

  function onWorkOver (): void {
    const child = (
        <AnimateMouse
          textChild={<p className="text-sm text-primary-foreground font-bold">View</p>}
          iconChild={<CallMade className="fill-primary-foreground" />}
        />
    )

    setMouseVariant([...mouseVariant, 'enlarged'])
    setMouseChildren(child)
  }

  return (
        <>
            {
                (props.reverse ?? false)
                  ? <Card className={'flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:translate-x-[200%] after:lg:translate-x-[120%]'} onClick={props.onClick} onMouseEnter={onWorkOver} onMouseLeave={resetToDefault}>
                        <div className={'w-[210px] lg:w-1/2 lg:order-1 lg:flex-1'}>
                            <AspectRatio ratio={69 / 100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={'flex flex-col justify-center gap-2 lg:order-2 lg:flex-1 lg:gap-4'}>
                            <h4 className={'text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:text-right'}>
                                {props.title}
                            </h4>
                            <h4 className={'text-xl text-muted-foreground lg:text-right'}>
                                {props.description}
                            </h4>
                        </div>
                    </Card>
                  : <Card className={'flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:-translate-x-[250%] after:lg:-translate-x-[170%]'} onClick={props.onClick} onMouseEnter={onWorkOver} onMouseLeave={resetToDefault}>
                        <div className={'w-[210px] lg:w-1/2 lg:order-2 lg:flex-1'}>
                            <AspectRatio ratio={69 / 100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={'flex flex-col justify-center gap-2 lg:order-1 lg:flex-1 lg:gap-4'}>
                            <h4 className={'text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:text-left'}>
                                {props.title}
                            </h4>
                            <h4 className={'text-xl text-muted-foreground lg:text-left'}>
                                {props.description}
                            </h4>
                        </div>
                    </Card>
            }
        </>
  )
}
