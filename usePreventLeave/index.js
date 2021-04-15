import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const { enablePrevent, disenablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disenablePrevent}>unprotect</button>
    </div>
  );
}
