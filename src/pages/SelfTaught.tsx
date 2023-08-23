import { OpenWindowBtn } from "@/components/OpenWindowBtn";
import { WindowHeader } from "@/components/Windows retro/WindowHeader";
import { WindowInterface } from "@/interfaces/WindowInterface";
import React, { useEffect } from "react";
import { FC } from "react";

export const SelfTaught: FC<WindowInterface> = ({
  minimize,
  maximize,
  close,
  onWindowOpen,
  onWindowFocus,
  onWindowClose,
  windowRef,
  taskBarRef,
  title,
}) => {
  
  useEffect(() => {
    onWindowOpen();
    return () => {
      onWindowClose();
    };
  }, []);

  return (
    <article
      ref={windowRef}
      className="program-exe SelfTaught-exe"
      onClick={() => {
        onWindowFocus();
      }}
    >
      <WindowHeader
        title={title}
        minimize={minimize}
        maximize={maximize}
        close={close}
        windowRef={windowRef}
        taskBarRef={taskBarRef}
      />

      <div className="program-options">
        <p className="text color-black">File</p>
        <p className="text color-black">Edit</p>
        <p className="text color-black">View</p>
        <p className="text color-black">Help</p>
      </div>

      <section className="university-section">
        <OpenWindowBtn title="TypeScript" titleColor="black" onDoubleClick={() => {
              window.open("https://github.com/imiguez/RN-App/tree/main/frontend", "_blank");
            }} imgSrc={"img/TYPESCRIPT_icon.png"} />
      </section>

      <footer>
        <p className="text color-black">5 object[s]</p>
      </footer>
    </article>
  );
};
