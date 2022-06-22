import axios, {AxiosResponse} from "axios"
import {BaseAxiosResponse, ServerResponse, ServerError} from "./types"

const base = axios.create({
    baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/user/"
})



export const postRequest = async <D, R>(endPoint: string, data: D) : Promise<BaseAxiosResponse<R>> => {
    const result = await base.post<R, AxiosResponse<R>, D>(endPoint, data)
    
    
    return {success: true, data:result.data}
}