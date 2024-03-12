import { MutableRefObject, PropsWithChildren, ReactNode } from "react";

export interface WindowInterface {
  title: string;
  windowRef: MutableRefObject<any>;
  taskBarBtnRef: MutableRefObject<any>;
}

export interface TaskBarBtnInterface {
  minimize: () => void;
  taskBarRef: MutableRefObject<any>;
  title: string;
}

export interface WindowHeaderInterface {
  close: () => void;
  maximize: () => void;
  minimize: () => void;
  title: string;
}

export interface useWindowInterface {
  taskBarRef: MutableRefObject<any>;
  title: string;
  minimize: (updateWindows: () => void) => void;
  maximize: () => void;
  windowRef: MutableRefObject<any>;
  getZIndex: () => number;
  setZIndex: (number) => void;
}

export interface useWindowsMediatorInterface {
  getWindows: () => useWindowInterface[],
  onWindowOpen: (window: useWindowInterface) => void,
  updateWindows: (window: useWindowInterface) => void,
  onWindowClose: (window: useWindowInterface) => void,
}