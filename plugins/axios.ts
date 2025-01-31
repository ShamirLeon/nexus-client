import axios from 'axios'

export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        withCredentials: true,
    })

    return {
        provide: {
            axios: instance
        }
    }
})