// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head:{
      title: 'Nuxt demo',
      meta: [
        { name: 'description', content: 'Everything about nuxt 3' }
      ],
      link : [
        {rel :'stylesheet', href : ''}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/main.scss" as *;'
        }
      }
    }
  }

})
