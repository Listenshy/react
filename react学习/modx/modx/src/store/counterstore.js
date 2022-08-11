import { makeAutoObservable } from "mobx"
class CounterStore {
    // 定义数据
    count = 0
    list = [1, 2, 3, 4, 5, 6, 7]
    constructor() {
        // 响应式
        makeAutoObservable(this)

    }
    // 定义计算属性
    get filterList() {
        return this.list.filter(item => item > 2)
    }
    // 修改list
    addList = () => {
        this.list.push(7, 8, 9)
    }
    // 定义action  用来修改函数
    addCount = () => {
        this.count++
        // console.log(this);
    }
}
// 实例化  导出

export { CounterStore }