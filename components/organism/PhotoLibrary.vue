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
import Vue from 'vue'

interface data {
  index: number | null
}

export default Vue.extend({
  name: 'PhotoLibrary',
  props: {
    images: { type: Array, required: true, default: [] },
  },
  data(): data {
    return {
      index: null,
    }
  },
})
</script>

<style scoped>
.photoLibrary {
  display: flex;
  flex-wrap: wrap;
  margin: 0 45px;
}

.image {
  width: 100%;
  max-width: auto;
  margin: 0 auto 15px auto;
  display: block;
}
</style>
