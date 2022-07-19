import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import MyNavLink from "./components/MyNavLink/index";

export default class App extends Component {
  render() {
    return (
      <div>
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
                {/* 原生靠a跳转 */}
                {/* <a className="list-group-item" href="./about.html">
                  About
                </a>
                <a className="list-group-item active" href="./home.html">
                  Home
                </a> */}

                {/* react靠路由链接切换 NavLink可以通过点击控制样式 */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由Route */}

                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
