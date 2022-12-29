import axios from 'axios'
import { LOCAL_STORAGE } from 'constants/localStorageConstants';
const queryString = (obj: any) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}


const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json',
    },
})

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
axiosClient.interceptors.request.use(async (config: any) => {
    const accessToken =
        typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE.USER_TOKEN) : ''
    if (accessToken) {
        config.headers.common.Authorization = `Bearer ${JSON.parse(accessToken)}`
    }
    return config
})

export default axiosClient