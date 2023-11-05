<script setup lang="ts">
  const props = defineProps<{
    number: number
    size: number
  }>()

  const numberStyle = computed(() => {
    return {
      fontSize: `${props.size / 2}px`,
      width: `${props.size}px`,
      height: `${props.size}px`
    }
  })
</script>

<template>
  <div
    class="number"
    :style="numberStyle">
    {{ number }}
  </div>
</template>

<style lang="scss" scoped>
  .number {
    position: absolute;
    background-color: #fefefe;
    border-radius: 50%;
    border: solid #161616 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // display
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
