<template>
  <section class="container">
    <Discography
      v-for="discography in discographies"
      :key="discography.id"
      :title="discography.title"
      :year="discography.year"
      :thumbnailImage="discography.image"
      :id="discography.id"
    />
  </section>
</template>

<script>
import Discography from '@/components/Discography/Discography'

export default {
  components: {
    Discography
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'discography/'
      })
      .then(res => {
        console.log(res)

        return {
          discographies: res.data.stories.map(ds => {
            return {
              id: ds.slug,
              title: ds.content.title,
              year: ds.content.year,
              image: ds.content.image
            }
          })
        }
      })
  }
  /*  mounted() {
    console.log(this)
    this.$storybridge.on('change', () => {
      location.reload(true)
    })
  } */
}
</script>

<style scoped>
.container {
  font-family: 'Merienda', cursive;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

@media (min-width: 35rem) {
  .container {
    flex-direction: row;
  }
}
</style>