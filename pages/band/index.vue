<template>
  <div class="container">
    <div class="make"></div>
    <div class="jape"></div>
    <div class="jussi"></div>
  </div>
</template>


<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}
.container {
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'make jape jussi';
}

.make {
  grid-area: make;
  min-height: 100%;
  background: url(https://images.unsplash.com/photo-1557753478-25c7d9f05bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80);
}

.jape {
  grid-area: jape;
  min-height: 100%;
  background: red;
}

.jussi {
  grid-area: jussi;
  min-height: 100%;
}
</style>
