import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
// id不重复
import { nanoid } from "nanoid";
export default class Header extends Component {
  // 对接收的Props进行限制（类型  必要性）
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = (event) => {
    const { keyCode, target } = event;

    if (keyCode === 13 && target.value !== "") {
      const todoObj = { id: nanoid(), name: target.value, done: false };
      this.props.addTodo(todoObj);
      target.value = "";
    }
  };
  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            onKeyUp={this.handleKeyUp}
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    );
  }
}
