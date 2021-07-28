<template>
  <section>
    <div class="container">
      <img class="image" src="@/assets/ruckwater.jpg">
      <h1 class="title">rückwaters</h1>
      <SocialMedia/>
    </div>
  </section>
</template>

<script>
import SocialMedia from '@/components/SocialMedia/SocialMedia'

export default {
  components: {
    SocialMedia: SocialMedia
  }
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
}

.title {
  position: absolute;
  font-family: lato;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  background: linear-gradient(270deg, #ffffff, #858585);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 8.6rem;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

img {
  object-fit: cover;
  min-height: 100%;
  /*  min-width: 1024px;  */

  /* Set up proportionate scaling */
  /* width: 100%; */
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media (max-width: 26.25rem) {
  h1 {
    font-size: 2.8rem;
    text-align: center;
  }
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
