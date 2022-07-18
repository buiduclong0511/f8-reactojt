import axiosClient from './axiosClient';

const authApi = {
    login(body) {
        const url = '/auth/login';

        return axiosClient.post(url, body);
    },
    register(body) {
        const url = '/auth/register';

        return axiosClient.post(url, body);
    },
    logout() {
        const url = '/auth/logout';

        return axiosClient.post(url);
    },
    getCurrentUser() {
        const url = '/auth/me';

        return axiosClient.get(url);
    },
};

export default authApi;
