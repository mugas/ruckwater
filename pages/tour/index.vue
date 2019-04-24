<template>
  <section class="container">
    <Tour
      v-for="tour in tours"
      :key="tour.id"
      :country="tour.title"
      :city="tour.city"
      :date="tour.date"
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
        starts_with: 'tour/'
      })
      .then(res => {
        console.log(res)
        return res
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




