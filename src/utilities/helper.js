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

// fetch user data
export async function fetchUserData(token) {
    const options = {
        method: 'GET',
        headers: {
            'x-auth-token': token
        }
    };

    const response = await fetch(`${process.env.REACT_APP_SERVER}/user/get`, options);

    return response.json();
}

// helper function to make string into title case 
export function titleCase(str) {
    const transformedStr = str.toLowerCase().split(' ');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < transformedStr.length; i++) {
        transformedStr[i] = transformedStr[i].charAt(0).toUpperCase() + transformedStr[i].slice(1);
    }
    return transformedStr.join(' ');
}