// 暴露一个store 整个应用只有一个store

import { legacy_createStore } from "redux"
import countReducer from "./count_reducer"

export default legacy_createStore(countReducer)
