<template>
  <section>
    <div class="container">
      <div class="make"></div>
      <div class="jape"></div>
      <div class="jussi"></div>
    </div>
  </section>
</template>


<style scoped>
html,
body {
  margin: 0;
}
.container {
  display: grid;

  border-radius: 3px;
  width: 90%;
  margin: auto;
  height: 20rem;
  margin: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'make jape jussi';
  column-gap: 2rem;
}

.make {
  grid-area: make;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 20rem;
  background-image: url(https://cdn1.imggmi.com/uploads/2019/5/14/a10f2a4f63155e3b191188f02bd983ae-full.jpg);
}

.jape {
  grid-area: jape;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 20rem;
  background-image: url(https://cdn1.imggmi.com/uploads/2019/5/14/c00fa49b9268e04334d21e586a37889d-full.jpg);
}

.jussi {
  grid-area: jussi;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 20rem;
  background-image: url(https://cdn1.imggmi.com/uploads/2019/5/14/b992742fda41747d60758e70ef36e60a-full.jpg);
}
</style>
