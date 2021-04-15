import React, { useEffect, useState, useRef } from "react";
import { useConfirm } from "./useConfirm";

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const rejection = () => console.log("Rejected...");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, rejection);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
