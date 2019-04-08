<template>
  <section id="tour" v-editable="blok">
    <p>{{ date }}</p>
    <p>{{ city }}</p>
    <p>{{ venue }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/tour', {
        version: context.isDev ? 'draft' : 'published'
      })
      .then(res => {
        console.log(res.data)
        return {
          blok: res.data.story.content,
          date: res.data.story.content.Date,
          city: res.data.story.content.City,
          venue: res.data.story.content.Venue
        }
      })
  },
  mounter() {
    this.storybridge.on('change', () => {
      location.reload(true)
    })
  }
}
</script>


<style scoped>
#tour p {
  white-space: pre-line;
  color: red;
}

#tour {
  width: 80%;
  max-width: 300px;
  margin: auto;
}
</style>




