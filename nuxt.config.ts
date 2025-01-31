// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://127.0.0.1:8000'
    }
  },
  modules: ['nuxt-auth-sanctum'],
  sanctum: {
    mode: 'cookie',
    redirectIfAuthenticated: true,
    baseUrl: 'http://localhost:8000/api',
    endpoints: {
      csrf: '/csrf-cookie',
      login: '/login',
      logout: '/logout',
      user: '/user',
    },
    csrf: {
      cookie: 'XSRF-TOKEN',
      header: 'X-XSRF-TOKEN',
    },
    redirect: {
      onLogin: '/home',
      onLogout: '/auth/login',
      keepRequestedRoute: true,
    }
  }
})
