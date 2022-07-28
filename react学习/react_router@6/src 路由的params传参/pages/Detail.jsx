import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  // 读取参数
  const a = useParams();
  //   console.log(a);
  return (
    <ul>
      <li>{a.id}</li> <li>{a.title}</li> <li>{a.content}</li>
    </ul>
  );
}
