import { WindowInterface } from '@/interfaces/WindowInterface';
import { useWindowsStore } from '@/store/windowsStore';
import React, { useEffect, useRef } from 'react';
import { FC } from 'react';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

export const WindowHeader: FC<{window: WindowInterface}> = ({ window }) => {
  const { minimizeWindow, maximizeWindow, closeWindow, focusWindow } = useWindowsStore();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    //Make the DIV element draggagle:
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    headerRef.current.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e.preventDefault();
      focusWindow(window);
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      window.windowRef.current.style.top = (window.windowRef.current.offsetTop - pos2) + "px";
      window.windowRef.current.style.left = (window.windowRef.current.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }, []);

  return (
    <header ref={headerRef} className="program-header" >
      <div>
        <img className="program-icon mini-icon" src="img/program-icon.png" alt="" />
        <p className="text color-white bold unselectable">{window.title}</p>
      </div>
      <div>
        <button
          className="window-btn"
          onClick={() => minimizeWindow(window)}
        >
          <FaRegWindowMinimize className="minimize-icon" />
        </button>
        <button
          className="window-btn"
          onClick={() => maximizeWindow(window)}
        >
          <FaRegWindowMaximize className="maximize-icon" />
        </button>
        <button
          className="window-btn"
          onClick={() => setTimeout(() => closeWindow(), 100)} // Wait the focus event and then close the window.
        >
          <IoCloseSharp className="close-icon" />
        </button>
      </div>
    </header>
  );
};
