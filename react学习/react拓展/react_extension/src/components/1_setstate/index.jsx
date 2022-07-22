import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add = () => {
    // const { count } = this.state;
    // 正常形式  需要获取状态值使用
    // this.setState({ count: count + 1 }, () => {});
    // 函数形式  不用获取状态值  可直接使用
    this.setState((state, propos) => {
      // console.log(222);
      return { count: state.count + propos.x };
    });
  };

  render() {
    return (
      <div>
        <h1>当前为：{this.state.count}</h1>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
