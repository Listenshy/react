import React, { Component } from "react";
// 引入store 获取redux中的状态
import store from "../../redux/store";

import { createIncrement, createDecrement } from "../../redux/count_action";

export default class Count extends Component {
  state = { count: 9 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // this.setState({ count: count + (value - 0) });
    store.dispatch(createIncrement(value - 0));
    // this.setState({});
    // console.log(store.getState());
  };
  //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // this.setState({ count: count - (value - 0) });
    store.dispatch(createDecrement(value - 0));
    // this.setState({});
  };
  //   奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;

    // const { count } = this.state;
    if (store.getState() % 2 !== 0) {
      //   this.setState({ count: count + (value - 0) });
      store.dispatch(createIncrement(value - 0));
      // this.setState({});
    }
  };
  //   异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    setTimeout(() => {
      //   this.setState({ count: count + (value - 0) });
      store.dispatch(createIncrement(value - 0));
      // this.setState({});
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>求和：{store.getState()}</h1>
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
