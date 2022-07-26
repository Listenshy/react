import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [massages] = useState([
    { id: "1", title: "消息1", content: "111111111" },
    { id: "2", title: "消息2", content: "222222222" },
    { id: "3", title: "消息3", content: "333333333" },
  ]);
  const navigate = useNavigate();
  function showDetail(massages) {
    navigate("detail", {
      replace: false,
      state: {
        id: massages.id,
        title: massages.title,
        content: massages.content,
      },
    });
  }

  return (
    <div>
      <ul>
        {massages.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to="detail"
                state={{
                  id: item.id,
                  title: item.title,
                  content: item.content,
                }}
              >
                {item.title}
              </Link>
              <button onClick={() => showDetail(item)}>点我查看</button>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
