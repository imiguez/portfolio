import { useWindowInterface, useWindowsMediatorInterface } from "@/interfaces/WindowInterface";
import { useRef } from "react";


export const useWindowsMediator: () => useWindowsMediatorInterface = () => {

    let windows = useRef<useWindowInterface[]>([]).current;
    
    const getWindows = () => {
        return windows;
    }
    
    const onWindowOpen = (window: useWindowInterface) => {
        window.setZIndex(2); // If its the first to add
        if (windows.length > 0) // Else set the last z-index + 1
            window.setZIndex(Number(windows[windows.length-1].getZIndex()) + 1);
        windows.push(window);
    }

    const updateWindows = (window: useWindowInterface) => {
        // Get the index position of this instance
        let pos = 0;
        for (let i = 0; i < windows.length; i++) {
        if (windows[i].windowRef == window.windowRef)
            pos = i;
        }
        // Save the highest z-index value in an aux variable in order to dont lost it in the next for
        const highestZIndex = windows[windows.length-1].getZIndex();
        // Corrimiento a la izq desde el ultimo hasta pos
        for (let i = windows.length-1; i > pos; i--) {
            windows[i].setZIndex(windows[i-1].getZIndex());
        }
        windows[pos].setZIndex(highestZIndex);
        windows.sort((a, b) => {return a.getZIndex() - b.getZIndex()});
    }

    const onWindowClose = (windowHook: useWindowInterface) => {
        let index = 0;
        for (let i = 0; i < windows.length; i++) {
            if (windows[i] == windowHook)
                index = i;
        }
        windows.splice(index, 1);
    }

    return {
        onWindowOpen,
        updateWindows,
        onWindowClose,
        getWindows,
    }
}