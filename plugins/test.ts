export default defineNuxtPlugin({
  name: 'hello',
  setup() {
    console.log('setup nuxt plugin')
  },
  hooks: {
    'page:finish': () => {
      console.log('finish')
    },
  },
})
