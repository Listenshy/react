import React, { Component } from "react";
// import Hello from "./components/Hello";
// import Welcome from './components/Welcome'
import "./App.css";

import Header from "./components/Header/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "加班", done: true },
    ],
  };
  // 子传父  props配合函数完成
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoObj];
    // console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    // console.log(id, done);

    const { todos } = this.state;
    // 根据传过来的id加工数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };

  // 删除
  deletTodo = (id) => {
    // console.log(this);
    let { todos } = this.state;
    let newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  // 全选
  checkAllTodo = (done) => {
    let { todos } = this.state;
    let newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };
  // 选中的删除
  clearDone = () => {
    let { todos } = this.state;
    let newTodos = todos.filter((todoObj) => {
      // console.log(todoObj);
      return todoObj.done === false;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    let { todos } = this.state;
    return (
      <div>
        {/* <Hello/>
        <Welcome/> */}

        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deletTodo={this.deletTodo}
            />
            <Footer
              todos={todos}
              checkAllTodo={this.checkAllTodo}
              clearDone={this.clearDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
