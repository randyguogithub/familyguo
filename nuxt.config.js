const pkg = require('./package')

module.exports = {
  mode: 'spa',
  // change router for githup pages
  router: {
    mode: 'hash'
  },
  /*
   ** Headers of the page
   */

  head: {
    title: '郭氏家谱',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Free Family Guo generator and viewer'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'vuejs, nuxt, javascript, orgchart, organization, open-source'
      }
    ],
    script: [{
        src: 'data.js'
      },
      {
        src: 'config.js'
      },
      {
        src: 'translate.js'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  loadingIndicator: {
    name: 'circle',
    color: '#05668d',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/AsyncComputed'],

  /*
   ** Nuxt.js modules
   */

  modules: ['nuxt-material-design-icons'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    plugins: [],
    extend(config, ctx) {
      if (!ctx.isDev) {
        config.output.publicPath = './_nuxt/'
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
