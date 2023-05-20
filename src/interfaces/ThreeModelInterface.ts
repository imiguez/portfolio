import { PropsWithChildren } from "react"
import { Euler } from "react-three-fiber";
import { Object3D } from "three";



export interface ThreeModelInterface extends PropsWithChildren{
    url: string,
    scale: number,
    objectPosition: number[],
    rotation?: Euler,
    lights?: Object3D[]
}

