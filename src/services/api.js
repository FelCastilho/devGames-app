import axios from 'axios';

//Key = 96ffa22939174620840e464e6200055c

const api = axios.create({
    baseURL: 'https://api.rawg.io/api/'
})

export default api;
