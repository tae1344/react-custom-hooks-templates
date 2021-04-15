import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}
