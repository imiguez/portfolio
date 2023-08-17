import { useWindowInterface } from "@/interfaces/WindowInterface";
import { useRef, useState } from "react";


export const useWindow: (string?) => useWindowInterface = (title = "") => {

  let [mount, setMount] = useState(false);
  const windowRef = useRef(null);
  const taskBarRef = useRef(null);

  const open = () => {
    setMount(mount = true);
  };

  const minimize = () => {
    windowRef.current.classList.toggle("display-none");
    taskBarRef.current.classList.toggle("btn-selected");
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
  };
};