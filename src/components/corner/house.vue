<script setup lang="ts">
  import house_0 from '@/assets/locations/house/house_0.png'
  import house_1 from '@/assets/locations/house/house_1.png'
  import house_2 from '@/assets/locations/house/house_2.png'
  import house_3 from '@/assets/locations/house/house_3.png'
  import house_4 from '@/assets/locations/house/house_4.png'
  import house_5 from '@/assets/locations/house/house_5.png'
  import house_6 from '@/assets/locations/house/house_6.png'
  import house_7 from '@/assets/locations/house/house_7.png'

  const houses = [house_0, house_1, house_2, house_3, house_4, house_5, house_6, house_7]

  const props = defineProps<{
    id: number
    x: number
    y: number
    level: number
    hexSize: number
  }>()

  const positionStyle = computed(() => {
    return {
      top: `${props.y}px`,
      left: `${props.x}px`,
      width: `${props.hexSize / (1 + 1 / (props.level + 1))}px`
    }
  })
</script>

<template>
  <img
    class="house"
    :style="[positionStyle]"
    :src="houses[props.level]" />
</template>

<style lang="scss" scoped>
  .house {
    position: absolute;
    pointer-events: none;
    z-index: 30;
    transform: translate(-50%, -50%);
  }
</style>
