import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://127.0.0.1:8000/api';
const responseBody = response => response.body;

let token = null;

const tokenPlugin = secured => {
    return (requests) => {
        if (token && secured){
            requests.set('Authorization', `Bearer ${token}`);
        }
    }
};

export const requests = {
    get: (url, secured = false) =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody),
    post: (url, body = null, secured = true) => {
        console.log(token);
        return superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin(secured)).then(responseBody);
    },
    setToken: (newJwtToken) => token = newJwtToken
};