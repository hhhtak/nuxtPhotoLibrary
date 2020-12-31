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

<script>
export default {
  name: 'PhotoLibrary',
  data() {
    return {
      images: [],
      index: null,
    }
  },
  created() {
    const count = 1
    const imageArray = []

    for (let i = 1; i <= count; i++) {
      imageArray.push('/photo/' + String(i) + '.JPG')
    }
    this.images = imageArray
  },
}
</script>

<style scoped>
.image {
  width: 80vw;
}
</style>
