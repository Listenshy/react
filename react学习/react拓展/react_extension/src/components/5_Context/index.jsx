import React, { Component } from "react";

const MyContext = React.createContext();
export default class A extends Component {
  state = { userName: "tom", age: 18 };
  render() {
    const { userName, age } = this.state;
    return (
      <div>
        <h3>我是A组件</h3>
        <h2>我的用户名是:{this.state.userName}</h2>
        <h2>我的年龄是:{this.state.age}</h2>
        <MyContext.Provider value={{ userName, age }}>
          <B />
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <div>
          <h3>我是B组件</h3>
          <h2>我从A接收到的年龄是:{this.context.age}</h2>
          <C />
        </div>
      </div>
    );
  }
}

class C extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <div>
          <h3>我是C组件</h3>
          <h2>
            我从A接收到的用户名是:
            {/* MyContext.Consumer支持函数操作 */}
            <MyContext.Consumer>
              {(value) => {
                return `${value.userName}, 年龄是${value.age}`;
              }}
            </MyContext.Consumer>
          </h2>
        </div>
      </div>
    );
  }
}
