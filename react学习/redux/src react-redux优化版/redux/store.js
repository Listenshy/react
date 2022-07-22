// 暴露一个store 整个应用只有一个store

import { legacy_createStore, applyMiddleware } from "redux"
// 解决redux插件问题
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./reducers"
// 引入rudex-thunk  用于支持异步action
import thunk from "redux-thunk"

// applyMiddleware(thunk) 异步
export default legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

