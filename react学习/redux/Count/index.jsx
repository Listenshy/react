// 容器组件
// import CountUI from "../../compontents/Count/index";

import React, { Component } from "react";

import {
  createIncrement,
  createDecrement,
  createIncrementAsync,
} from "../../redux/count_action";
// 引入connect用于连接redux
import { connect } from "react-redux";

// 定义ui组件
class Count extends Component {
  state = { count: 9 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value - 0);
  };
  //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value - 0);
  };
  //   奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value - 0);
    }
  };
  //   异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.AsyncJia(value - 0, 500);
  };

  render() {
    return (
      <div>
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
  (state) => ({ count: state }),
  //   mapDispatchToProps的精简写法
  {
    jia: createIncrement,
    jian: createDecrement,
    AsyncJia: createIncrementAsync,
  }
  //   mapDispatchToProps的一般写法
  //   (dispatch) => ({
  //     // 加法
  //     jia: (data) => dispatch(createIncrement(data)),
  //     // 减法
  //     jian: (data) => dispatch(createDecrement(data)),
  //     //     异步加
  //     AsyncJia: (data, time) => dispatch(createIncrementAsync(data, time)),
  //   })
)(Count);
