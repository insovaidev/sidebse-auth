// plugins/bootstrap.client.ts
import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Bootstrap);
});
