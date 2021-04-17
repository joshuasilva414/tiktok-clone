import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-clone-14.herokuapp.com/",
})

export default instance;