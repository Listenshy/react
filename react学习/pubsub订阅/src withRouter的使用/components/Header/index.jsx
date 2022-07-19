import React, { Component } from "react";
//   让一般组件具备路由组件的特有API
import { withRouter } from "react-router-dom";

class Header extends Component {
  // 路由前进  回退
  forward = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  //   路由前进或后退多少步
  go = () => {
    this.props.history.go(-2);
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
              <button onClick={this.forward}>前进</button>
              <button onClick={this.back}>回退</button>
              <button onClick={this.go}>go</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
