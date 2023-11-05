<script setup lang="ts">
  const props = defineProps<{
    size: number
    x: number
    y: number
    type: string
    number: number
  }>()

  const tileStyle = computed(() => {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
      left: `${props.x}px`,
      top: `${props.y}px`
    }
  })
</script>

<template>
  <div
    class="tile"
    :style="tileStyle">
    <Grassland v-if="type === 'sheep'" />
    <Wheat v-if="type === 'wheat'" />
    <City v-if="type === 'city'" />
    <Forest v-if="type === 'wood'" />
    <Mountain v-if="type === 'coal'" />
    <Stone v-if="type === 'stone'" />
    <Ocean v-if="type === 'ocean'" />
    <Number
      v-if="type !== 'ocean' && type !== 'city'"
      :number="number"
      :size="size / 5" />
  </div>
</template>

<style lang="scss" scoped>
  .tile {
    position: absolute;
    pointer-events: none;
  }
</style>
