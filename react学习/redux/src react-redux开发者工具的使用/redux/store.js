// 暴露一个store 整个应用只有一个store

import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
import { composeWithDevTools } from "redux-devtools-extension"

// 引入rudex-thunk  用于支持异步action
import thunk from "redux-thunk"
// 合并多个reducer变为一个
const allReducer = combineReducers({ countReducer, personReducer })


// applyMiddleware(thunk) 异步
export default legacy_createStore(allReducer, composeWithDevTools())

