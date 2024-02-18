import { MouseContext } from '@/contexts/MouseContext'
import { useContext } from 'react'
import { Card } from './ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import CallMade from './icons/CallMade'

export interface ProjectCardProps {
  image: string
  title: string
  description: string
  onClick: () => void
  reverse?: boolean
}

export function ProjectCard (props: ProjectCardProps) {
  const { setMouseVariant, mouseVariant, setMouseChildren } = useContext(MouseContext)

  function onWorkOver () {
    const child = (
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-primary-foreground font-bold">VIEW</p>
                <CallMade className="fill-primary-foreground w-4 h-4"/>
            </div>
    )

    setMouseVariant([...mouseVariant, 'enlarged'])
    setMouseChildren(child)
  }

  const onWorkLeave = () => {
    setMouseVariant(['default'])
    setMouseChildren(undefined)
  }

  return (
        <>
            {
                props.reverse
                  ? <Card className={'flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:translate-x-[200%] after:lg:translate-x-[120%]'} onClick={props.onClick} onMouseEnter={onWorkOver} onMouseLeave={onWorkLeave}>
                        <div className={'w-[210px] lg:w-1/2 lg:order-1 lg:flex-1'}>
                            <AspectRatio ratio={69 / 100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={'flex flex-col justify-center gap-2 lg:order-2 lg:flex-1'}>
                            <h4 className={'text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:text-right'}>
                                {props.title}
                            </h4>
                            <h4 className={'text-xl text-muted-foreground lg:text-right'}>
                                {props.description}
                            </h4>
                        </div>
                    </Card>
                  : <Card className={'flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:-translate-x-[250%] after:lg:-translate-x-[170%]'} onClick={props.onClick} onMouseEnter={onWorkOver} onMouseLeave={onWorkLeave}>
                        <div className={'w-[210px] lg:w-1/2 lg:order-2 lg:flex-1'}>
                            <AspectRatio ratio={69 / 100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={'flex flex-col justify-center gap-2 lg:order-1 lg:flex-1'}>
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
