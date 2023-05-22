"use client";
import { useState } from "react";

export default function CodsandboxCalculatorCode() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [option, setOption] = useState("none");
  const [msg, SetMsg] = useState("[ 0000 ]");

  const onchangeFir = (event: any) => {
    setFirst(event.target.value);
  };
  const onchangeSec = (event: any) => {
    setSecond(event.target.value);
  };
  const onchangeOption = (event: any) => {
    setOption(event.target.value);
  };
  const onclick = (event: any) => {
    if (option === "none") {
      SetMsg("Please select option +,-,x,÷");
      return;
    }

    if (option === "sum") {
      SetMsg("The result is : " + (Number(first) + Number(second)));
    } else if (option === "sub") {
      SetMsg("The result is : " + (Number(first) - Number(second)));
    } else if (option === "mul") {
      SetMsg("The result is : " + Number(first) * Number(second));
    } else if (option === "div") {
      SetMsg("The result is : " + Number(first) / Number(second));
    }
  };
  return (
    <div className="container flex flex-col w-48">
      <input
        onChange={onchangeFir}
        type="text"
        required
        placeholder="num"
        className="text-black m-1"
      />
      <input
        onChange={onchangeSec}
        type="text"
        required
        placeholder="num"
        className="text-black m-1"
      />
      <select
        name="calculator"
        value={option}
        onChange={onchangeOption}
        className="text-black m-1"
      >
        <option value="none" selected className="text-black">
          💨Select opton
        </option>
        <option value="sum" className="text-black">
          +
        </option>
        <option value="sub" className="text-black">
          -
        </option>
        <option value="mul" className="text-black">
          x
        </option>
        <option value="div" className="text-black">
          ÷
        </option>
      </select>
      <button onClick={onclick} className="m-1 bg-blue-500">
        Click
      </button>
      <h1 className="text-center">{msg}</h1>
    </div>
  );
}
