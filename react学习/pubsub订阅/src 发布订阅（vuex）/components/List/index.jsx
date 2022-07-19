import React, { Component } from "react";
import Pubsub from "pubsub-js";
import "./index.css";
export default class List extends Component {
  // 初始化
  state = { users: [], isFirst: true, isLoading: false, err: "" };

  componentDidMount() {
    this.token = Pubsub.subscribe("atguigu", (_, data) => {
      console.log("list收到数据", data);
      this.setState(data);
    });
  }

  componentWillUnmount() {
    // 卸载
    Pubsub.unsubscribe(this.token);
  }

  // 更新app
  updataAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    const { users, isFirst, isLoading, err } = this.state;

    return (
      <div>
        <div className="row">
          {isFirst ? (
            <h2>请输入关键字</h2>
          ) : isLoading ? (
            <h2>Loading....</h2>
          ) : err ? (
            <h2 style={{ color: "red" }}>{err}</h2>
          ) : (
            users.map((userobj) => {
              return (
                <div key={userobj.id} className="card">
                  <a
                    href={userobj.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      src={userobj.avatar_url}
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className="card-text">{userobj.login}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
