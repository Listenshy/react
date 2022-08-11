import React from "react";
import Routes from "@/router";
import { useRoutes } from "react-router-dom";

export default function App() {
  const element = useRoutes(Routes);
  return <div>{element}</div>;
}
