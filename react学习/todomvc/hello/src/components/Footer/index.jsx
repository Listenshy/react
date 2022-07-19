import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  // 全选
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  // 选中的删除
  handleClearAll = () => {
    this.props.clearDone();
  };
  render() {
    const { todos } = this.props;
    // 已完成的个数
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? +1 : +0);
    }, 0);

    // 总数
    const total = todos.length;
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox"
              onChange={this.handleCheckAll}
              checked={doneCount === total && total !== 0}
            />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button onClick={this.handleClearAll} className="btn btn-danger">
            清除已完成任务
          </button>
        </div>
      </div>
    );
  }
}
