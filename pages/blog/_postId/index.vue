<template>
  <div id="post" v-editable="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url('+ image+ ')'}"></div>
    <section class="post-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      })
      .then(res => {
        console.log(res.data)
        return {
          blok: res.data.story.content,
          title: res.data.story.content.title,
          image: res.data.story.content.thumbnail,
          content: res.data.story.content.content
        }
      })
  },
  mounted() {
    console.log(this)
    this.$storybridge.on('change', () => {
      location.reload(true)
    })
  }
}
</script>

<style>
.post-thumbnail {
  font-family: 'Merienda', cursive;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}

.post-content {
  width: 80%;
  max-width: 500px;
  margin: auto;
}

.post-content p {
  white-space: pre-line;
}
</style>

