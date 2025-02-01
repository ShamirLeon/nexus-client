export default defineNuxtRouteMiddleware((to) => { 
    const { isAuthenticated } = useSanctumAuth() ;

    console.log('isAuthenticated', isAuthenticated)

    if (!isAuthenticated && to.path !== '/auth/login') {
        return navigateTo('/auth/login');
    }
})