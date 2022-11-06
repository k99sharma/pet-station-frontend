/**
 * helper functions
 */

import axios from "axios"
import CONFIGS from "../config/config";

// function to make login request
export async function loginUser(email, password) {
    let result;

    await axios.post(`${CONFIGS.API_URL}/login`, {
        email,
        password
    })
        .then(res => { result = res.data })
        .catch(err => {
            if (err.response) {
                result = err.response.data;
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
        })

    return result;
}

// function to make signup request
export async function signupUser(data) {
    const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        password: data.password,
        street: data.street,
        region: data.region,
        country: data.country,
        postalZip: data.postalZip
    }

    let result;

    await axios.post(`${CONFIGS.API_URL}/signup`, payload)
        .then(res => { result = res.data })
        .catch(err => {
            if (err.response) {
                result = err.response.data;
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', (err.message))
            }
        })

    return result;
}


// function to fetch user data
export async function fetchUserData(email, token) {
    let result;

    await axios.get(`${CONFIGS.API_URL}/user/getUserById?userId=${email}`, {
        'x-auth-token': token
    })
        .then(res => { result = res.data })
        .catch(err => {
            if (err.response) {
                result = err.response.data;
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', (err.message))
            }
        })

    return result;
}