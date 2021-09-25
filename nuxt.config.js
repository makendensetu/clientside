export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - ' + 'はい地～図',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '写真と地図を簡単に友達に送るアプリ',
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'はい地～図',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://inarimc.ml' },
      { hid: 'og:title', property: 'og:title', content: 'はい地～図' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '写真と地図を簡単に友達に送るアプリ',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://inarimc.ml/image/logo_bikkuri.jpg',
      },
    ],
  },

  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
      }
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
