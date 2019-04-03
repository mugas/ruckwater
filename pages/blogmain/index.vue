<template>
  <section class="container">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
    />
  </section>
</template>


<script>
import PostPreview from '@/components/Blog/PostPreview'
export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
            }
          })
        }
      })
  }

  /*  data() {
    return {
      posts: [
        {
          title: 'First Concert',
          previewText: 'This will be awesome',
          thumbnailUrl: 'https://i.ytimg.com/vi/iFBztbtrVSA/maxresdefault.jpg',
          id: 'a-new-begining'
        },
        {
          title: 'Second Concert',
          previewText: 'This will be awesome',
          thumbnailUrl: 'https://i.ytimg.com/vi/2S3rvtzDJEc/maxresdefault.jpg',
          id: 'a-second-begining'
        }
      ]
    }
  } */
}
</script>


<style scoped>
.container {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  .container {
    flex-direction: row;
  }
}
</style>


