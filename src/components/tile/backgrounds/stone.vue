<script setup lang="ts">
  import valley_clearing_0 from '@/assets/tiles/stone/valley_clearing_0.png'
  import valley_clearing_1 from '@/assets/tiles/stone/valley_clearing_1.png'
  import valley_clearing_2 from '@/assets/tiles/stone/valley_clearing_2.png'
  import valley_clearing_3 from '@/assets/tiles/stone/valley_clearing_3.png'
  import valley_clearing_4 from '@/assets/tiles/stone/valley_clearing_4.png'
  import valley_clearing_5 from '@/assets/tiles/stone/valley_clearing_5.png'
  import valley_clearing_6 from '@/assets/tiles/stone/valley_clearing_6.png'
  import valley_clearing_7 from '@/assets/tiles/stone/valley_clearing_7.png'
  import valley_clearing_8 from '@/assets/tiles/stone/valley_clearing_8.png'
  import valley_clearing_9 from '@/assets/tiles/stone/valley_clearing_9.png'
  import valley_dense_0 from '@/assets/tiles/stone/valley_dense_0.png'
  import valley_dense_1 from '@/assets/tiles/stone/valley_dense_1.png'
  import valley_dense_2 from '@/assets/tiles/stone/valley_dense_2.png'
  import valley_dense_3 from '@/assets/tiles/stone/valley_dense_3.png'
  import valley_dense_4 from '@/assets/tiles/stone/valley_dense_4.png'
  import valley_dense_5 from '@/assets/tiles/stone/valley_dense_5.png'
  import valley_dense_6 from '@/assets/tiles/stone/valley_dense_6.png'
  import valley_dense_7 from '@/assets/tiles/stone/valley_dense_7.png'
  import valley_dense_8 from '@/assets/tiles/stone/valley_dense_8.png'
  import valley_dense_9 from '@/assets/tiles/stone/valley_dense_9.png'
  import valley_lake_0 from '@/assets/tiles/stone/valley_lake_0.png'
  import valley_lake_1 from '@/assets/tiles/stone/valley_lake_1.png'
  import valley_lake_2 from '@/assets/tiles/stone/valley_lake_2.png'
  import valley_lake_3 from '@/assets/tiles/stone/valley_lake_3.png'
  import valley_lake_4 from '@/assets/tiles/stone/valley_lake_4.png'
  import valley_lake_5 from '@/assets/tiles/stone/valley_lake_5.png'
  import valley_lake_6 from '@/assets/tiles/stone/valley_lake_6.png'
  import valley_lake_7 from '@/assets/tiles/stone/valley_lake_7.png'
  import valley_lake_8 from '@/assets/tiles/stone/valley_lake_8.png'
  import valley_lake_9 from '@/assets/tiles/stone/valley_lake_9.png'

  const stoneTiles = [
    valley_clearing_0,
    valley_clearing_1,
    valley_clearing_2,
    valley_clearing_3,
    valley_clearing_4,
    valley_clearing_5,
    valley_clearing_6,
    valley_clearing_7,
    valley_clearing_8,
    valley_clearing_9,
    valley_dense_0,
    valley_dense_1,
    valley_dense_2,
    valley_dense_3,
    valley_dense_4,
    valley_dense_5,
    valley_dense_6,
    valley_dense_7,
    valley_dense_8,
    valley_dense_9,
    valley_lake_0,
    valley_lake_1,
    valley_lake_2,
    valley_lake_3,
    valley_lake_4,
    valley_lake_5,
    valley_lake_6,
    valley_lake_7,
    valley_lake_8,
    valley_lake_9
  ]

  const getRandomTile = computed(() => {
    return stoneTiles[random(0, stoneTiles.length)]
  })
</script>

<template>
  <img
    class="stone"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .stone {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
