<script setup lang="ts">
  import city_clearing_0 from '@/assets/tiles/city/city_clearing_0.png'
  import city_clearing_1 from '@/assets/tiles/city/city_clearing_1.png'
  import city_clearing_2 from '@/assets/tiles/city/city_clearing_2.png'
  import city_clearing_3 from '@/assets/tiles/city/city_clearing_3.png'
  import city_clearing_4 from '@/assets/tiles/city/city_clearing_4.png'
  import city_clearing_5 from '@/assets/tiles/city/city_clearing_5.png'
  import city_clearing_6 from '@/assets/tiles/city/city_clearing_6.png'
  import city_clearing_7 from '@/assets/tiles/city/city_clearing_7.png'
  import city_clearing_8 from '@/assets/tiles/city/city_clearing_8.png'
  import city_clearing_9 from '@/assets/tiles/city/city_clearing_9.png'
  import city_dense_0 from '@/assets/tiles/city/city_dense_0.png'
  import city_dense_1 from '@/assets/tiles/city/city_dense_1.png'
  import city_dense_2 from '@/assets/tiles/city/city_dense_2.png'
  import city_dense_3 from '@/assets/tiles/city/city_dense_3.png'
  import city_dense_4 from '@/assets/tiles/city/city_dense_4.png'
  import city_dense_5 from '@/assets/tiles/city/city_dense_5.png'
  import city_dense_6 from '@/assets/tiles/city/city_dense_6.png'
  import city_dense_7 from '@/assets/tiles/city/city_dense_7.png'
  import city_dense_8 from '@/assets/tiles/city/city_dense_8.png'
  import city_dense_9 from '@/assets/tiles/city/city_dense_9.png'

  const cityTiles = [
    city_clearing_0,
    city_clearing_1,
    city_clearing_2,
    city_clearing_3,
    city_clearing_4,
    city_clearing_5,
    city_clearing_6,
    city_clearing_7,
    city_clearing_8,
    city_clearing_9,
    city_dense_0,
    city_dense_1,
    city_dense_2,
    city_dense_3,
    city_dense_4,
    city_dense_5,
    city_dense_6,
    city_dense_7,
    city_dense_8,
    city_dense_9
  ]

  const getRandomTile = computed(() => {
    return cityTiles[random(0, cityTiles.length)]
  })
</script>

<template>
  <img
    class="city"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .city {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
