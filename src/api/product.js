import axiosClient from './axiosClient';

const productApi = {
    getList(q = '', all = false) {
        let url = '/products';
        if (q.trim()) {
            url += '?q=' + q;
        }

        if (all) {
            url += '&all=true';
        }

        return axiosClient.get(url);
    },
    show(id) {
        const url = `/products/${id}`;

        return axiosClient.get(url);
    },
    follow(id) {
        const url = `/products/${id}/follow`;

        return axiosClient.post(url);
    },
    unFollow(id) {
        const url = `/products/${id}/un-follow`;

        return axiosClient.post(url);
    },
    getFeaturedList() {
        const url = '/products/featured';

        return axiosClient.get(url);
    },
    getLatestList() {
        const url = '/products/latest';

        return axiosClient.get(url);
    },
    getTrendingProduct() {
        const url = '/products/featured';

        return axiosClient.get(url);
    },
    addToCart(id) {
        const url = `/products/${id}/add-to-cart`;

        return axiosClient.post(url);
    },
    removeFromCart(id) {
        const url = `/products/${id}/remove-from-cart`;

        return axiosClient.post(url);
    },
};

export default productApi;
