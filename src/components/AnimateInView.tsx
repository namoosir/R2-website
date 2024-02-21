import React, { type ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimateInViewProps {
  children: ReactNode
  reverse?: boolean
}

export default function AnimateInView (props: AnimateInViewProps): JSX.Element {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isLargeScreenSize, setIsLargeScreenSize] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsLargeScreenSize(false)
    } else {
      setIsLargeScreenSize(true)
    }
  }, [])

  return (
        <>
            {
                isLargeScreenSize
                  ? <motion.div
                        className="w-full max-w-[1120px] flex"
                        ref={ref}
                        initial={{ opacity: 0, x: (props.reverse ?? false) ? 200 : -200 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ type: 'spring', duration: 2 }}
                    >
                        {props.children}
                    </motion.div>
                  : <div className="w-full max-w-[1120px] flex">
                        {props.children}
                    </div>
            }
        </>
  )
}
