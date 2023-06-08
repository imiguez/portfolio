import * as React from "react";
import { FC } from "react";

export const MonitorIframe: FC = () => {
  return (
    <div  style={{ width: "100%", height: "100vh", backgroundColor: "#264653", margin: 0 }}>
      <h1> HELLO WORLD!!</h1>
      <button onClick={() => {alert("hola")}}>hola</button>
    </div>
  );
};
