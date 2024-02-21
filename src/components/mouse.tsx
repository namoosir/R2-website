import React, { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'

import useMouse from '../utils/useMouse'
import { MouseContext } from '@/contexts/MouseContext'

export default function Mouse (): JSX.Element {
  const { mouseVariant, mouseChildren } = useContext(MouseContext)
  const mouse = useMouse()
  const windowSize = useWindowSize()

  const [hidden, setHidden] = useState(true)

  const size = 32

  // TODO: MAYBE UPDATE TO USE USERAGENT DATA
  useEffect(() => {
    if (((windowSize.width) == null) || (windowSize.height == null)) return

    const initialX = (-0.25 + 0.5) * windowSize.width
    const initialY = (0.5) * windowSize.height

    if (windowSize.width < 1440 || (mouse.x === initialX && mouse.y === initialY)) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [windowSize, mouse, setHidden, hidden])

  const variants = {
    default: {
      display: 'flex',
      x: mouse.x - size / 2,
      y: mouse.y - size / 2,
      width: size,
      height: size,
      opacity: 0.75
    },
    enlarged: {
      width: 4 * size,
      height: 4 * size,
      x: mouse.x - 4 * size / 2,
      y: mouse.y - 4 * size / 2,
      opacity: 0.95
    }
  }

  return (
        <>
            {!hidden
              ? <motion.div
                    className="fixed bg-primary rounded-full z-[100] items-center justify-center pointer-events-none"
                    variants={variants}
                    animate={mouseVariant}
                    transition={{
                      type: 'tween',
                      ease: 'backOut'
                    }}
                >
                    { mouseChildren }
                </motion.div>
              : <></>
            }
        </>
  )
}
