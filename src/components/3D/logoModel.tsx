import * as THREE from "three";
import { RefObject, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { SpringOptions, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { motion } from 'framer-motion-3d';
import { MeshProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type LogoModelProps = {
    containerRef: RefObject<HTMLDivElement>;
}

type GLTFResult = GLTF & {
    nodes: {
        Text: THREE.Mesh;
    };
    materials: {
        ["Material.007"]: THREE.MeshStandardMaterial;
    };
};

export default function LogoModel(props: LogoModelProps) {
    const { nodes, materials } = useGLTF("/R2_Logo_final.glb") as GLTFResult;
    const modelRef = useRef<MeshProps>(null);
    const [mousePosition, setMousePosition] = useState({ x: + 0.25, y: Math.PI / 2 - 0.25 });

    const options: SpringOptions = {
        damping: 80,
        stiffness: 300,
    };

    //mouse stuff
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    };

    const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        const x = -1 * (-0.5 + (clientX / innerWidth));
        const y = -0.5 + (clientY / innerHeight) + (Math.PI / 2);

        setMousePosition({ x, y });
    }

    useEffect(() => {
        mouse.x.set(mousePosition.x);
        mouse.y.set(mousePosition.y);
    }, [mousePosition]);

    // scroll stuff
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

        setTimeout(() => {
            window.addEventListener("mousemove", manageMouseMove);
        }, 500);

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