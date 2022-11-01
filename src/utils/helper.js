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