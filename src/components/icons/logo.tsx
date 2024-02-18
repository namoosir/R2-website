import { type IconPropsType } from './types'
export default function Logo ({ className }: IconPropsType) {
  const cname = 'text-xl font-extrabold text-primary' + className
  return (
        <h1 className={cname}>
            R<sup>2</sup> Studios
        </h1>
  )
}
