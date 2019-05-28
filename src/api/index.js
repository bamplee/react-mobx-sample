import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet('/search').reply(200, {
    data: [
        {id: 0, name: 'TEST-0'},
        {id: 1, name: 'TEST-1'},
        {id: 2, name: 'TEST-2'},
        {id: 3, name: 'TEST-3'},
    ]
});

const get = (path, params) => {
    return axios.get(path, {params: params});
};

export const api = {
    search: (query) => {
        return get('/search', {});
    },
};