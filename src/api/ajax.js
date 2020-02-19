import axios from "axios"
import qs from "qs"

// 1.生成Axios的伪实例
const instance = axios.create({
    baseURL: "/api"
})

// // 2.添加请求拦截器

instance.interceptors.request.use(config => {
    config.data  = qs.stringify(config.data)

    return config
})

// 3.设置请求拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert("请求失败")
        console.log(error);

        return new Promise(() => {})
    }
)


export default instance