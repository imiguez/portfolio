import { OpenWindowBtn } from "@/components/OpenWindowBtn";
import { WindowInterface } from "@/interfaces/WindowInterface";
import React, { useEffect } from "react";
import { FC } from "react";
import { WindowHeader } from "@/components/Windows retro/WindowHeader";


export const University: FC<WindowInterface> = ({
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
    <>
      <article
        ref={windowRef}
        className="program-exe university-exe"
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
          <OpenWindowBtn
            title="HTML"
            titleColor="black"
            onDoubleClick={() => {
              window.open("https://beerbee.neocities.org/", "_blank");
            }}
            imgSrc={"img/HTML5_icon.png"}
          />
          <OpenWindowBtn
            title="CSS"
            titleColor="black"
            onDoubleClick={() => {
              window.open("https://beerbee.neocities.org/", "_blank");
            }}
            imgSrc={"img/CSS_icon.png"}
          />
          <OpenWindowBtn
            title="JS"
            titleColor="black"
            onDoubleClick={() => {
              window.open("https://beerbee.neocities.org/", "_blank");
            }}
            imgSrc={"img/JS_icon.png"}
          />
          <OpenWindowBtn
            title="PHP"
            titleColor="black"
            onDoubleClick={() => {
              window.open("https://github.com/imiguez/TPE-Web-II", "_blank");
            }}
            imgSrc={"img/PHP_icon.png"}
          />
          <OpenWindowBtn
            title="Java"
            titleColor="black"
            onDoubleClick={() => {
              window.open(
                "https://github.com/imiguez/RN-App/tree/main/backend",
                "_blank"
              );
            }}
            imgSrc={"img/JAVA_icon.png"}
          />
          <OpenWindowBtn
            title="MySQL"
            titleColor="black"
            onDoubleClick={() => {
              // window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
            }}
            imgSrc={"img/MYSQL_icon.png"}
          />
          <OpenWindowBtn
            title="PostgreSQL"
            titleColor="black"
            onDoubleClick={() => {
              // window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
            }}
            imgSrc={"img/POSTGRESQL_icon.png"}
          />
          <OpenWindowBtn
            title="Docker"
            titleColor="black"
            onDoubleClick={() => {
              // window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
            }}
            imgSrc={"img/DOCKER_icon.png"}
          />
        </section>

        <footer>
          <p className="text color-black">8 object[s]</p>
        </footer>
      </article>
    </>
  );
};
