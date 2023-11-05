<script setup lang="ts">
  const { logs } = storeToRefs(useLogStore())

  const logsReverse = computed(() => {
    return logs.value.slice().reverse()
  })
</script>

<template>
  <div id="sidebarMessage">
    <div
      v-for="(log, index) in logsReverse"
      :key="index"
      class="log">
      {{ log.type }} -
      {{ log.message }}
    </div>
  </div>
</template>

<style scoped>
  #sidebarMessage {
    background-color: #ede2c4;
    flex-grow: 1;
    border-radius: 8px;
    overflow: hidden;
    padding: 8px;

    .log {
      display: flex;
    }
  }
</style>
