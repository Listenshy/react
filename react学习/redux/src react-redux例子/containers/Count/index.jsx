import React, { Component } from "react";
import { connect } from "react-redux";
import { createIncrement } from "../../redux/count_action";

class Count extends Component {
  add = () => {
    this.props.jiafa(1);
  };
  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.he}</h2>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
export default connect((state) => ({ he: state }), { jiafa: createIncrement })(
  Count
);
