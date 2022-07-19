import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";
import { Route, Switch, Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item" href="./home-news.html">
                News
              </a> */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              {/* <a className="list-group-item " href="./home-message.html">
                Message
              </a> */}
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* <News></News>
          <Message></Message> */}
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
