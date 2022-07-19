import React, { Component } from "react";
import axios from "axios";
import Pubsub from "pubsub-js";
export default class Search extends Component {
  search = async () => {
    // 获取用户输入
    const {
      keywordElement: { value: keyword },
    } = this;

    // 发布消息
    console.log("search组件发布消息");
    Pubsub.publish("atguigu", { isFirst: false, isLoading: true });
    try {
      // 网络请求
      let result = await axios.get(`/api1/search/users?q=${keyword}`);
      if (result.status === 200) {
        Pubsub.publish("atguigu", {
          isLoading: false,
          users: result.data.items,
        });
      }
    } catch {
      Pubsub.publish("atguigu", { isLoading: false, err: "请求失败" });
    }
  };

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              ref={(c) => (this.keywordElement = c)}
            />
            &nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    );
  }
}
