import * as React from "react";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { useWindow } from "@/hooks/useWindow";
import { University } from "./University";
import { OpenWindowBtn } from "@/components/OpenWindowBtn";
import { SelfTaught } from "./SelfTaught";
import { TaskBarBtn } from "@/components/Windows retro/TaskBarBtn";

export const MonitorIframe: FC = () => {
  
  let activeWindows = useRef([]).current;

  const  university = useWindow("University.exe");
  const  selfTaught = useWindow("Self-Taught.exe");

  const onWindowFocus = (ref: MutableRefObject<any>) => {
    activeWindows.sort((a, b) => {
      return a.current.style.zIndex - b.current.style.zIndex;
    });

    let lastZIndex = 2; // In case is the first to add, the z-index will be this

    if (activeWindows.length > 1) { // If it's not the first (start's from 1 because its already pushed into the array)
      lastZIndex = Number(activeWindows[activeWindows.length - 1].current.style.zIndex) + 1;
    }

    for (let i = activeWindows.indexOf(ref); i < activeWindows.length-1; i++) {
      activeWindows[i].current.style.zIndex = activeWindows[i+1].current.style.zIndex;
    }

    ref.current.style.zIndex = lastZIndex;
  }

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

      {university.mount && <University {...university} onWindowFocus={() => onWindowFocus(university.windowRef)}
        activeWindows={activeWindows}
      />}

      {selfTaught.mount && <SelfTaught {...selfTaught} onWindowFocus={() => onWindowFocus(selfTaught.windowRef)}
        activeWindows={activeWindows} 
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
