<script setup lang="ts">
  import oak_forest_clearing_0 from '@/assets/tiles/forest/oak_forest_clearing_0.png'
  import oak_forest_clearing_1 from '@/assets/tiles/forest/oak_forest_clearing_1.png'
  import oak_forest_clearing_2 from '@/assets/tiles/forest/oak_forest_clearing_2.png'
  import oak_forest_clearing_3 from '@/assets/tiles/forest/oak_forest_clearing_3.png'
  import oak_forest_clearing_4 from '@/assets/tiles/forest/oak_forest_clearing_4.png'
  import oak_forest_clearing_5 from '@/assets/tiles/forest/oak_forest_clearing_5.png'
  import oak_forest_clearing_6 from '@/assets/tiles/forest/oak_forest_clearing_6.png'
  import oak_forest_clearing_7 from '@/assets/tiles/forest/oak_forest_clearing_7.png'
  import oak_forest_clearing_8 from '@/assets/tiles/forest/oak_forest_clearing_8.png'
  import oak_forest_clearing_9 from '@/assets/tiles/forest/oak_forest_clearing_9.png'
  import oak_forest_dense_0 from '@/assets/tiles/forest/oak_forest_dense_0.png'
  import oak_forest_dense_1 from '@/assets/tiles/forest/oak_forest_dense_1.png'
  import oak_forest_dense_2 from '@/assets/tiles/forest/oak_forest_dense_2.png'
  import oak_forest_dense_3 from '@/assets/tiles/forest/oak_forest_dense_3.png'
  import oak_forest_dense_4 from '@/assets/tiles/forest/oak_forest_dense_4.png'
  import oak_forest_dense_5 from '@/assets/tiles/forest/oak_forest_dense_5.png'
  import oak_forest_dense_6 from '@/assets/tiles/forest/oak_forest_dense_6.png'
  import oak_forest_dense_7 from '@/assets/tiles/forest/oak_forest_dense_7.png'
  import oak_forest_dense_8 from '@/assets/tiles/forest/oak_forest_dense_8.png'
  import oak_forest_dense_9 from '@/assets/tiles/forest/oak_forest_dense_9.png'
  import oak_forest_sparse_0 from '@/assets/tiles/forest/oak_forest_sparse_0.png'
  import oak_forest_sparse_1 from '@/assets/tiles/forest/oak_forest_sparse_1.png'
  import oak_forest_sparse_2 from '@/assets/tiles/forest/oak_forest_sparse_2.png'
  import oak_forest_sparse_3 from '@/assets/tiles/forest/oak_forest_sparse_3.png'
  import oak_forest_sparse_4 from '@/assets/tiles/forest/oak_forest_sparse_4.png'
  import oak_forest_sparse_5 from '@/assets/tiles/forest/oak_forest_sparse_5.png'
  import oak_forest_sparse_6 from '@/assets/tiles/forest/oak_forest_sparse_6.png'
  import oak_forest_sparse_7 from '@/assets/tiles/forest/oak_forest_sparse_7.png'
  import oak_forest_sparse_8 from '@/assets/tiles/forest/oak_forest_sparse_8.png'
  import oak_forest_sparse_9 from '@/assets/tiles/forest/oak_forest_sparse_9.png'
  import oak_forest_lake_0 from '@/assets/tiles/forest/oak_forest_lake_0.png'
  import oak_forest_lake_1 from '@/assets/tiles/forest/oak_forest_lake_1.png'
  import oak_forest_lake_2 from '@/assets/tiles/forest/oak_forest_lake_2.png'
  import oak_forest_lake_3 from '@/assets/tiles/forest/oak_forest_lake_3.png'
  import oak_forest_lake_4 from '@/assets/tiles/forest/oak_forest_lake_4.png'
  import oak_forest_lake_5 from '@/assets/tiles/forest/oak_forest_lake_5.png'
  import oak_forest_lake_6 from '@/assets/tiles/forest/oak_forest_lake_6.png'
  import oak_forest_lake_7 from '@/assets/tiles/forest/oak_forest_lake_7.png'
  import oak_forest_lake_8 from '@/assets/tiles/forest/oak_forest_lake_8.png'
  import oak_forest_lake_9 from '@/assets/tiles/forest/oak_forest_lake_9.png'

  const forestTiles = [
    oak_forest_clearing_0,
    oak_forest_clearing_1,
    oak_forest_clearing_2,
    oak_forest_clearing_3,
    oak_forest_clearing_4,
    oak_forest_clearing_5,
    oak_forest_clearing_6,
    oak_forest_clearing_7,
    oak_forest_clearing_8,
    oak_forest_clearing_9,
    oak_forest_dense_0,
    oak_forest_dense_1,
    oak_forest_dense_2,
    oak_forest_dense_3,
    oak_forest_dense_4,
    oak_forest_dense_5,
    oak_forest_dense_6,
    oak_forest_dense_7,
    oak_forest_dense_8,
    oak_forest_dense_9,
    oak_forest_sparse_0,
    oak_forest_sparse_1,
    oak_forest_sparse_2,
    oak_forest_sparse_3,
    oak_forest_sparse_4,
    oak_forest_sparse_5,
    oak_forest_sparse_6,
    oak_forest_sparse_7,
    oak_forest_sparse_8,
    oak_forest_sparse_9,
    oak_forest_lake_0,
    oak_forest_lake_1,
    oak_forest_lake_2,
    oak_forest_lake_3,
    oak_forest_lake_4,
    oak_forest_lake_5,
    oak_forest_lake_6,
    oak_forest_lake_7,
    oak_forest_lake_8,
    oak_forest_lake_9
  ]

  const getRandomTile = computed(() => {
    return forestTiles[random(0, forestTiles.length)]
  })
</script>

<template>
  <img
    class="forest"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .forest {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
