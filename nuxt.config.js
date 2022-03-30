export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'photoLibrary',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/plugin',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  target: 'static',

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
    loaders: {
      ts: {
        silent: true,
      },
      tsx: {
        silent: true,
      },
    },
  },

  router: {
    base: '/photolibrary/',
  },
  publicRuntimeConfig: {
    imageBaseUrl:
      process.env.NODE_ENV === 'production'
        ? process.env.IMAGE_URL
        : 'http://localhost:3000',
    group1Url: process.env.GROUP1,
  },
  privateRuntimeConfig: {},
}
