<script setup lang="ts"></script>

<template>
  <div id="sidebarButtons">
    <button @click="">
      <div class="innerButton">x</div>
    </button>
    <button @click="">
      <div class="innerButton">x</div>
    </button>
    <button @click="">
      <div class="innerButton">x</div>
    </button>
    <button @click="">
      <div class="innerButton">x</div>
    </button>
    <button @click="">
      <div class="innerButton">x</div>
    </button>
    <button @click="">
      <div class="innerButton">x</div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  #sidebarButtons {
    display: flex;
    gap: 8px;

    button {
      flex-grow: 1;
      aspect-ratio: 1;
      border: none;
      border-radius: 8px;
      padding: 8px;

      &:hover {
        box-shadow: #858585 4px 4px;
      }

      .innerButton {
        background-color: #889954;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }
    }
  }
</style>
