<template>
  <section class="container">
    <ImageHeader/>
    <Tour
      v-for="tour in tours"
      :key="tour.id"
      :country="tour.country"
      :city="tour.city"
      :date="tour.date"
      :venue="tour.venue"
      :id="tour.id"
    />
  </section>
</template>

<script>
import Tour from '@/components/Tour/Tour'
import ImageHeader from '@/components/ImageHeader/ImageHeader'

export default {
  components: {
    Tour,
    ImageHeader
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'tour/',
        sort_by: 'content.date:asc'
      })
      .then(res => {
        // console.log(res)
        console.log(res)
        return {
          // sort_by:res.data.stories.venue,
          tours: res.data.stories.map(tr => {
            return {
              id: tr.slug,
              country: tr.content.country,
              city: tr.content.city,
              date: tr.content.date,
              venue: tr.content.venue
            }
          })
        }
      })
  }
}
</script>









