import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(1);

  return (
    <div>
      {/* Navgate引起视图切换 replace={true}路由是否有记录 */}
      {sum === 2 ? <Navigate to="/about" /> : <h3>当前sum:{sum}</h3>}
      <button onClick={() => setSum(2)}>改变sum</button>
    </div>
  );
}
