import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apiClient = axios.create({
    baseURL: config.public.portal_api,
    withCredentials: false,
    timeout: 25007
  })
  return {
    provide: {
      portalApiClient: apiClient
    },
  }
})