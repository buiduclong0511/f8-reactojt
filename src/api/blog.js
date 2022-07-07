import axiosClient from './axiosClient';

const blogApi = {
    getList() {
        const url = '/blogs';

        return axiosClient.get(url);
    },
};

export default blogApi;
