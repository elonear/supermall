<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0rem;
    right: 0rem;
    left:0rem;

  }

</style>
