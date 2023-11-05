<script setup lang="ts">
  const { sidebarWidth } = storeToRefs(useLayoutStore())

  const sidebarStyle = computed(() => {
    return {
      width: `${sidebarWidth.value}px`,
      minWidth: `${sidebarWidth.value}px`
    }
  })
</script>

<template>
  <nav
    id="sidebar"
    :style="sidebarStyle">
    <SidebarInfo />
    <SidebarButtons />
    <SidebarMain />
    <SidebarMessage />
  </nav>
</template>

<style scoped>
  #sidebar {
    position: relative;
    z-index: 20;
    height: 100vh;
    background-color: #dcb95f;
    border-left: 15px solid #161616;

    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
</style>
