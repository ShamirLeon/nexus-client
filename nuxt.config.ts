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
  modules: ['nuxt-auth-sanctum', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Rubik: true,
    },
    display: 'swap',
    preconnect: true,
    download: true, 
  },
  sanctum: {
    mode: 'cookie',
    redirectIfAuthenticated: true,
    redirectIfUnauthenticated: true,
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
      onLogin: "/", // Custom route after successful login
      onLogout: "/auth/login", // Custom route after successful logout
      onAuthOnly: "/auth/login", // Redirect to this page if user is not authenticated
      onGuestOnly: "/", // Redirect to this page if user is authenticated
      keepRequestedRoute: true,
    }
    // globalMiddleware: {
    //   enabled: true,
    //   allow404WithoutAuth: false,
    // }
  }
})