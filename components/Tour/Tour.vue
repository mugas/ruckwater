<template>
  <article :to="id" class="tour-preview">
    <div class="date">{{ date }}</div>
    <div class="city">
      {{ city }} ,
      <br>
      {{ venue }}
    </div>
    <div class="country">{{ country }}</div>
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


div{

}

<style scoped>
.tour-preview {
  margin-bottom: 32px;
}
article {
  columns: 3;
}

.date {
  color: blue;
}
.city {
  color: blue;
}

.country {
  color: blue;
}
</style>
