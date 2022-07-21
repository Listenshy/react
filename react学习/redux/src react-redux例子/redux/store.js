// 暴露一个store 整个应用只有一个store

import { legacy_createStore, applyMiddleware } from "redux"
import countReducer from "./count_reducer"

// 引入rudex-thunk  用于支持异步action
import thunk from "redux-thunk"

export default legacy_createStore(countReducer, applyMiddleware(thunk))
