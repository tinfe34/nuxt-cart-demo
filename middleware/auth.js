
import { isAuthenticated } from '@/utils'

export default defineNuxtRouteMiddleware((to, from) => {
  if (!isAuthenticated() && to.path !== '/login') return navigateTo('/login')

  if (isAuthenticated() && to.path === '/login') return navigateTo('/')

  navigateTo()
})
