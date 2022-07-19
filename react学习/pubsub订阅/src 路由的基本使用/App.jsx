import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

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

                {/* react靠路由链接切换 */}

                <Link className="list-group-item" to="/about">
                  about
                </Link>
                <Link className="list-group-item" to="/home">
                  home
                </Link>
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
