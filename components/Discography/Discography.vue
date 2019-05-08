<template>
  <article :to="id" class="discography">
    <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}" class="image"></div>
    <div class="text">
      <h1 class="test">Album {{ title }}</h1>
      <p>Release Date {{ year }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>
.discography {
  border-radius: 3px;

  width: 90%;
  margin: auto;
  height: 20rem;
  margin: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'image text';
}

.image {
  grid-area: image;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 20rem;
}

.text {
  grid-area: text;
  text-align: center;
}

h1 {
  color: yellow;
  text-align: center;
}
p {
  color: yellow;
  background: red;
  text-align: center;
}

@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
  }
}
</style>
