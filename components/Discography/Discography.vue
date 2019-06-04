<template>
  <article :to="id" class="discography">
    <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}" class="image"></div>
    <div class="text">
      <h1 class="test">{{ title }}</h1>
      <p>{{ year }}</p>
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
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'image-1 image-2' 'title-1 title-2';
}

.image {
  grid-area: image-1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 20rem;
}

.text {
  grid-area: title-1;
  align-self: center;
}

h1 {
  font-family: 'Merienda', cursive;
  color: #ff8000;
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
}
p {
  font-family: 'Merienda', cursive;
  font-weight: bold;
  color: #6f4d2a;
  text-align: center;
}

@media (max-width: 26.25rem) {
  .image {
    height: 10rem;
  }
}
</style>
