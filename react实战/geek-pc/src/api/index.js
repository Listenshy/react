import { request } from "@/utils";

export const LoginApi = (parmas) => request.post("/authorizations", parmas)