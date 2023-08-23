import { useWindowInterface } from "@/interfaces/WindowInterface";
import { useRef, useState } from "react";


export const useWindow: (string, activeWindows: useWindowInterface[]) => useWindowInterface = (title = "", activeWindows) => {

  let [mount, setMount] = useState(false);
  const windowRef = useRef(null);
  const taskBarRef = useRef(null);
  let [isMinimized, setIsMinimized] = useState(false);
  
  const getZIndex = () => {
    return windowRef.current.style.zIndex;
  }

  const setZIndex = (zIndex: number) => {
    windowRef.current.style.zIndex = zIndex;
  }

  const updateWindows = () => {
    // Get the index position of this instance
    let pos = 0;
    for (let i = 0; i < activeWindows.length; i++) {
      if (activeWindows[i].windowRef == windowRef)
        pos = i;
    }
    // Save the highest z-index value in an aux variable in order to dont lost it in the next for
    const highestZIndex = activeWindows[activeWindows.length-1].getZIndex();
    // Corrimiento a la izq desde el ultimo hasta pos
    for (let i = activeWindows.length-1; i > pos; i--) {
      activeWindows[i].setZIndex(activeWindows[i-1].getZIndex());
    }
    activeWindows[pos].setZIndex(highestZIndex);
    activeWindows.sort((a, b) => {return a.getZIndex() - b.getZIndex()});
  } 

  const open = () => {
    setMount(mount = true);
  };

  const minimize = () => {
    windowRef.current.classList.toggle("display-none");
    taskBarRef.current.classList.toggle("btn-selected");
    if(isMinimized)
      updateWindows();
    setIsMinimized(!isMinimized);
  };

  const maximize = () => {
    windowRef.current.classList.toggle("maximize");
    windowRef.current.innerHeight = "85%";
  };

  const close = () => {
    setMount(mount = false);
  };

  return {
    mount,
    windowRef, taskBarRef,
    open,
    minimize,
    maximize,
    close,
    title,
    updateWindows,
    getZIndex,
    setZIndex
  };
};