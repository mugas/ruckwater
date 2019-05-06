  <template>
  <article :to="id" class="tour-preview">
    <div class="date">{{ date }}</div>
    <div class="city">
      {{ city }},
      <span class="highlight">{{ venue }}</span>
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




<style scoped>
.tour-preview {
  margin-bottom: 32px;
  font-family: 'Merienda', cursive;
  border-bottom: 2px #6f4d2a solid;
  padding-bottom: 10px;
}

article {
  columns: 3;
}
div {
  box-sizing: border-box;
}

.date {
  color: #857d6b;
  text-align: center;
}
.city {
  color: #857d6b;
  text-align: center;
}

.country {
  color: #857d6b;
  text-align: center;
}

.highlight {
  color: #ff8000;
}
</style>
