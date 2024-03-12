import { useWindowInterface } from "@/interfaces/WindowInterface";
import { useRef } from "react";


export const useWindow: (string) => useWindowInterface = (title = "") => {

  const windowRef = useRef(null);
  const taskBarRef = useRef(null);
  let isMinimized = useRef<boolean>(false).current;
  
  const getZIndex = () => {
    return windowRef.current.style.zIndex;
  }

  const setZIndex = (zIndex: number) => {
    windowRef.current.style.zIndex = zIndex;
  }

  const minimize = (updateWindows: () => void) => {
    windowRef.current.classList.toggle("visibility-hide");
    taskBarRef.current.classList.toggle("btn-selected");
    if(isMinimized)
      updateWindows();
    isMinimized = !isMinimized;
  };

  const maximize = () => {
    windowRef.current.classList.toggle("maximize");
    windowRef.current.innerHeight = "85%";
  };

  return {
    windowRef, taskBarRef,
    open,
    minimize,
    maximize,
    close,
    title,
    getZIndex,
    setZIndex
  };
};