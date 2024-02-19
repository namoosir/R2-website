import type * as THREE from 'three'
import { type RefObject, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { type SpringOptions, useMotionValue, useScroll, useTransform, useSpring } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { type MeshProps } from '@react-three/fiber'
import { type GLTF } from 'three-stdlib'
import useMouse from '@/utils/useMouse'

interface LogoModelProps {
  containerRef: RefObject<HTMLDivElement>
}

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh
  }
  materials: {
    ['Material.007']: THREE.MeshStandardMaterial
  }
}

export default function LogoModel (props: LogoModelProps) {
  const { nodes, materials } = useGLTF('/R2_Logo_final.glb') as GLTFResult
  const modelRef = useRef<MeshProps>(null)
  const mousePosition = useMouse()

  const options: SpringOptions = {
    damping: 80,
    stiffness: 300
  }

  // mouse stuff
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options)
  }
  useEffect(() => {
    const { innerWidth, innerHeight } = window

    const x = -1 * (-0.5 + (mousePosition.x / innerWidth))
    const y = -0.5 + (mousePosition.y / innerHeight) + (Math.PI / 2)

    mouse.x.set(x)
    mouse.y.set(y)
  }, [mousePosition])

  // scroll stuff
  const { scrollYProgress } = useScroll({
    target: props.containerRef,
    offset: ['start 88px', 'center start']
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, -Math.PI / 2])
  const smoothProgress = useSpring(progress, options)

  const combinedZRotation = useTransform(() => {
    return mouse.x.get() + smoothProgress.get()
  })

  useEffect(() => {
    if (modelRef.current && modelRef.current.geometry) {
      modelRef.current.geometry.center()
    }
  }, [])

  return (
        <group dispose={null}>
            <motion.mesh
                ref={modelRef}
                rotation-x={mouse.y}

                // only mouse move animation
                // rotation-z={mouse.x}

                // only scroll animation
                // rotation-z={smoothProgress}

                rotation-z={combinedZRotation}

                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={materials['Material.007']}
                position={[0, 0, 0]}
            />
        </group>
  )
}

useGLTF.preload('/R2_Logo_final.glb')
