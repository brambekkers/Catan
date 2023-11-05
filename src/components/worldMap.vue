<script setup lang="ts">
  const { hexGrid, worldSize, corners, edges } = storeToRefs(useWorldStore())
  const { mapScale, windowWidth, windowHeight, sidebarWidth } = storeToRefs(useLayoutStore())

  const zoom = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      const newVal = mapScale.value.scale + mapScale.value.speed
      if (newVal >= mapScale.value.maxZoom) {
        mapScale.value.scale = mapScale.value.maxZoom
        return
      }
      mapScale.value.scale = newVal

      // Change zoom
    } else {
      const newVal = mapScale.value.scale - mapScale.value.speed
      if (newVal <= mapScale.value.minZoom) {
        mapScale.value.scale = mapScale.value.minZoom
        return
      }
      mapScale.value.scale = newVal
    }
  }

  const map = ref(null)
  const container = ref(null)
  const { style } = useDraggable(map, {
    preventDefault: true,
    onMove: (el) => {
      const { width, height } = useElementBounding(map)
      const w = width.value + sidebarWidth.value
      if (el.x > 0) {
        el.x = 0
      }
      if (-(w - windowWidth.value) > el.x) {
        el.x = -(w - windowWidth.value)
      }
      if (el.y > 0) {
        el.y = 0
      }
      if (-(height.value - windowHeight.value) > el.y) {
        el.y = -(height.value - windowHeight.value)
      }
    }
  })

  const mapSize = computed(() => {
    return {
      width: `${worldSize.value.x}px`,
      height: `${worldSize.value.y}px`
    }
  })
  const mapStyle = computed(() => {
    return {
      scale: mapScale.value.scale,
      ...mapSize.value
    }
  })

  onMounted(() => {
    useLayoutStore().setMaxScale()
    document.addEventListener('wheel', zoom)
  })
</script>

<template>
  <main
    class="game-container"
    ref="container">
    <div
      id="map"
      ref="map"
      :style="[mapStyle, style]">
      <template v-for="row of hexGrid">
        <Tile
          v-for="tile of row"
          :x="tile.x"
          :y="tile.y"
          :size="tile.size"
          :type="tile.type"
          :number="tile.number" />
      </template>
      <Edge
        v-for="(edge, i) of edges"
        :key="i"
        :id="i"
        :edge="edge" />
      <Corner
        v-for="(corner, i) of corners"
        :key="i"
        :id="i"
        :corner="corner" />
    </div>
  </main>
</template>

<style scoped lang="scss">
  .game-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: red;

    #map {
      position: fixed;
      cursor: pointer;
      transform-origin: top left;
      background-color: #889954;
      border: solid blue 2px;
      touch-action: none;
    }
  }
</style>
