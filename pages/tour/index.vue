<template>
  <section class="container">
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

export default {
  components: {
    Tour
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




<style scoped>
body {
  background-color: blue;
}
td {
  width: 4rem;
  height: 2rem;
  border: 1px solid #ccc;
  text-align: center;
  color: red;
}
#tour p {
  white-space: pre-line;
  color: red;
}

#tour {
  width: 80%;
  max-width: 300px;
  margin: auto;
}

.teste {
  color: red;
}
</style>




