/**
 * helper functions
 */

import axios from "axios"
import CONFIGS from "../config/config";

// function to make login request
export async function loginUser(email, password) {
    const response = await axios.post(`${CONFIGS.API_URL}/login`, {
        email,
        password
    })

    return response.data;
}

export function signupUser() {
    return "Signup"
}