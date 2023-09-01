import axios from "axios";

const Axios = axios.create({
    baseURL:'http://localhost:3000',  //https://dummyjson.com
    headers:{
        'Content-Type':'appication/json'
    }
})

export default Axios;
