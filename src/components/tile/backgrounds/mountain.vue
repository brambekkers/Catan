<script setup lang="ts">
  import mountain_grassland_0 from '@/assets/tiles/mountain/mountain_grassland_0.png'
  import mountain_grassland_1 from '@/assets/tiles/mountain/mountain_grassland_1.png'
  import mountain_grassland_2 from '@/assets/tiles/mountain/mountain_grassland_2.png'
  import mountain_grassland_3 from '@/assets/tiles/mountain/mountain_grassland_3.png'
  import mountain_grassland_4 from '@/assets/tiles/mountain/mountain_grassland_4.png'
  import mountain_grassland_5 from '@/assets/tiles/mountain/mountain_grassland_5.png'
  import mountain_grassland_6 from '@/assets/tiles/mountain/mountain_grassland_6.png'
  import mountain_grassland_7 from '@/assets/tiles/mountain/mountain_grassland_7.png'
  import mountain_grassland_8 from '@/assets/tiles/mountain/mountain_grassland_8.png'
  import mountain_grassland_9 from '@/assets/tiles/mountain/mountain_grassland_9.png'
  import mountain_hills_0 from '@/assets/tiles/mountain/mountain_hills_0.png'
  import mountain_hills_1 from '@/assets/tiles/mountain/mountain_hills_1.png'
  import mountain_hills_2 from '@/assets/tiles/mountain/mountain_hills_2.png'
  import mountain_hills_3 from '@/assets/tiles/mountain/mountain_hills_3.png'
  import mountain_hills_4 from '@/assets/tiles/mountain/mountain_hills_4.png'
  import mountain_hills_5 from '@/assets/tiles/mountain/mountain_hills_5.png'
  import mountain_hills_6 from '@/assets/tiles/mountain/mountain_hills_6.png'
  import mountain_hills_7 from '@/assets/tiles/mountain/mountain_hills_7.png'
  import mountain_hills_8 from '@/assets/tiles/mountain/mountain_hills_8.png'
  import mountain_hills_9 from '@/assets/tiles/mountain/mountain_hills_9.png'
  import mountain_jungle_forest_0 from '@/assets/tiles/mountain/mountain_jungle_forest_0.png'
  import mountain_jungle_forest_1 from '@/assets/tiles/mountain/mountain_jungle_forest_1.png'
  import mountain_jungle_forest_2 from '@/assets/tiles/mountain/mountain_jungle_forest_2.png'
  import mountain_jungle_forest_3 from '@/assets/tiles/mountain/mountain_jungle_forest_3.png'
  import mountain_jungle_forest_4 from '@/assets/tiles/mountain/mountain_jungle_forest_4.png'
  import mountain_jungle_forest_5 from '@/assets/tiles/mountain/mountain_jungle_forest_5.png'
  import mountain_jungle_forest_6 from '@/assets/tiles/mountain/mountain_jungle_forest_6.png'
  import mountain_jungle_forest_7 from '@/assets/tiles/mountain/mountain_jungle_forest_7.png'
  import mountain_jungle_forest_8 from '@/assets/tiles/mountain/mountain_jungle_forest_8.png'
  import mountain_jungle_forest_9 from '@/assets/tiles/mountain/mountain_jungle_forest_9.png'
  import mountain_meadow_0 from '@/assets/tiles/mountain/mountain_meadow_0.png'
  import mountain_meadow_1 from '@/assets/tiles/mountain/mountain_meadow_1.png'
  import mountain_meadow_2 from '@/assets/tiles/mountain/mountain_meadow_2.png'
  import mountain_meadow_3 from '@/assets/tiles/mountain/mountain_meadow_3.png'
  import mountain_meadow_4 from '@/assets/tiles/mountain/mountain_meadow_4.png'
  import mountain_meadow_5 from '@/assets/tiles/mountain/mountain_meadow_5.png'
  import mountain_meadow_6 from '@/assets/tiles/mountain/mountain_meadow_6.png'
  import mountain_meadow_7 from '@/assets/tiles/mountain/mountain_meadow_7.png'
  import mountain_meadow_8 from '@/assets/tiles/mountain/mountain_meadow_8.png'
  import mountain_meadow_9 from '@/assets/tiles/mountain/mountain_meadow_9.png'

  const mountainTiles = [
    mountain_grassland_0,
    mountain_grassland_1,
    mountain_grassland_2,
    mountain_grassland_3,
    mountain_grassland_4,
    mountain_grassland_5,
    mountain_grassland_6,
    mountain_grassland_7,
    mountain_grassland_8,
    mountain_grassland_9,
    mountain_hills_0,
    mountain_hills_1,
    mountain_hills_2,
    mountain_hills_3,
    mountain_hills_4,
    mountain_hills_5,
    mountain_hills_6,
    mountain_hills_7,
    mountain_hills_8,
    mountain_hills_9,
    mountain_meadow_0,
    mountain_meadow_1,
    mountain_meadow_2,
    mountain_meadow_3,
    mountain_meadow_4,
    mountain_meadow_5,
    mountain_meadow_6,
    mountain_meadow_7,
    mountain_meadow_8,
    mountain_meadow_9,
    mountain_jungle_forest_0,
    mountain_jungle_forest_1,
    mountain_jungle_forest_2,
    mountain_jungle_forest_3,
    mountain_jungle_forest_4,
    mountain_jungle_forest_5,
    mountain_jungle_forest_6,
    mountain_jungle_forest_7,
    mountain_jungle_forest_8,
    mountain_jungle_forest_9
  ]

  const getRandomTile = computed(() => {
    return mountainTiles[random(0, mountainTiles.length)]
  })
</script>

<template>
  <img
    class="mountain"
    :src="getRandomTile" />
</template>

<style lang="scss" scoped>
  .mountain {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
