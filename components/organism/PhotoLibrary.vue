<template>
  <div class="photoLibrary">
    <img
      v-for="(image, i) in images"
      :key="i"
      class="image"
      :src="image"
      @click="index = i"
    />
    <vue-gallery-slideshow
      class="gallery"
      :images="images"
      :index="index"
      @close="index = null"
    />
  </div>
</template>

<script lang="ts">

interface data {
  images: string[]
  index: number | null
}

export default{
  name: 'PhotoLibrary',
  data(): data {
    return {
      images: [],
      index: null,
    }
  },
  created() {
    const categories = { A: 3, B: 3, C: 12, D: 12, E: 6, F: 11 }
    for (const [category, count] of Object.entries(categories)) {
      // @ts-ignore
      this.images = this.images.concat(this.setPhotos(category, count))
    }
  },
  methods: {
    setPhotos(category:string, count:number): string[] {
      const imagePath = process.env.baseUrl + '/private/'
      const imageArray = []

      for (let i = 1; i <= count; i++) {
        imageArray.push(imagePath + category + String(i) + '.JPG')
      }
      return imageArray
    },
  },
}
</script>

<style scoped>
.image {
  width: 80vw;
  margin-top: 5px;
}
</style>
