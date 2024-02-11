import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
      const controls = new OrbitControls( camera, renderer.domElement );
      
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.enableZoom = false;
      controls.dampingFactor = 0.01;

      //TODO: UPDATE FOR DIFFERENT SCREEN SIZES
      renderer.setSize(225, 225);
      renderer.setClearColor( 0x000000, 0 );

      if (containerRef && containerRef.current?.childElementCount == 0) containerRef.current?.appendChild(renderer.domElement);

      const loader = new GLTFLoader();

      let model: THREE.Object3D<THREE.Object3DEventMap>;
      loader.load(
        // resource URL
        '/R2_Logo_final.glb',
        // called when the resource is loaded
        function ( gltf ) { 
          model = gltf.scene.children[0];
          model.geometry.center();
          model.rotateX(Math.PI / 2);

          model.material.roughness = 1;
          model.material.metalness = 1;
          scene.add( model );

          // Adjust camera position and target
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());

          camera.position.set(center.x, center.y - 1.15, center.z);
          camera.lookAt(center.x, center.y, center.z);   
          
          let spotLight = new THREE.SpotLight(0xffffff, 1, 10, Math.PI / 4.0, 0.5, 1);
          spotLight.position.set(center.x, center.y - 1, center.z + 0.1)
          spotLight.lookAt(center.x, center.y, center.z)
          scene.add(spotLight);
        },
        // called while loading is progressing
        function ( xhr: { loaded: number; total: number; } ) {
      
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      
        },
        // called when loading has errors
        function ( error: any ) {
          console.log(error);
          console.log( 'An error happened' );
      
        }
      );

      const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // color, intensity
      directionalLight.position.set(0, -3, -3); // Positioning the light
      directionalLight.rotateX(46);
      
      scene.add(directionalLight);

      controls.update();

      
      function getAdjustedScroll() {
        const DIVIDE_AMOUNT = 5;
        return -window.scrollY / DIVIDE_AMOUNT;
      }

      const renderScene = () => {
        directionalLight.position.copy(camera.position);

        if (model) model.rotation.z = 0.01 * getAdjustedScroll();
        if (model) model.rotation.y = -0.005 * getAdjustedScroll();
        
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      renderScene();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
  
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
  
        renderer.setSize(width, height);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  return (
    <div className="flex justify-center w-full relative" ref={containerRef}>
      {/* <div className="-z-[2] h-full absolute inset-0 w-full h-full rounded-full backgroundImage"/> */}
      {/* <div className="h-full w-full justify-center absolute flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-muted before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-muted after:via-muted after:to-muted after:blur-2xl after:content-[''] before:lg:h-[360px] z-[-1]"></div> */}
    </div>
  );
};
export default ThreeScene;