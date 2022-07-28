import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";

export default function App() {
  function compuntedClassName({ isActive }) {
    return isActive === true ? "list-group-item atguigu" : "list-group-item";
  }

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
            <NavLink className={compuntedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={compuntedClassName} to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                {/* Navigate 重定向 */}
                <Route path="" element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
