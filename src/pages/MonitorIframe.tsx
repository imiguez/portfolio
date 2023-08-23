import * as React from "react";
import { FC, useEffect, useRef, useState } from "react";
import { useWindow } from "@/hooks/useWindow";
import { University } from "./University";
import { OpenWindowBtn } from "@/components/OpenWindowBtn";
import { SelfTaught } from "./SelfTaught";
import { TaskBarBtn } from "@/components/Windows retro/TaskBarBtn";
import { useWindowInterface } from "@/interfaces/WindowInterface";

export const MonitorIframe: FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    let animationFrameId;
  
    const tick = () => {
      setTime(new Date());
      animationFrameId = requestAnimationFrame(tick);
    };
  
    animationFrameId = requestAnimationFrame(tick);
  
    return () => {
      cancelAnimationFrame(animationFrameId); // Execute when dismount
    };
  }, []);
  
  let activeWindows = useRef<useWindowInterface[]>([]).current;

  const  university = useWindow("University.exe", activeWindows);
  const  selfTaught = useWindow("Self-Taught.exe", activeWindows);
  
  const onWindowOpen = (window: useWindowInterface) => {
    window.setZIndex(2); // If its the first to add
    if (activeWindows.length > 0) // Else set the last z-index + 1
      window.setZIndex(Number(activeWindows[activeWindows.length-1].getZIndex()) + 1);
    activeWindows.push(window);
  }

  const onWindowClose = (window: useWindowInterface) => {
    let pos = activeWindows.indexOf(window);
    activeWindows.splice(pos, 1);
  }

  return (
    <div className="windows-container" >
      <div className="programs-container">
        
        <OpenWindowBtn title="University" imgSrc="img/program-icon.png" onDoubleClick={() => {
          university.open();
        }}/>

        <OpenWindowBtn title="Self Taught" imgSrc="img/program-icon.png" onDoubleClick={() => {
          selfTaught.open();
        }}/>
        
      </div>

      {university.mount && <University {...university} 
        onWindowFocus={() => university.updateWindows()}
        onWindowOpen={() => onWindowOpen(university)}
        onWindowClose={() => onWindowClose(university)}
      />}

      {selfTaught.mount && <SelfTaught {...selfTaught} 
        onWindowFocus={() => selfTaught.updateWindows()}
        onWindowOpen={() => onWindowOpen(selfTaught)}
        onWindowClose={() => onWindowClose(selfTaught)}
      />}

      <footer className="task-bar-background">
        <div className="task-bar">
          <div className="task-bar-subcontainer">
            <button className="start-btn">
              <img className="start-image" src="img/windows-start.png" alt="" />
              <p className="text color-black">Start</p>
            </button>
            <div className="start-btn-separetor"></div>

            {university.mount && <TaskBarBtn {...{
              minimize: university.minimize,
              taskBarRef: university.taskBarRef,
              title: university.title
            }}/>}

            {selfTaught.mount && <TaskBarBtn {...{
              minimize: selfTaught.minimize,
              taskBarRef: selfTaught.taskBarRef,
              title: selfTaught.title
            }}/>}

          </div>

          <button className="notifications-btn">
            <p className="text color-black">
              {time.getHours()}:
              {time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes()} {time.getHours() > 12 ?"PM":"AM"}</p>
          </button>
        </div>
      </footer>
    </div>
  );
};