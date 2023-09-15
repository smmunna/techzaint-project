import axios from "axios"

const AxiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    //https://dummyjson.com
    //   https://myapi.techzaint.com/
})
export default AxiosSecure;

AxiosSecure.interceptors.request.use((request) => {
    request.headers.Authorization = `bearer ${localStorage.getItem('access-token')}`
    return request
})

AxiosSecure.interceptors.response.use((response) => {
    return response
})


