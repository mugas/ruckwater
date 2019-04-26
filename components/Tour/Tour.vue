<template>
  <article :to="id" class="tour-preview">
    <div class="tour-preview-content">
      <h1>{{ country }}</h1>
      <p>{{ city }}</p>
      <p>{{ date }}</p>
      <p>{{ venue }}</p>
    </div>
  </article>
</template>


<script>
export default {
  props: {
    country: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>




<style scoped>
table {
  border-spacing: 0.5rem;
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
}
td {
  color: blue;
}
</style>
