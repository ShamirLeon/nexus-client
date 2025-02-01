export default defineNuxtRouteMiddleware((to) => { 
    const { isAuthenticated } = useSanctumAuth() ;

    if (!isAuthenticated.value && to.path !== '/auth/login' && to.path !== '/auth/register') {
        return navigateTo('/auth/login');
    }
})