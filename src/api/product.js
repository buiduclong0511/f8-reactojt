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

        const token = window.localStorage.getItem('token');

        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    follow(id) {
        const url = `/products/${id}/follow`;
        const token = window.localStorage.getItem('token');

        return axiosClient.post(
            url,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    unFollow(id) {
        const url = `/products/${id}/un-follow`;
        const token = window.localStorage.getItem('token');

        return axiosClient.post(
            url,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
};

export default productApi;
