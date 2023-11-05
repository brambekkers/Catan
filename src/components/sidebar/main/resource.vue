import { transform } from 'typescript';
<template>
  <div class="resource">
    <img
      v-if="type === 'sheep'"
      :src="Sheep"
      class="resource" />
    <img
      v-if="type === 'wheat'"
      :src="Wheat"
      class="resource" />
    <img
      v-if="type === 'wood'"
      :src="Wood"
      class="resource" />
    <img
      v-if="type === 'stone'"
      :src="Stone"
      class="resource" />
    <img
      v-if="type === 'coal'"
      :src="Coal"
      class="resource" />

    <div class="amount">{{ amount }}</div>
  </div>
</template>

<script setup lang="ts">
  import Sheep from '@/assets/resources/sheep.png'
  import Wheat from '@/assets/resources/wheat.png'
  import Wood from '@/assets/resources/wood.png'
  import Stone from '@/assets/resources/stone.png'
  import Coal from '@/assets/resources/coal.png'

  defineProps<{
    type: string
    amount: number
  }>()
</script>

<style lang="scss" scoped>
  .resource {
    position: relative;
    width: 100%;
    aspect-ratio: 1;

    .amount {
      position: absolute;
      bottom: 5%;
      right: 50%;
      width: 40%;
      aspect-ratio: 1;
      transform: translate(50%);
      background-color: #fff;
      border: 0.15rem solid #161616;
      border-radius: 50%;
      padding: 4px;
      font-size: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
