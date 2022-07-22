import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  state = { name: "The Shy" };

  change = () => {
    this.setState((state) => ({
      name: state.name === "The Shy" ? "Rookie" : "The Shy",
    }));
  };

  render() {
    const { name } = this.state;
    return (
      <div className="parent">
        <h3>我是parent</h3>
        <h2>{name}</h2>
        <button onClick={this.change}>点我换人</button>
        <Child name={name} />
      </div>
    );
  }
}
class Child extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是child</h3>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
