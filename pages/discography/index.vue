<template>
  <section class="container">
    <Discography
      v-for="discography in discographies"
      :key="discography.id"
      :title="discography.title"
      :releaseYear="discography.year"
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
        version: 'draft',
        starts_with: 'discography/'
      })
      .then(res => {
        console.log(res)

        return {
          discography: res.data.stories.map(ds => {
            console.log(ds.content.title)
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
}
</script>

<style scoped>
.container {
  font-family: 'Merienda', cursive;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: white;
}

@media (min-width: 35rem) {
  .container {
    flex-direction: row;
  }
}
</style>