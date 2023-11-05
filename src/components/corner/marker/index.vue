<script setup lang="ts">
  import marker_house from '@/assets/marker/marker_house.png'
  import { Edge } from '@/types/World'

  // Composables
  const props = defineProps<{
    id: number
    x: number
    y: number
    edges: Edge[]
    type: string
    hexSize: number
    buildingDisabled: boolean
  }>()

  // store
  const playerStore = usePlayerStore()
  const { gameState } = storeToRefs(useGameStore())
  const { currentPlayer } = storeToRefs(usePlayerStore())

  // Computed
  const showMarker = computed(() => {
    const playerHasNoHouses = currentPlayer.value.locations.length === 0
    const hasEdgeFromPlayer = props.edges.some((edge) => edge.owner === currentPlayer.value.id)
    return gameState.value === 'build' && !props.buildingDisabled && (playerHasNoHouses || hasEdgeFromPlayer)
  })

  const positionStyle = computed(() => {
    return {
      top: `${props.y}px`,
      left: `${props.x}px`
    }
  })

  const markerStyle = computed(() => {
    return {
      width: `${props.hexSize / 2}px`
    }
  })

  const clickMarker = () => {
    playerStore.build(props.id, 'house')
  }
</script>

<template>
  <div
    v-if="showMarker"
    class="marker-container"
    :style="[positionStyle]">
    <div
      :style="[markerStyle]"
      class="marker-spot"
      @click="clickMarker" />

    <img
      class="marker"
      :src="marker_house"
      :style="[markerStyle]" />
  </div>
</template>

<style lang="scss" scoped>
  .marker-container {
    position: absolute;
    z-index: 40;
    transform: translate(-50%, -50%);
    pointer-events: none;

    .marker-spot {
      position: absolute;
      pointer-events: auto;
      aspect-ratio: 1;
      scale: 0.2;
      border-radius: 50%;

      background-color: rgba(255, 255, 255);
    }

    .marker {
      transition: all 0.2s ease-in-out;
      transform-origin: center;
      animation: bounce 2s infinite;
      pointer-events: none;

      &:hover {
        cursor: pointer;
        scale: 1.4;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-30%);
        }
        60% {
          transform: translateY(-15%);
        }
      }
    }
  }
</style>
