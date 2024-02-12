import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, TrackballControls } from "@react-three/drei";

import LogoModel from "./logoModel";
import { LinearToneMapping, PerspectiveCamera as PerspectiveCameraType } from "three";

export default function LogoScene() {
    const cameraRef = useRef<PerspectiveCameraType>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
        <div id="r2Logo" ref={containerRef} className="flex justify-center w-full relative">
            <div className="h-full w-full justify-center absolute flex place-items-center before:absolute before:h-[225px] before:w-[180px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-muted before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[180px] after:translate-x-1/3 after:bg-gradient-conic after:from-muted after:via-muted after:to-muted after:blur-2xl after:content-[''] z-[-1]"></div>
            <Canvas 
                style={{ width: "225px", height: "225px" }}
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
                <TrackballControls
                    noPan
                    noZoom
                />
                <Suspense fallback={null}>
                    <LogoModel {...{ containerRef }}/>
                </Suspense>
            </Canvas>
        </div>
    );
}