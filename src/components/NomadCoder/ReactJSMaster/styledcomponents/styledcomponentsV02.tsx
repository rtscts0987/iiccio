"use client";

import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

export default function Styledcomponents() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}
