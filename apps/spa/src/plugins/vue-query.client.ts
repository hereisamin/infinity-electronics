import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxtApp) => {
  const options: VueQueryPluginOptions = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 5,
          refetchOnWindowFocus: false
        }
      }
    }
  }

  // Install the VueQueryPlugin
  nuxtApp.vueApp.use(VueQueryPlugin, options)
})
