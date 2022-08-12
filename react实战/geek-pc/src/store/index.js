import React from "react";
import LoginStore from "./LoginStore";

class RootStore {
    constructor() {
        this.LoginStore = new LoginStore()
    }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export default useStore