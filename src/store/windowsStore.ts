import { WindowInterface } from '@/interfaces/WindowInterface';
import { ReactNode } from 'react';
import { create } from 'zustand';

interface Component {
    component: ReactNode,
    name: string,
}

interface WindowsStoreInterface {
    windows: WindowInterface[],
    windowsComponent: Component[],
    openWindow: (window: WindowInterface, component: ReactNode) => void,
    closeWindow: () => void,
    minimizeWindow: (window: WindowInterface) => void,
    maximizeWindow: (window: WindowInterface) => void,
    focusWindow: (window: WindowInterface) => void,
}

export const useWindowsStore = create<WindowsStoreInterface>((set, get) => ({
    windows: [],
    windowsComponent: [],
    openWindow: (window: WindowInterface, component: ReactNode) => set(state => {
        const w = state.windows;
        const wc = state.windowsComponent;
        w.push(window);
        wc.push({component: component, name: window.title});
        return {
        ...state,
        windows: w,
        windowsComponents: wc
    }}),
    minimizeWindow: (window: WindowInterface) => set(state => {
        window.windowRef.current.classList.toggle("visibility-hide");
        window.taskBarBtnRef.current.classList.toggle("btn-selected");
        let w = state.windows;
        for (let i = w.indexOf(window); i < w.length-1; i++) {
            w[i] = w[i+1];
            w[i].windowRef.current.style.zIndex = i;
        }
        window.windowRef.current.style.zIndex = w.length-1;
        w[w.length-1] = window;
        return {
        ...state,
        windows: w,
    }}),
    maximizeWindow: (w: WindowInterface) => {
        w.windowRef.current.classList.toggle("maximize");
        let iframe = document.getElementsByClassName('windows-container')[0];
        if (w.windowRef.current.style.width == (iframe.clientWidth-7) +'px') {
            w.windowRef.current.style.width = '300px';
            w.windowRef.current.style.height = 'auto';
        } else {
            w.windowRef.current.style.width = (iframe.clientWidth-7) + 'px';
            w.windowRef.current.style.height = (iframe.clientHeight*0.95) + 'px';
        }
    },
    focusWindow: (window: WindowInterface) => set(state => {
        let w = state.windows;
        for (let i = w.indexOf(window); i < w.length-1; i++) {
            w[i] = w[i+1];
            w[i].windowRef.current.style.zIndex = i;
        }
        window.windowRef.current.style.zIndex = w.length-1;
        w[w.length-1] = window;
        return {
        ...state,
        windows: w,
    }}),
    closeWindow: () => set(state => {
        // Just remove the last index because before this function the focus func its triggered and sets the windows in the last index.
        let w = state.windows;
        let wc = state.windowsComponent.filter((comp) => {
            return w[w.length-1].title != comp.name;
        });
        w.pop();
        return {
            ...state,
            windows: w,
            windowsComponent: wc
        }
    })
}));