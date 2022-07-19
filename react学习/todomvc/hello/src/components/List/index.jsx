import React, { Component } from "react";
import "./index.css";
import Item from "../Item/index";
import PropTypes from "prop-types";
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deletTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deletTodo } = this.props;
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                deletTodo={deletTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
