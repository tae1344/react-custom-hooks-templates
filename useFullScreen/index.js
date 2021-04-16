import React, { useEffect, useState, useRef } from "react";
import { useFullScreen } from "./useFullScreen";

export default function App() {
  const onFullSreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullSreen);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://source.unsplash.com/random/300x300" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>

      <button onClick={triggerFull}>Make Full Screen</button>
    </div>
  );
}
