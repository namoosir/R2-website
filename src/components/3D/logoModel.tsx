import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { SpringOptions, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';

export default function LogoModel() {
    const { nodes, materials } = useGLTF("/R2_Logo_final.glb");
    const modelRef = useRef<Mesh>(null);
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
    const mainContainer = useRef(document.querySelector('main'))
    const { scrollYProgress } = useScroll({
        target: mainContainer,
        offset: ['start start', 'end end']
    });
    const progress = useTransform(scrollYProgress, [0, 1], [0, -Math.PI / 2])
    const smoothProgress = useSpring(progress, options);

    const combinedZRotation = useTransform(() => {
        return mouse.x.get() + smoothProgress.get();
    });

    useEffect(() => {
        if (modelRef.current) {
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
                // rotation-z={mouse.x}
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