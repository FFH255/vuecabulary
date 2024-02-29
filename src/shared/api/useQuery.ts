import { ref, watchEffect } from "vue";

export function useQuery<T, P>(fetcher: (params: P) => Promise<T>) {

  return function query(params: P) {
    const data = ref<T>()
    const isError = ref(false)
    const isLoading = ref(false)
  
    watchEffect( async () => {
      isLoading.value = true
      isError.value = false
  
      try {
        const value = await fetcher(params)
        data.value = value
        isError.value = false
      } catch(e) {
        isError.value = true
        data.value = undefined
      } finally {
        isLoading.value = false
      }
    })

    return { data, isError, isLoading }
  }
}