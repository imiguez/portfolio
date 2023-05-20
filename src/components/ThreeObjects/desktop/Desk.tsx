import { FC } from "react";
import { ThreeModelInterface } from "../../../interfaces/ThreeModelInterface";
import ThreeModel from "../ThreeModel";
import React from "react";


const Desk: FC = (props) => {
    const model: ThreeModelInterface = {
        url: "./models/office_desk/scene.gltf",
        scale: 44,
        objectPosition: [0,-31,-25]
    }

    return (
        <ThreeModel {...model}/>
    );
}

export default Desk;