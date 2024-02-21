import React from 'react'
import { Card } from './ui/card'

export interface ServiceCardProps {
  icon: JSX.Element
  title: string
}

export function ServiceCard (props: ServiceCardProps): JSX.Element {
  return (
        <Card className="flex flex-row justify-center items-center min-w-[320px] w-full p-5 gap-4 lg:px-5 lg:py-8 lg:w-[360px]">
            {props.icon}
            <h4 className="text-xl font-semibold text-card-foreground lg:text-2xl">
                {props.title}
            </h4>
        </Card>
  )
}
