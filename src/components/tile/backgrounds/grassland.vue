<script setup lang="ts">
  import grassland_clearing_0 from '@/assets/tiles/grassland/grassland_clearing_0.png'
  import grassland_clearing_1 from '@/assets/tiles/grassland/grassland_clearing_1.png'
  import grassland_clearing_2 from '@/assets/tiles/grassland/grassland_clearing_2.png'
  import grassland_clearing_3 from '@/assets/tiles/grassland/grassland_clearing_3.png'
  import grassland_clearing_4 from '@/assets/tiles/grassland/grassland_clearing_4.png'
  import grassland_clearing_5 from '@/assets/tiles/grassland/grassland_clearing_5.png'
  import grassland_clearing_6 from '@/assets/tiles/grassland/grassland_clearing_6.png'
  import grassland_clearing_7 from '@/assets/tiles/grassland/grassland_clearing_7.png'
  import grassland_clearing_8 from '@/assets/tiles/grassland/grassland_clearing_8.png'
  import grassland_clearing_9 from '@/assets/tiles/grassland/grassland_clearing_9.png'
  import grassland_dense_0 from '@/assets/tiles/grassland/grassland_dense_0.png'
  import grassland_dense_1 from '@/assets/tiles/grassland/grassland_dense_1.png'
  import grassland_dense_2 from '@/assets/tiles/grassland/grassland_dense_2.png'
  import grassland_dense_3 from '@/assets/tiles/grassland/grassland_dense_3.png'
  import grassland_dense_4 from '@/assets/tiles/grassland/grassland_dense_4.png'
  import grassland_dense_5 from '@/assets/tiles/grassland/grassland_dense_5.png'
  import grassland_dense_6 from '@/assets/tiles/grassland/grassland_dense_6.png'
  import grassland_dense_7 from '@/assets/tiles/grassland/grassland_dense_7.png'
  import grassland_dense_8 from '@/assets/tiles/grassland/grassland_dense_8.png'
  import grassland_dense_9 from '@/assets/tiles/grassland/grassland_dense_9.png'
  import grassland_sparse_0 from '@/assets/tiles/grassland/grassland_sparse_0.png'
  import grassland_sparse_1 from '@/assets/tiles/grassland/grassland_sparse_1.png'
  import grassland_sparse_2 from '@/assets/tiles/grassland/grassland_sparse_2.png'
  import grassland_sparse_3 from '@/assets/tiles/grassland/grassland_sparse_3.png'
  import grassland_sparse_4 from '@/assets/tiles/grassland/grassland_sparse_4.png'
  import grassland_sparse_5 from '@/assets/tiles/grassland/grassland_sparse_5.png'
  import grassland_sparse_6 from '@/assets/tiles/grassland/grassland_sparse_6.png'
  import grassland_sparse_7 from '@/assets/tiles/grassland/grassland_sparse_7.png'
  import grassland_sparse_8 from '@/assets/tiles/grassland/grassland_sparse_8.png'
  import grassland_sparse_9 from '@/assets/tiles/grassland/grassland_sparse_9.png'
  import hills_clearing_0 from '@/assets/tiles/grassland/hills_clearing_0.png'
  import hills_clearing_1 from '@/assets/tiles/grassland/hills_clearing_1.png'
  import hills_clearing_2 from '@/assets/tiles/grassland/hills_clearing_2.png'
  import hills_clearing_3 from '@/assets/tiles/grassland/hills_clearing_3.png'
  import hills_clearing_4 from '@/assets/tiles/grassland/hills_clearing_4.png'
  import hills_clearing_5 from '@/assets/tiles/grassland/hills_clearing_5.png'
  import hills_clearing_6 from '@/assets/tiles/grassland/hills_clearing_6.png'
  import hills_clearing_7 from '@/assets/tiles/grassland/hills_clearing_7.png'
  import hills_clearing_8 from '@/assets/tiles/grassland/hills_clearing_8.png'
  import hills_clearing_9 from '@/assets/tiles/grassland/hills_clearing_9.png'
  import hills_dense_0 from '@/assets/tiles/grassland/hills_dense_0.png'
  import hills_dense_1 from '@/assets/tiles/grassland/hills_dense_1.png'
  import hills_dense_2 from '@/assets/tiles/grassland/hills_dense_2.png'
  import hills_dense_3 from '@/assets/tiles/grassland/hills_dense_3.png'
  import hills_dense_4 from '@/assets/tiles/grassland/hills_dense_4.png'
  import hills_dense_5 from '@/assets/tiles/grassland/hills_dense_5.png'
  import hills_dense_6 from '@/assets/tiles/grassland/hills_dense_6.png'
  import hills_dense_7 from '@/assets/tiles/grassland/hills_dense_7.png'
  import hills_dense_8 from '@/assets/tiles/grassland/hills_dense_8.png'
  import hills_dense_9 from '@/assets/tiles/grassland/hills_dense_9.png'

  const grasslandTiles = [
    grassland_clearing_0,
    grassland_clearing_1,
    grassland_clearing_2,
    grassland_clearing_3,
    grassland_clearing_4,
    grassland_clearing_5,
    grassland_clearing_6,
    grassland_clearing_7,
    grassland_clearing_8,
    grassland_clearing_9,
    grassland_dense_0,
    grassland_dense_1,
    grassland_dense_2,
    grassland_dense_3,
    grassland_dense_4,
    grassland_dense_5,
    grassland_dense_6,
    grassland_dense_7,
    grassland_dense_8,
    grassland_dense_9,
    grassland_sparse_0,
    grassland_sparse_1,
    grassland_sparse_2,
    grassland_sparse_3,
    grassland_sparse_4,
    grassland_sparse_5,
    grassland_sparse_6,
    grassland_sparse_7,
    grassland_sparse_8,
    grassland_sparse_9,
    hills_clearing_0,
    hills_clearing_1,
    hills_clearing_2,
    hills_clearing_3,
    hills_clearing_4,
    hills_clearing_5,
    hills_clearing_6,
    hills_clearing_7,
    hills_clearing_8,
    hills_clearing_9,
    hills_dense_0,
    hills_dense_1,
    hills_dense_2,
    hills_dense_3,
    hills_dense_4,
    hills_dense_5,
    hills_dense_6,
    hills_dense_7,
    hills_dense_8,
    hills_dense_9
  ]

  const getRandomTile = computed(() => {
    return grasslandTiles[random(0, grasslandTiles.length)]
  })
</script>

<template>
  <img
    class="grass"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .grass {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
