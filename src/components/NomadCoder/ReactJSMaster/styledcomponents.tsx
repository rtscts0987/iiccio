"use client";

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
// import App from "./App";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return <Wrapper></Wrapper>;
}

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

// ReactDOM.render(
export default function Styledcomponents() {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
      {/* {document.getElementById("root")} */}
    </>
  );
}
