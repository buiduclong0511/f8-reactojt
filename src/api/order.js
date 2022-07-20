import axiosClient from './axiosClient';

const orderApi = {
    create(body) {
        const url = '/orders';

        return axiosClient.post(url, body);
    },
};

export default orderApi;
