<template>
  <div>
    <TheHeader/>
    <main class="main-content">
      <nuxt/>
    </main>
    <SocialMedia/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import SocialMedia from '@/components/SocialMedia/SocialMedia'

export default {
  components: {
    TheHeader: TheHeader,
    SocialMedia
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  background: #191827;
}

.main-content {
  margin-top: 4.5rem;
}
</style>
