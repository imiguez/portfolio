import { FC } from "react";
import React from "react";
import ThreeModel from "../ThreeModel";
import { ThreeModelInterface } from "@/interfaces/ThreeModelInterface";


const Monitor: FC = () => {
  const model: ThreeModelInterface = {
    url: "./models/acer_monitor/scene.gltf",
    scale: 18,
    objectPosition: [20, -5, 0],
    // objectPosition: [0, -11, -35],
  };

  return (
    <ThreeModel {...model} >
    </ThreeModel>
  );
};

export default Monitor;
