export const useLogStore = defineStore('log store', () => {
  interface Log {
    type: string
    message: string
    time: Date
  }

  const logs = ref<Log[]>([])

  const addLog = (type: string, message: string) => {
    logs.value.push({ type, message, time: new Date() })
  }

  return { logs, addLog }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLogStore, import.meta.hot))
}
