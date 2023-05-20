import { FC } from "react";
import { ThreeModelInterface } from "../../../interfaces/ThreeModelInterface";
import ThreeModel from "../ThreeModel";
import React from "react";
import { Euler } from "three";

const Room: FC = () => {
  const piece1: ThreeModelInterface = {
    url: "./models/room1/scene.gltf",
    scale: 8,
    objectPosition: [0, -50, 0],
  };
  const piece2: ThreeModelInterface = {
    url: "./models/room2/scene.gltf",
    scale: 8,
    objectPosition: [188, -50, 0],
    rotation: new Euler(0, Math.PI*1.5, 0)
  };

  return (
    <>
      <ThreeModel {...piece1} />
      <ThreeModel {...piece2} />
    </>
  );
};

export default Room;
