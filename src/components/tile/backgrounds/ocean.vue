<script setup lang="ts">
  import ocean_rocky_0 from '@/assets/tiles/ocean/ocean_rocky_0.png'
  import ocean_rocky_1 from '@/assets/tiles/ocean/ocean_rocky_1.png'
  import ocean_rocky_2 from '@/assets/tiles/ocean/ocean_rocky_2.png'
  import ocean_rocky_3 from '@/assets/tiles/ocean/ocean_rocky_3.png'
  import ocean_rocky_4 from '@/assets/tiles/ocean/ocean_rocky_4.png'
  import ocean_rocky_5 from '@/assets/tiles/ocean/ocean_rocky_5.png'
  import ocean_rocky_6 from '@/assets/tiles/ocean/ocean_rocky_6.png'
  import ocean_rocky_7 from '@/assets/tiles/ocean/ocean_rocky_7.png'
  import ocean_rocky_8 from '@/assets/tiles/ocean/ocean_rocky_8.png'
  import ocean_rocky_9 from '@/assets/tiles/ocean/ocean_rocky_9.png'
  import ocean_big_0 from '@/assets/tiles/ocean/ocean_big_0.png'
  import ocean_big_1 from '@/assets/tiles/ocean/ocean_big_1.png'
  import ocean_big_2 from '@/assets/tiles/ocean/ocean_big_2.png'
  import ocean_big_3 from '@/assets/tiles/ocean/ocean_big_3.png'
  import ocean_big_4 from '@/assets/tiles/ocean/ocean_big_4.png'
  import ocean_big_5 from '@/assets/tiles/ocean/ocean_big_5.png'
  import ocean_big_6 from '@/assets/tiles/ocean/ocean_big_6.png'
  import ocean_big_7 from '@/assets/tiles/ocean/ocean_big_7.png'
  import ocean_big_8 from '@/assets/tiles/ocean/ocean_big_8.png'
  import ocean_big_9 from '@/assets/tiles/ocean/ocean_big_9.png'
  import ocean_small_0 from '@/assets/tiles/ocean/ocean_small_0.png'
  import ocean_small_1 from '@/assets/tiles/ocean/ocean_small_1.png'
  import ocean_small_2 from '@/assets/tiles/ocean/ocean_small_2.png'
  import ocean_small_3 from '@/assets/tiles/ocean/ocean_small_3.png'
  import ocean_small_4 from '@/assets/tiles/ocean/ocean_small_4.png'
  import ocean_small_5 from '@/assets/tiles/ocean/ocean_small_5.png'
  import ocean_small_6 from '@/assets/tiles/ocean/ocean_small_6.png'
  import ocean_small_7 from '@/assets/tiles/ocean/ocean_small_7.png'
  import ocean_small_8 from '@/assets/tiles/ocean/ocean_small_8.png'
  import ocean_small_9 from '@/assets/tiles/ocean/ocean_small_9.png'

  const oceanTiles = [
    ocean_rocky_0,
    ocean_rocky_1,
    ocean_rocky_2,
    ocean_rocky_3,
    ocean_rocky_4,
    ocean_rocky_5,
    ocean_rocky_6,
    ocean_rocky_7,
    ocean_rocky_8,
    ocean_rocky_9,
    ocean_big_0,
    ocean_big_1,
    ocean_big_2,
    ocean_big_3,
    ocean_big_4,
    ocean_big_5,
    ocean_big_6,
    ocean_big_7,
    ocean_big_8,
    ocean_big_9,
    ocean_small_0,
    ocean_small_1,
    ocean_small_2,
    ocean_small_3,
    ocean_small_4,
    ocean_small_5,
    ocean_small_6,
    ocean_small_7,
    ocean_small_8,
    ocean_small_9
  ]

  const getRandomTile = computed(() => {
    return oceanTiles[random(0, oceanTiles.length)]
  })
</script>

<template>
  <img
    class="ocean"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .ocean {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
