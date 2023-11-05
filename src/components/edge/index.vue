<script setup lang="ts">
  import { Edge } from '../../types/World'

  const props = defineProps<{
    edge: Edge
    id: number
  }>()

  const edgeStyle = computed(() => {
    return {
      top: `${props.edge.y1 - 3}px`,
      left: `${props.edge.x1 - 10}px`,
      rotate: `${props.edge.angle}deg`,
      height: `${props.edge.hexSize / 2.37}px`,
      backgroundColor: `${props.edge.color || 'white'}`
    }
  })
  const playerStore = usePlayerStore()

  const buildRoad = () => {
    console.log(props.id)
    console.log('build road')
    playerStore.build(props.id, 'road')
  }
</script>

<template>
  <div
    class="edge"
    :style="edgeStyle"
    @click="buildRoad" />
</template>

<style scoped lang="scss">
  .edge {
    position: absolute;
    z-index: 20;
    top: 0;
    left: -5px;
    width: 20px;
    transform-origin: top center;
    transform: translate(-0%, -0%);
  }
</style>
