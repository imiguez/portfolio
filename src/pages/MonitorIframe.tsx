import * as React from "react";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useWindow } from "@/hooks/useWindow";
import { OpenWindowBtn } from "@/components/OpenWindowBtn";
import { SelfTaught } from "../components/Windows retro/windows/SelfTaught";
import { TaskBarBtn } from "@/components/Windows retro/TaskBarBtn";
import { useWindowsMediator } from "@/hooks/useWindowsMediator";
import { University } from "@/components/Windows retro/windows/University";
import { useWindowInterface } from "@/interfaces/WindowInterface";


export const MonitorIframe: FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
      console.log("mounting MonitorIframe");
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

    let componentsToRender = useRef<{
      windows: React.ReactNode[],
      barBtns: React.ReactNode[],
      titles: string[],
    }>({windows: [], barBtns: [], titles: []}).current;

    const windowsActions = {
      add: (window: React.ReactNode, barWindow: React.ReactNode, title :string) => {
        componentsToRender.windows.push(window);
        componentsToRender.barBtns.push(barWindow);
        componentsToRender.titles.push(title);
      },
      remove: (windowHook: useWindowInterface) => {
        let i = componentsToRender.titles.indexOf(windowHook.title);
        componentsToRender.windows.splice(i, 1);
        componentsToRender.barBtns.splice(i, 1);
        componentsToRender.titles.splice(i, 1);
      }
    }

    const windowsContextValue = useWindowsMediator();

    const university = useWindow("University.exe");
    const selfTaught = useWindow("Self-Taught.exe");

    const windowsToRender = useMemo(() => {
      return componentsToRender;
    }, [componentsToRender]);

  return (
    <>
    <div className="windows-container">
      <div className="windows-container-bg-img"></div>
      <div className="windows-container-bg-img-2"></div>
        <div className="programs-container">

          {windowsToRender.windows.map(window => {
            return window;
          })}

          <OpenWindowBtn
            title="University"
            imgSrc="img/program-icon.png"
            onDoubleClick={() => {
              windowsActions.add(
                <University windowHook={university} windowMediator={windowsContextValue}
                windowsActions={windowsActions}/>,
                <TaskBarBtn
                  {...{
                    minimize: () => {
                      university.minimize(() =>
                        windowsContextValue.updateWindows(university)
                    )},
                    taskBarRef: university.taskBarRef,
                    title: university.title,
                  }}
                />,
                university.title
              );
            }}
          />

          <OpenWindowBtn
            title="Self Taught"
            imgSrc="img/program-icon.png"
            onDoubleClick={() => {
              windowsActions.add(
                <SelfTaught windowHook={selfTaught} windowMediator={windowsContextValue}
                windowsActions={windowsActions}/>,
                <TaskBarBtn
                  {...{
                    minimize: () =>
                      selfTaught.minimize(() =>
                        windowsContextValue.updateWindows(selfTaught)
                      ),
                    taskBarRef: selfTaught.taskBarRef,
                    title: selfTaught.title,
                  }}
                />,
                selfTaught.title
              );
            }}
          />
        </div>

        <footer className="task-bar-background">
          <div className="task-bar">
            <div className="task-bar-subcontainer">
              <button className="start-btn" onClick={() => alert("click")}>
                <img
                  className="start-image"
                  src="img/windows-start.png"
                  alt=""
                />
                <p className="text color-black">Start</p>
              </button>
              <div className="start-btn-separetor"></div>

              {windowsToRender.barBtns.map(barBtn => {
                return barBtn;
              })}

            </div>

            <button className="notifications-btn">
              <p className="text color-black">
                {time.getHours()}:
                {time.getMinutes() < 10
                  ? "0" + time.getMinutes()
                  : time.getMinutes()}{" "}
                {time.getHours() > 12 ? "PM" : "AM"}
              </p>
            </button>
          </div>
        </footer>

    </div>
    </>
  );
};