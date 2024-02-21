import React from 'react'
import { type IconPropsType } from './types'

export default function DownArrow ({ className }: IconPropsType): JSX.Element {
  return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
  )
}
