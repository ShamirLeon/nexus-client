import axios from 'axios'

export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    instance.interceptors.request.use(
        (config) => {
            const token = useCookie('auth_token') // Ejemplo con cookies
            if (token.value) {
              config.headers.Authorization = `Bearer ${token.value}`
            }
            return config
          },
          (error) => Promise.reject(error) 
    )

    return {
        provide: {
            axios: instance
        }
    }
})