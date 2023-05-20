import { useLoader } from "@react-three/fiber";
import React, { FC } from "react";
import { ThreeModelInterface } from "../../interfaces/ThreeModelInterface";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeModel: FC<ThreeModelInterface> = (props) => {
  const {url, rotation, lights} = props;
  const loader = useLoader(GLTFLoader, url);
  const scene = loader.scene;
  if (lights) {
    lights.forEach(light => {
      scene.add(light);
    });
  }
  scene.traverse((node) => {
    node.castShadow = true;
    node.receiveShadow = true;
  });
  const primitive = {
    object: scene,
    scale: props.scale,
    position: props.objectPosition,
  };

  return (
    <>
      <mesh rotation={rotation} receiveShadow={true} castShadow>
        <primitive {...primitive} >
          {props.children}
        </primitive>
      </mesh>
    </>
  );
};

export default ThreeModel;
