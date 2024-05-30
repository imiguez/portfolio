import ThreeModel from '@/components/ThreeObjects/ThreeModel';
import { desk, keyboard, oldMonitor } from '@/constants/GltfModels';
import { Html, Stage, useHelper } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import 'pages/DesktopApp/ThreeJsScene/ThreeJsScene.css';
import { FC } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { easing } from 'maath'
import * as THREE from 'three';
import { SpotLightHelper } from 'three';

interface IThreeJsScene {
  setEnableRotateControl: (enable: boolean) => void,
}

const ThreeJsScene: FC<IThreeJsScene> = ({ setEnableRotateControl }) => {
  const { camera } = useThree();
  const light = useRef<THREE.SpotLight>()
  const [clicked, setClicked] = useState<boolean>(false);
  const finalPos = {
    x: -.3,
    y: .7,
    z: -1.8
  }
  const lookAt = {
    x: -1.5,
    y: .2,
    z: 2
  }

  useEffect(() => {
    let animationFrameId;
    const tick = async () => {
      if (clicked) {
        console.log('clicked useFrame', clicked);
        if (camera.position.x < finalPos.x+0.01 && camera.position.x > finalPos.x-0.01 &&
          camera.position.y < finalPos.y+0.01 && camera.position.y > finalPos.y-0.01 &&
          camera.position.z < finalPos.z+0.01 && camera.position.z > finalPos.z-0.01) {
          setClicked(false);
          cancelAnimationFrame(animationFrameId);
        } else {
          camera.position.x = THREE.MathUtils.damp(camera.position.x, finalPos.x, 1, 0.1);
          camera.position.y = THREE.MathUtils.damp(camera.position.y, finalPos.y, 1, 0.1);
          camera.position.z = THREE.MathUtils.damp(camera.position.z, finalPos.z, .5, 0.1);
          camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId); // Execute when dismount
    };
  }, [clicked]);

  // useFrame((state, delta) => {
  //   easing.damp3(light.current.position, [state.pointer.x * 12, 4 + state.pointer.y * 2, 10 + state.pointer.y * 2], 0.2, delta)
  // })

  const onKeyboardClick = () => {
    setClicked(true);
    setEnableRotateControl(false)
  }

  // useHelper(light, SpotLightHelper, 'white'); 

  return (
    <>
      <Stage environment={{ files: '/venice_sunset_1k.hdr' }} />
      <hemisphereLight args={['#ffb703', '#d5bdaf']} intensity={0.4} />

      {/* <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001} >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </spotLight> */}

      <ThreeModel model={oldMonitor}>
        <Html transform={true} occlude='blending' geometry={<planeGeometry args={[.45, .384]} /> }
          style={{ width: '800px', height: '652px' }}
          //style={{width: "750px", height: "652px"}}
          distanceFactor={0.235} 
          // position={[0, 0.335, 0.4066]}
          position={[0, 0.337, 0.4068]}
          rotation-x={-0.05}>
          <iframe src="./OS" style={{ width: '100%', height: '100%' }} />
        </Html>
      </ThreeModel>
      <ThreeModel model={keyboard} onClick={onKeyboardClick} hoverEffect={{color: 'grey'}} />
      <ThreeModel model={desk} />
    </>
  );
};

export default ThreeJsScene;