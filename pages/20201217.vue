<template>
  <div class="container">
    <div>
      <h1 class="title">20201217</h1>
      <PhotoLibrary :images="images" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotoLibrary from '~/components/organism/PhotoLibrary.vue'

interface data {
  images: string[]
  index: number | null
}

export default Vue.extend({
  name: 'Page20201217',
  data(): data {
    return {
      images: [],
      index: null,
    }
  },
  components: {
    PhotoLibrary,
  },
  created() {
    const categories = { A: 3, B: 3, C: 12, D: 12, E: 6, F: 11 }
    for (const [category, count] of Object.entries(categories)) {
      this.images = this.images.concat(this.setPhotos(category, count))
    }
  },
  methods: {
    setPhotos(category: string, count: number): string[] {
      const { imageBaseUrl, group1Url } = this.$config
      const imagePath = imageBaseUrl + group1Url
      const imageArray = []

      for (let i = 1; i <= count; i++) {
        imageArray.push(imagePath + category + String(i) + '.JPG')
      }
      return imageArray
    },
  },
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 48px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 24px auto;
}
</style>
