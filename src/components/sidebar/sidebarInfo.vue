<script setup lang="ts"></script>

<template>
  <div id="sidebarInfo">
    <div id="day">10</div>
    <div id="infoContainer">
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
    <div id="points"></div>
  </div>
</template>

<style scoped lang="scss">
  #sidebarInfo {
    display: flex;
    gap: 8px;

    #day,
    #points {
      width: 80px;
      aspect-ratio: 1;
      background-color: #efefef;
      border-radius: 8px;
    }

    #infoContainer {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;

      div {
        background-color: #efefef;
        flex-grow: 1;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
