<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link">
          <a class="home">Home</a>
        </nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link">
          <a class="band">Band</a>
        </nuxt-link>
        <nuxt-link to="/tour" tag="li" class="nav-link">
          <a class="tour">Tour</a>
        </nuxt-link>
        <nuxt-link to="/blog" tag="li" class="nav-link">
          <a class="blog">Blog</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  font-family: 'Merienda', cursive;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1em;
  align-items: center;
  text-align: center;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  display: grid;
  height: 100%;
  position: relative;
  z-index: 5;
}
.main-nav {
  height: 100%;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: #858585;
}

.nav-link {
  height: 50%;
  display: flex;
  justify-content: center;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link .nuxt-link-active a {
  color: #6f4d2a;
}

.home {
  grid-column: 1;
}
.contacts {
  grid-column: 1;
}
.concerts {
  grid-column: 1;
}

.blog {
  grid-column: 1;
}
</style>
