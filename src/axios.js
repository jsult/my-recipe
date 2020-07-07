import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-recipe-139a1.firebaseio.com/'
});

export default instance;