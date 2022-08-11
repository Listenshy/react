import React from "react";
import { useStore } from "./store";
// 导入中间件  连接react和mobx
import { observer } from "mobx-react-lite";
function App() {
  const rootStore = useStore();
  // console.log(rootStore);
  const { count, addCount } = rootStore.counterStore;
  const add = () => {
    // console.log(count);
    addCount();
  };
  return (
    <div>
      {count}
      <button onClick={add}>+</button>
    </div>
  );
}
export default observer(App);
