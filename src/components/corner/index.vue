<script setup lang="ts">
  import { Corner } from '../../types/World'

  defineProps<{
    corner: Corner
    id: number
  }>()
</script>

<template>
  <div>
    <House
      v-if="corner.type === 'house'"
      :id="id"
      :x="corner.x"
      :y="corner.y"
      :hexSize="corner.hexSize"
      :level="corner.level" />
    <Marker
      v-if="corner.type === ''"
      type="house"
      :id="id"
      :x="corner.x"
      :y="corner.y"
      :edges="corner.edges"
      :hexSize="corner.hexSize"
      :buildingDisabled="corner.buildingDisabled"
      :level="corner.level" />
  </div>
</template>
