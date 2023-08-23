import { MutableRefObject } from "react";

export type ActiveWindowsType = {
  "ref": MutableRefObject<any>,
  "zIndex": number,
}

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
  updateWindows: () => void;
  getZIndex: () => number;
  setZIndex: (number) => void;
  mount: boolean;
}

export interface WindowInterface extends useWindowInterface {
  onWindowOpen: () => void;
  onWindowFocus: () => void;
  onWindowClose: () => void;
}