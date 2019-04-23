<template>
  <section class="container">
    <nuxt-link v-for="tour in tours" :key="tour.id" :to="tour.id">
      <article class="tour-preview">
        <div class="tour-preview-content">
          <h1>{{ tour.country }}</h1>
          <p>{{ tour.city }}</p>
          <p>{{ tour.date }}</p>
        </div>
      </article>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        {
          country: 'Finland',
          city: 'Helsinki',
          date: '01/02/2020',
          id: 'Finland'
        },
        {
          country: 'Portugal',
          city: 'Lisbon',
          date: '01/05/2021',
          id: 'Portugal'
        }
      ]
    }
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




