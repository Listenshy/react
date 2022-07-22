// 容器组件
// import CountUI from "../../compontents/Count/index";

import React, { Component } from "react";

import {
  Increment,
  Decrement,
  IncrementAsync,
} from "../../redux/actions/count.js";
// 引入connect用于连接redux
import { connect } from "react-redux";

// 定义ui组件
class Count extends Component {
  state = { count: 9 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.Increment(value - 0);
  };
  //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.Decrement(value - 0);
  };
  //   奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.Increment(value - 0);
    }
  };
  //   异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.IncrementAsync(value - 0, 500);
  };

  render() {
    return (
      <div>
        <h2>我是count</h2>
        <h2>下方总人数为:{this.props.person}</h2>
        <h1>求和：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// 使用connect创建并暴露一个Count容器组件
export default connect(
  (state) => ({
    count: state.count,
    person: state.person.length,
  }),
  //   mapDispatchToProps的精简写法
  {
    Increment,
    Decrement,
    IncrementAsync,
  }
)(Count);
