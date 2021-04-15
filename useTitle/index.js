import React, { useEffect, useState } from "react";
import { useTitle } from "./useTitle";

export default function App() {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 3000);

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}
