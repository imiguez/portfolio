import { MutableRefObject } from "react";

export interface WindowInterface {
  title: string;
  windowRef: MutableRefObject<any>;
  taskBarBtnRef: MutableRefObject<any>;
  icon: string;
}