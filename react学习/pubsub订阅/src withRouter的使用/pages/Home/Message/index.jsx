import React, { Component } from "react";

import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  state = {
    MessageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  replaceShow = (id, title) => {
    return () => {
      // 路由replace跳转 携带params
      //   this.props.history.replace(`/home/message/detail/${id}/${title}`);
      // 路由replace跳转 携带search
      //   this.props.history.replace(
      //     `/home/message/detail?id=${id}&title=${title}`
      //   );
      // 路由replace跳转 携带state
      this.props.history.replace("/home/message/detail", { id, title });
    };
  };

  pushShow = (id, title) => {
    // 路由push跳转 携带params
    return () => {
      // 路由push跳转 携带params
      //   this.props.history.push(`/home/message/detail/${id}/${title}`);
      // 路由replace跳转 携带search
      //   this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
      // 路由replace跳转 携带state
      this.props.history.push("/home/message/detail", { id, title });
    };
  };

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.MessageArr.map((item) => {
              return (
                <li key={item.id}>
                  {/* 向路由传递params参数 */}
                  {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                    {item.title}
                  </Link> */}
                  &nbsp;&nbsp;
                  <button onClick={this.pushShow(item.id, item.title)}>
                    push查看
                  </button>
                  &nbsp;&nbsp;
                  <button onClick={this.replaceShow(item.id, item.title)}>
                    replace查看
                  </button>
                  {/* 向路由传递search参数 */}
                  {/* <Link
                    to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
                  >
                    {item.title}
                  </Link> */}
                  {/* 向路由传递state参数 */}
                  <Link
                    to={{
                      pathname: "/home/message/detail",
                      state: { id: item.id, title: item.title },
                    }}
                  >
                    {item.title}
                  </Link>
                  &nbsp;&nbsp;
                </li>
              );
            })}
          </ul>
          <hr />
          {/* 声明接收params参数 */}
          {/* <Route
            path="/home/message/detail/:id/:title"
            component={Detail}
          ></Route> */}

          {/* search参数无需声明接收 正常注册即可 */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}

          {/* state参数无需声明接收 正常注册即可 */}
          <Route path="/home/message/detail" component={Detail}></Route>
        </div>
      </div>
    );
  }
}
