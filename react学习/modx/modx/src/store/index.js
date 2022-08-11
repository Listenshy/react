import React from "react";

import { ListStore } from "./ListStore";
import { CounterStore } from "./counterstore";

// 封装子模块
class RootStore {
    constructor() {
        this.counterStore = new CounterStore()
        this.listStore = new ListStore()
    }
}
// 实例化
const rootStore = new RootStore()
// 封装
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }