import pkg from './package'
import axios from 'axios'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Rückwater',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'rückwater description'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '<link href="https://fonts.googleapis.com/css?family=Lato:400|Merienda:400,700" rel="stylesheet">'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? 'QZrtkZjyy8M4HvNizjFSAgtt'
            : '9n95QkJScgzs3BitErpfuwtt',
        cacheProvider: 'memory'
      }
    ],
    [
      '@nuxtjs/date-fns',
      {
        format: 'MM-DD-YYYY'
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=QZrtkZjyy8M4HvNizjFSAgtt&starts_with=blog&cv=' +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const blogPosts = res.data.stories.map(bp => bp.full_slug)
          return ['/', '/blog', '/about', '/blogmain', '/tour', ...blogPosts]
        })
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
