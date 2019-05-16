<template>
  <section class="container">
    <SocialMedia/>
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
import SocialMedia from '@/components/SocialMedia/SocialMedia'

export default {
  components: {
    Discography,
    SocialMedia
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