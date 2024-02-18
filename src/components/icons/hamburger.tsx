import { type IconPropsType } from './types'
export default function Hamburger ({ className }: IconPropsType) {
  const cname = 'w-8 h-8' + className
  return (
        <svg className={cname} fill="hsl(var(--primary))" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
  )
}
