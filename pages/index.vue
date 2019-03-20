<template>
  <section class="container">
    <div>
      <h1 class="title">ruckwater</h1>
      <img class="image" src="@/assets/ruckwater.jpg">
      <h2 class="subtitle">band website</h2>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
h1 {
  color: red;
  text-align: center;
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
</style>
