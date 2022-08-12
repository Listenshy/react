import { makeAutoObservable } from "mobx"
import { LoginApi } from "@/api"
import { getToken, setToken } from "@/utils"

class LoginStore {
    token = getToken() || ""
    constructor() {
        makeAutoObservable(this)
    }
    setToken = async (mobile, code) => {
        const result = await LoginApi({ mobile, code })
        // console.log(result);
        this.token = result.data.data.token
        setToken(this.token)

    }

}

export default LoginStore