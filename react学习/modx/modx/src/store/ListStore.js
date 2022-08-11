import { makeAutoObservable } from "mobx"

class ListStore {
    list = [1, 2, 3, 4, 5]
    constructor() {
        makeAutoObservable(this)
    }
    addList = () => {
        this.list.push(0)
    }
}

export { ListStore } 