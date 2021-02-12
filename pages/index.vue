<template>
  <div class="container">
    <div>
      <h1 class="title">20201217</h1>
      <PhotoLibrary />
    </div>
  </div>
</template>

<script lang="ts">
import PhotoLibrary from '~/components/organism/PhotoLibrary.vue'

export default {
  name: 'App',
  components: {
    PhotoLibrary,
  },
}
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
