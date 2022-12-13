// HELPER FUNCTION

// importing libraries
import axios from 'axios';

// handle user login
export function handleLogin(payload) {
    const response = axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, payload)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            const { data } = err.response;
            return data;
        })

    return response;
}

// handle user signup
export function handleSignup(payload) {
    const response = axios.post(`${process.env.REACT_APP_SERVER}/auth/signup`, payload)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            const { data } = err.response;
            return data;
        })

    return response;
}