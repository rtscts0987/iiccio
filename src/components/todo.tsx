"use client";
import { useState } from "react";

export default function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([] as any);
  const onChange = (event: any) => setToDo(event.target.value);
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray: any) => [toDo, ...currentArray]);
    setToDo("");
  };
  toDos.map((item: string, index: any) => <li key={index}>{item}</li>);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item: string, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
