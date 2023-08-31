import axios from "axios";

const Axios = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{
        'Content-Type':'appication/json'
    }
})

export default Axios;
