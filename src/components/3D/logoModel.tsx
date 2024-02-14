import { RefObject, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { SpringOptions, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';
import { MeshProps } from "@react-three/fiber";

type LogoModelProps = {
    containerRef: RefObject<HTMLDivElement>;
}

export default function LogoModel(props: LogoModelProps) {
    const { nodes, materials } = useGLTF("/R2_Logo_final.glb");
    const modelRef = useRef<MeshProps>(null);
    const options: SpringOptions = {
        damping: 90
    };

    //mouse stuff
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(Math.PI / 2), options)
    };
    const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        const x = -1*(-0.5 + clientX / innerWidth);
        const y = -0.5 + clientY / innerHeight + Math.PI / 2;

        mouse.x.set(x);
        mouse.y.set(y);
    }

    //scroll stuff
    const { scrollYProgress } = useScroll({
        target: props.containerRef,
        offset: ['start 72px', 'center start']
    });
    const progress = useTransform(scrollYProgress, [0, 1], [0, -Math.PI / 2])
    const smoothProgress = useSpring(progress, options);

    const combinedZRotation = useTransform(() => {
        return mouse.x.get() + smoothProgress.get();
    });

    useEffect(() => {
        if (modelRef.current && modelRef.current.geometry) {
            modelRef.current.geometry.center();
        }

        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, []);    

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
                material={materials["Material.007"]}
                position={[0, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/R2_Logo_final.glb");