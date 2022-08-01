import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  // 读取参数     更新（了解即可）
  const [search, setSearch] = useSearchParams();
  return (
    <ul>
      <li>
        <button onClick={() => setSearch("id=8&title=哈哈&content=嘻嘻")}>
          点击更新
        </button>
      </li>
      <li>{search.get("id")}</li>
      <li>{search.get("title")}</li>
      <li>{search.get("content")}</li>
    </ul>
  );
}
