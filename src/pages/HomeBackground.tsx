import ThreeModel from '@/components/ThreeObjects/ThreeModel';
import { desk, keyboard, oldMonitor } from '@/constants/GltfModels';
import { Html, Stage } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useThree } from 'react-three-fiber';
import * as T from 'three';

interface HomeBackgroundInterface {
  setEnableRotateControl: (enable: boolean) => void,
}

const HomeBackground: FC<HomeBackgroundInterface> = ({ setEnableRotateControl }) => {
  const { camera } = useThree();
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
          camera.position.x = T.MathUtils.damp(camera.position.x, finalPos.x, 1, 0.1);
          camera.position.y = T.MathUtils.damp(camera.position.y, finalPos.y, 1, 0.1);
          camera.position.z = T.MathUtils.damp(camera.position.z, finalPos.z, .5, 0.1);
          camera.lookAt(new T.Vector3(lookAt.x, lookAt.y, lookAt.z));
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId); // Execute when dismount
    };
  }, [clicked]);

  const onKeyboardClick = () => {
    setClicked(true);
    setEnableRotateControl(false)
  }

  return (
    <>
      <Stage environment={{ files: '/venice_sunset_1k.hdr' }} />
      <hemisphereLight args={['#ffb703', '#d5bdaf']} intensity={0.4} />
      <ThreeModel model={oldMonitor}>
        <Html transform={true} occlude
          style={{ width: '800px', height: '652px' }}
          //style={{width: "750px", height: "652px"}}
          distanceFactor={0.235} position={[0, 0.335, 0.4066]}
          rotation-x={-0.05}>
          <iframe src="./monitor-iframe" style={{ width: '100%', height: '100%' }} />
        </Html>
      </ThreeModel>
      <ThreeModel model={keyboard} onClick={onKeyboardClick} hoverEffect={{color: 'grey'}} />
      <ThreeModel model={desk} />
    </>
  );
};

export default HomeBackground;