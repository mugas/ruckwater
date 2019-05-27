<template>
  <section>
    <div class="container">
      <img class="image" src="@/assets/ruckwater.jpg">
      <h1 class="title">ruckwater</h1>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  color: whitesmoke;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 8.6rem;
}

img {
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

p {
  color: red;
}

@media (max-width: 26.25rem) {
  h1 {
    font-size: 3.6rem;
  }
}
</style>
