import { useWindowInterface } from "./WindowInterface"

export interface TechMockInterface {
    title: string,
    titleColor: string,
    onDoubleClick: () => void,//(activeWindows: useWindowInterface[]) => React.JSX.Element,
    imgSrc: string
}