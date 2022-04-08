<template>
  <div class="container">
    <div>
      <h1 class="title">20220327</h1>
      <h2>OPENING</h2>
      <video controls>
        <source
          :src="$config.imageBaseUrl + $config.group2Url + $config.movie1"
        />
      </video>
      <h2>Profile</h2>
      <video controls>
        <source
          :src="$config.imageBaseUrl + $config.group2Url + $config.movie2"
        />
      </video>
      <h2>END ROLL</h2>
      <video controls>
        <source
          :src="$config.imageBaseUrl + $config.group2Url + $config.movie3"
        />
      </video>
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
    const categories = { A: 6, B: 13, C: 5, D: 8 }
    for (const [category, count] of Object.entries(categories)) {
      this.images = this.images.concat(this.setPhotos(category, count))
    }
  },
  methods: {
    setPhotos(category: string, count: number): string[] {
      const { imageBaseUrl, group2Url } = this.$config
      const imagePath = imageBaseUrl + group2Url
      const imageArray = []

      for (let i = 1; i <= count; i++) {
        imageArray.push(imagePath + category + String(i) + '.jpg')
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

video {
  width: 95vw;
  margin-bottom: 15px;
}
</style>
