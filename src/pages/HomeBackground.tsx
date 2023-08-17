import { oldMonitor } from "@/GltfModels";
import { Html, MeshDistortMaterial, Sphere, Stage } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FC } from "react";
import { useLoader, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const HomeBackground: FC = () => {

  const sphereRef = useRef(null);
  const monitorRef = useRef(null);
  
  let modelsToRender = [oldMonitor];
  let modelsRendered = [];
  
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    // Sphere animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        toggleActions: "restart reverse restart reverse",
        markers: false
      }
    }).to(sphereRef.current.position, {
      x: 6,
      z: -1,
      ease: "power4.out",
    });
    // Monitor entry animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me",
        start: "top bottom",
        end: "top top",
        scrub: .0,
        toggleActions: "restart none reverse restart",
      }
    }).to(monitorRef.current.position, {
      x: -1,
      z: .5,
      scale: 3,
      ease: "power3.inOut",
    });
    // Monitor zoom animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me-monitor",
        start: "top bottom",
        end: "top center",   
        scrub: .0,
        toggleActions: "play reverse none reverse",
      }
    }).to(monitorRef.current.position, {
      x: 0,
      z: 1,
      ease: "linear",
    })
    .to(monitorRef.current.rotation, {
      y: 0,
      ease: "linear",
    }, "<");
  });

  modelsToRender.forEach((model) => {
    const loader = useLoader(GLTFLoader, model.url);
    loader.scene.traverse((node) => {
      node.castShadow = true;
      node.receiveShadow = true;
    });
    const group = loader.scene;
    group.scale.set(model.scale, model.scale, model.scale);
    group.position.set(model.objectPosition[0], model.objectPosition[1], model.objectPosition[2]);
    group.rotation.set(model.rotation[0], model.rotation[1], model.rotation[2]);
    modelsRendered[model.name] = group;
    monitorRef.current = loader.scene;
  });
  
  return (
    <>
      <Stage environment={{ files: "/venice_sunset_1k.hdr"}} />
      <hemisphereLight args={["#ffb703", "#d5bdaf"]} intensity={0.4} />
      <Sphere ref={sphereRef}  args={[.8, 100, 200]}  position={[1, 0, 0]}>
        <MeshDistortMaterial attach="material" color="#2f3e46" distort={0.3} speed={.8}/>
      </Sphere>
      <mesh >
        <primitive object={monitorRef.current} >
          <Html transform={true} style={{width: "500px", height: "435px"}} 
            distanceFactor={.35}
            position={[0, .34, .4]}
            rotation-x={-0.02}>
            <iframe src="./monitor-iframe" style={{width: "100%", height: "100%"}} />
          </Html>
        </primitive>
      </mesh>
    </>
  );
};

export default HomeBackground;