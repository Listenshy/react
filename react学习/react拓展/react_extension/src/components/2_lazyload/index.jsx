import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import Home from "./Home/index";
// import About from "./About/index";
import Loading from "./Loading/index";
// 路由懒加载写法
const Home = lazy(() => import("./Home/index"));
const About = lazy(() => import("./About/index"));

export default class Demo extends Component {
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
                <NavLink className="list-group-item" to="/about">
                  about
                </NavLink>
                <NavLink className="list-group-item" to="/home">
                  home
                </NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 懒加载时要用Suspense包裹 */}
                  <Suspense fallback={<Loading />}>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
