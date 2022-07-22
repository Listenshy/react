import { INCREMENT, DECREMENT } from "../constant"

// 同步action  返回的值为对象
export const Increment = value => ({ type: INCREMENT, data: value })
export const Decrement = value => ({ type: DECREMENT, data: value })
// 异步action 就是action的值为函数 异步action中一般会调用同步action  异步action不一定一定要用
export const IncrementAsync = (value, time) => {
      return (dispatch) => {
            setTimeout(() => {
                  dispatch(Increment(value))
            }, time)
      }

}