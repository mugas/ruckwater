<template>
  <article :to="id" class="discography">
    <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}" class="discography-thumbnail"></div>
    <div class="title">
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
      type: String,
      required: true
    },
    image: {
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
  background: red;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  width: 90%;
  margin: auto;
  height: 20rem;
  margin: 1rem;
}

.discography-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}

.title {
  text-align: center;
  padding: 1rem;
  color: #6f4d2a;
}

h1 {
  color: red;
}
p {
  font-family: 'Courier New', Courier, monospace;
  color: white;
}
.test {
  background: red;
}
@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
  }
}
</style>
