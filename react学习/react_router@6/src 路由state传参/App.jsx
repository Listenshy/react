import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  // 根据路由表生成对应的路由
  const element = useRoutes(Routes);

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item " to="/about">
              About
            </NavLink>
            {/* end 访问子集父级会失去高亮 */}
            <NavLink className="list-group-item " end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
