import { monitor } from "@/GltfModels";
import { Environment, Html, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FC } from "react";
import { useLoader, useThree } from "react-three-fiber";
import { Group, HemisphereLight, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const HomeBackground: FC = () => {
  const { camera, scene } = useThree();
  camera.lookAt(new Vector3(0, .5, 0));

  const sphereRef = useRef(null);
  const monitorRef = useRef(null);
  
  let modelsToRender = [monitor];
  let modelsRendered = [];
  
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
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
      x: 5,
      z: -1,
      ease: "power4.out",
    });
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
      y: 0,
      ease: "power3.inOut",
    });
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
      y: 0,
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
    // const group = new Group();
    // group.add(loader.scene);
    const group = loader.scene;
    group.position.set(model.objectPosition[0], model.objectPosition[1], model.objectPosition[2]);
    group.rotation.set(model.rotation[0], model.rotation[1], model.rotation[2]);
    // scene.add(group);
    modelsRendered[model.name] = group;
    monitorRef.current = loader.scene;
  });
  
  return (
    <>
      <Environment preset={"sunset"} />
      <hemisphereLight args={["#ffb703", "#d5bdaf"]} intensity={0.4} />
      <Sphere ref={sphereRef}  args={[.8, 100, 200]}  position={[1, .5, 0]}>
        <MeshDistortMaterial attach="material" color="#2f3e46" distort={0.3} speed={.8}/>
      </Sphere>
      <mesh >
        <primitive object={monitorRef.current} >
          {/* <Html transform style={{width: "1000px", height: "558px"}} 
            distanceFactor={.627}
            position={[0, .771, 0]}> */}
          <Html transform={true} style={{width: "1000px", height: "558px"}} 
            distanceFactor={.6}
            position={[0, .758, .09]}>
            <iframe src="./monitor-iframe" style={{width: "100%", height: "100%"}} />
          </Html>
        </primitive>
      </mesh>
    </>
  );
};

export default HomeBackground;