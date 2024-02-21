import { motion } from 'framer-motion'
import React, { type ReactNode } from 'react'

interface AnimateMouseProps {
  textChild?: ReactNode
  iconChild?: ReactNode
}

export default function AnimateMouse (props: AnimateMouseProps): JSX.Element {
  return (
    <div>
      <motion.div className="flex flex-col items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
      >
        { props.textChild }
      </motion.div>
      <motion.div className="flex flex-col items-center justify-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
      >
        { props.iconChild }
      </motion.div>
    </div>
  )
}
