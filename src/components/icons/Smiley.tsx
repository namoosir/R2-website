import React from 'react'
import { type IconPropsType } from './types'

export default function Smiley ({ className }: IconPropsType): JSX.Element {
  return (
        <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 3H21.75C21.75 3 23.25 3 23.25 4.5V16.5C23.25 16.5 23.25 18 21.75 18H2.25C2.25 18 0.75 18 0.75 16.5V4.5C0.75 4.5 0.75 3 2.25 3Z" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.75 22.5H8.25L9 18H15L15.75 22.5Z" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 22.5H18" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.12799 12C9.18658 12.9652 10.5675 13.5002 12 13.5002C13.4325 13.5002 14.8134 12.9652 15.872 12" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.75 7.5V9" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.25 7.5V9" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
  )
}
