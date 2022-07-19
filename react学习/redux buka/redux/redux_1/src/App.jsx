import React, { Component } from "react";
import store from "./store";
// import { increamentAction, decreamentAction } from "./action/actionCreator";
class App extends Component {
  // 获取初始状态
  // state = { count: store.getState() };
  // syncState = () => {
  //   this.setState({ count: store.getState() });
  // };
  // // store.subscript(this.syncState)

  constructor() {
    super();
    this.state = { count: store.getState() };
    store.subscript(this.syncState);
  }

  syncState = () => {
    this.setState({ count: store.getState() });
  };

  increament = () => {
    // this.setState((prestate) => ({ count: prestate.count + 1 }));
    store.dispatch({ type: "increament" });
    // store.dispatch(increamentAction());
  };
  decreament = () => {
    // this.setState((prestate) => ({ count: prestate.count - 1 }));
    store.dispatch({ type: "decreament" });
    // store.dispatch(decreamentAction());
  };
  render() {
    return (
      <div>
        <p>clicked:{this.state.count}</p>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decreament}>-</button>
      </div>
    );
  }
}

export default App;
