export default defineNuxtConfig({
  runtimeConfig: {
    authOrigin: 'http://localhost:3000',
  },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
      baseURL: 'http://localhost:3000/api/auth',
      provider: {
          type: 'authjs',
          trustHost: false,
          defaultProvider: 'github',
          addDefaultCallbackUrl: true
      },  
  }
})