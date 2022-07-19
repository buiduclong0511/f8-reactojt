import axiosClient from './axiosClient';

const cartApi = {
    getUnpaidCart() {
        const url = '/carts/unpaid';

        return axiosClient.get(url);
    },
    update(id, products) {
        const url = `/carts/${id}`;

        return axiosClient.patch(url, {
            products,
        });
    },
};

export default cartApi;
