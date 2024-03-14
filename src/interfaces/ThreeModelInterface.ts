import { PropsWithChildren } from "react"
import { Object3D } from "three";

export interface ThreeModelInterface extends PropsWithChildren{
    name: string,
    url: string,
    scale: number,
    objectPosition: number[],
    rotation?: number[],
    lights?: Object3D[]
}