export const useLayoutStore = defineStore('layout store', () => {
  // Store
  const worldStore = useWorldStore()

  // Composable
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  const sidebarWidth = ref(400)
  const mapScale = ref({
    scale: 1,
    speed: 0.1,
    minZoom: 0.3,
    maxZoom: 3
  })

  const getMapMinZoom = () => {
    const { worldSize } = worldStore
    const factorX = windowWidth.value / worldSize.x
    const factorY = windowHeight.value / worldSize.y
    return factorX > factorY ? factorX : factorY
  }

  const setMaxScale = () => {
    mapScale.value.minZoom = getMapMinZoom()
    mapScale.value.scale = getMapMinZoom()
  }

  return { mapScale, setMaxScale, windowWidth, windowHeight, sidebarWidth }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
