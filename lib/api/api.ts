import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://529c-222-118-185-120.ngrok.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url)
        .then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body)
        .then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body)
        .then(responseBody),
    delete: (url: string, body: {}) => instance.delete(url, { data: body }).then(responseBody),
};

export default requests;