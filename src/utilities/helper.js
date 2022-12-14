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

// function to create new pet
export async function createNewPetHelper(payload, token) {
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    const response = axios.post(`${process.env.REACT_APP_SERVER}/pet/create`, payload, config)
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

// function to fetch pet
export async function fetchPetsData(token) {
    const options = {
        method: 'GET',
        headers: {
            'x-auth-token': token
        }
    };

    const response = await fetch(`${process.env.REACT_APP_SERVER}/pet/get-all`, options);

    return response.json();
}


// function to delete pet using pet Id
export async function deletePet(petId, token) {
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    const response = axios.delete(`${process.env.REACT_APP_SERVER}/pet/delete/${petId}`, config)
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

// function to put pet for adoption
export async function putPetOnAdoption(petId, token) {
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    const response = axios.post(`${process.env.REACT_APP_SERVER}/adoption/put-pet-on-adoption/${petId}`, {}, config)
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

// function to remove pet from adoption
export async function removePetFromAdoption(petId, token) {
    const config = {
        headers: {
            'x-auth-token': token
        }
    };

    const response = axios.delete(`${process.env.REACT_APP_SERVER}/adoption/delete/${petId}`, config)
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

// function to fetch adoption history
export async function fetchAdoptionHistory(token) {
    const options = {
        method: 'GET',
        headers: {
            'x-auth-token': token
        }
    };

    const response = await fetch(`${process.env.REACT_APP_SERVER}/adoption/record`, options);

    return response.json();
}