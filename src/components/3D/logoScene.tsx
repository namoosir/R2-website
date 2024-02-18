import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { LinearToneMapping, PerspectiveCamera as PerspectiveCameraType } from "three";
import { useWindowSize } from "@uidotdev/usehooks";

import LogoModel from "./logoModel";

export default function LogoScene() {
    const windowSize = useWindowSize();

    const MIN_CANVAS_SIZE = 225;
    const MAX_CANVAS_SIZE = 600;
    const MIN_SCREEN_SIZE = 360;
    const MAX_SCREEN_SIZE = 1440;

    const cameraRef = useRef<PerspectiveCameraType>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const findCorrectDimensions = () => {
        if (!windowSize || !windowSize.width) return MIN_CANVAS_SIZE;

        const canvasSizeDiff = MAX_CANVAS_SIZE - MIN_CANVAS_SIZE;
        const screenSizeDiff = Math.min(1, Math.max(0, (windowSize.width - MIN_SCREEN_SIZE) / (MAX_SCREEN_SIZE - MIN_SCREEN_SIZE)));
        // Adjust canvas size between min and max based on screen width proportionally
        return MIN_CANVAS_SIZE + screenSizeDiff * canvasSizeDiff;
    }

    const [canvasDimensions, setCanvasDimensions] = useState(findCorrectDimensions());

    useEffect(() => {
        setCanvasDimensions(findCorrectDimensions());
    }, [windowSize]);


    return (
        <div id="r2Logo" ref={containerRef} className="flex justify-center relative lg:order-2">
            <div className="h-full w-full justify-center absolute flex place-items-center before:absolute before:h-[225px] before:w-[180px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-primary/20 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[180px] after:translate-x-1/3 after:bg-gradient-conic after:from-primary/20 after:via-primary/20 after:blur-2xl after:content-[''] before:lg:h-[600px] before:lg:w-[480px] after:lg:h-[480px] after:lg:w-[480px] after:lg:blur-3xl z-[-1]"></div>
            <Canvas
                style={{ width: `${canvasDimensions}px`, height: `${canvasDimensions}px` }}
                gl={{ toneMapping: LinearToneMapping }}
            >
                <PerspectiveCamera
                    ref={cameraRef}
                    makeDefault
                    fov={40}
                    position={[0, 0, 1.3]}
                >
                    <directionalLight
                        intensity={10}
                        position={[0, 3, 3]}
                        rotation={[45, 0, 0]}
                    />
                    <spotLight
                        intensity={40}
                        angle={Math.PI / 4}
                        position={[0, 0.6, 0.3]}
                        rotation={[Math.PI / 4, 0, 0]}
                        penumbra={0.5}
                        decay={4.5}
                    />
                </PerspectiveCamera>
                <Suspense fallback={null}>
                    <LogoModel {...{ containerRef }} />
                </Suspense>
            </Canvas>
        </div>
    );
}