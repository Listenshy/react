import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [massages] = useState([
    { id: "1", title: "消息1", content: "111111111" },
    { id: "2", title: "消息2", content: "222222222" },
    { id: "3", title: "消息3", content: "333333333" },
  ]);
  return (
    <div>
      <ul>
        {massages.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
