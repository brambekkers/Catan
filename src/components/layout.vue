<script setup lang="ts"></script>

<template>
  <div id="layout">
    <WorldMap />
    <Sidebar />
  </div>
</template>

<style scoped>
  #layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #161616;
    color: #fefefe;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    overflow: hidden;
  }
</style>
