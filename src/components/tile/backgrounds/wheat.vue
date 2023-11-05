<script setup lang="ts">
  import wheat_clearing_0 from '@/assets/tiles/wheat/wheat_clearing_0.png'
  import wheat_clearing_1 from '@/assets/tiles/wheat/wheat_clearing_1.png'
  import wheat_clearing_2 from '@/assets/tiles/wheat/wheat_clearing_2.png'
  import wheat_clearing_3 from '@/assets/tiles/wheat/wheat_clearing_3.png'
  import wheat_clearing_4 from '@/assets/tiles/wheat/wheat_clearing_4.png'
  import wheat_clearing_5 from '@/assets/tiles/wheat/wheat_clearing_5.png'
  import wheat_clearing_6 from '@/assets/tiles/wheat/wheat_clearing_6.png'
  import wheat_clearing_7 from '@/assets/tiles/wheat/wheat_clearing_7.png'
  import wheat_clearing_8 from '@/assets/tiles/wheat/wheat_clearing_8.png'
  import wheat_clearing_9 from '@/assets/tiles/wheat/wheat_clearing_9.png'
  import wheat_dense_0 from '@/assets/tiles/wheat/wheat_dense_0.png'
  import wheat_dense_1 from '@/assets/tiles/wheat/wheat_dense_1.png'
  import wheat_dense_2 from '@/assets/tiles/wheat/wheat_dense_2.png'
  import wheat_dense_3 from '@/assets/tiles/wheat/wheat_dense_3.png'
  import wheat_dense_4 from '@/assets/tiles/wheat/wheat_dense_4.png'
  import wheat_dense_5 from '@/assets/tiles/wheat/wheat_dense_5.png'
  import wheat_dense_6 from '@/assets/tiles/wheat/wheat_dense_6.png'
  import wheat_dense_7 from '@/assets/tiles/wheat/wheat_dense_7.png'
  import wheat_dense_8 from '@/assets/tiles/wheat/wheat_dense_8.png'
  import wheat_dense_9 from '@/assets/tiles/wheat/wheat_dense_9.png'
  import wheat_lake_0 from '@/assets/tiles/wheat/wheat_lake_0.png'
  import wheat_lake_1 from '@/assets/tiles/wheat/wheat_lake_1.png'
  import wheat_lake_2 from '@/assets/tiles/wheat/wheat_lake_2.png'
  import wheat_lake_3 from '@/assets/tiles/wheat/wheat_lake_3.png'
  import wheat_lake_4 from '@/assets/tiles/wheat/wheat_lake_4.png'
  import wheat_lake_5 from '@/assets/tiles/wheat/wheat_lake_5.png'
  import wheat_lake_6 from '@/assets/tiles/wheat/wheat_lake_6.png'
  import wheat_lake_7 from '@/assets/tiles/wheat/wheat_lake_7.png'
  import wheat_lake_8 from '@/assets/tiles/wheat/wheat_lake_8.png'
  import wheat_lake_9 from '@/assets/tiles/wheat/wheat_lake_9.png'
  import wheat_sparse_0 from '@/assets/tiles/wheat/wheat_sparse_0.png'
  import wheat_sparse_1 from '@/assets/tiles/wheat/wheat_sparse_1.png'
  import wheat_sparse_2 from '@/assets/tiles/wheat/wheat_sparse_2.png'
  import wheat_sparse_3 from '@/assets/tiles/wheat/wheat_sparse_3.png'
  import wheat_sparse_4 from '@/assets/tiles/wheat/wheat_sparse_4.png'
  import wheat_sparse_5 from '@/assets/tiles/wheat/wheat_sparse_5.png'
  import wheat_sparse_6 from '@/assets/tiles/wheat/wheat_sparse_6.png'
  import wheat_sparse_7 from '@/assets/tiles/wheat/wheat_sparse_7.png'
  import wheat_sparse_8 from '@/assets/tiles/wheat/wheat_sparse_8.png'
  import wheat_sparse_9 from '@/assets/tiles/wheat/wheat_sparse_9.png'

  const wheatTiles = [
    wheat_clearing_0,
    wheat_clearing_1,
    wheat_clearing_2,
    wheat_clearing_3,
    wheat_clearing_4,
    wheat_clearing_5,
    wheat_clearing_6,
    wheat_clearing_7,
    wheat_clearing_8,
    wheat_clearing_9,
    wheat_dense_0,
    wheat_dense_1,
    wheat_dense_2,
    wheat_dense_3,
    wheat_dense_4,
    wheat_dense_5,
    wheat_dense_6,
    wheat_dense_7,
    wheat_dense_8,
    wheat_dense_9,
    wheat_sparse_0,
    wheat_sparse_1,
    wheat_sparse_2,
    wheat_sparse_3,
    wheat_sparse_4,
    wheat_sparse_5,
    wheat_sparse_6,
    wheat_sparse_7,
    wheat_sparse_8,
    wheat_sparse_9,
    wheat_lake_0,
    wheat_lake_1,
    wheat_lake_2,
    wheat_lake_3,
    wheat_lake_4,
    wheat_lake_5,
    wheat_lake_6,
    wheat_lake_7,
    wheat_lake_8,
    wheat_lake_9
  ]

  const getRandomTile = computed(() => {
    return wheatTiles[random(0, wheatTiles.length)]
  })
</script>

<template>
  <img
    class="wheat"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .wheat {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
