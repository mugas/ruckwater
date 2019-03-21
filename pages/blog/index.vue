<template>
  <section class="container">
    <nuxt-link v-for="post in posts" :key="post.id" :to="post.id">
      <article class="post-preview">
        <div :style="{backgroundImage: post.thumbnailUrl}" class="post-preview-tumbnail"></div>
        <div class="post-preview-content">
          <h1>{{ post.title }}</h1>
          <p>{{ post.previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </section>
</template>


<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'A new Begining',
          previewText: 'This will be awesome',
          thumbnailUrl:
            'https://images.unsplash.com/photo-1520170975578-25bd5217bf3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 'a-new-begining'
        },
        {
          title: 'A new second Begining',
          previewText: 'This will be awesome',
          thumbnailUrl:
            'https://images.unsplash.com/photo-1520092792133-42473bd8aeab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 'a-second-begining'
        }
      ]
    }
  }
}
</script>


<style>
</style>

