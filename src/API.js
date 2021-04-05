import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const Axios = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const API = {
    get: async (path) => {
        try {
            const response = await Axios.get(`${BASE_URL}/${path}`);
            return response.data;
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data);
        }
    },

    post: async (path, data) => {
        const token = localStorage.getItem('token');
        const authAxios = axios.create({
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const response = await authAxios.post(`${BASE_URL}/${path}`, data);
        return response.data;
    },

    update: async (path, id, data) => {
        try {
            const token = localStorage.getItem('token');
            const authAxios = axios.create({
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const response = await authAxios.patch(`${BASE_URL}/${path}/${id}`, data);
            return response;
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data);
        }
    },

    delete: async () => {},
};

export default API;
