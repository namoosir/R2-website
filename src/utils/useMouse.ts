import { useEffect, useState } from 'react'

interface Mouse {
  x: number
  y: number
}

export default function useMouse (): Mouse {
  const { innerWidth, innerHeight } = window

  const [mouse, setMouse] = useState<Mouse>({
    x: (-0.25 + 0.5) * innerWidth,
    y: (0.5) * innerHeight
  })

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any, clientY: any }): void => {
      const now = Date.now()

      if ((lastMouseUpdate == null) || now - lastMouseUpdate >= 4) {
        const { clientX, clientY } = e
        setMouse({ x: clientX, y: clientY })
        lastMouseUpdate = now
      }
    }

    let lastMouseUpdate: number | null = null

    setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove)
    }, 500)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mouse
}
