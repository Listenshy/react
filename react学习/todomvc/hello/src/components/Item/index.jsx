import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      // console.log(flag);
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除
  handleDelete = (id) => {
    return () => {
      if (window.confirm("确定删除吗？")) {
        this.props.deletTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div>
        <li
          onMouseLeave={this.handleMouse(false)}
          onMouseEnter={this.handleMouse(true)}
          style={{ backgroundColor: this.state.mouse ? "#add" : "white" }}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
