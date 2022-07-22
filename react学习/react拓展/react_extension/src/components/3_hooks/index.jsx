import React from "react";
// import ReactDOM from "react-dom";

class Demo extends React.Component {
  state = { count: 0 };
  add = () => {
    this.setState((state, props) => ({ count: state.count + 1 }));
  };

  //   componentDidMount() {
  //     this.timer = setInterval(() => {
  //       this.setState((state) => ({ count: state.count + 1 }));
  //     }, 1000);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //   }

  //   unMount = () => {
  //     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  //   };

  show = () => {
    console.log(this.tex.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={(c) => (this.tex = c)} />
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        {/* <button onClick={this.unMount}>卸载</button> */}
        <button onClick={this.show}>展示</button>
      </div>
    );
  }
}

// hooks配合函数使用setState或其他属性
// function Demo() {
//   const [count, setCount] = React.useState(0);
//   const [name, setName] = React.useState("atguigu");

//   React.useEffect(() => {
//     setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   function add() {
//     // setCount(count + 1);
//     setCount((count) => count + 1);
//   }
//   function change() {
//     // setName("The Shy");
//     setName(() => "The Shy");
//   }
//   //   function unmount() {
//   //     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   //   }

//   return (
//     <div>
//       <h2>当前求和为：{count}</h2>
//       <h2>我的名字是:{name}</h2>

//       <button onClick={add}>点我+1</button>
//       <button onClick={change}>点我改名</button>
//       {/* <button onClick={unmount}>卸载组件</button> */}
//     </div>
//   );
// }

export default Demo;
