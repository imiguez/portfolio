import { ThreeModelInterface } from '@/interfaces/ThreeModelInterface';
import React, { ReactNode } from 'react';
import { FC, useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ThreeModelProps {
  model: ThreeModelInterface;
  onClick?: () => void;
  hoverEffect?: {
    color: string;
  };
  children?: ReactNode;
}

const ThreeModel: FC<ThreeModelProps> = ({ model, children, onClick, hoverEffect }) => {
  const ref = useRef(null);
  const loader = useLoader(GLTFLoader, model.url);
  loader.scene.traverse((node) => {
    node.castShadow = true;
    node.receiveShadow = true;
  });
  const group = loader.scene;
  group.scale.set(model.scale, model.scale, model.scale);
  group.position.set(model.objectPosition[0], model.objectPosition[1], model.objectPosition[2]);
  group.rotation.set(model.rotation[0], model.rotation[1], model.rotation[2]);
  ref.current = loader.scene;

  const colors = useRef<any[]>([]).current;

  if (hoverEffect) {
    group.traverse((object) => {
      if (object.type === 'Mesh') {
        let r = object.material.color.r;
        let g = object.material.color.g;
        let b = object.material.color.b;
        let color = { isColor: true, r: r, g: g, b: b, a: 0 };
        colors.push(color);
      }
    });
  }

  const onPointerEnter = () => {
    if (hoverEffect == undefined) return;
    group.traverse((object) => {
      if (object.type === 'Mesh') object.material.color.set(hoverEffect.color);
    });
  };

  const onPointerLeave = () => {
    if (hoverEffect == undefined) return;
    let it = 0;
    group.traverse((object) => {
      if (object.type === 'Mesh') {
        object.material.color.set(colors[it]);
        it++;
      }
    });
  };

  return (
    <mesh onClick={onClick} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <primitive object={ref.current}>{children}</primitive>
    </mesh>
  );
};

export default ThreeModel;
