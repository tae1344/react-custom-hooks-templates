import React, { useEffect, useState, useRef } from "react";
import { useNetwork } from "./useNetwork";

export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const isOnLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{isOnLine ? "Online" : "Offline"}</h1>
    </div>
  );
}
