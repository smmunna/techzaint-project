import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:8000',
    //https://dummyjson.com
    // http://localhost:8000
    // https://myapi.techzaint.com
    headers: {
        'Content-Type': 'appication/json'
    }
})

export default Axios;
