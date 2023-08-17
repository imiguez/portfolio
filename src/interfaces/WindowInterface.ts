import { MutableRefObject } from "react";


export interface TaskBarBtnInterface {
  minimize: () => void;
  taskBarRef: MutableRefObject<any>;
  title: string;
}

export interface WindowHeaderInterface extends TaskBarBtnInterface {
  maximize: () => void;
  close: () => void;
  windowRef: MutableRefObject<any>;
}

export interface useWindowInterface extends WindowHeaderInterface {
  open?: () => void;
  mount: boolean;
}

export interface WindowInterface extends useWindowInterface {
  onWindowFocus: () => void;
  activeWindows: MutableRefObject<any>[]
}