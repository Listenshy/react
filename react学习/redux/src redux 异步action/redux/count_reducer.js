import { INCREMENT, DECREMENT } from "./constant";

// 创建一个为Count组件服务的reducer reducer本质是一个函数
// reducer会接到两个函数  之前的状态  动作对象
const initState = 0
//                                    形参的默认值
export default function countReducer(preState = initState, action) {
    // if (preState === undefined)
    //     preState = 0
    // 从action对象中获取type data
    console.log(action, preState);
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data

        default:
            return preState;
    }

}