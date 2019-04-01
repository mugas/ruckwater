<template>
  <section id="about-page">
    <h1>{{ title }}</h1>
    <p>{{ content }}r</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: 'draft'
      })
      .then(res => {
        console.log(res.data)
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  }
}
</script>

<style>
#about-page {
  width: 80%;
  max-width: 300px;
  margin: auto;
}

#about-page p {
  white-space: pre-line;
  color: green;
}
</style>
