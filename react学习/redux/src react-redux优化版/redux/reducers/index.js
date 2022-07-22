import { combineReducers } from "redux"
// 汇总所有的reducer
import count from "./count"
import person from "./person"
// 合并多个reducer变为一个
const Reducer = combineReducers({ count, person })

export default Reducer