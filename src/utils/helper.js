/**
 * helper functions for components
 */

// function to login user
export async function loginUser(credentials) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    return response.json();
}

// function to signup user
export async function signupUser(credentials) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    return response.json();
}

// function to get client machine information
export function getClientMachineInformation() {
    return {
        browser: "chrome"
    }
}


// function to convert text in title case
export function titleCase(text) {
    const result = text.charAt(0).toUpperCase() + text.substring(1,);

    return result;
}

// function to get user data using user id
export async function getUserData(userId, token) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/getUserById?userId=${userId}`, {
        method: 'GET',
        headers: {
            'x-auth-token': token
        }
    });

    return response.json();
}

// function to get pet data of user
export async function getPetData(userId, token) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/pet/getAll/${userId}`, {
        method: 'GET',
        headers: {
            'x-auth-token': token
        }
    });

    return response.json();
}