import { WindowInterface } from '@/interfaces/WindowInterface';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { WindowHeader } from './WindowHeader';
import { useWindowsStore } from '@/store/windowsStore';

interface CSSClasses {
  window: WindowInterface;
  classes?: string;
  children?: JSX.Element | JSX.Element[];
}

export const BasicWindow: FC<CSSClasses> = ({ window, classes, children }) => {
  const { focusWindow, windows } = useWindowsStore();


  useEffect(() => {
    window.windowRef.current.style.zIndex = windows.length-1;
    window.windowRef.current.style.top = Math.floor(Math.random()*300)+'px';
    window.windowRef.current.style.left = Math.floor(Math.random()*300)+'px';
  }, []);

  return (
    <article ref={window.windowRef} className={`program-exe ${classes}`} onClick={() => focusWindow(window)} onFocus={() => focusWindow(window)}>
      <WindowHeader window={window} />
      {children}
    </article>
  );
};