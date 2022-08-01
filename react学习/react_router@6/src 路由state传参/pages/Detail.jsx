import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  // console.log(state);
  // console.log(useLocation());
  // const { id } = useLocation().state;
  // console.log(id);
  return (
    <ul>
      <li>{state.id}</li>
      <li>{state.title}</li>
      <li>{state.content}</li>
    </ul>
  );
}
