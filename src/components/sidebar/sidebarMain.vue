<script setup lang="ts">
  const { resources } = storeToRefs(usePlayerStore())
  const gameStore = useGameStore()
</script>

<template>
  <div id="sidebarMain">
    <div id="resources">
      <Resource
        v-for="(amount, type) in resources"
        :key="type"
        :type="type"
        :amount="amount" />
    </div>

    <div class="buttons">
      <button
        class="buy-button"
        @click="gameStore.nextGameState()">
        Buy something
      </button>
      <button
        class="next-button"
        @click="gameStore.nextGameState()">
        Next state
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #sidebarMain {
    background-color: #efefef;
    min-height: 50vh;
    border-radius: 8px;
    padding: 8px;

    display: flex;
    flex-direction: column;

    #resources {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 8px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      margin-top: auto;

      button {
        border: none;
        margin-top: 8px;
        padding: 16px;
        font-size: 1.3rem;
        border-radius: 8px;
      }

      .buy-button {
        background-color: #889954;
      }
      .next-button {
        background-color: #ff4245;
      }
    }
  }
</style>
