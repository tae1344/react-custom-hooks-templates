import React, { useState } from "react";
import { useTabs } from "./useTabs";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      <h1>Hello</h1>
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
