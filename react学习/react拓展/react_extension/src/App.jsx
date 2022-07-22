import React, { Component, Fragment } from "react";
// import Demo from "./components/1_setstate";
// import Demo from "./components/2_lazyload";
// import Demo from "./components/3_hooks";
// import Demo from "./components/4_Fragment";
// import Demo from "./components/5_Context";
import Demo from "./components/6_optimize";

export default class App extends Component {
  render() {
    return (
      // 代替外层的div 使外层div不显示
      <Fragment>
        <Demo />
      </Fragment>
    );
  }
}
