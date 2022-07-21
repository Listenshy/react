import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { person } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj);
    this.props.per(personObj);
    this.name.value = "";
    this.age.value = "";
  };
  render() {
    return (
      <div>
        <h2>我是person</h2>
        <h2>上方求和为{this.props.count}</h2>
        <input
          ref={(c) => (this.name = c)}
          type="text"
          placeholder="输入名字"
        />
        <input ref={(c) => (this.age = c)} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.person.map((item) => {
            return (
              <li key={item.id}>
                {item.name}---{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ person: state.personReducer, count: state.countReducer }),
  {
    per: person,
  }
)(Person);
