import React, { useEffect, useState, useRef } from "react";
import { useClick } from "./useClick";

export default function App() {
  const sayHello = () => console.log("Hello~");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}
