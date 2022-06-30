import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://reactojt-api.fullstack.edu.vn/api/',
});

export default axiosClient;
